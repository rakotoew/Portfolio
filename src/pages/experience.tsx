import { useTranslations } from "use-intl";
import styles from "@styles/pages/experiences.module.css";
import { GetStaticProps } from "next";
function Experience(): JSX.Element{
    const t = useTranslations("experiences");
    return (
        <div className={styles.experiences_container}>
            <h1 className={styles.title}></h1>
            <div className={styles.experience_list}>

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

export default Experience;