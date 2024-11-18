import React from "react";
import Link from "next/link";
import {useTranslations} from "use-intl";
import styles from "@styles/components/error.module.css";

interface Props {
    title: string;
    description: string;
}

export default function Error(props : Readonly<Props>): JSX.Element {

    const t = useTranslations("error");

    return (
        <div className={styles.error_page}>
            <div className={styles.error_container}>
                <h1 className={styles.error_title}>
                    {props.title}
                </h1>
                <p className={styles.error_description}>
                    {props.description}
                </p>
                <div className={styles.error_button_container}>
                    <Link href="/public" className="" scroll={false} onClick={() => window.scrollTo(0, 0)} passHref>
                        <button
                            className={styles.error_button}
                        >
                            {t("back")}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
