import React from "react";
import styles from "./Button.module.css";

function button({ onClick, children }) {
    return (
        <button className="{styles.button} onClick={onClick}"> {children} </button>
    );
}

export default button;