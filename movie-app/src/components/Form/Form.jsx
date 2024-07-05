import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import { nanoid } from 'nanoid';
import Alert from '../Alert/Alert';
import { useNavigate } from 'react-router-dom';
import MoviesContext from '../context/MoviesContext';

function Form() {
  const { movies, setMovies } = useContext(MoviesContext);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    poster: '',
    type: '',
  });
  const [errors, setErrors] = useState({
    title: false,
    date: false,
    poster: false,
    type: false,
  });
  
  const { title, date, poster, type } = formData;
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    const newErrors = {
      title: title === '',
      date: date === '',
      poster: poster === '',
      type: type === '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title,
      year: date,
      type,
      poster,
    };
    setMovies([...movies, movie]);
    setFormData({
      title: '',
      date: '',
      poster: '',
      type: '',
    });
    navigate("/");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      addMovie();
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.form__left}>
          <img className={styles.form__image} src="https://picsum.photos/536/354" alt="Add Photo Here.png" />
        </div>
        <div className={styles.form__right}>
          <h1 className={styles.form__title}>Add Movie</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__label}>
              <label htmlFor="poster">Poster</label>
              <br />
              <input id="poster" type="file" name="poster" value={poster} onChange={handleChange} className={styles.form__input} />
              {errors.poster && <Alert>Poster Wajib Diisi</Alert>}
              <br />
              <label htmlFor="title">Title</label>
              <br />
              <input id="title" type="text" name="title" value={title} onChange={handleChange} className={styles.form__input} />
              {errors.title && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__label}>
              <label htmlFor="date">Date</label>
              <br />
              <input id="date" type="date" name="date" value={date} onChange={handleChange} className={styles.form__input} />
              {errors.date && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__label}>
              <label htmlFor="type">Type</label>
              <br />
              <select id="type" name="type" value={type} onChange={handleChange} className={styles.form__radio}>
                <option value="">Select Type</option>
                <option value="action">Action</option>
                <option value="drama">Drama</option>
                <option value="comedy">Comedy</option>
                <option value="horror">Horror</option>
              </select>
              {errors.type && <Alert>Type Wajib Diisi</Alert>}
            </div>
            <button className={styles.form__button} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

Form.propTypes = {
  movies: PropTypes.array.isRequired,
  setMovies: PropTypes.func.isRequired,
};

export default Form;
