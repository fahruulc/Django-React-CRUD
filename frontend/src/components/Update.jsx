import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/notes/${id}/`
      );
      setNote(response.data.note);
      setCreatedAt(response.data.createdAt);
    } catch (error) {
      console.log(error);
    }
  };

  const updateHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("note", note);
    try {
      await axios.put(`http://127.0.0.1:8000/api/notes/${id}/`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Update Note</h1>
      <form onSubmit={updateHandle}>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <p>Created At : {createdAt}</p>
        <button type="submit">Update</button>
      </form>
      <Link to={`/`}>Back</Link>
    </div>
  );
};

export default Update;
