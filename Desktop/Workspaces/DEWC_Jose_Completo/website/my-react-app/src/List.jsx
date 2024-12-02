import PropTypes from "prop-types";

function List(props) {

    const category = props.category;
    const itemList = props.items;
    
    // Muestra todos los elementos de la lista
    const listItems = itemList.map(item =>  <li key={item.id}>

                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b>

                                            </li> );

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-item">{listItems}</ol>
        </>
  
    );
};

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
                                    name: PropTypes.string,
                                    calories: PropTypes.number})),
};

List.defaultProps = {
    category: "Unknown",
    items: [],
};

export default List;

/*
  const fruits = [{id: 1, name : "apples", calories: 95}, 
    {id: 2, name : "orange", calories: 45}, 
    {id: 3, name : "banana", calories: 105}, 
    {id: 4, name : "coconut", calories: 159}, 
    {id: 5, name : "pinaple", calories: 37}];
                
  const vegetables = [{id: 6, name : "potatoes", calories: 110}, 
    {id: 7, name : "celery", calories: 15}, 
    {id: 8, name : "carrots", calories: 25}, 
    {id: 9, name : "corn", calories: 63}, 
    {id: 10, name : "broccoli", calories: 50}];
*/