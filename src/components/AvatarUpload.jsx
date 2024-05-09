import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateAvatarUrl } from "../redux/actions/index";

function AvatarUpload() {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log("File selected:", event.target.files[0]);
  };

  const onFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/upload-avatar",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Upload response:", response.data);
      dispatch(updateAvatarUrl(response.data.fileDownloadUri));
      alert("Avatar updated successfully!");
    } catch (error) {
      console.error("Error uploading file: ", error);
      console.log("Error details:", error.response.data);
      alert("Error uploading file");
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
