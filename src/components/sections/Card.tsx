import styles from "@styles/components/card.module.css";
import Image from "next/image";

interface CardProps {
    title:string;
    description:string;
    imagePath:string;
}
export default function Card( card:CardProps ): JSX.Element {
    return (
        <div className={styles.card}>
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