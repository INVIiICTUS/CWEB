// import React, {useState, useEffect} from 'react';

// const useAudio = url => {
//   const [audio] = useState(new Audio("https://www.youtube.com/embed/T8D8vEcZrqM?start=2"));
//   const [playing, setPlaying] = useState(false);

//   const toggle = () => setPlaying(!playing);

//   useEffect(() => {
//       playing ? audio.play() : audio.pause();
//     },
//     [playing]
//       );

//   useEffect(() => {
//     audio.addEventListener('ended', () => setPlaying(false));
//     return () => {
//       audio.removeEventListener('ended', () => setPlaying(false));
//     };
//   }, []);
// }
//   export default useAudio;




import React from "react";

function Audio (){ 
    return (
            
     window.onload=() =>{
     <a className="nav-link text-white" href="#">
     {""} 
                 <span className="sr-only">(current)</span>
                 <iframe width="30" height="25" src="https://www.youtube.com/embed/T8D8vEcZrqM?start=2" autoplay></iframe>
    </a>}
    );
};
export default Audio;
