import { useState } from "react";
import style from "./Form.module.css";
import Help from "../Help/Help";
const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    state: "",
    address: "",
    postalCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main className={style.container}>
      <h2 className={style.hero}>Заповніть форму</h2>
      <div className={style.button_box}>
        <button type="button" className={style.button_individual}>
          Фіз.особа
        </button>
        <button type="button" className={style.button_legal}>
          Юр.особа
        </button>
      </div>
      <form>
        <section className={style.section}>
          <label className={`${style.grid_item} ${style.firstName}`}>
            Ім'я
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={style.input_Form}
            />
          </label>
          <label className={`${style.grid_item} ${style.lastName}`}>
            Прізвище
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={style.input_Form}
            />
          </label>
          <label className={`${style.grid_item} ${style.companyName}`}>
            Назва компанії, організації
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className={style.input_Form}
            />
          </label>
          <label className={`${style.grid_item} ${style.email}`}>
            Email-адрес
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={style.input_Form}
            />
          </label>
          <label className={`${style.grid_item} ${style.phoneNumber}`}>
            Номер телефону
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className={style.input_Form}
            />
          </label>
          <label className={`${style.grid_item} ${style.country}`}>
            Країна
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className={style.input_Form}
            />
          </label>
          <label className={`${style.grid_item} ${style.city}`}>
            Місто
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className={style.input_Form}
            />
          </label>
          <label className={`${style.grid_item} ${style.state}`}>
            Штат, район
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className={style.input_Form}
            />
          </label>
          <label className={`${style.grid_item} ${style.address}`}>
            Адреса
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className={style.input_Form}
            />
          </label>
          <label className={`${style.grid_item} ${style.postalCode}`}>
            Поштовий індекс
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              className={style.input_Form}
            />
          </label>
        </section>

        <Help />
      </form>
    </main>
  );
};
export default Form;
