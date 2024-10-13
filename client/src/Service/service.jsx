
import React from 'react';
import ServiceHero from './ServiceHero/serviceHero';
import ServiceBody from './ServiceBody/serviceBody';

//Images
import webdez from './ServiceHero/assets/webdesign.png';
import graphdez from './ServiceHero/assets/graphdesign.png';


function Service () {

  const heroTags = [
    { id: 1, title: "Business Branding", icon: webdez},
    { id: 2, title: "Graphics Design", icon: graphdez},
    { id: 3, title: "Web Design and Hosting", icon: webdez},
    { id: 4, title: "Business Development", icon: webdez},
    { id: 5, title: "ICT Training", icon: webdez},
    { id: 6, title: "Drop Shipping", icon: webdez},
    { id: 7, title: "Data Analysis", icon: webdez },
    { id: 8, title: "Content Management System", icon: webdez },
    

];


  return (
    <div className="Service">

      <ServiceHero theTags={heroTags} theBG="service-banner"/>
      <ServiceBody/>

    </div>
  );
}

export default Service;
