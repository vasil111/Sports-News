import React from "react";

function newsItem({ items }) {
  return (
    <div className="section-center">
      {items.map((catchnews) => {
        const { id, title, urlToImage, content, url, author, date } = catchnews;

        return (
          <div className="card width_card" key={id}>
            <img src={urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <label className="author_style">{author}</label>
              <p className="card-text">{content}</p>
              <a href={url} className="btn btn-primary newsitem_button">
                Read More
              </a>
              <span className="date_design"><b className="date_color">Dated:</b>{date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default newsItem;
