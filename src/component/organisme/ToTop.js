import React from "react";

const ToTop = () => {
  // component ini akan membantu user untuk langsung menuju scroll paling atas
  return (
    <a href="#home" className="fixed bottom-4 right-4 z-[9999] h-12 w-12 items-center justify-center rounded-full bg-primary p-4 hover:animate-pulse" id="to-top">
      <span className="mt-2 block h-4 w-4 rotate-45 border-t-2 border-l-2"></span>
    </a>
  );
};

export default ToTop;
