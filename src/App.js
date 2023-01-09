import React, { useEffect, useState, Component } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/newsCards/NewsCards";

const alanApi_Key =
  "7b6e8151913ff48bbbe9ffa6e573159f2e956eca572e1d8b807a3e2338fdd0dc/stage";
const newsApi_key = "2bb55c3d7c5c4ad2b9a2e78c86b89ed6";
const API_URL =
  "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2bb55c3d7c5c4ad2b9a2e78c86b89ed6";

// const App = () => {
//   const [newsArticles, setNewsArticles] = useState([]);
//   useEffect(() => {
//     fectchNews();
//     alanBtn({
//       key: "7b6e8151913ff48bbbe9ffa6e573159f2e956eca572e1d8b807a3e2338fdd0dc/stage",
//       onCommand: ({ command, articles }) => {
//         if (command === "newHeadlines") {
//           console.log(articles);
//           setNewsArticles(articles);
//         }
//       },
//     });
//   }, []);

//   const fectchNews = async () => {
//     const response = await fetch(API_URL);
//     const data = await response.json();
//     console.log(data.articles);
//     setNewsArticles(data.articles);
//   };

//   return (
//     <div>
//       <h1> News Application </h1>
//       <NewsCards articles={newsArticles}></NewsCards>
//     </div>
//   );
// };

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    // this.fectchNews();
    this.alanBtnInstance = alanBtn({
      key: alanApi_Key,
      onCommand: ({ commandData, articleList }) => {
        if (commandData.command === "articleList") {
          // Call the client code that will react to the received command
          console.log(articleList);
          this.setState({ articles: articleList });
        }
      },
    });
  }

  // fectchNews = async () => {
  //   const response = await fetch(API_URL);
  //   const data = await response.json();
  //   console.log(data.articles);
  //   this.setState({ articles: data.articles });
  // };

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h1> News Application </h1>
        <NewsCards articles={articles}></NewsCards>
      </div>
    );
  }
}

export default App;
