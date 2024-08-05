import styles from "@styles/components/sections/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "use-intl";
import { useRouter } from "next/router";
export default function Footer() {
    const router = useRouter();

    const changeLanguage = () => {
        if(router.locale === "en"){
            router.push(router.asPath, router.asPath, {locale: "fr"});
        }else {
            router.push(router.asPath, router.asPath, {locale: "en"});
        }
    };
    return (
        <footer className={styles.footer_container}>
            <p className={styles.filler}></p>
            <p>© 2024 Ewan Rakotoanosy</p>
            <div onClick={changeLanguage} className={styles.lang_button}>
                <FontAwesomeIcon className={styles.icon} icon={faGlobe} size="2x"/>
                {router.locale === "en" ? (
                    <p className={styles.lang}>FR | <span className={styles.lang_bold}>EN</span></p>
                ): (
                    <p className={styles.lang}><span className={styles.lang_bold}>FR</span> | EN</p>
                )}
            </div>
        </footer>
    );
}