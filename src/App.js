import "./App.css";
import {RcrearUsuario} from "./routers/rUsuarios";
import {Rinicio } from "./routers/rinicio";
import {Rgestion} from "./routers/rGestion";




function App() {
  return (
    <div>
      <Rinicio/>
      <RcrearUsuario/>
      <Rgestion/>
    </div>
  );
}

export default App;
