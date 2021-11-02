import styles from "./ToC.module.css";

export const ToC = (props) => {
  return <nav className={styles.toc}>{props.children}</nav>;
};
