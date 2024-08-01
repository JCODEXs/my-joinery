const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body.amount, process.env.HOST_NAME);

    try {
      const amount = req.body.amount;
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        automatic_payment_methods: { enabled: true },
      });
      console.log(paymentIntent);
      res.status(200).json({ paymentIntent });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
