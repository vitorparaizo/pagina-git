type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
}

import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({loadUser} : SearchProps) => {

    const [userName, setUserName] = useState("");
  return (
    <div>
        <h1>Busque por usuario</h1>
        <p>Busque Por Um Perfil</p>
        <div>
            <input type="text" 
            placeholder="digite o nome do usuario"
            onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={() => loadUser(userName)}>
                <BsSearch/>
            </button>
        </div>
    </div>

  )
};

export default Search;
