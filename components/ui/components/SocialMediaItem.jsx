import { SocialIcon } from "react-social-icons";

export default function SocialMediaItem({ name, url, icon }) {
  return (
    <li>
      <SocialIcon url={url} style={{ height: 20, width: 20 }} />
      <a href={url} target="_blank">
        {name}
      </a>
    </li>
  );
}
