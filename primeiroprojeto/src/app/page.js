'use client'; // isso é necessário para usar estados e eventos no next.js 
import { useState } from "react"; import styles from "./page.module.css"; import Link from "next/link"; export default function Home() { // toda ágina terá essa função como padrão de exportação 
  let [cont, setCont] = useState(0);

  const adicionar = () => {
    setCont(cont + 1);
    console.log(cont);
  };
  const subtrair = () => {
    setCont(cont - 1);
    console.log(cont);
  };
  if (cont < 0) { setCont(0); }
  return (
    <div className={styles.body}>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={adicionar}>➕ Adicionar</button>
        <button className={styles.button} onClick={subtrair}>➖ Subtrair</button>
      </div>
      <h1 className={styles.h1}>Hello Word!</h1>
      <p className={styles.counter}>Contagem: {cont}</p>
      
      <Link href="https://www.google.com" className={styles.button}>🔗 Google</Link>
    </div>

  );
}