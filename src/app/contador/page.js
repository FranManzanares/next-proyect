"use client";

import Button from "@/componentes/Button";
import Title from "@/componentes/Title";

export default function Contador() {
  function Incrementar() {}

  function Decrementar() {}

  return (
    <>
      <Title title={"Contador"}></Title>

      <Button onClick={Incrementar} text={"Incrementar"}></Button>
      <Button onClick={Decrementar} text={"Incrementar"}></Button>
    </>
  );
}
