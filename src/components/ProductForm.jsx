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
    formData.append("name", name);
    formData.append("description", description); // Aggiungi description al formData
    formData.append("price", price); // Aggiungi price al formData

    try {
      const uploadResponse = await axios.post(
        `http://localhost:8080/api/products/categoryName/${category}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const productData = uploadResponse.data;

      dispatch(createProduct(productData));
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
