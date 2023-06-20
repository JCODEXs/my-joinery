import DealsSummary from "../components/Deals/DealsSummary";
import Gallery from "../components/Gallery/secondGallery";
import Header from "../components/Layout/Header";
import Section from "../components/section";

const HomePage = () => {
  return (
    <>
      <Section>
        <Header />
      </Section>

      <Section>
        <DealsSummary />
      </Section>

      <Section></Section>

      <style jsx>{`
        .section {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: opacity 0.5s ease-in-out;
          opacity: 0;
        }

        .section.show {
          opacity: 1;
        }

        .section h1 {
          font-size: 2em;
        }

        .section p {
          font-size: 1.5em;
        }
      `}</style>
    </>
  );
};

export default HomePage;
