import Image from "next/image";
import Home from "../../public/nav-icons/Home.png";
import Search from "../../public/nav-icons/Search.png";
import Logo from "../../public/nav-icons/Logo.png";
import Arrow from "../../public/nav-icons/arrow.png";
import Hearts from "../../public/nav-icons/Hearts.png";
import Men from "../../public/nav-icons/men.png";
import Record from "../../public/nav-icons/Record.png";
import TV from "../../public/nav-icons/TV.png";
import s from "./NavPanel.module.css";

let upHandler = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const NavPanel = () => {
  return (
    <div className={s.wrapper}>
      <Image src={Logo} width={32} height={50} alt="jjj" />
      <div className={s.navpan_wrapper}>
        <div className={s.navpan}>
          <Image
            className={s.icon}
            src={Search}
            width={44}
            height={44}
            alt="jjj"
          />
          <Image
            className={s.icon}
            src={Home}
            width={44}
            height={44}
            alt="jjj"
          />
          <Image
            className={s.icon}
            src={Record}
            width={44}
            height={44}
            alt="jjj"
          />
          <Image className={s.icon} src={TV} width={44} height={44} alt="jjj" />
          <Image
            className={s.icon}
            src={Hearts}
            width={44}
            height={44}
            alt="jjj"
          />
          <Image
            className={s.icon}
            src={Men}
            width={44}
            height={44}
            alt="jjj"
          />
        </div>
        <Image
          className={s.icon}
          onClick={upHandler}
          src={Arrow}
          width={44}
          height={44}
          alt="jjj"
        />
      </div>
    </div>
  );
};
export default NavPanel;
