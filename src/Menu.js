import React, { Component } from 'react';
import './Menu.css';
export default class Menu extends Component {
    render ( ) {
        const {Icon} = this.props;
        return (
            <div>
      <div className='container'>

       <Icon className= 'icon'/>
       <h1 className='title'>{this.props.title}</h1>
      </div>            
           </div>
        )
    }
}