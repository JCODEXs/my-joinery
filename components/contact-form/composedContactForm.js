"use client";
import { useRef } from "react";
import BackgroundSoft from "../3dview/backgroundSoft";
import ContactForm from "./contactForm";

export default function ComposedContactForm({}) {
  return (
    <div
      style={{
        height: "560px",
        display: "flex",
        position: "relative",
        width: "100%",
        margin: "1.5rem",
        marginTop: "2.5rem",
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
      >
        <ContactForm />
      </div>
    </div>
  );
}
