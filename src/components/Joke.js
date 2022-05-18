import React from "react";

const Joke = ({randomJoke, jokeImg}) => {
    return(<div><h2 className="ml7 mt7 f1 white">Chuck Norris</h2>
    <div className="tl bg-white br2 ml7 dib pa3 measure"> {randomJoke}
    </div>
    </div>
  );
    
}

export default Joke;