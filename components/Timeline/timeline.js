import React from "react";
import items from "./content";
import Item from "./item";

const Timeline = () => {
  return(
    <>
      <div className="container-timeline">
    {items.map((item, index) => (
      <Item data={item} key={item.title} index={index}/>
    ))}
  </div>
  <style jsx>{`
  .container-timeline {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    counter-reset: contador;
    margin: 1.5rem auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-bottom: 1.5rem;
  }
`}</style>
    </>
  )
}




export default Timeline;
