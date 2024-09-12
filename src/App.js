import React from 'react';
import axios from 'axios';

import './App.css';
class App extends React.Component {
    state={advice:' ' };

    componentDidMount(){
        this.fetchadvice();  // fetch advice on mounting

        
    }
    fetchadvice=()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            const { advice } = response.data.slip;
        this.setState({advice });  // update state with fetched advice  // using arrow function for 'this' binding

        })
        .catch((error)=>{
            console.log(error);

        });
    }
    render(){
        const { advice } = this.state;  // destructuring state to get advice
        return(
           <div className="app">
            <div className="card">
               
             <h1 className="heading">{advice}</h1>
             <button className="button" onClick={this.fetchadvice}>
                <span> GIVE ME ADVICE</span>
             </button>
            </div>
           </div>
        )
    }
}
export default App;