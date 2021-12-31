import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { NavbarLinkProps } from "./components/navbar-link";

type SocialLinkProps = {
  icon: IconProp;
  url: string;
};

type ConfigProps = {
  socialLinks: SocialLinkProps[];
  navbarLinks: NavbarLinkProps[];
  blogDescription: string;
};

// config.ts
const Config: ConfigProps = {
  socialLinks: [
    {
      icon: faTwitter,
      url: "https://twitter.com/RinGoku99",
    },
    {
      icon: faGithub,
      url: "https://github.com/RinGoku",
    },
  ],
  navbarLinks: [
    {
      text: "Home",
      href: "/",
    },
  ],
  blogDescription: "徒然とWeb技術系の話や日常を綴ります",
};

export default Config;
