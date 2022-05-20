import React from "react";

const Joke = ({randomJoke, jokeImg}) => {
    return(<div>
    <div className="tc bg-white br2 dib pa3 measure"> {randomJoke}
    </div>
    </div>
  );
    
}

export default Joke;