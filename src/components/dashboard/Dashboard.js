import React, {Component} from 'react';

class Dashboard extends Component {
   render(){
      console.log(this.props);

      return(
         <div className="dashboard container">
            <div className="row">
               <div className="col s12 m6">
                  Dashboard
               </div>
               
            </div>
         </div>
      )
   }
}


export default Dashboard;