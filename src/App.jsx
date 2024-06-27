import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [mostrarTextoInicial, setMostrarTextoInicial] = useState(true);
  const [erro, setErro] = useState(null);

  const controlaBuscarClique = () => {
    if (nomeUsuario.length <4 ) {
      setErro('O nome de usuário deve ter pelo menos 4 caracteres.')
      setMostrarTextoInicial(false);
    } else {
      setErro(null);
      setMostrarTextoInicial(false);
    }
  }

    return(
      <>
      {mostrarTextoInicial && (
              <div className="texto-inicial">
              <p>
                    ENCONTRE REPOSITÓRIOS DIGITANDO O NOME DO USUÁRIO GITHUB
              </p>
          </div>
      )}
      <div className="container-pesquisa">
        <div className="inputbox">
          <input type="text" placeholder="Nome do usuário" onBlur={(e) => setNomeUsuario(e.target.value)} />
          <i></i>
        </div>
          <button onClick={controlaBuscarClique}> <span>Buscar</span></button>
      </div>
      <div className="erro-msg">
          {erro && <p className="erro-message">{erro}</p>}
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