import React from 'react';
import './Btn.css';
export default function Btn(props) {
  const { className, title, action } = props;

  // function action() {
  //   action();
  // }

  return (
    <div className={`btn ${className}`} onClick={action}>
      {title}
    </div>
  );
}