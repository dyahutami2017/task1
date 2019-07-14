import React from 'react';
import './App.css';
import form from './view/form.jsx';
import gambar from '../src/undraw_freelancer_b0my.png'


function App() {
  return (
    <div className="App">
      
  <div className="App__Form">
      
                
        <div className="PageSwitcher">
        <div className="circle"></div> 
        
        <div className="logo"></div>
        
        </div><span className="judul">Fill the Form!!</span>
 
 <form>   
    <div className="FormField">
      <label className="FormField__Label" htmlFor="name">Full Name</label>
      <input type="text" id="name" className="FormField__Input" placeholder="Nama Lengkap"/>
    </div>
 
    <div className="FormField">
      <label className="FormField__Label" htmlFor="email">Email Address</label>
      <input type="text" id="email" className="FormField__Input" placeholder="Email"/>
    </div>
    <div className="FormField">
      <img src={gambar} alt="undraw"/>
      </div>
    
   <div className="FormField">
      <label className="FormField__Label" htmlFor="phone">Phone Number</label> 
      <input type="text" id="phone" className="FormField__Input" placeholder="No Telepon"/>
      
    </div>
    

 
    <div className="FormField">
      <label className="FormField__Label" htmlFor="message">Message</label>
      <input type="text" id="message" className="FormField__Input" placeholder="Pesan"/>
    </div>

    <div className="FormField">
          <button className="FormField__Button mr-20">Send  </button> 
      </div>
      
  </form>
          <div className="circle1">
          
          </div> 
        </div>
        
    </div>
    
  );
}

export default App;
