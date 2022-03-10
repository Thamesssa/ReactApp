import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class  App extends Component {
  render() { 
    return(
    <div className="App">
      <Navbar dark color = "primary">
        <div>
          <NavbarBrand href="/">Resturant Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
    }
}

export default App;
