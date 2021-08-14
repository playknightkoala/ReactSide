import "../css/App.css";
import PropTest from "../components/PropsTest";
import ComponentsTest from "../components/ComponentsTest";

const redColor = { color: "red" };

const helloWorld = (key) => {
  return (
    <h1 key={key} style={redColor}>
      Hellow World
    </h1>
  );
};

const button = () => {
  return (
    <button value={true} onClick={getButtonValue}>
      點一下
    </button>
  );
};

const getButtonValue = (event) => {
  console.log(event.target.value);
};

const changeText = () => {
  document.getElementById("clickTestDiv").innerHTML = "點擊了我";
}

function App() {
  const helloList = [];
  for (let i = 0; i < 5; i++) {
    helloList.push(helloWorld(i));
  }
  return (
    <div>
      {helloList}
      {button()}
      <PropTest name="我是props" handleClick={changeText}></PropTest>
      <ComponentsTest></ComponentsTest>
      <div id="clickTestDiv"></div>
    </div>
  );
}

export default App;
