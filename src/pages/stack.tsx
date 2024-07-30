import { GetStaticProps } from "next";
import { useTranslations } from "use-intl";
import styles from "@styles/pages/stacks.module.css";
import Image from "next/image";

function Stack(): JSX.Element {
    const t = useTranslations("stack");
    return (
        <div className={styles.stacks_page}>
            <h1 className={styles.title}>{t("title")}</h1>
            <h2 className={styles.categorie_title}>{t("lang")}</h2>
            <div className={styles.categorie_container}>
            </div>
            <h2 className={styles.categorie_title}>{t("frameworks")}</h2>
            <div className={styles.categorie_container}>

            </div>
            <h2 className={styles.categorie_title}>{t("database")}</h2>
            <div className={styles.categorie_container}>

            </div>
            <h2 className={styles.categorie_title}>{t("tools")}</h2>
            <div className={styles.categorie_container}>

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
export default Stack;