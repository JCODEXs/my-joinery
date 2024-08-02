export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body, process.env.HOST_NAME);
    const items = req.body;

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: items.map((item) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: Math.round(item.price / 8),
          },
          quantity: item.amount,
        })),
        mode: "payment",
        success_url: `${process.env.HOST_NAME}/success`,
        cancel_url: `${process.env.HOST_NAME}/cancel`,
      });

      res.status(200).json({ id: session.id });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
