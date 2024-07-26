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
                <Card title="about" description="blablablabla" imagePath="/profile.png"/>
                <Card title="about" description="blablablabla" imagePath="/profile.png"/>
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