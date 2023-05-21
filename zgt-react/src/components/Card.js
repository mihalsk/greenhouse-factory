import React from 'react';
import "./Card.css";
export default function Card(props) {
  const { className, name, price, measure, btnText, srcLink, imgClick } = props;

  function replaceByDefault(e) {
    e.target.src = `${process.env.PUBLIC_URL}/${srcLink}`;
  }

  return (
    <div className={`c-div d-flex justify-content-center align-items-center flex-column ${className}`}>
      <img onClick={imgClick} className="c-img" src={`${process.env.PUBLIC_URL}/${srcLink}`} onError={replaceByDefault} />
      <div className="d-flex flex-column p-2">
        <div className="container row justify-content-start">
          <div className="col p-1">{name}</div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5 p-0 m-0 text-nowrap font-weight-bold price ">{price} руб/комп</div>

            <div className="col-2"></div>
            <div className="col-4 cnt row">
              <form action="/" className="form p-0 m-0">
                <input className="inp p-0 m-0" type="text" defaultValue="0" />
              </form>
              
            </div>
            
            <div className="col-1 p-0 m-0 cnt">{measure}</div>
          </div>
        </div> 
        <div className="container m-1">
          <div className="row justify-content-end">
            <button className="col-6 c-btn">{btnText}</button>
          </div>
        </div> 
      </div>
    </div>   
  );
}