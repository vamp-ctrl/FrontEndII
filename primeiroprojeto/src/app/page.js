// import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() { // toda ágina terá essa função como padrão de exportação
  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>Hello Word!</h1>
      <p className={styles.p}>oiiii</p>
      <Link href='./page.js'>Tela produtos</Link>
    </div>
  );
}