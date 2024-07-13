import styles from "@styles/pages/about.module.css";

import { GetStaticProps } from "next";
import { useTranslations } from "use-intl";


function AboutMe(): JSX.Element{
    const t = useTranslations("about");
    return (
        <div className={styles.about_page}>
            <h1>{t("about.title")}</h1>
            <p>{t("about.description")}</p>
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

export default AboutMe;