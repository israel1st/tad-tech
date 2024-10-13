import React from 'react';
import style from './whyWork.css';



//Images
// import logo from "../Layout/Navigation/assets/newLogo.png";


function WhyWork() {

    const linkStyle = {
        textDecoration: 'none',
        color: '#f78b26'
    }

    return (
        <div className='WhyWork'>
            <h2>Why Work with us</h2>
            <div>
                <div className="work-reasons">
                    <div className="work-reason">
                        <button>Lorem Ipsum</button>
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Atque architecto quae ipsum, voluptates minima molestiae sed non aut cum
                            suscipit veritatis voluptatem delectus nesciunt nisi, consectetur quidem
                            magni dolorem autem, similique sit?
                        </p>
                    </div>
                    <div className="work-reason">
                        <button>Lorem Ipsum</button>
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Atque architecto quae ipsum, voluptates minima molestiae sed non aut cum
                            suscipit veritatis voluptatem delectus nesciunt nisi, consectetur quidem
                            magni dolorem autem, similique sit?
                        </p>
                    </div>
                    <div className="work-reason">
                        <button>Lorem Ipsum</button>
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Atque architecto quae ipsum, voluptates minima molestiae sed non aut cum
                            suscipit veritatis voluptatem delectus nesciunt nisi, consectetur quidem
                            magni dolorem autem, similique sit?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default WhyWork;
