// pages/checkout.js
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { name: "Product 1", price: 2000, quantity: 1 },
          { name: "Product 2", price: 1500, quantity: 2 },
        ],
      }),
    });

    const session = await response.json();

    if (response.ok) {
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } else {
      console.error(session.error);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? "Loading..." : "Checkout"}
      </button>
    </div>
  );
};

export default Checkout;
