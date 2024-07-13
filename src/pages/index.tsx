import styles from "@styles/pages/home.module.css";
import {useTranslations} from "use-intl";
import {GetStaticProps} from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
function HomePage(): JSX.Element {
    const router = useRouter();
    const t = useTranslations("home");
    let isFading : boolean = false;

    const changePage = () => {
      isFading = true;
      setTimeout(() => {
          router.push("/about");
      }, 500);
    };
    return (
        <div className={styles.home_page}>
            <Image className={styles.profile_picture} src="/profile.png" alt="profile picture" width={250} height={250} onClick={changePage}/>
            <div className={styles.home_container}>
                <h1 className={styles.title}>{t("name")}</h1>
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
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            messages: require(`../lang/${locale}.json`),
        }
    };
};

export default HomePage;