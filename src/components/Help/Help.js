import { Link, Outlet } from "react-router-dom";
import style from "./Help.module.css";
import { IoHandRightOutline } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { GiShorts } from "react-icons/gi";
import { FaHeartPulse } from "react-icons/fa6";
import { useState } from "react";
const Help = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <div>
      <h2 className={style.title}>Види допомоги</h2>
      <p className={style.text}>Ви можете змінити вид допомоги</p>
      <ul className={style.link_list}>
        <li className={style.list_item}>
          <Link className={style.link} to="/do">
            <div
              className={style.link_item}
              onClick={() => handleClick("hand")}
            >
              <div
                className={`${style.icon_container} ${
                  activeIcon === "hand" ? style.isActive : ""
                }`}
              >
                <IoHandRightOutline />
              </div>
              <p className={style.text_link}>Зробити</p>
            </div>
          </Link>
        </li>
        <li className={style.list_item}>
          <Link
            className={style.link}
            to="/FinancialHelp"
            onClick={() => handleClick("wallet")}
          >
            <div className={style.link_item}>
              <div
                className={`${style.icon_container} ${
                  activeIcon === "wallet" ? style.isActive : ""
                }`}
              >
                <IoWallet />
              </div>

              <p className={style.text_link}>
                Фінансова <br />
                допомога
              </p>
            </div>
          </Link>
        </li>
        <li className={style.list_item}>
          <Link className={style.link} to="/MaterialHelp">
            <div
              className={style.link_item}
              onClick={() => handleClick("shorts")}
            >
              <div
                className={`${style.icon_container} ${
                  activeIcon === "shorts" ? style.isActive : ""
                }`}
              >
                <GiShorts />
              </div>
              <p className={style.text_link}>
                Матеріальна <br />
                допомога
              </p>
            </div>
          </Link>
        </li>
        <li className={style.list_item}>
          <Link className={style.link} to="/Volunteering">
            <div
              className={style.link_item}
              onClick={() => handleClick("heart")}
            >
              <div
                className={`${style.icon_container} ${
                  activeIcon === "heart" ? style.isActive : ""
                }`}
              >
                <FaHeartPulse />
              </div>
              <p className={style.text_link}>Волонтерство</p>
            </div>
          </Link>
        </li>
      </ul>
      <Outlet />
      <button type="button" className={style.button_help}>
        Допомогти
      </button>
    </div>
  );
};

export default Help;
