import React from 'react';
import "./ReviewCard.css"
export default function ReviewCard(props) {
  const { className, text, name, srcLink } = props;

  return (
    <div className={`r-div d-flex justify-content-start align-items-center flex-md-column flex-row p-2 ${className}`}>
        <img className="r-img align-self-start align-self-md-center p-2" src={require(`../assets/${srcLink}`)} 
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src=require('../assets/not-found.jpg');
                  }}/>
        <div className="d-flex justify-content-md-center flex-column">
          <div className="d-flex p-1 font-weight-bold h3 justify-content-md-center">{ name }</div>
          <div className="d-flex flex-column p-2">
              <div className="container row justify-content-start">
              <div className="col p-1">{ text }</div>
              </div>
          </div>
        </div>
    </div>
  );
}