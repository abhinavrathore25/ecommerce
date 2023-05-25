import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

export default function AddProductForm ()  {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleAddProduct = () => {
    // Perform action with form data (e.g., submit to server)
    // You can access the form data from the state variables:
    // productName, price, quantity, and image
    // Reset the form fields if needed
    setProductName('');
    setPrice('');
    setQuantity('');
    setImage(null);
  };

  return (
    <form>
      <TextField
        label="Product Name"
        value={productName}
        onChange={handleProductNameChange}
        fullWidth
        required
      />
      <TextField
        label="Price"
        value={price}
        onChange={handlePriceChange}
        type="number"
        fullWidth
        required
      />
      <TextField
        label="Quantity"
        value={quantity}
        onChange={handleQuantityChange}
        type="number"
        fullWidth
        required
      />
      <input
        accept="image/*"
        id="image-upload"
        type="file"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <label htmlFor="image-upload">
        <Button variant="contained" color="primary" component="span">
          Upload Image
        </Button>
      </label>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddProduct}
        disabled={!productName || !price || !quantity}
        fullWidth
      >
        Add Product
      </Button>
    </form>
  );
}


