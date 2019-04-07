import React, { Component } from 'react';

class Quote extends Component {

   delete() {
      this.props.handleDelete(this.props.index);
   }

   render() {
      let quotePosition = this.props.quotePosition % 2 ? "float-left" : "float-right";


      return (
         <div className={`card border-secondary w-75 mt-3 text-left ${quotePosition}`}>
            
            <div className="card-header">
               {this.props.title}
               <button type="button" onClick={this.delete.bind(this)} 
                  className="btn btn-sm btn-light text-danger float-right">
                  Delete
               </button>
            </div>
         
            <div className="card-body">
            <blockquote className="blockquote mb-0">
               <p>{this.props.text}</p>
               <footer className="blockquote-footer text-success">{this.props.author}</footer>
            </blockquote>
            </div>
         </div>
      )
   }
}

export default Quote;