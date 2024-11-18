import styles from "@styles/components/experiencecard.module.css";
import { useTranslations } from "use-intl";

interface ExperienceProps {
    path:string;
}
function ExperienceCard(props: Readonly<ExperienceProps>):JSX.Element{
    const t = useTranslations(props.path);
    const competences:string[] = t.raw("comp");
    return (
        <div className={styles.card_container}>
            <h2 className={styles.title}>{t("title")}</h2>
            <div className={styles.desciption_container}>
                <p className={styles.description}>{t("description")}</p>
                <h4 className={styles.comp_title}>{t("comp_title")} :</h4>
                <div className={styles.competences}>
                    {competences.map((comp) => (
                        <p key={comp} className={styles.comp}>
                            - {comp}
                        </p>
                    ))}
                </div>
            </div>
            <h3 className={styles.year}>{t("year")}</h3>
            <h3 className={styles.job}>{t("job")}</h3>
        </div>
    );
}

export default ExperienceCard;