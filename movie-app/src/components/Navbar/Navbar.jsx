import styles from "./Navbar.module.css"

function Navbar() {
    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h1 className={styles.navbar__brand}>Movie app</h1>
                </div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>home</li>
                        <li className={styles.navbar__item}>add movie</li>
                        <li className={styles.navbar__item}>popular</li>
                        <li className={styles.navbar__item}>now playing</li>
                        <li className={styles.navbar__item}>top rated</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;