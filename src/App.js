import React from "react";
import {Route, Link} from  'react-router-dom'

const App = () => {
  return (
    <div>
      <Route exact path = '/'/>
      <h1>Lambda Eats</h1>
      <nav>
      <button>Order pizza</button> 
      </nav>
      <Link to = {'/pizza'}>order pizza </Link>
      <p>You can remove this code and create your own header</p>
      
      
    </div>
  );
};
export default App;
