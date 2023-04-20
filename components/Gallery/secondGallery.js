import Image from "next/image";
import { useEffect,useRef } from "react";

export default function Gallery({ images }) {
    const containerRef = useRef(null);

    // useEffect(() => {
    //   // Define the scroll position and duration for each image
    //   const scrollPositions = [
    //     { position: 0, duration: 2000 },
    //     { position: 100, duration: 2000 },
    //     { position: 200, duration: 2000 },
    //     { position: 300, duration: 2000 },
    //   ];
  
    //   let currentIndex = 0;
    //   let timeoutId;
  
    //   const scrollContainer = () => {
    //     const { position, duration } = scrollPositions[currentIndex];
    //     const container = containerRef.current;
    //     const scrollWidth = container.scrollWidth - container.clientWidth;
    //     const scrollPosition = (scrollWidth * position) / 300;
  
    //     // Animate the scroll position using requestAnimationFrame
    //     let start = null;
    //     const step = (timestamp) => {
    //       if (!start) start = timestamp;
    //       const progress = timestamp - start;
    //       const newPosition = (scrollPosition * progress) / duration;
    //       container.scrollLeft = newPosition;
    //       if (progress < duration) {
    //         requestAnimationFrame(step);
    //       } else {
    //         // Go to the next image after the duration has elapsed
    //         currentIndex = (currentIndex + 1) % scrollPositions.length;
    //         timeoutId = setTimeout(scrollContainer, 5000);
    //       }
    //     };
  
    //     // Start the animation
    //     requestAnimationFrame(step);
    //   };
  
    //   // Start the initial timeout
    //   timeoutId = setTimeout(scrollContainer, 5000);
  
    //   // Cleanup function to clear the timeout when the component unmounts
    //   return () => {
    //     clearTimeout(timeoutId);
    //   };
    // }, []);
    useEffect(() => {
        // Define the scroll position and duration for each image
        const scrollPositions = Array.from({ length: 30}, (_, i) => ({
          position: i * 300,
          duration: 1500
        }));
      
        let currentIndex = 0;
        let timeoutId;
      
        const scrollContainer = () => {
          const { position, duration } = scrollPositions[currentIndex];
          const container = containerRef.current;
          const scrollWidth = container.scrollWidth - container.clientWidth;
          const scrollPosition = (scrollWidth * position) / 3000;
      
          // Animate the scroll position using requestAnimationFrame
          let start = null;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const newPosition = (scrollPosition * progress) / duration;
            container.scrollLeft = newPosition;
            if (progress < duration) {
              requestAnimationFrame(step);
            } else {
              // Go to the next image after the duration has elapsed
              currentIndex = (currentIndex + 1) % scrollPositions.length;
              timeoutId = setTimeout(scrollContainer, 3000);
            }
          };
      
          // Start the animation
          requestAnimationFrame(step);
        };
      
        // Start the initial timeout
        timeoutId = setTimeout(scrollContainer, 3000);
      
        // Cleanup function to clear the timeout when the component unmounts
        return () => {
          clearTimeout(timeoutId);
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
  };

  const imageWrapperStyle = {
    display: "flex",
  };

  const imageLabelStyle = {
    display: "flex",
    padding: "3px",
    fontSize: "80%",
    background: "rgba(0,60,160,0.2)",
  };

  return (
    <div>
      <div style={containerStyle}>{/* {`$${story.price} ${story.status}`} */}</div>
      <div ref={containerRef} className="container"  style={{ display: "flex", maxWidth: "1200px", overflowX: "auto", scrollBehavior: "smooth"  , padding: "5px",}}>
        {images.map((image, index) => (
          <div key={index} style={{ border: "1px solid rgba(200,200,200,0.6)" }}>
            <div style={imageLabelStyle}>
              <div> $ 200.000 </div>
            </div>
            <div style={imageWrapperStyle}>
              <div key={index} style={imageContainerStyle}>
                <Image
                  //onClick={(e) => action(e, image)}
                  alt="product"
                  quality={100}
                  height={320}
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