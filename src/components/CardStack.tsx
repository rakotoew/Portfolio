import Image from "next/image";
import styles from "@styles/components/cardstack.module.css";

interface CardStackProps {
    title:string;
    path:string;
}
function CardStack(props: Readonly<CardStackProps>):JSX.Element {
    return (
        <div className={styles.cardstack_container}>
            <Image className={styles.image} src={props.path} alt={props.title} width={100} height={100}/>
            <p className={styles.title}>{props.title}</p>
        </div>
    );
}

export default CardStack;