import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import "./App.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <h2>
      <body>
        <div id="cri">Click to communicate with our Chatbot</div>
        <a
          id="cric"
          href="https://www.kommunicate.io/livechat-demo?appId=23a0ff296301da2fe687d2e9adfeb1ba3&botIds=prime-lvvqc&assignee=prime-lvvqc"
        >
          <button id="bro">VIP BOT</button>
        </a>
      </body>
      <section className="menu section">
        <div className="title">
          <h2 id="up">Our Menu</h2>
          <div
            className="under
        line"
          ></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
      <div id="blank">
        <h1>Menu Items</h1>{" "}
      </div>
    </h2>
  );
}

export default App;
