import React from 'react'; 
import avatar1 from './assets/avatars/avatar1.png';
import avatar2 from './assets/avatars/avatar2.png';
import avatar3 from './assets/avatars/avatar3.png';
import avatar4 from './assets/avatars/avatar4.png';
import avatar5 from './assets/avatars/avatar5.png';




export function App() {
  return (
    <div className="App">

      <div class="lds-facebook"><div></div><div></div><div></div></div>

      <div className="avatars">
        <div className='name1'>
          <img className='avatar1' src={avatar1}></img>
          <h1 className='txt1'>Katie</h1>
          </div>
        <div className='name2'>
        <img className='avatar2' src={avatar2}></img>
        <h1 className='txt2'>Gary</h1>
        </div>
        <div className='name3'>
        <img className='avatar3' src={avatar3}></img>
        <h1 className='txt3'>Katherine</h1>
        </div>
        
        <div className='name4'>
          <img className='avatar4' src={avatar4}></img>
          <h1 className='txt4'>Cole</h1>
          </div>
          
        <div className='name5'>
        <img className='avatar5' src={avatar5}></img>
        <h1 className='txt5'>Nakamura</h1>
        </div>
        
    </div>
    
      
    

        
          
      
 
    </div>
  );
}

export default App;
