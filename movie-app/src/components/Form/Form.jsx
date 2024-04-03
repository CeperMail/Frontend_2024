import styles from "./Form.module.css"

function Form() {
  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img className={styles.form__image} src="https://picsum.photos/536/354" alt="placeholder" />
        </div>
        <div className={styles.form__right}>
          <form>
            <h2 className={styles.form__title}>Add movie</h2>
            <label className={styles.form__label}>Title:</label>
            <input
              type="text"
              id="title"
              className={styles.form__input}
            />
            <br />
            <label className={styles.form__label} htmlFor="year">Year:</label>
            <input
              type="number"
              id="year"
              className={styles.form__input}
            />
            <br />
            <button type="submit" className={styles.form__button}>Add Movie</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;