import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div>
        <h1>Busque por usuario</h1>
        <p>Busque Por Um Perfil</p>
        <div>
            <input type="text" placeholder="digite o nome do usuario"></input>
            <button>
                <BsSearch/>
            </button>
        </div>
    </div>

  )
};

export default Search;
