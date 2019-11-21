import React from 'react';
import Clock from './clock';
import Tabs from './tabs';


const Root = () => {
  let tabs = [{ title: 'NinjaTurtls', content: 'Throwback' }, { title: 'Legos', content: 'Never out of style'}, { title: 'App Academy', content: 'changes lives ;)'}]; 

  return (
    <div>
      I am Groot!
      <div className="container">
        <Clock />
        <Tabs tabs={ tabs }/>
      </div>
    </div>
  ); 
}


export default Root; 