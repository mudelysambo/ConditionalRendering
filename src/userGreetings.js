import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {

    //SHORT CIRCUTE CONDITIONAL RENDERING OPERATOR ***
    //&& ID isLoggedIn IS TRUE IT WILL DISPLAY THE MESSAGE INSIDE THE DIV TAGS , WHERE ELSE IS FALSE IT WILL DISPLAY NOTHING
 return this.state.isLoggedIn && <div>Welcome mudely</div>


//TENARY CONDITIONAL OPERATOR RENDERING APROACH  ***
// return this.state.isLoggedIn ? (
//     <div>Welcome mudely</div>
// ) :(
//     <div>Welcome Geust</div>
//  )







    // ELEMENT VARIABLE APROACH OF CONDITIONAL RENDERING
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome mudely</div>
    // } 
    // else{
    //     message = <div>Welcome Geust</div>
    // }
    // return <div>{message}</div>

    //ONOTHER WAT OF CONDITIONAL RENDERING
    // if(this.state.isLoggedIn){
    //     return <div>welcome mudely</div>
    // }
    // else{
    //     return <div>welcome Geust</div>
    // 
}
    // return (
    //     <div>
    //   <div>welcome mudely</div>
    //   <div>welcome Geust</div>
    //   </div>
    // )
//   }
}

export default UserGreeting;