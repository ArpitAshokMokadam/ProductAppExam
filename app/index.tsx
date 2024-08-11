import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProductList from './redux/productList';
import App from './redux/integrateCart';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.heading}>Shopping</Text>
      <Provider store={store}>
        <App />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: 'cyan',
    width: '100%',
    padding: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 35
  }
})