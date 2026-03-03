import React from "react";

export const USFlag = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 741 390"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#bd3d44" d="M0 0h741v390H0z" />
    <path
      d="M0 30h741m0 60H0m0 60h741m0 60H0m0 60h741m0 60H0"
      stroke="#fff"
      strokeWidth="30"
    />
    <path fill="#192f5d" d="M0 0h296.4v210H0z" />
    <g fill="#fff">
      <g id="c">
        <g id="b">
          <path
            id="a"
            d="M24.7 10L26 14.1h4.3l-3.5 2.5 1.4 4.1-3.5-2.5-3.5 2.5 1.4-4.1-3.5-2.5h4.3z"
          />
          <use href="#a" x="49.4" />
          <use href="#a" x="98.8" />
          <use href="#a" x="148.2" />
          <use href="#a" x="197.6" />
          <use href="#a" x="247" />
        </g>
        <use href="#b" y="42" />
        <use href="#b" y="84" />
        <use href="#b" y="126" />
        <use href="#b" y="168" />
      </g>
      <g id="d" transform="translate(24.7 21)">
        <use href="#a" />
        <use href="#a" x="49.4" />
        <use href="#a" x="98.8" />
        <use href="#a" x="148.2" />
        <use href="#a" x="197.6" />
      </g>
      <use href="#d" y="42" />
      <use href="#d" y="84" />
      <use href="#d" y="126" />
    </g>
  </svg>
);

export const DEFlag = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 5 3"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="5" height="3" y="0" fill="#000" />
    <rect width="5" height="2" y="1" fill="#D00" />
    <rect width="5" height="1" y="2" fill="#FFCE00" />
  </svg>
);

export const NLFlag = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 3 2"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="3" height="2" fill="#21468B" />
    <rect width="3" height="1.333" fill="#FFF" />
    <rect width="3" height="0.667" fill="#AE1C28" />
  </svg>
);
