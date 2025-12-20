import Image from "next/image";
import styles from "./index.module.css";

type Props = {
    title: string;
    subtitle: string;
};

export default function Hero({ title, subtitle }: Props) {
    return (
        <section className={styles.container}>
            <div>
                <h1 className={styles.bgimg}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <Image
                className={styles.image}
                src="/img-mv.jpg"
                alt=""
                width={4000}
                height={1200}
            />
        </section>
    );
}   