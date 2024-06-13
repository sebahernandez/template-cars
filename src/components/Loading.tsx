// src/components/Loading.tsx
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader"></div>
      <style>{`
        .loader,
        .loader:before,
        .loader:after {
          border-radius: 50%;
        }
        .loader {
          color: #ffffff;
          font-size: 11px;
          text-indent: -99999em;
          margin: 55px auto;
          position: relative;
          width: 10em;
          height: 10em;
          box-shadow: inset 0 0 0 1em;
          transform: translateZ(0);
          animation: load5 1.1s infinite ease;
        }
        @keyframes load5 {
          0%,
          100% {
            box-shadow: 0 -3.6em 0 0.2em, 2.6em -2.6em 0 0em, 3.6em 0 0 -0.1em,
              2.6em 2.6em 0 -0.1em, 0 3.6em 0 -0.1em, -2.6em 2.6em 0 0,
              -3.6em 0 0 0.2em, -2.6em -2.6em 0 0.2em;
          }
          12.5% {
            box-shadow: 0 -3.6em 0 0, 2.6em -2.6em 0 0.2em, 3.6em 0 0 0,
              2.6em 2.6em 0 -0.1em, 0 3.6em 0 -0.1em, -2.6em 2.6em 0 -0.1em,
              -3.6em 0 0 0, -2.6em -2.6em 0 0;
          }
          25% {
            box-shadow: 0 -3.6em 0 -0.1em, 2.6em -2.6em 0 0, 3.6em 0 0 0.2em,
              2.6em 2.6em 0 0, 0 3.6em 0 -0.1em, -2.6em 2.6em 0 -0.1em,
              -3.6em 0 0 0, -2.6em -2.6em 0 0;
          }
          37.5% {
            box-shadow: 0 -3.6em 0 -0.1em, 2.6em -2.6em 0 -0.1em, 3.6em 0 0 0,
              2.6em 2.6em 0 0.2em, 0 3.6em 0 0, -2.6em 2.6em 0 0,
              -3.6em 0 0 -0.1em, -2.6em -2.6em 0 -0.1em;
          }
          50% {
            box-shadow: 0 -3.6em 0 -0.1em, 2.6em -2.6em 0 -0.1em,
              3.6em 0 0 -0.1em, 2.6em 2.6em 0 0, 0 3.6em 0 0.2em,
              -2.6em 2.6em 0 0, -3.6em 0 0 0, -2.6em -2.6em 0 0;
          }
          62.5% {
            box-shadow: 0 -3.6em 0 0, 2.6em -2.6em 0 -0.1em, 3.6em 0 0 -0.1em,
              2.6em 2.6em 0 0, 0 3.6em 0 0, -2.6em 2.6em 0 0.2em, -3.6em 0 0 0,
              -2.6em -2.6em 0 -0.1em;
          }
          75% {
            box-shadow: 0 -3.6em 0 -0.1em, 2.6em -2.6em 0 0, 3.6em 0 0 -0.1em,
              2.6em 2.6em 0 -0.1em, 0 3.6em 0 0, -2.6em 2.6em 0 0,
              -3.6em 0 0 0.2em, -2.6em -2.6em 0 0;
          }
          87.5% {
            box-shadow: 0 -3.6em 0 -0.1em, 2.6em -2.6em 0 0, 3.6em 0 0 0,
              2.6em 2.6em 0 0, 0 3.6em 0 -0.1em, -2.6em 2.6em 0 0, -3.6em 0 0 0,
              -2.6em -2.6em 0 0.2em;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
