import React, { useState, useEffect } from "react";
import "./Main.scss";
import axios from "axios";

import Article from "./Article";
import Nav from "../Nav/Nav";

function Main(props) {
  const { token, setToken, isLogin, setIsLogin } = props;

  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get("./data/articleData.json").then((res) => {
      setArticles(res.data);
    });

    fetch("./data/commentData.json")
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, []);

  return (
    <>
      <Nav
        token={token}
        setToken={setToken}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
      <section id="section" className="flexCenter">
        <Article
          articles={articles}
          comments={comments}
          setComments={setComments}
          setArticles={setArticles}
        />
      </section>
    </>
  );
}

export default Main;
