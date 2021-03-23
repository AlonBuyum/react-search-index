// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { CardsHolder } from './components/cards-holder/cards-holder.component';
import { SearchField} from "./components/search-field/search-field.component";

class App extends Component {

  //ctor
  constructor() {
    super();
    // the state  properties
    this.state = {
      myMonsters: [],
      searchInput: ''
    }
  }

  // methods
  //* gets the data from the API and puts it inside the state property
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(resNames => this.setState(
        { myMonsters: resNames }
      ));
  }

  render() {
const {myMonsters, searchInput} = this.state;
const filteredSearch = myMonsters.filter(mon => {
  const monName = mon.name.toLowerCase();
  const inputName = searchInput.toLowerCase();
  return monName.includes(inputName);
})
    return (
      <div className="App">
        {
          //#region
          /* 
        <input type='search' placeholder='Enter Name' onChange={e => this.setState({ searchInput: e.target.value }, /**
         * setState can also receive two parameters. the second one being a callback to preform ⨽after⨼ the state has been reset
         in this case a console log of the state now that it is updated
         
          () => {
            console.log(this.state);
          }
        )} /> */
          //#endregion
        }
        <SearchField placeholder="Enter Name" onChangeHandler={(e) => this.setState({searchInput: e.target.value},/**
         * setState can also receive two parameters. the second one being a callback to preform ⨽after⨼ the state has been reset
         in this case a console log of the state now that it is updated
         */
              () => {
                console.log(this.state);
              }
            )}></SearchField>
      
        <CardsHolder monsters={filteredSearch} /*name="First"*/></CardsHolder>
      </div>
    );
  }
};

export default App;
