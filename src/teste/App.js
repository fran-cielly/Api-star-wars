import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import ConsumoApi from "./ConsumoApi";
// import Pessoa from "./Pessoa";

export default ({ x }) => {
  // const [cpf, setCpf] = useState("");
  // const pessoas = [
  //   { nome: "jose", idade: 30, sexo: "m" },
  //   { nome: "carlos", idade: 30, sexo: "m" },
  //   { nome: "ana", idade: 30, sexo: "m" },
  //   { nome: "paula", idade: 30, sexo: "m" },
  //   { nome: "jamili", idade: 30, sexo: "m" }
  // ];

  // useEffect(() => {
  //   console.warn("oi");
  // }, []);

  // return <Pessoa pessoas={pessoas} />;
  return <ConsumoApi />;
};
