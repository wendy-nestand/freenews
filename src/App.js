import React, { useEffect, useState, Component } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/newsCards/NewsCards";
import SearchBox from "./components/searchBox/SearchBox";
import "./index.css";

const alanApi_Key =
  "7b6e8151913ff48bbbe9ffa6e573159f2e956eca572e1d8b807a3e2338fdd0dc/stage";
const newsApi_key = "2bb55c3d7c5c4ad2b9a2e78c86b89ed6";
//const API_URL = `https://newsapi.org/v2/everything?q=${searchNews}&apiKey=2bb55c3d7c5c4ad2b9a2e78c86b89ed6`;

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [searchNews, setSearchNews] = useState([]);
  useEffect(() => {
    alanBtn({
      key: "7b6e8151913ff48bbbe9ffa6e573159f2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform search here
    console.log(`Searching for ${searchNews}`);
    const datas = fetchNews(searchNews);
    console.log("type:", typeof Object.values(datas));
    // this.setState({ articles: datas });
  };

  const handleChange = (event) => {
    setSearchNews(event.target.value);
  };

  const fetchNews = async (searchKey) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${searchKey}&apiKey=2bb55c3d7c5c4ad2b9a2e78c86b89ed6`
    );
    const data = await response.json();
    console.log(data.articles);
    setNewsArticles(data.articles);
  };

  return (
    <div>
      <SearchBox
        searchNews={searchNews}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      ></SearchBox>
      <section>
        <div className="container">
          <h1>
            Search <span className="sp">News</span>
            <br />
            All around the Globe
          </h1>
        </div>
      </section>
      <NewsCards articles={newsArticles}></NewsCards>
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       articles: [],
//       searchNews: "",
//     };
//   }

//   componentDidMount() {
//     this.alanBtnInstance = alanBtn({
//       key: "7b6e8151913ff48bbbe9ffa6e573159f2e956eca572e1d8b807a3e2338fdd0dc/stage",
//       onCommand: ({ command, articles }) => {
//         console.log(command);
//         if (command === "newHeadlines") {
//           //call client code that will react to the received command

//           console.log("type :", typeof articles);
//           this.setState({ articles: articles });
//         }
//       },
//     });
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     // perform search here
//     console.log(`Searching for ${this.state.searchNews}`);
//     const datas = this.fetchNews(this.state.searchNews);
//     console.log("type:", typeof Object.values(datas));
//     // this.setState({ articles: datas });
//   };

//   handleChange = (event) => {
//     this.setState({ searchNews: event.target.value });
//   };

//   fetchNews = async (searchKey) => {
//     const response = await fetch(
//       `https://newsapi.org/v2/everything?q=${searchKey}&apiKey=2bb55c3d7c5c4ad2b9a2e78c86b89ed6`
//     );
//     const data = await response.json();
//     const articleList = Object.values(data.articles);
//     this.setState({ articles: articleList });
//     return articleList;
//   };

//   render() {
//     const { articles, searchNews } = this.state;

//     return (
//       <div>
//         <SearchBox
//           searchNews={searchNews}
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//         ></SearchBox>
//         <section>
//           <div className="container">
//             <h1>
//               Search <span class="sp">News</span>
//               <br />
//               All around the Globe
//             </h1>
//           </div>
//         </section>
//         <NewsCards key={articles.length} articles={articles}></NewsCards>
//       </div>
//     );
//   }
// }

export default App;
