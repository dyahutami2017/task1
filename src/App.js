import React from 'react';
import './App.css';
import form from './view/form.jsx';



function App() {
  return (
    <div className="App">
      <div className="App__Form">
        <div className="PageSwitcher">
          <div className="logo"></div>
        </div>
  
        <div className="FormCenter">
          <form className="FormFields">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">Full Name</label>
              <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name"/>
            </div>
         
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">Email Address</label>
              <input type="text" id="email" className="FormField__Input" placeholder="Enter your email address"/>
            </div>
          

          
            <div className="FormField">
              <label className="FormField__Label" htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" className="FormField__Input" placeholder="Enter your phone number"/>
            </div>
         

         
            <div className="FormField">
              <label className="FormField__Label" htmlFor="message">Message</label>
              <input type="text" id="message" className="FormField__Input" placeholder="your message"/>
            </div>
          </form>
        </div>
      </div>
    
    </div>
  );
}

export default App;
