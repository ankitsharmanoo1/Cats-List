import { Component } from "react"
import './search-box.style.css';


class SearchBox extends Component{
    render(){
        return(

            <input
               //className = 'Search'
             type="search" 
             placeholder={this.props.placeholder}
             className={`search-box ${this.props.className}`} 
             onChange={this.props.onChangeHandler}/> 
        )
    }
}

export default SearchBox