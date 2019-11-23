import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather'
import AutoComplete from './autocomplete';

// create state, show/hide clock 
const Root = ({names}) => {
  let tabs = [
    { title: "Ninja Turtles", content: "Throwback" },
    { title: "Legos", content: "Never out of style" },
    { title: "AppAcademy", content: "Changes lives 🙌" }
  ]; 

  return (
    <div>
      <div className="container_1">
        <div className="container_h1"><h1>Widgets</h1></div>
        <div className="wigits_wrapper">
          <Clock />
          <Tabs tabs={ tabs }/>       
        </div>
        <div className="container_2">
          <Weather />
          <AutoComplete names={names} />
        </div>
      </div>
    </div>
  ); 
}


export default Root;  