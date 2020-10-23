import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => { // ComponentDidMount : EventListener 추가
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {  // ComponentWillUnMount : EventListener 삭제
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export default useClick;