import { useRouter } from "next/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PaymentSuccess = () => {
  const router = useRouter();
  const [data, setData] = useState({
    amount: 0,
    paymentIntent: "",
    paymentIntentClientSecret: "",
    redirectStatus: "",
  });

  useEffect(() => {
    if (router.isReady) {
      const {
        amount,
        payment_intent,
        payment_intent_client_secret,
        redirect_status,
      } = router.query;
      setData({
        amount,
        paymentIntent: payment_intent,
        paymentIntentClientSecret: payment_intent_client_secret,
        redirectStatus: redirect_status,
      });
    }
  }, [router.isReady]);

  return (
    <div style={{ marginTop: "5rem" }}>
      <h1>Payment Success</h1>
      <p>Payment Intent: {data.paymentIntent}</p>
      <p>Payment Intent Client Secret: {data.paymentIntentClientSecret}</p>
      <p>Redirect Status: {data.redirectStatus}</p>
      <p>Amount: {data.amount}</p>
    </div>
  );
};

export default PaymentSuccess;
