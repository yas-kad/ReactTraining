import React, { Component } from 'react'
import fac from '../components/facebook.png'
import yout from '../components/youtube.png'
import inst from '../components/instagram.png'
import CardSocialitems from './CardSocialitems'

export default class Carditems extends Component {
  render() {
    return (
      <div className='col col-md-4 col-sm-6'>
          <div className='card'>
              <div className='card-header'>
                <img className='cardimg rounded-circle' src={this.props.profileImg} alt=''/>
              </div>
              <div className='card-body'>
                  <h2 className='card-title'>{this.props.title}</h2>
                  <h4><i>{this.props.name}</i></h4>
                  <p> {this.props.tel ? "Tel:" : "" } {this.props.tel}</p>
                  <p> {this.props.email ? "Email:" : "" } {this.props.email}</p>
                  <p> {this.props.web ? "WebSite:" : "" } <a href={this.props.name}>{this.props.web}</a></p>
                  <div className='listsocial '>
                    <CardSocialitems p = {{
                        img: fac,
                        text: "https://www.facebook.com/",
                    }} />
                    <CardSocialitems p = {{
                        img: yout,
                        text: "https://www.youtube.com/"
                    }} />
                    <CardSocialitems p = {{
                        img: inst,
                        text: "https://www.instagram.com/",
                    }} />
                  </div>
              </div>
        </div>
      </div>
    )
  }
}
