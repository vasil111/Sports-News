import React from "react";

const Date = ({categories, filterItems}) => {
  return (
    <main>
      <section className="catagories">
        <div className="btn-container">
          {categories.map((category, index) => {
           
            return <button type="button" className="filter-btn" key={index} onClick={()=> filterItems(category)}>{category}</button>
        })}
          </div>
      </section>
    </main>
  );
}
export default Date;
