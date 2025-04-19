import { userProps } from "../Types/user"
import Search from "../Components/Search";
import { useState } from "react";



const Home = () => {
    const[user, setUser] = useState<userProps | null>(null);


    const loadUser = async(userName: string) => {

        const res = await fetch(`https://api.github.com/users/${userName}`);

        const data = await res.json();


   
    };

    return (
    <div>
        <Search loadUser={loadUser}/>
    </div>
    );
};

export default Home;