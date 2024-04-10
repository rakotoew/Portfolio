import styles from "@styles/pages/home.module.css";
import {useTranslations} from "use-intl";
import {GetStaticProps} from "next";
function HomePage(): JSX.Element {
    const t = useTranslations("home");
    return (
        <div className={styles.home_page}>
            <h1 className={styles.title}>{t("name")}</h1>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            messages: require(`../lang/${locale}.json`)
        }
    };
};

export default HomePage;