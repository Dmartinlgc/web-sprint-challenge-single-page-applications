import react from 'react'
import {Route, Link} from  'react-router-dom'
function Form(props){

// const onSubmit = evt => {
//     evt.preventDefault()
//     submit()
//   }
//   const onChange = event =>{
//     const {name, value, type, checked, } =event.target
//     const useThis = type === 'checkbox' ? checked:value
//     change(name, useThis)
//     console.log(values)

// }

 return(
    <div>
        <Route path = '/pizza'>
        <Link to = '/'/>
        <h2>build your own pizza </h2>
        <h1>Build Your Own Pizza</h1>
        
        <h2>Choice of Size</h2>
        <select id = 'size-dropdown'>
            <option value = 'Small'>Small</option>
            <option value = 'Medium'>Medium</option>
            <option value = 'Large'>Large</option>
        </select>
        <div>
            <h2>Choice Of Sauce</h2>
            <input type ='radio' value = 'original red' name = 'sauce' />Original Red
            <input type ='radio' value = 'Garlic Ranch' name = 'sauce' />Garlic Ranch
            <input type ='radio' value = 'BBQ sauce' name = 'sauce' />BBQ Sauce
            <input type ='radio' value = 'spinach alfredo' name = 'sauce' />Spinach Alfredo
        </div>
        <div>
            <h2>Add Toppings</h2>
            <label id = 'name-input'>Name
                <input
                value = {''}
                type = 'text'
                />
            </label>
            <label> Pepperoni
                <input
                checked = 'checkbox'
                name = 'Pepperoni'
                />
            </label>
           
            <label> Sausage
                <input
                checked = 'checkbox'
                name = 'Sausage'
                />
            </label>
           
            <label> Canadian Bacon
                <input
                checked = 'checkbox'
                name = 'Canadian Bacon'
                />
            </label>
           
            <label> Spicy Italian Sausage
                <input
                checked = 'checkbox'
                name = 'Spicy Italian Sausage'
                />
            </label>
           
            <label> Grilled Chicken
                <input
                checked = 'checkbox'
                name = 'Grilled Chicken'
                />
            </label>
              
        </div>
        
        <label id = 'special-text'>Special instructions 
                <input
                value={''}
                type = 'text'
                name = 'name'
                />
            </label>
            <button id = 'order-button '>Add to Order</button>
         </Route>   
    </div>
 )
}
 export default Form;