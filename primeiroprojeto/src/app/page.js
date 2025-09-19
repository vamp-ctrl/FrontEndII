"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const [cont, setCont] = useState(0);
  const [filtro, setFiltro] = useState("");
  const [materias, setMaterias] = useState([]);

  const [novaMateria, setNovaMateria] = useState("");
  const [novoLink, setNovoLink] = useState("");

  const adicionar = () => setCont(cont + 1);
  const subtrair = () => setCont(cont > 0 ? cont - 1 : 0);

  const adicionarMateria = () => {
    if (novaMateria.trim() && novoLink.trim()) {
      setMaterias([
        ...materias,
        {
          nome: novaMateria,
          sites: [{ nome: novaMateria, link: novoLink, estudado: false }],
        },
      ]);
      setNovaMateria("");
      setNovoLink("");
    } else {
      alert("Preencha o nome da matéria e o link!");
    }
  };

  const toggleEstudado = (materiaIndex, siteIndex) => {
    const novasMaterias = [...materias];
    novasMaterias[materiaIndex].sites[siteIndex].estudado =
      !novasMaterias[materiaIndex].sites[siteIndex].estudado;
    setMaterias(novasMaterias);
  };

  const materiasFiltradas = materias.filter((m) =>
    m.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className={styles.body}>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={adicionar}>
          ➕ Adicionar
        </button>
        <button className={styles.button} onClick={subtrair}>
          ➖ Subtrair
        </button>
      </div>

      <h1 className={styles.h1}>📚 Painel de Estudos</h1>
      <p className={styles.counter}>Contagem: {cont}</p>

      <Link
        href="https://2024103030023.fronti.dev.vilhena.ifro.edu.br/"
        className={styles.button}
        target="_blank"
      >
        🔗 Site Front-End
      </Link>

      <div className={styles.studySection}>
        <h2 className={styles.sectionTitle}>Matérias para estudar</h2>

        <input
          type="text"
          placeholder="Filtrar por matéria..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className={styles.inputFiltro}
        />

        <div className={styles.addMateria}>
          <input
            type="text"
            placeholder="Nome da matéria"
            value={novaMateria}
            onChange={(e) => setNovaMateria(e.target.value)}
          />
          <input
            type="text"
            placeholder="Link do site"
            value={novoLink}
            onChange={(e) => setNovoLink(e.target.value)}
          />
          <button onClick={adicionarMateria}>➕ Adicionar Matéria</button>
        </div>

        <div className={styles.cardsContainer}>
          {materiasFiltradas.length > 0 ? (
            materiasFiltradas.map((m, i) => {
              const totalSites = m.sites.length;
              const estudados = m.sites.filter((s) => s.estudado).length;
              const progresso = Math.round((estudados / totalSites) * 100);

              return (
                <div
                  key={i}
                  className={styles.card}
                  style={{
                    background: `rgba(106,13,173,${
                      0.1 + 0.5 * (progresso / 100)
                    })`,
                  }}
                >
                  <h3>📚 {m.nome}</h3>
                  <ul>
                    {m.sites.map((s, j) => (
                      <li key={j}>
                        🔗{" "}
                        <Link href={s.link} target="_blank">
                          {s.nome}
                        </Link>
                        <button onClick={() => toggleEstudado(i, j)}>
                          {s.estudado ? "✅" : "❌"}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.progress}>
                    <div
                      className={styles["progress-bar"]}
                      style={{ width: `${progresso}%` }}
                    ></div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Nenhuma matéria encontrada.</p>
          )}
        </div>
      </div>
    </div>
  );
}
