import React from 'react';

export default function ActionItem(props) {
  const { className, text, linkText, srcLink, action } = props;
  const styles = {
    "cs-border": { 
        margin: "15px",
        display: "flex",
        width: "100%",
      },
      "cs-img": { 
        margin: "0 0 1em 0",
        display: "block",
      },
      "cs-link": { 
        fontSize: "smaller",
        margin: "0",
        padding: "0",
        lineHeight: "1em",
        display: "flex",
        color: "green",
        cursor: "pointer",
      },
      "cs-text": { 
        margin: "0",
        padding: "0",
        fontWeight: "bold",
        lineHeight: "1em",
        display: "flex",
      },
      "cs-textblock": { 
        margin: "0 0 0 0",
        /* display: flex; */
      }
  };

  return (
    <div className={`${className}`} style={styles['cs-border']}>
      <img style={styles['cs-img']} src={require(`../assets/${srcLink}`)} />
      <div style={styles['cs-textblock']}>
        <div style={styles['cs-text']}>{text}</div>
        <div style={styles['cs-link']}><a onClick={action}>{linkText}</a></div>
      </div>
    </div>
  );
}