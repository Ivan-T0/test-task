import React, { useRef, useState } from "react";
import style from "./PaymentForm.module.css";
const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [focused, setFocused] = useState("");

  const cardNumberRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const expiryRef = useRef(null);
  const cvvRef = useRef(null);

  const handleCardNumberChange = (e, index) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(.{4})/g, "$1 ").trim();
    const updatedCardNumber = [...cardNumber];
    updatedCardNumber[index] = value;
    setCardNumber(updatedCardNumber);
    if (value.length === 4 && index < 3) {
      cardNumberRefs[index + 1].current.focus();
    }
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(.{2})/, "$1/").trim();
    setExpiry(value);
    if (value.length === 5) {
      cvvRef.current.focus();
    }
  };

  const handleCvvChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    setCvv(value);
  };

  const handleInputFocus = (name) => {
    setFocused(name);
  };

  return (
    <div className={style.credit_card_form}>
      <div className={style.input_group}>
        <label>Номер карти:</label>
        <div
          className={`${style.input_field} ${
            focused === "cardNumber" ? style.focused : ""
          }`}
        >
          {cardNumber.map((num, index) => (
            <input
              key={index}
              type="text"
              value={num}
              onChange={(e) => handleCardNumberChange(e, index)}
              onFocus={() => handleInputFocus("cardNumber")}
              maxLength="4"
              ref={cardNumberRefs[index]}
              className={style.input_Card}
            />
          ))}
        </div>
      </div>
      <div className={style.input}>
        <div className={style.input_group}>
          <label>Термін дії:</label>
          <div
            className={`${style.input_field} ${
              focused === "expiry" ? style.focused : ""
            }`}
          >
            <input
              type="text"
              value={expiry}
              onChange={handleExpiryChange}
              onFocus={() => handleInputFocus("expiry")}
              maxLength="5"
              ref={expiryRef}
              className={style.input_item}
            />
          </div>
        </div>
        <div className={style.input_group}>
          <label>CVC/CVV:</label>
          <div
            className={`${style.input_field} ${
              focused === "cvv" ? style.focused : ""
            }`}
          >
            <input
              type="text"
              value={cvv}
              onChange={handleCvvChange}
              onFocus={() => handleInputFocus("cvv")}
              maxLength="3"
              ref={cvvRef}
              className={style.input_item}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
