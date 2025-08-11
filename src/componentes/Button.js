"use client"

export default function Button(promp) {

    function imprimir() {
        console.log("Tocaste el boton!")
    }

    return (
        <>
            <button onClick={imprimir}>Soy un boton</button>

        </>
    )

}