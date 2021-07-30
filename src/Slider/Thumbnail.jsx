import styles from "./styles.module.scss";

export function Thumbnail() {
  return (
    <div className={styles.Thumbnail}>
      <img
        alt="1"
        src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
    </div>
  );
}
