import styles from "./styles.module.scss";
import { Thumbnail } from "./Thumbnail";
import { Swipable } from "./Swipable";

export function Thumbnails() {
  return (
    <div className={styles.Thumbnails}>
      <Swipable>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </Swipable>
    </div>
  );
}
