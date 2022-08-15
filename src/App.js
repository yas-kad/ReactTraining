import React from "react";
import Header from "./components/Header";
import Text from "./components/Text";
import Social from "./components/Social";
import Users from "./users/Users"
import Events from "./Events/Events";
import Calcul from "./calcul/Calcul";
import Home from "./components/Home";

const App = () => {
    return(
        <div className="container">

            {/* <Calcul /> */}    {/* calcul two numbers */}

            <Header  />
            {/* <Text />
            <Social /> */}
            {/* <Users /> */}
            {/* <Events /> */}   {/* setState */}
        </div>
    )
}

export default App;
