import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import axios from "axios";
import ProductModal from "./productModal";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const ratingFunc = (rating) => {
    let stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<FontAwesome key={i} name="star" size={12} color="gold" />);
    }
    if (rating % 1 !== 0) {
      stars.push(
        <FontAwesome key={stars.length} name="star-half-empty" size={12} color="gold" />
      );
    }
    for (let i = Math.ceil(rating); i < 5; i++) {
      // stars.push(<Text key={i + 5}>☆</Text>);
      stars.push(<FontAwesome key={i+5} name="star-o" size={12} color="gold" />);
    }
    return stars;
  };

  const renderItem = ({ item }) => (
    // console.log('item inside renderItem is ==>> ',item)
    <TouchableOpacity
      style={styles.item}
      onPress={() => setSelectedProduct(item)}
    >
      <View style={{ width: "40%" }}>
        <Image src={`${item.image}`} style={{ width: 110, height: 140 }} />
      </View>
      <View style={{ width: "60%" }}>
        <Text numberOfLines={2} ellipsizeMode="tail">
          {item.title}
        </Text>
        <View style={styles.starRatingView}>
          <Text style={{ paddingRight: 5, color: "gold" }}>
            {item.rating.rate && (
              <Text style={{ flexDirection: "row" }}>
                {ratingFunc(item.rating.rate)}
              </Text>
            )}
          </Text>
          <Text style={styles.categoryNcount}>{item.rating.count}</Text>
        </View>
        <Text style={styles.price}>₹ {item.price}</Text>
        <Text style={styles.categoryNcount}>Category: {item.category}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          visible={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  item: {
    padding: 10,
    marginVertical: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 7,
  },
  categoryNcount: {
    color: "silver",
  },
  starRatingView: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },
  halfStar: {
    width: 12,
    height: 12,
    tintColor: "gold",
  },
});
