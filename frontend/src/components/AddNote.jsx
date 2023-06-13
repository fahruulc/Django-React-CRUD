import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const AddNote = () => {
  const navigate = useNavigate();
  const [note, setNote] = useState("");

  const saveNote = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("note", note);
    try {
      await axios.post("http://127.0.0.1:8000/api/notes/", formData, {
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
      <form onSubmit={saveNote}>
        <input
          placeholder="note ..."
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit">Add Note</button>
      </form>
      <Link to={`/`}>Back</Link>
    </div>
  );
};

export default AddNote;
