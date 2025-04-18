import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Outlet/>
      <h1>Veja Seu Perfil</h1>

      

      {/* <form>
        <label>
          <button>selectionar seu perfil</button>
        </label>
      </form> */}

    </div>
  );
}

export default App;
