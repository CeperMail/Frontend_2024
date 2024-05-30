import styles from '../Container/index.module.css';

function Container({children}) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
