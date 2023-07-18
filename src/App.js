import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [displayData, setDisplayData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || id === "") {
      alert("Please fill in all fields.");
      return;
    }
    const allData = { name, email, id };
    setDisplayData([...displayData, allData]);
    setName("");
    setEmail("");
    setId("");
  };

  return (
    <>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <h1>Simple Form</h1>
          <div className="form">
            <div>
              <label>Name</label>
              <input
                type="text"
                name="username"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label>Id</label>

              <input
                type="text"
                name="id"
                placeholder="Enter Your Id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <br />
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <h2>Your Form Data</h2>
      <div className="display">
        <ol>
          {displayData.map((data, index) => (
            <li key={index}>
              Name: {data.name}
              <br />
              Email: {data.email}
              <br />
              ID: {data.id}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
