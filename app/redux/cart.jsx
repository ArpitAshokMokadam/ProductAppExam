import React from "react";
import { View, Text, Button, FlatList, StyleSheet, Image, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "./cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    // console.log(item)
      <View style={styles.item}>
        <Image
          source={{ uri: item.image }}
          style={{ width: 150, height: 195, alignSelf: "center" }}
        ></Image>
        <Text>{item.title}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <Text>${item.price * item.quantity}</Text>
        <Button
          title="+"
          onPress={() => dispatch(incrementQuantity(item.id))}
        />
        <Button
          title="-"
          onPress={() => dispatch(decrementQuantity(item.id))}
        />
      </View>
  );

  return (
    <FlatList
      data={cart}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: "center", padding: 5, width: '100%' },
  item: {
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
  },
});
