import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h1 className={styles.navbar__brand}>Movie app</h1>
                </div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>
                            <Link to="/" className={styles.navbar__link}>Home</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to="/movie/Create" className={styles.navbar__link}>Add Movie</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to="/movie/Popular" className={styles.navbar__link}>Popular</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to="/movie/NowPlaying" className={styles.navbar__link}>Now Playing </Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to="/movie/TopRated" className={styles.navbar__link}>Top Rated</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;