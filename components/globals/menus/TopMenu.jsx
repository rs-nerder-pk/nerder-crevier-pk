import Link from "next/link";
import styles from "./TopMenu.module.scss";
export default function TopMenu() {
  return (
    <nav>
      <ul className="flex text-blue gap-4">
        <li className={styles.Link}>
          <Link href="/about-us">About Us</Link>
        </li>
        <li className={styles.Link}>
          <Link href="/careers">Careers</Link>
        </li>
        <li className={styles.Link}>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
