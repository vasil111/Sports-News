import React from "react";

const Categories = ({categories, filterItems}) => {
  return (
    <main>
      <section className="catagories">
        <div className="btn-container">
          {categories.map((category, index) => {
            // console.log(category)
            return <button type="button" className="filter-btn" key={index} onClick={()=> filterItems(category)}>{category}</button>
        })}
          </div>
      </section>
    </main>
  );
}
export default Categories;
