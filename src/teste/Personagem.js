import React from "react";
import { View, StyleSheet } from "react-native";
import Campo from "./Campo";
import ListaFilme from "./ListaFilme";

export default ({ infoPersonagem }) => {
  return (
    <View style={styles.caixaPersonagem}>
      <Campo conteudo={infoPersonagem.name} />
      <Campo conteudo={infoPersonagem.height} />
      <Campo conteudo={infoPersonagem.mass} />
      <ListaFilme links={infoPersonagem.films} />
    </View>
  );
};

const styles = StyleSheet.create({
  caixaPersonagem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
