import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
        
   constructor(props) {
      super(props);
        
      // Hide serach as default
      this.state = {
         searchVisible: false
      }
   }

   // Change search input visibility
   showSearch() {        
      this.setState({ searchVisible: !this.state.searchVisible });
   }

   // Get input
   updateSearch = (e) => 
   {
      const value = e.target.value;
      
      this.props.handleSearch(value);
   }


   render() {
      // Show search input if button was clicked
      let searchInputClasses = this.state.searchVisible ? "form-control" : "form-control invisible";

      return (
         
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
               <a className="navbar-brand h1 mb-0" href="/">QuotesDB</a>
           
               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                     <NavLink className="nav-item nav-link" to="/quotes">Quotes</NavLink>
                     <NavLink className="nav-item nav-link" to="/postQuote">Post quote</NavLink>
                  </div>
               </div>
               
               <div className="form-inline mb-0">
                  <input className={searchInputClasses} type="search" 
                     placeholder="Search"
                     onChange={this.updateSearch.bind(this)} />
                  <button className="btn btn-light ml-1" onClick={this.showSearch.bind(this)}>Search</button>
               </div>
            </nav>

      )
   }
}

export default Navbar;