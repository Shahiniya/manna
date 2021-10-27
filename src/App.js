import React, { Component } from "react";
import Menu from './Menu'
import {ReactComponent as img } from './icon/o.svg'
import icon from './icon/lavash.svg'

const sidebar=[
  {
    id: 1,
    
    Img: img,
    title: 'Main',

  },
  {
    id: 2,
    Img: img,
    title: 'About'

  },
  {
    id: 3,
    Img : img,
    title: 'Setting'

  },
  {
    id: 4,
    Img: img,
    title: 'Contact'

  },
  {
    id: 5,
    Img: img,
    title: 'Test'

  },

]
export default class App extends Component {
  state = {
    active: 0,
  }
  
  render() {
    return ( <div>
       {
         sidebar.map(({id,Img,title}) => (
         <div onclick = {() => this.setState ({active: id})}>
         <Menu 
         active={this.state.active === id}
         key={id} Img ={Img} title={title} />

        </div>
         ))}
       </div>);
  }
};


// const list=[
//   {
//     id: 6,
//     icon: '',
//     nomi: 'Lavash' ,
//     narxi: 18000 ,
//     description: 'kichkina',

//   },
//   {
//     id: 6,
//     icon: '',
//     nomi: 'Lavash' ,
//     narxi: 18000 ,
//     description: 'kichkina',
//   },
//    {
//     id: 6,
//     icon: '',
//     nomi: 'Lavash' ,
//     narxi: 18000 ,
//     description: 'kichkina',
//   },

// ]
       
// export default class Xon extends Component {
//   render() {
//     return ( <div>
//        {
//          list.map(({id,Icon,title}) => (
//          <Menu key={id} Icon ={Icon} title={title} />

        
//          ))}
//        </div>);
//   }
// };
     
       
      // <Menu icon='' title='Main'/> 
      //  <Menu icon='' title='About'/>
      //  <Menu icon='' title='Setting'/>
      //  <Menu icon='' title='Contsct'/>
      //  <Menu icon='' title='Test'/> 
      
        
