import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <h2>Meus primeiros componentes</h2>

      <FirstComponent/>

      <TemplateExpressions/>

      <Events/>
    </div>
  );
}

export default App;
