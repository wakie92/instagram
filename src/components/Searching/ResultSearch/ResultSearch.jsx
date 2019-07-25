import React from "react";
import classes from "./ResultSearch.module.scss";
import { HashIcon } from 'libs/images';

const sampleData = [
  { data: "#lamborghini", post: 380384 },
  { data: "#lamborghiniaventador", post: 17075 },
  { data: "#lamborghinihuracan", post: 10070 },
  { data: "#lamborghinimurcielago", post: 2241 },
  { data: "#lamborghinigallardo", post: 5765 },
  { data: "#lamborghiniveneno", post: 1239 },
  { data: "#lamborghinijakarta", post: 1050 }
];
const ResultSearch = () => {
  const results = sampleData.map(data => {
    return (
      <div className = {classes.Result}>
        <img alt= "hash" src = {HashIcon}/>
        <div className = {classes.SpanBox}>
          <span className = {classes.Data}>{data.data}</span>
          <span className = {classes.Post}>{data.post} posts</span>
        </div>
      </div>
    )
  })
  return (
    <div className={classes.ResultContainer}>
      {results}
    </div>
  );
};

export default ResultSearch;
