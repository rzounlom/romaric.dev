import { FC } from "react";
import Image from "next/image";
import frontendMentorsIcon from "@/public/img/icons/icon-frontend-mentor.svg";
import ghIcon from "@/public/img/icons/icon-github.svg";
import linkedinIcon from "@/public/img/icons/icon-linkedin.svg";
import twitterIcon from "@/public/img/icons/icon-twitter.svg";

const Navbar: FC = () => {
  return (
    <nav>
      <div className="logo">romaric.dev</div>
      <ul className="nav-links">
        <li>
          <a href="/">
            <Image src={ghIcon} alt="GitHub icon" />
          </a>
        </li>
        <li>
          <a href="/">
            <Image src={frontendMentorsIcon} alt="Frontend Mentor icon" />
          </a>
        </li>
        <li>
          <a href="/">
            <Image src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </li>
        <li>
          <a href="/">
            <Image src={twitterIcon} alt="Twitter icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
