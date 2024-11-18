import styles from "@styles/components/card.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

interface CardProps {
    title:string;
    description:string;
    imagePath:string;
    link:string;
}
export default function Card( card: Readonly<CardProps> ): JSX.Element {
    const router = useRouter();

    const changePage = () => {
        setTimeout(() => {
            router.push(card.link);
        }, 500);
    };
    return (
        <div className={styles.card} onClick={changePage}>
            <div className={styles.image_container}>
                <Image width={1000} height={1000} className={styles.image} src={card.imagePath} alt={card.title}/>
            </div>
            <div className={styles.overlay}>
                <div className={styles.title_container}>
                    <h2 className={styles.title}>{card.title}</h2>
                </div>
                <div className={styles.description_container}>
                    <p className={styles.description}>{card.description}</p>
                </div>
            </div>
        </div>
    );
}