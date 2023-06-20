import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const Section = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`section ${isVisible ? "show" : ""}`}>
      {children}
    </div>
  );
};

export default Section;
