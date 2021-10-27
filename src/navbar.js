import React, { Component } from 'react'

export default class navbar extends Component {
    render ( ) {
        const {Icon} = this.props;
        return (
            <div>
      <div className='popka'>

       <Icon className= 'icon'/>
       <h1 className='title'>{this.props.title}</h1>
      </div>            
           </div>
        )
    }
}