import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createProduct } from "../redux/actions/index";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null); // Stato per il file selezionato
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Imposta il file nello stato
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token non trovato nel localStorage");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const uploadResponse = await axios.post(
        "http://localhost:8080/api/products/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const imageUrl = uploadResponse.data.imageUrl;

      const productData = {
        name,
        description,
        price: parseFloat(price),
        imageUrl,
        category: {
          id: parseInt(category),
        },
      };

      // Invia i dati del prodotto al server
      const productResponse = await axios.post(
        "http://localhost:8080/api/products",
        productData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(createProduct(productResponse.data));
    } catch (error) {
      console.error(
        "Errore nel caricamento dell'immagine o nell'invio del prodotto:",
        error
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Descrizione"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Prezzo"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="file"
        onChange={handleFileChange} // Gestisce la selezione del file
        required
      />
      <input
        type="text"
        placeholder="Categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">Aggiungi Prodotto</button>
    </form>
  );
};

export default ProductForm;
