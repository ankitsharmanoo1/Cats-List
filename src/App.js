import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css'
class App extends Component
{
    constructor()
    {
      super();
      this.state = {
        
        monsters:[],
        searchField:''
      };
      // console.log('Constructor is Start');
    }    


    componentDidMount(){
 
    //  console.log('Component did mount is starting');
      fetch('https://jsonplaceholder.typicode.com/users')
     .then((response) =>response.json())
     .then((users) => 
        this.setState(
          ()=>{
            return {monsters: users};
           },
          // ()=>{
          //   console.log(this.state);
          // }
        )
     )

    }
     
     onSearchChange = (event) =>{
      const searchField = event.target.value.toLocaleLowerCase();
           this.setState(()=>{
            return { searchField}
           })
     }


  render(){
    // console.log('render from app js');
    const filteredMonsters = this.state.monsters.filter((monsters)=>{
      return monsters.name.toLocaleLowerCase().includes(this.state.searchField);
    });


return(<div className="App">
         <h1 className="app-title">Cats List</h1>                
       <SearchBox onChangeHandler={this.onSearchChange}
         placeholder = 'Search monsters'
         className = 'search-box'
       />   

          <CardList monsters={filteredMonsters}/>
     </div>
    )
  }
}
export default App;