import React, { useState } from 'react';
import { View, Button } from 'react-native';
import Cart from './cart';
import ProductList from './productList';

export default function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {showCart ? <Cart /> : <ProductList />}
      <Button title={showCart ? "Go to Products" : "View Cart"} onPress={() => setShowCart(!showCart)} />
    </View>
  );
}
