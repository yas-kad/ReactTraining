import React, { Component } from 'react'
import SocialItems from './SocialItems'
import fa from './facebook.png'
import you from './youtube.png'
import ins from './instagram.png'

class Social
 extends Component {
  render() {
    return (
      <div>

        <SocialItems
          p = {{
            type: "Facebook",
            id  : "facebook",
            img : fa
          }}
        />
        <SocialItems
          p = {{
            type: "Youtube",
            id  : "youtube",
            img : you
          }}
        />
        <SocialItems
          p = {{
            type: "Instagram",
            id  : "instagram",
            img : ins
          }}
          />
          {/* <ul className='list-group'>
                <li className='list-group-item'>
                    <input type={"checkbox"} id="facebook"/>
                    <label for="facebook">Facebook</label>
                </li>
                <li className='list-group-item'>
                    <input type={"checkbox"} id="youtube"/>
                    <label for="youtube">Youtube</label>
                </li>
                <li className='list-group-item'>
                  <input type={"checkbox"} id="instagram"/>
                    <label for="instagram">Instagram</label>
                </li>
            </ul> */}
      </div>
    )
  }
}

export default Social;
