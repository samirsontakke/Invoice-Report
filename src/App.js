import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar,NavbarBrand } from 'reactstrap';
import Invoice from './components/InvoiceComponent';
import './App.css';
import client from './shared/client';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              All Invoices
            </NavbarBrand>
          </div>
        </Navbar>
        { <Invoice/> }   
      </div>
    );
  }
}

export default App;
