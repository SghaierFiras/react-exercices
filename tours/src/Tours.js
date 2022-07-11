import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, deleteTour }) => {
  return (
    <section>
      <div className="title">
        <h1>Our Tours</h1>
        <div className="underline"></div>
      </div>
      <div>
        
      

        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} deleteTour={deleteTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
 