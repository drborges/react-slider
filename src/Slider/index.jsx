import { Slides } from "./Slides";
import { Thumbnails } from "./Thumbnails";

import styles from "./styles.module.scss";

export default function Slider({
  current = 0,
  images = [],
  onPrevious,
  onNext
}) {
  return (
    <div className={styles.Slider}>
      <Slides
        current={current}
        images={images}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <Thumbnails />
    </div>
  );
}
