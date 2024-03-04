import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [datas, setDatas] = useState("");
  const [sucess, setSucess] = useState("");

  function handleAddName() {
    axios
      .post("https://jsonplaceholder.typicode.com/users", { name })
      .then((res) => {
        console.log("add name:", res.data);
      })
      .catch((error) => {
        console.log("Error adding name:", error);
      });
    setDatas([...datas, { name: name }]);
    setName("");
  }
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setDatas(res.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Digikull Students</h1>
      </header>

      <main>
        <h4>Hello User</h4>
        <div className="search">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleAddName}>Add</button>
        </div>

        <div>{sucess}</div>

        {datas && (
          <div className="output">
            {datas.map((obj, index) => (
              <p key={index}>{obj.name}</p>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
