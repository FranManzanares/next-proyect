"use client";

import Button from "@/componentes/Button";
import Input from "@/componentes/Input";
import Title from "@/componentes/Title";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Contador() {

  const router = useRouter();
  const [cuenta, setCuenta] = useState(0);
  const [nombre, setNombre] = useState("");
  const [checked, setChecked] = useState(true);
  const [color, setColor] = useState("")

  useEffect(() => {
    if (cuenta == 20 || cuenta == -20) {
      setCuenta(0)
    }
    if (cuenta == 10) {
      router.push('/login')
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
      {nombre != "" &&
        <h2>Hola: {nombre}</h2>
      }

      <hr></hr>
      <Button texto={"Pagina login"}>
        router.push('/login')
      </Button>
    </>
  );
}