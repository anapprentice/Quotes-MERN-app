import React, { Component } from 'react'

export class PostForm extends Component {
   constructor(props){
      super(props);
      
      this.state = {
         title: "",
         author: "",
         text: ""
      };
   }

   handleChange(e){
      this.setState({ [e.target.id]: e.target.value });
   }

   handleSubmit(e){
      e.preventDefault();

      this.props.handleFormSubmit(this.state);
      e.target.reset();
   }
   
   render() {
   return (
      <form className="w-50 mx-auto mt-5 vertical-center" onSubmit={(e) => this.handleSubmit(e)}>
         <div class="form-row">
            <div className="form-group col-md-6">
               <input type="text" className="form-control" id="title" placeholder="Title" onChange={(e) => this.handleChange(e)}/>
            </div>
            <div className="form-group col-md-6">
               <input type="text" className="form-control" id="author" placeholder="Author" onChange={(e) => this.handleChange(e)}/>
            </div>
         </div>
         
         <div className="form-group">
            <input type="text" className="form-control" id="text" placeholder="Text" onChange={(e) => this.handleChange(e)}/>
         </div>

         <button type="submit" className="btn btn-secondary">Post a Quote</button>
      </form>
    )
  }
}

export default PostForm;