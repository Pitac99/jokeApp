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
    <div className='vh-100 dt w-100'>
      <div className="dtc v-mid tc ph3 ph4-l">
    <h1 className="f1 white">Chuck Norris</h1>
      <Joke randomJoke={finalJoke}/>
      <button onClick={handleClick} className="garamond f4 br2 ph3 pv2 dib mb2 white bg-black b mt4">
       Random Joke
       </button>
    </div>
    </div>
  );
}}

export default App;
