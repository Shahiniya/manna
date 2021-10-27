import React, { Component } from 'react';
import './Menu.css';
export default class Menu extends Component {
    render ( ) {
        const {Img} = this.props;
        return (
            <div>
      <div className={'container activ e- ${this.props.active}'}>

       <Img className= 'img'/>
       <h1 className='title'>{this.props.title}</h1>
      </div>            
           </div>
        )
    }
}

