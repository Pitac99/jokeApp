import React, {Component} from 'react';
import './App.css';
import Joke from './components/Joke';



class App extends Component {
    constructor() {
        super();
        this.state = {
          jokes: [],
        }
      }

componentDidMount(){
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
   .then(info => this.setState({jokes:info}))
   console.log('prima-incarcare')
}

render()
{ const finalJoke = this.state.jokes.value;
  const handleClick = () =>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(users => this.setState({jokes:users}))
    console.log('click')
  }
return (
  
    <div>
      <Joke randomJoke={finalJoke}/>
      <button onClick={handleClick} className="garamond f4 br2 ph3 pv2 dib mb2 white bg-black b ml7 mt3">
       Random Joke
       </button>
    </div>
  );
}}

export default App;
