import styles from "@styles/components/header.module.css";
import { useTranslations } from "use-intl";
import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header(): JSX.Element{
    const t = useTranslations("header");
    const router = useRouter();
    const changePage = () => {
        setTimeout(() => {
            router.push("/");
        }, 500);
    };
    return(
        <div className={styles.header_container}>
            <Image className={styles.image} src="/android-chrome-512x512.png" alt="Home" width={70} height={70} onClick={changePage}/>
            <FontAwesomeIcon className={styles.icon} icon={faBars} size="2x"/>
        </div>
    );
}