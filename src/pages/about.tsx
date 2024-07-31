import { GetStaticProps } from "next";
import { useTranslations } from "use-intl";
import styles from "@styles/pages/about.module.css";
function About(): JSX.Element {
    const t = useTranslations("about");
    return (
        <div className={styles.about_container}>
            <h1 className={styles.title}>{t("name")}</h1>
            <p className={styles.text}>{t("text")}</p>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            messages: require(`../lang/${locale}.json`),
        }
    };
};

export default About;