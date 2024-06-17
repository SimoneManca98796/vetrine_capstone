import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateAvatarUrl } from "../redux/actions/index";

function AvatarUpload() {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  // Gestisce il cambio di stato quando un file viene selezionato
  const onFileChange = (event) => {
    event.stopPropagation(); // Previene la propagazione dell'evento (utile se l'input è dentro a elementi cliccabili)
    setFile(event.target.files[0]); // Imposta il file selezionato nello stato locale
    console.log("File selezionato:", event.target.files[0]);
  };

  // Funzione asincrona per caricare il file al server
  const onFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", file); // Aggiunge il file a formData per il POST
    console.log("Invio file al server...");

    try {
      const response = await axios.post(
        "https://vetrine-agricole-6d661b03a449.herokuapp.com/api/users/upload-avatar",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Inserisce il token di autenticazione nell'header
          },
        }
      );

      // Controlla se la risposta include un URI e aggiorna lo stato dell'avatar
      if (response.data.uri) {
        console.log("Dispatching new avatar URL:", response.data.uri);
        dispatch(updateAvatarUrl(response.data.uri)); // Aggiorna l'URL dell'avatar nello stato globale
        alert("Avatar updated successfully!");
      } else {
        throw new Error("No URI returned from server"); // Gestisce il caso in cui l'URI non sia presente nella risposta
      }
    } catch (error) {
      console.error("Error uploading file: ", error);
      alert("Error uploading file: " + (error.response?.data || error.message)); // Mostra un messaggio d'errore basato sulla risposta del server o un errore generico
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload!</button>
    </div>
  );
}

export default AvatarUpload;
