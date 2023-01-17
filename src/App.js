import React, { useEffect, useState, Component } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/newsCards/NewsCards";
import SearchBox from "./components/searchBox/SearchBox";
import wordsToNumbers from "words-to-numbers";
import "./index.css";
import Scroll from "./components/Scroll";

const alanApi_Key =
  "7b6e8151913ff48bbbe9ffa6e573159f2e956eca572e1d8b807a3e2338fdd0dc/stage";
const newsApi_key = "2bb55c3d7c5c4ad2b9a2e78c86b89ed6";
//const API_URL = `https://newsapi.org/v2/everything?q=${searchNews}&apiKey=2bb55c3d7c5c4ad2b9a2e78c86b89ed6`;

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [searchNews, setSearchNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    alanBtn({
      key: "7b6e8151913ff48bbbe9ffa6e573159f2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          console.log(articles);
          setNewsArticles(articles);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
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
  };

  const handleChange = (event) => {
    setSearchNews(event.target.value);
  };

  const fetchNews = async (searchKey) => {
    setIsLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${searchKey}&apiKey=2bb55c3d7c5c4ad2b9a2e78c86b89ed6`
    );
    const data = await response.json();

    setNewsArticles(data.articles);
    setIsLoading(false);
  };

  return (
    <div>
      <SearchBox
        searchNews={searchNews}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      ></SearchBox>
      <Scroll>
        <section>
          <div className="container">
            <h1>
              Search For <span className="sp">News</span>
              <br />
              All around the Globe
              <br />
              And beyond using <span className="sp">AI</span>
            </h1>
          </div>
        </section>
        <section></section>
        <NewsCards isLoading={isLoading} articles={newsArticles}></NewsCards>
      </Scroll>
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
