import React, { Component } from 'react'

export default class CardSocialitems extends Component {
  render() {
    return (
        <div className='listcard'>
            <a href={this.props.p.text}><img src={this.props.p.img} className='fb-icon' alt='' /></a>
         </div>
    )
  }
}
