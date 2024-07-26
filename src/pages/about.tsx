    import styles from "@styles/pages/about.module.css";

import Card from "@components/sections/Card";
import { GetStaticProps } from "next";
import { useTranslations } from "use-intl";


function AboutMe(): JSX.Element{
    const t = useTranslations("about");
    return (
        <div className={styles.about_page}>
            <p className={styles.description}>{t("about.description")}</p>
            <h1 className={styles.name}>{t("about.name")}</h1>
            <div className={styles.card_container}>
                <Card title={t("card1.title")} description={t("card1.description")} imagePath="/profile.png"/>
                <Card title={t("card2.title")} description={t("card2.description")} imagePath="/profile.png"/>
                <Card title={t("card3.title")} description={t("card3.description")} imagePath="/profile.png"/>
                <Card title={t("card4.title")} description={t("card4.description")} imagePath="/profile.png"/>
            </div>
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