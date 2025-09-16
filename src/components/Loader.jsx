import { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const title = "LOADING ...";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    // Fake progress simulation
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current > 100) {
        current = 100;
        clearInterval(interval);

        // Trigger fade out first, then hide
        setFadeOut(true);
        setTimeout(() => setIsHidden(true), 1000);
      }
      setProgress(current);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Typing animation for the title
    let i = 0;
    const typing = setInterval(() => {
      setDisplayText(title.slice(0, i + 1));
      i++;
      if (i === title.length) clearInterval(typing);
    }, 150);

    return () => clearInterval(typing);
  }, [title]);

  // Smooth text color transition: white → black
  const textColor = progress < 50 ? "black" : "white";
  const barColor =
    progress < 10
      ? "linear-gradient(to right, white, #d1d5db)"
      : "linear-gradient(to right, black, gray)";

  return (
    <div
      className={`fixed inset-0 z-[9999] transition-transform duration-1000 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Black background */}
      <div className="absolute inset-0 bg-white" />

      {/* White panel that grows with progress */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Typing Text */}
        <h1
          className="text-4xl md:text-6xl font-bold tracking-widest transition-colors duration-700"
          style={{ color: textColor }}
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>

        {/* Progress bar */}
        <div className="w-2/3 max-w-md mt-6">
          <div className="h-1 bg-neutral-300 rounded-full overflow-hidden">
            <div
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: `${progress}%`,
                background: barColor,
              }}
            />
          </div>
          <p
            className="text-center mt-2 text-xl transition-colors duration-700"
            style={{ color: textColor }}
          >
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
