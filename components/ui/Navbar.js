"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavbarItem from "./components/NavItem.jsx";

import styles from "./Navbar.module.css";

const navbarItems = [
  {
    title: "ABOUT US",
    link: "/about_us",
  },
  {
    title: "DESTINATION",
    link: "/destination",
  },
  {
    title: "NASA COLLABORATION",
    link: "/nasa_collaboration",
  },
];

export const Navbar = () => {
  const currentPath = usePathname();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {navbarItems.map((item, idx) => (
            <li
              key={item.link}
              className={classNames(styles.navbarLinks, {
                [styles.isLinkActive]: item.link === currentPath,
              })}
            >
              <Link href={item.link}>
                <b>{idx + 1}</b> {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
