import styles from "./Header.module.css"
import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.ulMenu}>
                        <li className={styles.liMenu}><Link className={styles.link} href="/">Home</Link></li>
                        <li className={styles.liMenu}><Link className={styles.liMenu} href="/Portifolio">Portifólio</Link>
                            <ul className={styles.ulRedes}>
                                <li><Link className={styles.liMenu} href='/Produtos'>Cadastrar</Link></li>
                                <li><Link className={styles.liMenu} href='/Produtos'>Cadastrar</Link></li>
                            </ul>
                        </li>
                        <p className={styles.p}>Veja essas telas babilônicas</p>
                    </ul>
                </nav>
            </header>
        </>
    )
};
