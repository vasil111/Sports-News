import React, { useState } from "react";
import Date from "./components/Date";
import "./App.css";
import "./responsive.css";
import items from "./components/data";
import NewsItem from "./components/newsItem";
import Categories from "./components/Categories";
import Author from "./components/Author";
import Pagination from "./components/Pagination";

const allCategories = [...new Set(items.map((item) => item.category))];
const allAuthor = [...new Set(items.map((item) => item.author))];
const allDate = [...new Set(items.map((item) => item.date))];

function App() {
  const [dailyNews, setDailyNews] = useState(items);
  const [categories] = useState(allCategories);
  const [author] = useState(allAuthor);
  const [date] = useState(allDate);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);


const filterItems = (category) => {
    if (category === "all") {
      setDailyNews(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setDailyNews(newItems);
  };


const filterAuthor = (author) => {
    if (author === "all") {
      setDailyNews(items);
      return;
    }
    const newItems = items.filter((item) => item.author === author);
    setDailyNews(newItems);
  };


const filterDate = (date) => {
    if (date === "all") {
      setDailyNews(items);
      return;
    }
    const newItems = items.filter((item) => item.date === date);
    setDailyNews(newItems);
  };


  // Get current Post
  const indexOfLastItems = currentPage * postPerPage;
  const indexOfFirstItems = indexOfLastItems - postPerPage;
  const currentPosts = dailyNews.slice(indexOfFirstItems, indexOfLastItems);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2 className="main_heading">Sports News</h2>
        </div>
        <div className="container">
          <div className="arranging_galleybar">
            <span>
              <button className="btn btn-success gallery_button">
                View: Gallery
              </button>
            </span>
            <div className="pagination_filter">
              <div className="pagination_move">
                {" "}
                <Pagination
                  postsPerPage={postPerPage}
                  totalPosts={items.length}
                  paginate={paginate}
                />
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle dropdown_filter"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li className="filters_heading">Games</li>
                  <li className="filter_parts">
                    <Categories
                      categories={categories}
                      filterItems={filterItems}
                    />
                  </li>
                  <li className="filters_heading">Authors</li>
                  <li className="filter_parts">
                    <Author categories={author} filterItems={filterAuthor} />
                  </li>
                  <li className="filters_heading">Date</li>
                  <li className="filter_parts">
                    <Date categories={date} filterItems={filterDate} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <NewsItem items={currentPosts} />
        </div>
        
      </section>
    </main>
  );
}

export default App;
