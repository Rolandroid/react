import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import useModal from "../../hooks/useModal";


export default function Header() {
  const { toogleModal } = useModal()
  return (
    <header className={`py-5 ${styles.header}`}>
      <h1>Buscador de Bebidas</h1>
      <FontAwesomeIcon icon={faCartShopping} onclick={toogleModal}></FontAwesomeIcon>
    </header>
  );
}
