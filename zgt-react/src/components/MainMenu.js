import React, {useState} from 'react';
import ActionItem from './ActionItem';
import "./MainMenu.css"
import Logo from '../assets/Logo 1.svg';
import ModalWindow from './ModalWindow';

export default function MainMenu(props) {
  const { className, text, linkText, srcLink, width, menuDict, cityName, phone, showModalCity, showModalPhone } = props;
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className="w-100 flex-row d-flex justify-content-center align-items-center">
        <header className="w-100 container row">
            <div id="brand" className="col-md"><img src={ Logo }/></div>
            <nav className="col-md-10 d-none d-md-flex row">
                <ul className="align-self-start">
                {
                    Object.keys(menuDict).map((name) => ( 
                    <li key={name}><a onClick={menuDict[name]}>{name}</a></li>
                    ))
                }
                <div className="align-self-end">
                    <ActionItem text={cityName} linkText="все города" srcLink="map-marker.svg" action={ showModalCity }/>
                </div>
                <div className="align-self-end">
                    <ActionItem text={phone} linkText="заказать звонок" srcLink="phone.svg" action={ showModalPhone } />
                </div>
                </ul>
            </nav>
            <div id="hamburger-icon" className={isActive ? "open": ""} onClick={ () => setIsActive(!isActive) } >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <ul className="mobile-menu">
                {
                    Object.keys(menuDict).map((name) => ( 
                    <li key={name}><a onClick={menuDict[name]}>{name}</a></li>
                    ))
                }
                <div className="d-flex w-100 row align-self-end">
                    <ActionItem text={cityName} linkText="все города" srcLink="map-marker.svg" action={ showModalCity }/>
                </div>
                <div className="d-flex w-100 row align-self-end">
                    <ActionItem text={phone} linkText="заказать звонок" srcLink="phone.svg" action={ showModalPhone } />
                </div>
                </ul>
            </div>
        </header> 
    </div>  
  );
}