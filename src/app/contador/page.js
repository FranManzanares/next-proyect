"use client";

import Button from "@/componentes/Button";
import Input from "@/componentes/Input";
import Title from "@/componentes/Title";
import { useEffect, useState } from "react";

export default function Contador() {

  const [cuenta, setCuenta] = useState(0);
  const [nombre, setNombre] = useState("");
  const [checked, setChecked] = useState(true);
  const [color, setColor] = useState("")

  useEffect(() => {
    if (cuenta == 20 || cuenta == -20) {
      setCuenta(0)
    }
  }, [cuenta])

  function cont() {
    if (checked) {
      setCuenta(cuenta + 1);
    } else {
      setCuenta(cuenta - 1);
    }

  }


  function ver(event) {
    setNombre(event.target.value)
  }

  function checkBoxCambio(event) {
    setChecked(event.target.checked);
    console.log(event.target.checked)
    setColor(event.target.checked == true ? "verde" : "rojo")
  }

  return (
    <>
      <Title title={"Contador"}></Title>
      <p>Cuenta: {cuenta}</p>
      <Button funcionalidad={cont} texto={"Subir/Bajar"} color={color}></Button>
      <Input type="checkbox" onChange={checkBoxCambio} checked={checked} ></Input>

      <Input onChange={ver}></Input>
      <h2>Hola: {nombre}</h2>
    </>
  );
}
