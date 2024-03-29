"use client";
import BackgroundSoft from "../3dview/backgroundSoft";
import ContactForm from "./contactForm";
import { useRef } from "react";

export default function ComposedContactForm({ setFormRef }) {
  const servicesRef = useRef(null);
  setFormRef(servicesRef);
  return (
    <div
      style={{
        height: "580px",
        display: "flex",
        position: "relative",
        width: "100%",
        // marginBottom: "1rem",
      }}
    >
      <BackgroundSoft />
      <div
        style={{
          display: "flex",
          width: "98%",
          maxWidth: "65rem",
          zIndex: 20,
          position: "absolute",
          fontSize: "1rem",
          top: 10,
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          padding: "23px",
          borderRadius: "10px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        ref={servicesRef}
      >
        <ContactForm />
      </div>
    </div>
  );
}
