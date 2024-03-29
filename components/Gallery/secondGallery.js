import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Gallery({ images }) {
  const containerRef = useRef(null);
  const [lastIndex, setLastIndex] = useState(images?.length);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Define the scroll position and duration for each image
    const scrollPositions = Array.from({ length: 12 }, (_, i) => ({
      position: i * 260 * 2,
      duration: 1000,
    }));

    let currentIndex = 0;
    let timeoutId;

    const container = containerRef.current;
    const scrollWidth = container?.scrollWidth - container.clientWidth;
    const maxIndex = scrollPositions.length;

    const updateIndex = () => {
      const scrollPosition = container.scrollLeft;
      const index = Math.min(
        Math.floor((scrollPosition / scrollWidth) * 12),
        maxIndex
      );
      currentIndex = index;
    };

    const scrollContainer = () => {
      const { position, duration } =
        currentIndex < maxIndex - 1 ? scrollPositions?.[currentIndex + 1] : 0;
      const container = containerRef.current;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const currentScrollPosition = container.scrollLeft;
      const targetScrollPosition = currentIndex < maxIndex - 1 ? position : 0;
      const distance = targetScrollPosition - currentScrollPosition;
      const startTime = performance.now();
      // console.log(currentScrollPosition, distance);
      // console.log(currentIndex);

      const animateScroll = (timestamp) => {
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = easeOutQuart(progress);
        container.scrollLeft = currentScrollPosition + distance / easeProgress;
        if (progress < 1 && currentIndex < 10) {
          requestAnimationFrame(animateScroll);
        } else {
          currentIndex = (currentIndex + 1) % scrollPositions.length;
          setTimeout(scrollContainer, 2000);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    const easeOutQuart = (t) => 1 - (1 - t) ** 0.5;

    // Start the initial timeout
    timeoutId = setTimeout(scrollContainer, 3500);

    // Add an event listener to the scroll container to detect user input
    container.addEventListener("scroll", updateIndex);

    // Cleanup function to clear the timeout and remove the event listener
    return () => {
      clearTimeout(timeoutId);
      container.removeEventListener("scroll", updateIndex);
    };
  }, []);

  const containerStyle = {
    borderLeft: "1px solid rgba(200,200,200,0.6)",
    borderRight: "1px solid rgba(200,200,200,0.6)",
    background: "rgba(10,10,10,0.2)",
    padding: "5px",
    borderRadius: "0px 0px 0px 0px",
    position: "sticky",
    left: "0px",
    top: "0px",
    textAlign: "center",
  };

  const imageContainerStyle = {
    boxShadow: "inset 0 0 0 0.2em rgba(100,100,100,0.2)",
    // backgroundImage: "url('footerCorona.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "50px auto",
    overflow: "hidden",
    padding: "5px",
    minWidth: "max-content",
    border: "solid -2px rgba(200,200,200,0.1)",
    scrollX: "",
  };

  const imageWrapperStyle = {
    display: "flex",
  };

  const imageLabelStyle = {
    display: "flex",
    padding: "3px",
    fontSize: "80%",
    background: "rgb(166, 119, 78)",
  };

  return (
    <div>
      <div style={containerStyle}>
        {/* {`$${story.price} ${story.status}`} */}
      </div>
      <div
        ref={containerRef}
        className="container"
        style={{
          display: "flex",
          maxWidth: "100%",
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "thin",
          padding: "5px",
        }}
      >
        {images.map((image, index) => (
          <div key={index}>
            <div style={imageLabelStyle}>
              {/* <div>{ `$ ${100000*index+300000*Math.random(1).toFixed(1)}`} </div> */}
            </div>
            <div style={imageWrapperStyle}>
              <div key={index} style={imageContainerStyle}>
                <Image
                  //onClick={(e) => action(e, image)}
                  alt="product"
                  quality={95}
                  height={350}
                  width={250}
                  priority={true}
                  src={image}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//       <style jsx>{styles}</style>
