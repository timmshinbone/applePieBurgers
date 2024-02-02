// this component will loop over the ingredients received as a prop from the parent component(BurgerStacker)
// each iteration of the loop will display one clickable component
// this clickable item will be rendered by another component, called Ingredient

import Ingredient from './Ingredient'

const IngList = (props) => {

    // I can use destructuring syntax to isolate anything I'm bringing in from props
    const { ingredients } = props
    // console.log('the props in ing list', ingredients)
    
    let allIngs = ingredients.map((ing, i) => (
        // this map will immediately return one item per loop iteration
        <li key={i}>
            <Ingredient 
                ingredient={ing}
                clickFunc={props.add}
                itemKey={i}
            />
        </li>
    ))

    return (
        <section className='pane'>
            <h3>Ingredient List</h3>
            <ul>
                { allIngs }
            </ul>
        </section>
    )
}

export default IngList