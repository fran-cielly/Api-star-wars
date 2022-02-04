import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

export default ({ conteudo }) => {
  useEffect(() => {
    console.log("oi");
  }, [conteudo]);

  return (
    <View style={styles.conteudo}>
      <Text>{conteudo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteudo: {
    flexGrow: 1,
    flexBasis: 0,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center"
  }
});
