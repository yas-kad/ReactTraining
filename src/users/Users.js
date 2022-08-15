import React, { Component } from 'react'
import Carditems from "./CardItems"
import UsersData from "./UsersData"

// const Users = () => {

//     const pr =[
//       {id:1, profileImg:img1, title:"Front-end Developer", name:"Yassin Ait Kaddour",tel: "0696150265", email: "yait.kad@gmail.com", web: "www.yaskad.com"},
//       {id:2, profileImg:img2, title:"Back-end Developer", name:"Youssef Belmokhtar", tel: "0623659966", email: "ybelmokh@gmail.com", web: "www.belmo.com"},
//       {id:3, profileImg:img3, title:"Full-Stack Developer", name:"Bounyane Abderrahim", tel: "0699125485", email: "abounya@gmail.com", web: "www.bounyane.com"},
//       {id:4, profileImg:img4, title:"Web Designer", name:"Ammi Abdelghani", tel: "0612335418", email: "aammi@gmail.com"}
//     ]

//     const members = pr.map(member => <Carditems
//                         key={member.id}
//                         profileImg={member.profileImg}
//                         title={member.title}
//                         name={member.name}
//                         tel={member.tel}
//                         email={member.email}
//                         web={member.web}
//                       />);
   
//     return (
//       <div className='row'>
//         {members}
//       </div>
      
//     )
// }


class Users extends Component{
  constructor(){
    super()
    this.state = {
                    pr: UsersData,
                    members: [],
                    counter: 0
        }
        this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(){
    if (this.state.counter < this.state.pr.length)
    {
        this.state.members.push(this.state.pr[this.state.counter]);
        this.setState(prevState => {
          return({counter: prevState.counter + 1})
        });
        console.log(this.state.members);
        this.newMembers = this.state.members.map(member => {return <Carditems
                        key={member.id}
                        profileImg={member.profileImg}
                        title={member.title}
                        name={member.name}
                        tel={member.tel}
                        email={member.email}
                        web={member.web}
                      />});
      }else
        console.log("Warning: there is no users!!");
  }

  // mapping(x){
  //         const members = x.map(member => <Carditems
  //                           key={member.id}
  //                           profileImg={member.profileImg}
  //                           title={member.title}
  //                           name={member.name}
  //                           tel={member.tel}
  //                           email={member.email}
  //                           web={member.web}
  //                         />);
  //         return (members);
  // }

  render(){
    return(
      <div className='row'>
        <button className='btn btn-success btn-lg btn-block' onClick={this.clickEvent}>Show Cards</button>
        {this.newMembers}
      </div>
    );
  }
}



export default Users;
