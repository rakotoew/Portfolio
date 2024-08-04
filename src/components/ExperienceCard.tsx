import styles from "@styles/components/experiencecard.module.css";
import { useTranslations } from "use-intl";

interface ExperienceProps {
    path:string;
}
function ExperienceCard(props: Readonly<ExperienceProps>):JSX.Element{
    const t = useTranslations(props.path);

    return (
        <div className={styles.card_container}>
            <div className={styles.left_part}>
                <h2 className={styles.title}>{t("title")}</h2>
                <h3 className={styles.year}>{t("year")}</h3>
            </div>
            <div className={styles.right_part}>
                <h2 className={styles.job}>{t("job")}</h2>
                <p className={styles.description}>{t("description")}</p>
            </div>
        </div>
    );
}

export default ExperienceCard;