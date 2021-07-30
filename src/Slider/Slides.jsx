import styles from "./styles.module.scss";
import { Slide } from "./Slide";
import { Swipable } from "./Swipable";

export function Slides({ current = 0, images = [], onPrevious, onNext }) {
  return (
    <div className={styles.Slides}>
      <Swipable
        current={current}
        onSwipeLeft={onPrevious}
        onSwipeRight={onNext}
      >
        {images.map((image, index) => (
          <Slide key={index}>
            <img alt="1" src={image.url} />
          </Slide>
        ))}
      </Swipable>
    </div>
  );
}
