import React, { useState } from 'react'
import IngList from './IngList'
import BurgerPane from './BurgerPane'

// First thing we do when converting from class components to function components, is identify what needs to be a state hook, and what doesnt.
// Helpful to run a find for 'setState' and identify everything that setState interacts with.
// in this app, it's JUST the burgerIngredients, not the original ingredients array.
// Then we need to analyze the differences in syntax between classes and functions.
// which means removing all references to 'this', 'this.state' etc.
// then, our render method will go away, and be replaced by a return from the function component
// look for props with a find, and if it's not there, no need to add props as a parameter

const BurgerStacker = () => {

    const ingredients = [
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
    ]
    // burger ingredients needs to be set up as a hook
    // burgerIngredients: []
    // we'll use useState to set up the hook, and give a starting value
    // the parts of the useState hook, for reference, are this
    // const [nameOfPieceOfState, updaterFunction] = useState(initialValue)
    const [burgerIngredients, setBurgerIngredients] = useState([])


    const addToStack = (e) => {

        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor

        console.log(`clicked ${ingName} and it is ${ingColor}`)
        // the old way of updating state with classes 
        // this.setState({
        //     burgerIngredients: [{ name: ingName, color: ingColor }, ...this.state.burgerIngredients]
        // })
        // instead, with function components, we use the updater function initialized by useState
        setBurgerIngredients(
            [{ name: ingName, color: ingColor }, ...burgerIngredients]
        )
    }

    const removeFromStack = (e) => {
        const clickIndex = e.target.id
        const currBurger = burgerIngredients.slice()
        currBurger.splice(clickIndex, 1)
        // the old way of setting state
        // this.setState({
        //     burgerIngredients: currBurger
        // })
        // we call our updater function, and use the same values as before
        setBurgerIngredients(currBurger)
    }

    const clearBurger = () => {
        // the old way
        // this.setState({
        //     burgerIngredients: [],
        // })
        // the new (functions) way
        setBurgerIngredients([])
    }

    // we will address render() differently than our other methods
    // we identify the opening and closing curlies for the render method
    // delete the closing curly, then delete the line with render() {
    // render () {

    // after that, we look through our return, and identify anything that needs to change
    // that means, references to 'this', references to 'state' and anything else we dont have anymore
    return (
        <>
            <h1>Burger Stacker</h1>
            <div className='panes'>
                <IngList 
                    ingredients={ingredients}
                    add={addToStack}
                />
                <BurgerPane 
                    ingredients={burgerIngredients}
                    clear={clearBurger}
                    remove={removeFromStack}
                />
            </div>
        </>
    )
}

export default BurgerStacker