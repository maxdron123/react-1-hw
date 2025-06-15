"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import Link from "next/link";
import SocialMediaItem from "./components/SocialMediaItem.jsx";

export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      {/* TASK - React 1 week 2 */}
      {/* Create a new List for the Pages */}
      {/* We need to use the <Link /> component here */}
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li>
            <Link href={"about_us"}>About us</Link>
          </li>
          <li>
            <Link href={"destination"}>Destination</Link>
          </li>
          <li>
            <Link href={"nasa_collaboration"}>Nasa Collaboration</Link>
          </li>
        </ul>
      </div>
      {/* Docs for the Link: https://nextjs.org/docs/pages/api-reference/components/link */}

      {/* TASK - React 1 week 1 */}
      {/* Add a new list item for LINKEDIN */}
      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <SocialMediaItem url="https://facebook.com" name="Facebook" />
          <SocialMediaItem url="https://instagram.com" name="Instagram" />
          <SocialMediaItem url="https://tiktok.com" name="Tiktok" />
          <SocialMediaItem
            url="https://google.com"
            name="On the streets at night"
          />
          <SocialMediaItem url="https://linkedin.com" name="Linkedin" />

          {/* TASK - React 1 week 2 */}
          {/* Create a <SocialMediaItem /> component and replace all of the list items! */}
          {/* it should accept the following props */}
          {/* url, title, icon */}
          {/* For the icons, you can download 1-2 social media icons for testing and put it in the /public/socialmedia/ folder */}
        </ul>
      </div>
    </footer>
  );
};
