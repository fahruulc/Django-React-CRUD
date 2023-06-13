import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [note, setNote] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/notes/${id}`);
      setNote(response.data.note);
      setCreatedAt(response.data.createdAt);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Note Detail</h1>
      <p>Note : {note}</p>
      <p>created At : {createdAt}</p>
      <Link to={`/`}>Back</Link>
    </div>
  );
};

export default Detail;
