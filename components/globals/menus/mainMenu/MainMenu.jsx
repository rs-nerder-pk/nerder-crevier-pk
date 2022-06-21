import Link from "next/link";
import styles from "./MainMenu.module.scss";

export default function MainMenu() {
  return (
    <nav className={styles.Menu}>
      <ul className="flex divide-x divide-blue-400 uppercase">
        <li>
          <Link href="/fleet-cards">Fleet Cards</Link>
        </li>
        <li>
          <Link href="/gift-cards">Gift Cards</Link>
        </li>
        <li className="justify-self-end">
          <Link href="/stations">Stations</Link>
        </li>
      </ul>
    </nav>
  );
}
