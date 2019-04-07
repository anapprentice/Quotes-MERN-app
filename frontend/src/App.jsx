import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import axios from 'axios';

import Content from "./components/Content"
import PostForm from './components/PostForm';

class App extends Component {

   constructor(props) {
      super(props);

      this.state = {
         quotes: [],
         filteredQuotes: []
      }
   }

   componentDidMount(){
      axios.get(`http://localhost:4000/quotes`)
      .then(res => {
         this.setState({quotes: res.data, filteredQuotes: res.data});
      });
   }

   handleFormSubmit = quoteData => {
      axios.post(`http://localhost:4000/quotes/add`, { 
         title: quoteData.title, text: quoteData.text, author: quoteData.author })
      .then(res => { 
         axios.get(`http://localhost:4000/quotes`)
         .then(res => {
            this.setState({quotes: res.data, filteredQuotes: res.data});
         });
       });
   }

   handleDelete = quoteId => {
      axios.get(`http://localhost:4000/quotes/delete/${quoteId}`)
      .then(res => { 

         axios.get(`http://localhost:4000/quotes`)
         .then(res => {
            this.setState({quotes: res.data, filteredQuotes: res.data});
         
         });
      });
   }

   handleSearch = searchQuery => {
      console.log(searchQuery);

      if (searchQuery === ""){
         this.setState({ filteredQuotes: this.state.quotes });
      }
      else{
         const { quotes } = this.state;
         const filteredQuotes = quotes.filter(quote => quote["text"].includes(searchQuery));
         this.setState({ filteredQuotes });
      }
   }
   
   render() {
           
      return (
         <div className="App mx-auto">
            <Navbar handleSearch={this.handleSearch} />

            <Switch>
               <Route 
                  path="/postQuote"
                  render={ () => 
                     <PostForm
                        handleFormSubmit = {this.handleFormSubmit}
                     />
                  }     
               />

               <Route 
                  path="/quotes" 
                  render= { () => 
                     <Content 
                        quotes = {this.state.filteredQuotes} 
                        handleDelete = {this.handleDelete}         
                     />
                  }
               />
            </Switch>
      </div>
      );
   }
}

export default App;