"use client";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Redes sociais */}
        <div className={styles.social}>
          <a
            href="https://facebook.com/profile.php?id=61561151780301"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={20} /> Facebook
          </a>
          <a
            href="https://instagram.com/euvictoraugustoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} /> Instagram
          </a>
          <a
            href="https://github.com/vamp-ctrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} /> GitHub
          </a>
          <a
            href="https://wa.me/5569993618962"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={20} /> Whatsapp
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copy}>
        <p>© 2025 Meu Site. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}