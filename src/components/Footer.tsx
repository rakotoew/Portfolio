import styles from "@styles/components/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
    return (
        <>
            <footer className={styles.footer_container}>
                <p></p>
                <p>© 2024 Ewan Rakotoanosy</p>
                <div className={styles.lang_button}>
                    <FontAwesomeIcon className={styles.icon} icon={faGlobe} size="2x"/>
                </div>
            </footer>
        </>
    );
}