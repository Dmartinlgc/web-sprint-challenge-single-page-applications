import react from 'react'

function Form(props){
const {

}

}

return(
    <div>
        <Route path = '/pizza'>
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
           
            <label> Onions
                <input
                checked = 'checkbox'
                name = 'Onions'
                />
            </label>
           
            <label> Green Peppers
                <input
                checked = 'checkbox'
                name = 'Green Peppers'
                />
            </label>
            
            <label> Diced Tomatoes
                <input
                checked = 'checkbox'
                name = 'Diced Tomatoes'
                />
            </label>
            
            <label> Black Olives
                <input
                checked = 'checkbox'
                name = 'Black Olives'
                />
            </label>
            
            <label> Artichoke Hearts
                <input
                checked = 'checkbox'
                name = 'Artichoke Hearts'
                />
            </label>
            
            <label> Three Cheese
                <input
                checked = 'checkbox'
                name = 'Three Cheese'
                />
            </label>
            
            <label> Pineapple
                <input
                checked = 'checkbox'
                name = 'PineApple'
                />
            </label>
           
            <label> Three Cheese
                <input
                checked = 'checkbox'
                name = 'Three Cheese'
                />
             </label>
            
            <label> Extra cheese 
             <input
                checked = 'checkbox'
                name = 'Extra Cheese'
                />
            </label>
            
             <label> Gluten Free Crust (+$1.00) 
                <input
                checked = 'checkbox'
                name = 'Gluten Free'
                />
            </label>    
        </div>
        
        <label>Special instructions 
                <input
                value={''}
                type = 'text'
                name = 'name'
                onChange={onChange}
                />
            </label>
            <button onClick = {onSubmit} disabled = {disabled}>Add to Order</button>
         </Route>   
    </div>
)