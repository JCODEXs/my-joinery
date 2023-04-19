import classes from "./DealsSummary.module.css";

const DealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2> What We Do For You</h2>
      <p>
        Organized Financial records Will help you know where your money is in
        your business so you can make the most of it!
      </p>
      <p>
        Accounts Payable/Recievable We keep track of all your money going in and
        out so during tax season you can relax and get that money back with
        deductibles! With our systems, we can also help make sure all bills are
        paid when due, not a day over!
      </p>
      <p>Just clic the WhatsApp Green Button!!</p>
      <div>
    <a width = '50px'  aria-label="Chat on WhatsApp" href="https://wa.me/573002536997"> <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.svg" /> </a>
    </div>
    </section>
  );
};

export default DealsSummary;
