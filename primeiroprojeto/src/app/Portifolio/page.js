// import styles from "./produtos.module.css";

// export default function Produtos() {
//   return (
//     <div>
//       <h1>Produtos</h1>
//       <p>Lista de produtos</p>
//     </div>
//   );
// }


import styles from "./produtos.module.css";
import Link from "next/link";

export default function Produtos() {
  // Lista de projetos (pode vir de um JSON, API ou ser fixa)
  const projetos = [
    {
      titulo: "Sistema de Caixa Açaiteria",
      descricao: "Um sistema completo de gerenciamento de pedidos e caixa.",
      link: "https://github.com/vamp-ctrl/Acaiteria",
    },
    {
      titulo: "Favor Fest",
      descricao: "Site de receitas com login, comentários e avaliações.",
      link: "https://github.com/vamp-ctrl/FavorFest",
    },
    {
      titulo: "Universo Harry Potter",
      descricao: "Site informativo sobre livros, filmes e personagens.",
      link: "https://github.com/vamp-ctrl/HarryPotterSite",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Meu Portfólio</h1>
      <p className={styles.subtitulo}>
        Aqui estão alguns dos projetos que desenvolvi:
      </p>
      <div className={styles.grid}>
        {projetos.map((proj, index) => (
          <div key={index} className={styles.card}>
            <h2>{proj.titulo}</h2>
            <p>{proj.descricao}</p>
            <Link href={proj.link} target="_blank" className={styles.link}>
              Ver Projeto
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
