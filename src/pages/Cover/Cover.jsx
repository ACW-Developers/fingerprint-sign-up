import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaDesktop, FaTimes, FaChrome } from "react-icons/fa";

let alertShown = false;

const Cover = ({ coverImg, title, subtitle }) => {
  const [showAlert, setShowAlert] = useState(false);

  const coverImgStyle = {
    backgroundImage: `url(${coverImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  };

  const showDesktopInstructions = () => {
    const instructions = `To enable desktop mode in Chrome:

1. Tap the menu icon (⋮) 
2. Check "Desktop site"
3. The page will reload automatically
4. If not reflected, double tap the screen`;

    alert(instructions);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 768 && !alertShown) {
        setShowAlert(true);
        alertShown = true;
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div style={coverImgStyle}>
      {/* Centered Alert Modal for mobile */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-gray-800 rounded-xl p-6 border border-cyan-400/30 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
                <FaChrome className="text-blue-400" />
                Better View Available
              </h3>
              <button
                onClick={() => setShowAlert(false)}
                className="text-gray-400 hover:text-white"
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>

            <p className="text-gray-300 mb-6 text-sm">
              For the optimal experience, try viewing in desktop mode.
            </p>

            <button
              onClick={showDesktopInstructions}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors"
            >
              <FaDesktop />
              <span>How to Enable Desktop Mode</span>
            </button>

            <p className="mt-3 text-xs text-gray-400 text-center">
              (Look for Desktop site in Chromes menu)
            </p>
          </div>
        </div>
      )}

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-400 mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-semibold mb-96">
            Portfolio
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-md mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

Cover.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Cover;
