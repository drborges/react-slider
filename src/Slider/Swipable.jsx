import { Children, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./styles.module.scss";

const getViewportWidth = () => window.innerWidth;

export function Swipable({ children, current = 0, onSwipeLeft, onSwipeRight }) {
  const itemsCount = Children.toArray(children).length;
  const lastIndexRef = useRef(current);
  const direction = current - lastIndexRef.current;

  const handleSwipedRight = () => {
    lastIndexRef.current = current;
    return () => onSwipeRight(Math.max(0, current - 1));
  };

  const handleSwipedLeft = () => {
    lastIndexRef.current = current;
    return () => onSwipeLeft(Math.min(itemsCount - 1, current + 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft(),
    onSwipedRight: handleSwipedRight()
  });

  useEffect(() => {
    alert(`Direction ${direction}`);
  }, [direction]);

  return (
    <div {...handlers} className={styles.Swipable}>
      {children}
    </div>
  );
}
