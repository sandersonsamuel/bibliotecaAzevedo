import {BrowserRouter} from "react-router-dom";
import {Rotas} from "./routes/routes.jsx";

function App (){

  return (
    <>
      <div>
          <BrowserRouter>
              <Rotas/>
          </BrowserRouter>
      </div>
    </>
  )
}

export default App