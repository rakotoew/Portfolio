import { GetStaticProps } from "next";
import { useTranslations } from "use-intl";
import styles from "@styles/pages/about.module.css";
import Image from "next/image";
function About(): JSX.Element {
    const t = useTranslations("about");
    return (
        <div className={styles.about_container}>
            <h1 className={styles.title}>{t("name")}</h1>
            <div className={styles.left_container}>
                <Image className={styles.image_pro} src="/professionnal.jpg" alt='Ewan Rakotoanosy' width={750} height={1000} />
                <div className={styles.text_right}>
                    <p className={styles.text_content}>{t("text1")}</p>
                    <p className={styles.text_content}>{t("text1_1")}</p>
                    <p className={styles.text_content}>{t("text1_2")}</p>
                </div>
            </div>
            <div className={styles.right_container}>
                <Image className={styles.image_ireland} src="/profile.png" alt='Ewan Rakotoanosy' width={500} height={500} />
                <div className={styles.text_left}>
                    <p className={styles.text_content}>{t("text2")}</p>
                </div>
            </div>
            <div className={styles.left_container}>
                <Image className={styles.image_vtt} src="/vttCroixdeFrix.PNG" alt='Ewan Rakotoanosy' width={750} height={500} />
                <div className={styles.text_right}>
                    <p className={styles.text_content}>{t("text3")}</p>
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

export default About;