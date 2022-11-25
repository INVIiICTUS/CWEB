import React from "react";

class App extends Component {
 
    render() {
   
      // Datos que debe cargar el audio
   
      const item = [
        {
          id: 1,
          audio: 'https://www.youtube.com/watch?v=T8D8vEcZrqM',
          formato: 'audio/mpeg',
        }
      ];
   
      return (
   
        item.map(item => { 
   
   
          return  <div key={ item.id }>
                    <audio>
                      <source src={ item.audio } type={ item.formato }/>
                    </audio>
                  </div>
         
   
        })
   
      )
      
   
    }
   
  };
   
  export default Video;