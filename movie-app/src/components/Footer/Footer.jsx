import styles from "./Footer.module.css"

function Footer(){
    return(
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}>Movie app</h2>
                <p className={styles.footer__author}>Created by CeperMail</p>
            </footer>
        </div>
    );
}

export default Footer