import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={`py-5 ${styles.header}`}>
      <h1>Buscador de Bebidas</h1>
      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
    </header>
  );
}
