import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

    return(
      <>
      <div className="container-pesquisa">
        <div className="inputbox">
          <input type="text" placeholder="Nome do usuário" onBlur={(e) => setNomeUsuario(e.target.value)} />
          <i></i>
        </div>
          <button> <span>Buscar</span></button>
      </div>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
      </>
    )
}

export default App