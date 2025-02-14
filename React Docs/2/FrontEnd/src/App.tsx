import "./App.css";
import { MyButton } from "./Components/MyButtonProps";

function App() {
  return (
    <>
      <div>
        <h1>Hello, I am Kritim</h1>
        <MyButton disabled={true} title="I am a button" />
      </div>
    </>
  );
}

export default App;
