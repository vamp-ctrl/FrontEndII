"use client"; 
// --- Next.js ---
// Indica que este componente será renderizado no lado do cliente. 
// Necessário quando usamos 'useState' ou eventos no navegador.

import { useState } from "react";
// Importa o hook useState do React para controlar estados dentro do componente.

import styles from "./Header.module.css";
// Importa o CSS modular para estilizar o componente. 
// Cada classe em 'styles' é única para evitar conflitos globais.

import Link from "next/link";
// Importa o componente Link do Next.js para navegação entre páginas sem recarregar.

export default function Header() {
// Define o componente funcional Header, que será exportado como padrão.

  const [show, setShow] = useState(false);
  // Cria um estado 'show' que indica se o menu mobile está aberto ou fechado.
  // 'false' significa que o menu começa fechado.

  return (
    <>
      {/* --- Mobile --- */}
      <header className={styles.header2}>
      {/* Cabeçalho específico para dispositivos móveis */}
        <button
          className={`${styles.buttonMenu} ${show ? styles.active : ""}`}
          // Aplica a classe 'buttonMenu' e, se 'show' for true, também adiciona 'active'
          onClick={() => setShow(!show)}
          // Ao clicar, inverte o estado 'show'. Se estava fechado, abre; se estava aberto, fecha.
        >
          <span></span>
          <span></span>
          <span></span>
          {/* Os três <span> formam as três linhas do "menu hambúrguer" */}
        </button>
      </header>

      {show && (
      // Se 'show' for true, renderiza o menu mobile
        <div className={`${styles.menuHamb} ${show ? styles.open : ""}`}>
        {/* Aplica as classes para estilizar o menu mobile e abrir a animação */}
          <p>Mobile</p>
          {/* Texto de teste */}
          <ul className={styles.ulMenu}>
          {/* Lista de links do menu */}
            <li className={styles.liMenu}>
              <Link className={styles.link} href="/">Home</Link>
            </li>
            <li className={styles.liMenu}>
              <Link className={styles.link} href="/Portifolio">Portifólio</Link>
            </li>
          </ul>
        </div>
      )}

      {/* --- Desktop --- */}
      <header className={styles.header1}>
      {/* Cabeçalho específico para desktop */}
        <nav>
          <ul className={styles.ulMenu}>
          {/* Lista principal do menu desktop */}
            <li className={styles.liMenu}>
              <Link className={styles.link} href="/">Home</Link>
            </li>
            <li className={styles.liMenu}>
              <Link className={styles.link} href="/Portifolio">
                Portifólio ▾
                {/* ▾ indica que existe um submenu */}
              </Link>
              <ul className={styles.ulSubMenu}>
              {/* Submenu que aparece quando o usuário passa o mouse */}
                <li className={styles.liSubMenu}>
                  <Link className={styles.link} href="/Produtos">Cadastrar</Link>
                </li>
                <li className={styles.liSubMenu}>
                  <Link className={styles.link} href="/Produtos">Listar</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
