import React from "react"
import Card from "./Card"
import data from "../data/data"


    function Projects() {
        const cards = data.map((item) => {
          return (
            <Card
              key={item.id}
              img={item.coverImg}
              description={item.description}
              siteLink={item.siteLink}
              gitLink={item.gitLink}
            />
            
          );
        });
console.log(data)
        return (
        


        <div className = 'mainBlock'>
          <h1 className="header-page">
          <span className="colorText"> My </span>projects</h1>
          <div className="cards-block">
            {cards}
          </div>          
          <h3 className="bottomProjectsBlock">This page will be constantly updated with new projects ...</h3>
          </div>
        
        )
      }
    


export default Projects