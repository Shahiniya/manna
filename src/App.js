import React, { Component } from "react";
import Menu from './Menu'
// import {ReactComponent as logo192} from './icons/logo192.svg'

const sidebar=[
  {
    id: 1,
    // icon: ,
    title: 'Main'

  },
  {
    id: 2,
    icon: personalbar,
    title: 'About'

  },
  {
    id: 3,
    icon: personalbar,
    title: 'Setting'

  },
  {
    id: 4,
    icon: personalbar,
    title: 'Contact'

  },
  {
    id: 5,
    icon: personalbar,
    title: 'Test'

  },
  
]
export default class App extends Component {
  render() {
    return ( <div>
       {
         sidebar.map(({id,icon,title}) => (
         <Menu key={id} Icon ={icon} title={title} />
         ))}
       </div>);
  }
};
       
       
       
      // <Menu icon='' title='Main'/> 
      //  <Menu icon='' title='About'/>
      //  <Menu icon='' title='Setting'/>
      //  <Menu icon='' title='Contsct'/>
      //  <Menu icon='' title='Test'/> 
      
        
