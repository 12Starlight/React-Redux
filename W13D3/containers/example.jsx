// Container Component
import { connect } from 'react-redux';
import { resetItems } from '../../actions/items'; // action creator
import List from '../list'; // presentational component to connect

const mapStateToProps = (state) => ({ // map slice of state to props object
  items: state.items
});

const mapDispatchToProps = (dispatch) => ({
  resetItems: () => dispatch(resetItems());
});

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ListContainer; 


// Presentational Component
// List Component
// List receives props from ListContainer, deconstructed here as items and resetItems. 
// In List we pass as props individual items to item, delegating the responsibility
//  of rendering individual list items to that component. 
// components/list/list.jsx
import React from 'react';
import Item from 'components/list/item';

const List = ({ items, resetItems }) => {
  const listItems = items.map((item, idx) => (
    <Item key={idx} item={item} /> // Here we map through items and pass each item to 
                                   // the <Item item={item} /> component
  ))

  return(
    <div className='list'>
      <h1 onClick={ resetItems }>
        Click to Reset 
      </h1>  
      <ul>
        { listItems }
      </ul>
    </div>
  );
};

export default List; 


// Item Component
// Item receives as a prop a single item, rendering that item's name and body
// components/list/item.jsx
import React from 'react';

const Item = ({ item }) => (
  <div className='list-item'>
    <h3>{item.name}</h3>
    <span>{item.body}</span>
  </div>
);

export default Item; 
