import React, { useRef } from "react";

const Playing = () => {
  const inputEl = useRef(null);
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="search"
        ref={inputEl}
      />
    </div>
  );
};

export default Playing;
