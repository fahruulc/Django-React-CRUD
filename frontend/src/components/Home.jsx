import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/notes");
      setNotes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const noteDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/notes/${id}`);
      fetchData(); // Memuat ulang data setelah penghapusan berhasil
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section>
      <h1>Notes</h1>
      <Link to={`/add-note/`}>Add Note</Link>
      {notes.map((note) => (
        <div key={note.id}>
          <p>Note : {note.note}</p>
          <p>Created At : {note.createdAt}</p>
          <p>Aksi : </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button onClick={() => noteDelete(note.id)}>Delete</button>
            <Link to={`/update/${note.id}`}>Update</Link>
            <Link to={`/detail/${note.id}`}>Detail</Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Home;
