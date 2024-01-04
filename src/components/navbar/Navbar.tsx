import "./Navbar.scss";

import { FC } from "react";
import Image from "next/image";

const Navbar: FC = () => {
  return (
    <nav className="w-full">
      <div className="logo">romaric.dev</div>
      <ul className="nav-links">
        <li>
          <a href="/">
            <Image
              height={20}
              width={20}
              src={"/img/icons/icon-github.svg"}
              alt="GitHub icon"
            />
          </a>
        </li>
        <li>
          <a href="/">
            <Image
              height={20}
              width={20}
              src={"/img/icons/icon-frontend-mentor.svg"}
              alt="Frontend Mentor icon"
            />
          </a>
        </li>
        <li>
          <a href="/">
            <Image
              height={20}
              width={20}
              src={"/img/icons/icon-linkedin.svg"}
              alt="Linkedin icon"
            />
          </a>
        </li>
        <li>
          <a href="/">
            <Image
              height={20}
              width={20}
              src={"/img/icons/icon-twitter.svg"}
              alt="Twitter icon"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
