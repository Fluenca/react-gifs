import React, { Component } from 'react';
import Gif from './gif';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div className="left-scene">
        <div className="form-search"></div>
        <div className="selected-gif"><Gif/></div>
      </div>
       <div className="right-scene">
         <div className="gif-list">
          <div className="gif"><Gif/></div>
         </div>
       </div> </div>
     );
  }
};

export default App;
