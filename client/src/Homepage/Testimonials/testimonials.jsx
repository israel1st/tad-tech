import React from 'react';
import style from './testimonials.css';
import arrow from './assets/vector-right.png';
import profile1 from './assets/profile1.jpg';
import profile2 from './assets/profile2.jpg';
import profile3 from './assets/profile3.jpg';
import profile4 from './assets/profile4.jpg';
import { useRef } from 'react';


function Testimonials() {

    const attestation = [
        { id: 1, name: "Sammy Lawson", avatar: profile1, comment: "White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence." },
        { id: 2, name: "Azah Anyeni", avatar: profile2, comment: "Green dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence." },
        { id: 3, name: "Chris Prince", avatar: profile3, comment: "White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence." },
        { id: 4, name: "David Charles", avatar: profile4, comment: "White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence." },
        { id: 5, name: "Sandra Peters", avatar: profile3, comment: "White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence." },

    ];
    
    const carrd = useRef();
    const indicate = useRef();


    const scrll = () => {
        carrd.current.scrollBy(240,0);
    };

    const scrllbck = () => {
        carrd.current.scrollBy(-240,0);
    };
    

  
    
      return (
        <div className='Testimonials'>

            <h2>What Our Students Are Saying</h2>
            
            <div className="testimonial-cards" ref={carrd}>
                  {attestation.map(testimony => {
                    return (
                        <div key={testimony.id} className="testimonial-card">
                            <div className="inner-test">
                                <div className="details">
                                    <img src={testimony.avatar}></img>
                                    <h4>{testimony.name}</h4>
                                </div>
                                <div className="content">
                                    <p>{testimony.comment}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            
           
            {/* <div className="arrow-b">
                <img onClick={scrllbck} src={arrow} alt="" />
            </div>

            <div className="arrow">
                <img onClick={scrll} src={arrow} alt="" />
            </div>
             */}
                  <div className="ind-container">
                <div className='indicator-serv'>
                    <div className='c7' ref={indicate}></div>
                    {attestation.map(eachService => {
                        return (
                            <div key={eachService.id} className="c2"></div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
      );
    
}
  
  export default Testimonials;
  