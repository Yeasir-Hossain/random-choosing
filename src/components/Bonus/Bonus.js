import React from 'react';
import './Bonus.css'

const Bonus = () => {
    return (
        <div className='bonus'>
            <h1>Bonus Part</h1>
            <h3>How react works?</h3>
            <p>React is a Javascript library. It is declarative, efficient and flexible for building UI. The things we want in our website
                we use components to tell that to react. It maintains a virtual DOM to detect the changes and then apply to the real DOM.
                React uses one way binding that is it bind the data from the component to the view (DOM) or from view to the component. 
            </p>
            <h3>How useState works?</h3>
            <p>It declares a “state variable”. UseState is a hook that allows us to have state variables in functional components. We pass 
               the initial state to this function. It returns a variable with the current state value and another function to update this 
               value. The useState hook allows us to declare only one state variable of any type at a time.
            </p>
        </div>
    );
};

export default Bonus;