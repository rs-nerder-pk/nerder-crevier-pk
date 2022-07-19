import Link from "next/link";
import styles from "./TopMenu.module.scss";
export default function TopMenu({ links }) {
  return (
    <nav>
      <ul className="flex text-blue gap-4">
        {links.map((link, i) => {
          return (
            <li className={styles.Link} key={"topLink" + i}>
              <Link href={link.path}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
