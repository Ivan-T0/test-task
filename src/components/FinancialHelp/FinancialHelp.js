import style from "./FinancialHelp.module.css";
import { SiVisa } from "react-icons/si";
import { SiGnometerminal } from "react-icons/si";
import { SiWebmoney } from "react-icons/si";
import { FaPaypal } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import PaymentForm from "../PaymentForm/PaymentForm";
import { useState } from "react";

const FinancialHelp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={style.section}>
      <ul className={style.list_item}>
        <li className={style.icon_list_item} onClick={() => handleItemClick(0)}>
          <div
            className={`${style.icon_item} ${
              activeIndex === 0 ? style.isActive : ""
            }`}
          >
            <SiVisa />
            <p className={style.card}>Visa/MasterCard</p>
          </div>
        </li>
        <li className={style.icon_list_item} onClick={() => handleItemClick(1)}>
          <div
            className={`${style.icon_item} ${
              activeIndex === 1 ? style.isActive : ""
            }`}
          >
            <BsBank2 />
            <p className={style.card}>Приват24</p>
          </div>
        </li>
        <li className={style.icon_list_item} onClick={() => handleItemClick(2)}>
          <div
            className={`${style.icon_item} ${
              activeIndex === 2 ? style.isActive : ""
            }`}
          >
            <SiGnometerminal />
            <p className={style.card}>Термінали</p>
          </div>
        </li>
        <li className={style.icon_list_item} onClick={() => handleItemClick(3)}>
          <div
            className={`${style.icon_item} ${
              activeIndex === 3 ? style.isActive : ""
            }`}
          >
            <SiWebmoney />
            <p className={style.card}>WebMoney</p>
          </div>
        </li>
        <li className={style.icon_list_item} onClick={() => handleItemClick(4)}>
          <div
            className={`${style.icon_item} ${
              activeIndex === 4 ? style.isActive : ""
            }`}
          >
            <FaPaypal />
            <p className={style.card}>PayPal</p>
          </div>
        </li>
        <li className={style.sixth} onClick={() => handleItemClick(5)}>
          <PaymentForm />
        </li>
      </ul>
    </section>
  );
};

export default FinancialHelp;
