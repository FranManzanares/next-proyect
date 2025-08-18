"use client";   
import styles from "@/componentes/Button.module.css";
import clsx from "clsx";



export default function Button(props) {

    return (
        <>
            <button className={
                clsx(
                    {
                        [styles.incremental] : props.color == "verde",
                        [styles.decremental] : props.color == "rojo",
                    }

                )
            } onClick={props.funcionalidad}>{props.texto}</button>

        </>
    );

}