    import styles from "@styles/pages/index.module.css";

import Card from "@components/Card";
import { GetStaticProps } from "next";
import { useTranslations } from "use-intl";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


function Index(): JSX.Element{
    const t = useTranslations("index");

    return (
        <div className={styles.about_page}>
            <div className={styles.title_container}>
                <div className={styles.text_container}>
                    <p className={styles.description}>{t("about.description")}</p>
                    <h1 className={styles.name}>Ewan Rakoto<span className={styles.animated_letter}>anosy</span></h1>
                    <div className={styles.link_icon_container}>
                        <Link href="https://www.github.com/rakotoew" className={styles.icon}>
                            <FontAwesomeIcon icon={faGithub} size="3x" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/ewan-rakotoanosy-844938249/" className={styles.icon}>
                            <FontAwesomeIcon icon={faLinkedin} size="3x" />
                        </Link>
                        <Link href="mailto:rakotoanosy.ewan@gmail.com" className={styles.icon}>
                            <FontAwesomeIcon icon={faEnvelope} size="3x" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.card_container}>
                <Card title={t("card1.title")} description={t("card1.description")}
                      imagePath="/professionnal_cropped.png" link="/about" />
                <Card title={t("card2.title")} description={t("card2.description")} imagePath="/laptoptech.jpg"
                      link="/experience" />
                <Card title={t("card3.title")} description={t("card3.description")} imagePath="/framework-laptop.jpg"
                      link="stack" />
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

export default Index;