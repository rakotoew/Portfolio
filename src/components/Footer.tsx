import styles from "@styles/components/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "use-intl";
export default function Footer() {
    const t = useTranslations("footer");

    const changeLanguage = () => {
        
    };
    return (
        <footer className={styles.footer_container}>
            <p className={styles.filler}></p>
            <p>© 2024 Ewan Rakotoanosy</p>
            <div onClick={changeLanguage} className={styles.lang_button}>
                <FontAwesomeIcon className={styles.icon} icon={faGlobe} size="2x"/>
                <p className={styles.lang}>{t("language")}</p>
            </div>
        </footer>
    );
}