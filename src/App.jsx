import {BrowserRouter} from "react-router-dom";
import {Rotas} from "./routes/routes.jsx";
import {Toaster} from "react-hot-toast";
import {Provider} from "../providers/index.js";

function App (){

  return (
    <>
      <div>
          <BrowserRouter>
              <Provider>
                  <Toaster/>
                  <Rotas/>
              </Provider>
          </BrowserRouter>
      </div>
    </>
  )
}

export default App