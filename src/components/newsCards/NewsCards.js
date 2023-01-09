import React from "react";
import NewsCard from "../newsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./styles.js";

const NewsCards = ({ articles }) => {
  const classes = useStyles();

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard
              key={i}
              source={article.source.name}
              title={article.title}
              description={article.description}
              publishedAt={article.publishedAt}
              url={article.url}
              urlToImage={article.urlToImage}
              content={article.content}
              i={i}
            ></NewsCard>
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
