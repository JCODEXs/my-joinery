import Image from "next/image";
import { useEffect,useRef,useState } from "react";


export default function Gallery({ images }) {
    const containerRef = useRef(null);
    const [lastIndex, setLastIndex] = useState(29);
    const [scrollPosition, setScrollPosition] = useState(0);
    

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
    // useEffect(() => {
    //     // Define the scroll position and duration for each image
    //     const scrollPositions = Array.from({ length: 30}, (_, i) => ({
    //       position: i * 300,
    //       duration: 1500
    //     }));
      
    //     let currentIndex = 0;
    //     let timeoutId;
      
    //     const scrollContainer = () => {
    //       const { position, duration } = scrollPositions[currentIndex];
    //       const container = containerRef.current;
    //       const scrollWidth = container.scrollWidth - container.clientWidth;
    //       const scrollPosition = (scrollWidth * position) / 3000;
      
    //       // Animate the scroll position using requestAnimationFrame
    //       let start = null;
    //       const step = (timestamp) => {
    //         if (!start) start = timestamp;
    //         const progress = timestamp - start;
    //         const newPosition = (scrollPosition * progress) / duration;
    //         container.scrollLeft = newPosition;
    //         if (progress < duration) {
    //           requestAnimationFrame(step);
    //         } else {
    //           // Go to the next image after the duration has elapsed
    //           currentIndex = (currentIndex + 1) % scrollPositions.length;
    //           timeoutId = setTimeout(scrollContainer, 3000);
    //         }
    //       };
      
    //       // Start the animation
    //       requestAnimationFrame(step);
    //     };
      
    //     // Start the initial timeout
    //     timeoutId = setTimeout(scrollContainer, 3000);
      
    //     // Cleanup function to clear the timeout when the component unmounts
    //     return () => {
    //       clearTimeout(timeoutId);
    //     };
    //   }, []);
    useEffect(() => {
        // Define the scroll position and duration for each image
        const scrollPositions = Array.from({ length: 12 }, (_, i) => ({
          position: i * 260*3,
          duration: 2000,
        }));
      
        let currentIndex = 0;
        let timeoutId;
      
        const container = containerRef.current;
        const scrollWidth = container.scrollWidth - container.clientWidth;
        const maxIndex = scrollPositions.length - 1;
      
        const updateIndex = () => {
          const scrollPosition = container.scrollLeft;
          const index = Math.min(
            Math.floor((scrollPosition / scrollWidth) * 12),
            maxIndex
          );
          currentIndex = index;
        };
      
     
        const scrollContainer = () => {
            const { position, duration } = scrollPositions[currentIndex];
            const container = containerRef.current;
            const scrollWidth = container.scrollWidth - container.clientWidth;
            const currentScrollPosition = container.scrollLeft;
            const targetScrollPosition = (position) ;
            const distance = targetScrollPosition - currentScrollPosition;
            const startTime = performance.now();
          
            const animateScroll = (timestamp) => {
              const elapsedTime = timestamp - startTime;
              const progress = Math.min(elapsedTime / duration, 1);
              const easeProgress = easeOutQuart(progress);
              container.scrollLeft = currentScrollPosition + distance * easeProgress;
          
              if (progress < 1) {
                requestAnimationFrame(animateScroll);
              } else {
                currentIndex = (currentIndex + 1) % scrollPositions.length;
                setTimeout(scrollContainer, 2000);
              }
            };
          
            requestAnimationFrame(animateScroll);
          };
          
          const easeOutQuart = (t) => 1 - (1 - t) ** 4;
          
      
        // Start the initial timeout
        timeoutId = setTimeout(scrollContainer, 2000);
      
        // Add an event listener to the scroll container to detect user input
        container.addEventListener("scroll", updateIndex);
      
        // Cleanup function to clear the timeout and remove the event listener
        return () => {
          clearTimeout(timeoutId);
          container.removeEventListener("scroll", updateIndex);
        };
      }, []);

    // useEffect(() => {
    //     // Define the scroll position and duration for each image
    //     const scrollPositions = Array.from({ length: 30 }, (_, i) => ({
    //       position: i * 300,
    //       duration: 1500
    //     }));
      
    //     let currentIndex = 0;
    //     let timeoutId;
      
    //     const container = containerRef.current;
    //     const scrollWidth = container.scrollWidth - container.clientWidth;
    //     const maxIndex = scrollPositions.length - 1;
      
    //     const updateIndex = () => {
    //       const scrollPosition = container.scrollLeft;
    //       const index = Math.min(
    //         Math.floor((scrollPosition / scrollWidth) * 30),
    //         maxIndex
    //       );
    //       currentIndex = index;
    //     };
      
    //     const scrollContainer = () => {
    //       const { position, duration } = scrollPositions[currentIndex];
    //       const scrollPosition = (scrollWidth * position) / 3000;
      
    //       // Animate the scroll position using requestAnimationFrame
    //       let start = null;
    //       const step = (timestamp) => {
    //         if (!start) start = timestamp;
    //         const progress = timestamp - start;
    //         const newPosition = (scrollPosition * progress) / duration;
    //         container.scrollLeft = newPosition;
    //         if (progress < duration) {
    //           requestAnimationFrame(step);
    //         } else {
    //           // Go to the next image after the duration has elapsed
    //           currentIndex = (currentIndex + 1) % scrollPositions.length;
    //           timeoutId = setInterval(scrollContainer, 3000);
    //         }
    //       };
      
    //       // Start the animation
    //       requestAnimationFrame(step);
    //     };
      
    //     // Start the initial timeout
    //     timeoutId = setTimeout(scrollContainer, 3000);
      
    //     // Add an event listener to the scroll container to detect user input
    //     container.addEventListener('scroll', updateIndex);
      
    //     // Cleanup function to clear the timeout and remove the event listener
    //     return () => {
    //         clearInterval(timeoutId);
    //       container.removeEventListener('scroll', updateIndex);
    //     };
    //   }, []);
      

//   useEffect(() => {
//     // Define the scroll position and duration for each image
//     const scrollPositions = Array.from({ length: 30}, (_, i) => ({
//       position: i * 300,
//       duration: 1500
//     }));
//     const imageWidth = 300;
//     const newIndex = Math.floor(scrollPosition / imageWidth);
//     setLastIndex(Math.min(newIndex, 29));
    
//     let currentIndex = 0;
//     let timeoutId;

//     const scrollContainer = () => {
//       const { position, duration } = scrollPositions[currentIndex];
//       const container = containerRef.current;
//       const scrollWidth = container.scrollWidth - container.clientWidth;
//       const scrollPosition = (scrollWidth * position) / 3000;

//       // Animate the scroll position using requestAnimationFrame
//       let start = null;
//       const step = (timestamp) => {
//         if (!start) start = timestamp;
//         const progress = timestamp - start;
//         const newPosition = (scrollPosition * progress) / duration;
//         container.scrollLeft = newPosition;
//         setScrollPosition(container.scrollLeft); // Update the scroll position state
//         if (progress < duration) {
//           requestAnimationFrame(step);
//         } else {
//           // Go to the next image after the duration has elapsed
//           currentIndex = (currentIndex + 1) % scrollPositions.length;
//           setLastIndex(currentIndex); // Update the last index state
//           timeoutId = setTimeout(scrollContainer, 3000);
//         }
//       };

//       // Start the animation
//       requestAnimationFrame(step);
//     };

//     // Start the initial timeout
//     timeoutId = setTimeout(scrollContainer, 3000);

//     // Attach event listener to the container element to update the scroll position state
//     const handleScroll = () => {
//       setScrollPosition(containerRef.current.scrollLeft);
//     };
//     containerRef.current.addEventListener('scroll', handleScroll);

//     // Cleanup function to clear the timeout and event listener when the component unmounts
//     return () => {
//       clearTimeout(timeoutId);
//       containerRef.current.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
      

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
    scrollX:""
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
                  quality={88}
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