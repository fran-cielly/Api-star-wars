import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Campo from "./Campo";
import Personagem from "./Personagem";

export default ({ listaPersonagem }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.caixa, styles.tituloTabela]}>
        <Campo conteudo={"Nome"} />
        <Campo conteudo={"Altura"} />
        <Campo conteudo={"Peso"} />
        <Campo conteudo={"Filme"} />
      </View>
      <FlatList
        data={listaPersonagem}
        renderItem={({ item }) => <Personagem infoPersonagem={item} />}
        keyExtractor={(item, index) => index}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  caixa: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  tituloTabela: {
    backgroundColor: "#d2a8ff",
    color: "white"
  },
  container: {
    margin: 10,
    justifyContent: "center"
  }
});
