
import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.scss';

class App extends Component {
  state = {
    frase: "",
    autor: ""
  };
  constructor(){
    super();
    
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

     this.callApi()
       .then(res =>this.setState({ frase: res.frases[this.getRandomInt(0,15)],
                                    autor: res.autor   }))
       .catch(err => console.log(err));
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  callApi = async () => {
    const response = await fetch('/frases');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    //console.log(body.autor)
    //console.log(body.frases)
    return body;
  };

  handleClick()
  {
    this.callApi()
    .then(
        res => {
          this.setState({ frase: res.frases[this.getRandomInt(0,15)],
            autor: res.autor   })
        }
    )
    .catch(err => console.log(err));
    
  }
  render() {
    let twitter = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=';
    return (
      <div id="wrapper">
        {/* <a href="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js">link</a> */}
        <div id="quote-box"  className="card">
            <div className="card-header">
              Inspiração do dia:
            </div>
            <div className="card-body">
              <blockquote id= "quote-box" className="blockquote mb-0">
                <p id="text">{this.state.frase}</p>
                <footer id="author" className="blockquote-footer">{this.state.autor}-<cite title="Source Title"> Chaves </cite></footer>
                <div className="button-links">
                  <button id="new-quote" type="button" className="btn btn-primary" onClick={this.handleClick}>Nova Citação</button>
                  <a
                    href=  {twitter.concat('"' + this.state.frase + '" ' + this.state.autor)}
                    className="button"
                    id="tweet-quote"
                    title="Tweet this quote!"
                    target="_top"
                  >
                  <i className="fa fa-twitter fa-2x"></i>
                  </a>
                </div>
              </blockquote>
                
              
            </div>
        </div>

      </div>
    );
  }
}



export default App;