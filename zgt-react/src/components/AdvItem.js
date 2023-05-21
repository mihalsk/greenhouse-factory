import React from 'react';
import "./AdvItem.css";
export default function AdvItem(props) {
    const { text, className, srcLink } = props;
    return (
        <div className={`ai-border ${className}`}>
            <img className="ai-img" src={require(`../assets/${srcLink}`)}/>
            <div className="ai-text"> { text } </div>
        </div>
    );
}