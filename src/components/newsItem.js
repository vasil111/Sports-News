import React from "react";

function newsItem({ items }) {
  return (
    <div className="row container container_adjust">
      {items.map((catchnews) => {
        const { id, title, urlToImage, url, author, date, category } = catchnews;
    
        return (
          <a className="col-md-3" href={url}>
          <div className="card width_card" key={id}>
            <img src={urlToImage} className="card-img-top img_height" alt="..." />
            <span className="category_newsitem">{category}</span>
            <div className="card-body body_card">
              <h5 className="card-title title_card">{title}</h5>
              <p className="author_style">{author}</p>
              <p className="date_design">{date}</p>
            </div>
          </div>
          </a>
        );
      })}
    </div>
  );
}
export default newsItem;
