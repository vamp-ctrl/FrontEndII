'use client'; // isso é necessário para usar estados e eventos no next.js
import { useState } from "react";
import styles from "./Header.module.css"
import Link from "next/link";

export default function Header() {
    const [show, setShow] = useState(false);
    return (
        <>
            <header className={styles.header1}>
                <button className={styles.buttonMenu} onClick={() => { setShow(!show) }}>☰</button>
                {show && <div style={{ height: '200px', border: '2px solid black' }}>
                    <p>Mobile</p>
                </div>
                }
            </header>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.ulMenu}>
                        <li className={styles.liMenu}>
                            <Link className={styles.link} href="/">Home</Link>
                        </li>
                        <li className={styles.liMenu}>
                            <Link className={styles.link} href="/Portifolio">Portifólio ▾</Link>
                            <ul className={styles.ulSubMenu}>
                                <li className={styles.liSubMenu}><Link className={styles.link} href="/Produtos">Cadastrar</Link></li>
                                <li className={styles.liSubMenu}><Link className={styles.link} href="/Produtos">Listar</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
};
