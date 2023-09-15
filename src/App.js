import "./App.css";
import ButtonAppBar from "./components/AppBar.jsx";
import { CenteredText } from "./components/CenteredText";
import { TextWithImage } from "./components/TextWithImage";
import {IconsTools} from "./components/IconsTools"
import { FormularioContacto } from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      {/* <ButtonAppBar /> */}
      <CenteredText />
      <TextWithImage TextToTheRight={false} />
      <TextWithImage TextToTheRight={true} />
      <IconsTools />
      <FormularioContacto />
    </div>
  );
}

export default App;

