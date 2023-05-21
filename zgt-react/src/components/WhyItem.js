import React from 'react';
import "./WhyItem.css";
export default function WhyItem(props) {
    const { text, className, srcLink } = props;
    return (
        <div className={`wi-border ${className}`}>
            <img className="wi-img" src={require(`../assets/${srcLink}`)}/>
            <div className="wi-text">{text}</div>
        </div>
    );
}