import React, { useEffect, useState } from 'react';
import Btn from './Btn';
import "./Request.css";
import ModalWindow from './ModalWindow';
export default function Request(props) {
  const { className } = props;
  //var { phoneNumber = '', email = '' } = props;
  const [isRequestModalVisible, setIsRequestModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const changePhone = (e) => {
    setPhoneNumber(e.target.value);
  }
  const changeEmail = (e) => {
    setEmail(e.target.value);
  }
  const openModal = () => {
    setIsRequestModalVisible(true);
  }
  const closeModal = () => {
    setIsRequestModalVisible(false);
  }
  return (
    <div className={`div d-flex justify-content-center align-items-center flex-column border rounded ${className}`}>
      <div className="text-center font-weight-bold h3">
        ОСТАВИТЬ ЗАЯВКУ
      </div>
      <div className="text-center font-weight-bold h6">
        НА РАСЧЕТ СТОИМОСТИ
      </div>
      
      <form action="/" className="container p-2 m-0">
        <div className="row m-2">
          <input className="col-md p-2 m-0" name="phone" type="text" defaultValue={ phoneNumber } placeholder="Номер телефона" onChange={changePhone}/>
        </div>
        <div className="row m-2">
          <input className="col-md p-2 m-0" name="e-mail" type="text" defaultValue= { email } placeholder="E-mail" onChange={changeEmail}/>
        </div>
        <div className="row m-2">
          <Btn className="col-md p-2 m-0" title="Заказать расчет цены" action={ openModal }/>
        </div>
      </form>
      <ModalWindow 
      isModalVisible={ isRequestModalVisible } 
      handlerClose={ closeModal }
      body={<div>ЗАЯВКА НА РАСЧЕТ СТОИМОСТИ<br/>Тел.: {phoneNumber}<br/>E-mail:{email}</div> }>

      </ModalWindow>
    </div>  
  );
}