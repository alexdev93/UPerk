import React, { useEffect } from "react";

const CalendlyEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    if (head) {
      head.appendChild(script);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{
        height: "650px",
        width: "100%",
        position: "absolute",
        top: "75px",
        zIndex: 40,
      }}
    ></div>
  );
};

export default CalendlyEmbed;
