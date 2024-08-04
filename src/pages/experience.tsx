import { useTranslations } from "use-intl";
import styles from "@styles/pages/experiences.module.css";
import { GetStaticProps } from "next";
import ExperienceCard from "@components/ExperienceCard";
function Experience(): JSX.Element{
    const t = useTranslations("experiences");
    return (
        <div className={styles.experiences_container}>
            <h1 className={styles.title}>{t("title")}</h1>
            <div className={styles.experience_list}>
                <ExperienceCard path="experiences.exp1"/>
                <ExperienceCard path="experiences.exp2"/>
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