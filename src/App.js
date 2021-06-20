import React from "react";
import {Route, Link} from  'react-router-dom'
import Form from './Form'



const App = () => {

  return (
    <div>
      <header> 
        <nav>
          <h1>Lambda Eats</h1>
          <Link to = '/'>Home</Link>
        </nav>
         <Route exact path = '/'/>
       </header>
       <Link to = '/pizza'>order pizza </Link>
       <Route path = '/pizza' component={Form}/>
      <p> You can remove this code and create your own header</p>
      
      
    </div>
  );
};
export default App;
