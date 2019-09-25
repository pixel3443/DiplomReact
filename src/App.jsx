import React from "react";

import { currencies } from './constants';
import InputComponent from './components/input';

class App extends React.Component {
  state = {
    list: [],
    value: 1
    };

  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://belarusbank.by/api/kursExchange?city=Минск';
      fetch(proxyUrl + targetUrl)
       .then(response => response.json())
       .then(list => {
          const data = Object.keys(list[0]);

          const array = currencies.map((currency) => {
              const key = data.find((item) => item.search(currency.id) !== -1);

              return {
                ...currency,
                coeff: list[167][key]
              }
          });


          this.setState({
            list: array
          });
          
         
      })
     
  }

  onValue(value){
    this.setState({
      value
    })
  }

  
  render() {
   
    const {
      list,
      value
    } = this.state;

    return (
        <div id='in'>
          <h3>Введите количество</h3>
          <input type="number" onChange={event => this.onValue(event.target.value)}/>
          
          <h3>Результат</h3>
          {
            list.map((props) => <InputComponent {...props} value={value}  />)
          }
               </div>
      
    );
  }
}

export default App;
