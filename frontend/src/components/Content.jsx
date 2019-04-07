import React, { Component } from 'react'
import Quote from "./Quote"

export class Content extends Component {
  render() {
    return (
      <div className = "w-75 mx-auto">
      {
         this.props.quotes.map((quote, i) => 
            <Quote 
               title={quote["title"]} 
               text={quote["text"]} 
               author={quote["author"]}
               handleDelete={this.props.handleDelete}
               quotePosition={i} 
               key={quote._id} 
               index={quote._id}
            />)  
      } 
   </div>
    )
  }
}

export default Content;