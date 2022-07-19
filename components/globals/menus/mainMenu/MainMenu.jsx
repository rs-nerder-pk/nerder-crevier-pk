import Button from "@/components/UI/Button";
import Gauge from "@/components/UI/icons/Gauge";
import Link from "next/link";
import styles from "./MainMenu.module.scss";

export default function MainMenu({ links, findStation }) {
  return (
    <nav className={styles.Menu}>
      <ul className="flex divide-x divide-blue-400 uppercase items-center">
        {links.map((link, i) => {
          return (
            <li key={"mainLink" + i}>
              <Link href={link.path}>{link.text}</Link>
            </li>
          );
        })}
        {findStation && (
          <li className="flex-1 flex justify-end">
            <Button
              href={findStation.path}
              size="sm"
              variant="tertiary"
              startIcon={<Gauge />}
            >
              {findStation.text}
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
}
