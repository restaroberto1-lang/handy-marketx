import React from "react";

// Wordmark "MarketX Voice" — "Market" nell'accento primario (blu), la "X" in
// ciano, e il tag "VOICE" sotto. I colori seguono i token di tema (theme.css):
// la classe `logo-primary` usa var(--color-logo-primary), lo stroke il ciano.
const HandyTextLogo = ({
  width,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 360 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="62"
        fontFamily="'Poppins', -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
        fontSize="62"
        fontWeight="800"
        letterSpacing="-2"
      >
        <tspan className="logo-primary">Market</tspan>
        <tspan fill="#64d2ff">X</tspan>
      </text>
      <text
        x="3"
        y="96"
        fontFamily="'Poppins', -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
        fontSize="22"
        fontWeight="600"
        letterSpacing="9"
        fill="#64d2ff"
      >
        VOICE
      </text>
    </svg>
  );
};

export default HandyTextLogo;
