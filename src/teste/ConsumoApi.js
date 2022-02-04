import React, { useEffect, useState } from "react";
import axios from "axios";
import TabelaPersonagens from "./TabelaPersonagens";

export default () => {
  const [listaPersonagem, setListaPersonagem] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people", {})
      .then((resposta) => {
        setListaPersonagem(resposta.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return <TabelaPersonagens listaPersonagem={listaPersonagem} />;
};
