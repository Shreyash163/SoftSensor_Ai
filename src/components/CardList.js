import React from "react";
import "./CardList.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CardList() {
  const [task, setTasks] = useState([]);
  useEffect(() => {
    try {
      axios.get("https://api.escuelajs.co/api/v1/products/?_limit=20")
      .then((response) => {
        setTasks(response.data);
      });
    } catch {
      console.log("err");
    }
  }, []);
  return (
    <>
      <div className="row">
        <div className="header">
          <h2> Fresh Stock</h2>
        </div>
        <div className="cardlist">
          {task.map((task) => {
            return (
              <div className="card" key={task.id}>
                <img src={task.images[0]} alt="" />
                <div className="container">
                  <h3>{task.title}</h3>
                  <p>
                    <b>Category : </b>
                    {task.category.name}
                  </p>
                  <p>
                    <b>Price : </b> ${task.price}
                  </p>
                  <Link to="cart">
                    <button>Add to cart </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}