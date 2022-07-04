import {useState, useEffect} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo == ""){
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text"
               placeholder="Write yout to do..."
               onChange={onChange}
               value={toDo}/>
        <button>Add to do</button>
      </form>
      <hr />
      {toDos.map((item, index) => <li key={index}>{item}</li>)}
    </div>
  )
}

export default App;
