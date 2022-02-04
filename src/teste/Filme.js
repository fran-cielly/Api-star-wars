import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import axios from "axios";

export default ({ linkFilme }) => {
  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    axios
      .get(linkFilme, {})
      .then((resposta) => {
        setTitulo(resposta.data.title);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return <Text>{titulo}</Text>;
};
