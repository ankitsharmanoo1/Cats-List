import  { Component } from 'react'
import Card from '../card/card.component'
import './card-list.style.css'

class CardList extends Component{
    render()
    {
        const { monsters } = this.props

        return (
               <div className='card-list'>
                {monsters.map((monsters)=>
                {
                    return <Card monsters={monsters}/>
                                  
                }
                )}
               </div>
            
            )

            }} 

             

export default CardList