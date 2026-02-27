import React, { useEffect, useRef, useState } from "react";

const TypingEffect = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState(text);
  const velocityRef = useRef({ endIndex: 0 });
  useEffect(() => {
    const interval = setInterval(() => {
      velocityRef.current.endIndex++;
      setDisplayText(text.slice(0, velocityRef.current.endIndex));
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay, text]);
  return (
    <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-[90%] border-l-4 border-[#483D8B]/20 pl-6">
      {displayText}
    </p>
  );
};

export default TypingEffect;
