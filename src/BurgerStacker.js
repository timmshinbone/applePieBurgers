import React, { Component } from 'react'
import IngList from './IngList'
import BurgerPane from './BurgerPane'

// class components are a little different than function components
// they use class style conventions (properties, and methods)
// we have to do things using class style syntaxes(as opposed to function syntax)
// we'll have a bunch of key:value pairs and methods
// state in a class component is held within an object.

// to use a class, we have to extend the component class that we bring in from react.
export default class BurgerStacker extends Component {
    // if you want to hold state in a class component, you use an object.
    // from there, we can update our state with a function called, setState
    // another feature of class components, is the keyword 'this'
    // we need to use this when referring to builtin functions, properties, and methods.
    state = {
        // my main list of potential ingredients
        // both these pieces of state will be passed down to child components
        ingredients: [
            {name: 'Kaiser Bun', color: 'saddlebrown'},
            {name: 'Sesame Bun', color: 'sandybrown'},
            {name: 'Gluten Free Bun', color: 'peru'},
            {name: 'Lettuce Wrap', color: 'olivedrab'},
            {name: 'Beef Patty', color: '#3F250B'},
            {name: 'Soy Patty', color: '#3F250B'},
            {name: 'Black Bean Patty', color: '#3F250B'},
            {name: 'Chicken Patty', color: 'burlywood'},
            {name: 'Lettuce', color: 'lawngreen'},
            {name: 'Tomato', color: 'tomato'},
            {name: 'Bacon', color: 'maroon'},
            {name: 'Onion', color: 'lightyellow'},
            {name: 'Cheese', color: 'gold'}
        ],
        // going to be the ingredients on the burger that I'm stacking
        burgerIngredients: []
    }

    // this area will hold our state manipulating functions.
    // we will pass these functions as props to the correct components to make this app work the way we want it to.
    addToStack = (e) => {
        // this method targets the properties of an ingredient
        // those properties change based on which one is clicked
        // we use those to build an object that resembles the original ingredient -> {name: 'something', color: 'some color' }
        // then, we will add that object to the burgerIngredients array
        // and bc we pass that array to BurgerPane, it will be looped over and render an Ingredient component for each item in the array
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor

        console.log(`clicked ${ingName} and it is ${ingColor}`)
        // class components use a special method to update their state
        // This method is called 'setState'
        // setState is expecting an object, and within that object, we can refer to an individual piece of state to update
        this.setState({
            burgerIngredients: [{ name: ingName, color: ingColor }, ...this.state.burgerIngredients]
        })
    }

    // there is one thing that all class components need to do
    // they need to call the render method. Just like all function components need to return something. 
    render () {
        // whatever we return from the render method is the jsx we see on the page
        return (
            <>
                <h1>Burger Stacker</h1>
                <div className='panes'>
                    <IngList 
                        ingredients={this.state.ingredients}
                        add={this.addToStack}
                    />
                    <BurgerPane 
                        ingredients={this.state.burgerIngredients}
                    />
                </div>
            </>
        )
    }
}