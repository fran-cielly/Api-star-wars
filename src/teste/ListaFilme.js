import React, { useState, useEffect } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import Filme from "./Filme";

export default ({ links }) => {
  const [listaFilme, setListaFilme] = useState(links);

  return (
    <FlatList
      data={listaFilme}
      style={styles.filme}
      renderItem={({ item }) => <Filme linkFilme={item} />}
    />
  );
};

const styles = StyleSheet.create({
  filme: {
    flexGrow: 1,
    flexBasis: 0,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "left"
  }
});
