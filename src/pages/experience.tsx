import { useTranslations } from "use-intl";
import styles from "@styles/pages/experiences.module.css";
import { GetStaticProps } from "next";
import ExperienceCard from "@components/ExperienceCard";
function Experience(): JSX.Element{
    const t = useTranslations("experiences");
    return (
        <div className={styles.experiences_container}>
            <h1 className={styles.title}>{t("title")}</h1>
            <div className={styles.list_container}>
                <p className={styles.list_title}>{t("work")}</p>
                <div className={styles.experience_list}>
                    <ExperienceCard path="experiences.exp1" />
                    <ExperienceCard path="experiences.exp2" />
                    <ExperienceCard path="experiences.exp3" />
                </div>
            </div>
            <div className={styles.list_container}>
                <p className={styles.list_title}>{t("personal")}</p>
                <div className={styles.experience_list}>
                    <ExperienceCard path="experiences.exp4" />
                </div>
            </div>
            <div className={styles.list_container}>
                <p className={styles.list_title}>{t("univ")}</p>
                <div className={styles.experience_list}>
                    <ExperienceCard path="experiences.exp5" />
                    <ExperienceCard path="experiences.exp6" />
                    <ExperienceCard path="experiences.exp7" />
                </div>
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