import React from "react";
import NewsCard from "../newsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./styles.js";

const infoCards = [
  { color: "#0d1117b3", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#0d1117b3",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#0d1117b3",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "display everything on PlayStation 5",
  },
  {
    color: "#0d1117b3",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const NewsCards = ({ articles }) => {
  const classes = useStyles();

  if (articles.length === 0) {
    console.log("len 0");
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
              key={i}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5">{infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography variant="h6">
                    <strong>{infoCard.title.split(" ")[2]}:</strong>
                    <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography>
                  Open the mic in the right and say <br />{" "}
                  <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  } else {
    console.log("It worked");
    const cardComponent = articles.map((article, i) => {
      return (
        <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
          <NewsCard
            key={i}
            i={i}
            source={article.source.name}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            publishedAt={article.publishedAt}
            content={article.content}
          ></NewsCard>
        </Grid>
      );
    });

    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {cardComponent}
        </Grid>
      </Grow>
    );
  }
};

export default NewsCards;
{
  /* <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {articles.map((article, i) => {
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              <NewsCard
                key={i}
                source={article.source.name}
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
                publishedAt={article.publishedAt}
                content={article.content}
              ></NewsCard>
            </Grid>;
          })}
        </Grid>
      </Grow> */
}
