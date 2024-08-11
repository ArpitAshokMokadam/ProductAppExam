import React from "react";
import { View, Text, Button, Image, StyleSheet, Pressable } from "react-native";
import Modal from "react-native-modal";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import Feather from "@expo/vector-icons/Feather";


export default function ProductModal({ product, visible, onClose }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    onClose();
  };


  return (
    <Modal isVisible={visible} onBackdropPress={onClose}>
      <View style={styles.modalContent}>
        {/* <Text style={styles.title}>{product.title}</Text> */}
        <Image style={styles.image} source={{ uri: product.image }} />
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Text style={{ width: "30%" }}>Description: </Text>
          <Text style={{ width: "65%" }}>{product.description}</Text>
        </View>
        {/* <Text style={styles.price}>${product.price}</Text> */}
        <View style={styles.descriptionContiner}>
          <Pressable onPress={handleAddToCart} style={styles.button}>
            <Feather name="shopping-cart" size={24} color="#fff" />
            <Text style={{color:'#fff',fontWeight:'500'}}>Add To Cart</Text>
          </Pressable>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 250,
    marginBottom: 10,
  },
  descriptionContiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical:10
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  button: {
    width:'60%',
    backgroundColor: "orangered",
    borderRadius: 6,
    paddingHorizontal: 18,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-evenly'
  },
  closeButton: {
    borderRadius: 6,
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: "lightgray",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
});
