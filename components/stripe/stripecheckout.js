"use client";
import React, { useEffect, useState } from "react";

import {
  PaymentElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
export default function StripeCheckout({ items, total }) {
  // console.log(items[0], total);
  const CheckoutForm = () => {
    const [client_secret, setclientSecret] = useState();
    const [loading, setLoading] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState(null);
    const convertTosubcurrency = (amount) => {
      return amount / 50; //chl/dll
    };
    console.log(convertTosubcurrency(total));
    useEffect(() => {
      fetch("/api/checkoutpage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: convertTosubcurrency(total) }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data?.paymentIntent?.client_secret);
          setclientSecret(data?.paymentIntent?.client_secret);
        });
    }, []);

    const handleSubmit = async (event) => {
      event.preventDefault();

      if (elements == null) {
        return;
      }

      // Trigger form validation and wallet collection
      const { error: submitError } = await elements.submit();
      if (submitError) {
        // Show error to your customer
        setErrorMessage(submitError.message);
        return;
      }
      setLoading(true);
      // console.log(client_secret);
      const { error } = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        clientSecret: client_secret,
        confirmParams: {
          return_url: `http://localhost:3000/payment-success?amount=${total}`,
        },
      });
      if (error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Show error to your customer (for example, payment
        // details incomplete)
        setErrorMessage(error.message);
      } else {
        console.log("else");
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {client_secret && <PaymentElement />}
          <button
            style={{
              height: "40px",
              fontSize: "1.3rem",
              margin: "1rem",
              background: "rgb(100,15,200)",
              color: "white",
            }}
            type="submit"
            disabled={!stripe || !elements}
          >
            {loading ? "Processing..." : `pay ${total}`}
          </button>
          {/* Show error message to your customers */}
          {errorMessage && <div>{errorMessage}</div>}
        </div>
      </form>
    );
  };

  const stripePromise = loadStripe(
    "pk_test_51PgpYkJbkUl4j67QhVGAUl3X0SNRkzhRGzo6f9tGEFCny5jYO8rTOJ0Lz3Wh9H0Y32E8YNQdw5Wbw2csLXQ8X2Aq00PSesLId1"
  );
  const itemDesacription =
    items &&
    items.map((item) => {
      `${item.id} ${item.name} ${item.price * item.amount}`;
    });
  const totals = total ? total * 1 : 10;
  console.log(itemDesacription, totals);
  const options = {
    mode: "payment",
    amount: totals,
    currency: "usd",
    // Fully customizable with appearance API.
    appearance: {
      // itemDesacription,
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}
