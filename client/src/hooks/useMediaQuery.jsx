import { useEffect } from "react";
import { useMemoState } from "Hooks";

export const useMediaQuery = ({ minWidth, maxWidth }) => {
  const [state, setState] = useMemoState(
    window.innerWidth >= (minWidth || 0) &&
      window.innerWidth <= (maxWidth || Infinity)
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const checking = minWidth
        ? width >= minWidth
        : maxWidth
        ? width < maxWidth
        : null;
      setState(checking);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return state;
};

// import { useMediaQuery } from 'Hooks';
// const isMobile = useMediaQuery({ maxWidth: 768 });
