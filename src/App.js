import {useState, useEffect} from "react";

function Hello() {
  function byeFn() {
    console.log("bye :(")
  }
  function hiFn() {
    console.log("created :)");
    return byeFn; //when destroy component invoke return function: cleanup function
  }
  useEffect(hiFn, [])
  return <h1>
    Hello!
  </h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello/> : null}
    </div>
  )
}

export default App;
