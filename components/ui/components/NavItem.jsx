export default function NavItem({ title, link, isActive }) {
  return (
    <li className={isActive ? "isLinkActive" : ""}>
      <a href={link}>
        <b>{title.slice(0, 2)}</b> {title}
      </a>
    </li>
  );
}
