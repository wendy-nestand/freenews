import React, { useState, useEffect, createRef } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grow,
} from "@material-ui/core";
import useStyles from "./styles";
import "./styles";

const NewsCard = ({
  i,
  source,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  activeArticle,
}) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <Grow in>
      <Card
        id="card"
        ref={elRefs[i]}
        className={activeArticle === i ? classes.activeCard : classes.card}
      >
        <CardActionArea href={url} target="_blank">
          <CardMedia
            className={classes.media}
            image={
              urlToImage ||
              "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
            }
            title={title}
          />
          <div className={classes.details}>
            <Typography variant="body2" color="white" component="h2">
              {new Date(publishedAt).toDateString()}
            </Typography>
            <Typography
              className={classes.tsource}
              variant="body2"
              component="h2"
            >
              {source}
            </Typography>
          </div>
          <Typography className={classes.title} gutterBottom variant="h5">
            {title}
          </Typography>
          <CardContent className={classes.cardContent}>
            <Typography variant="body2" color="white" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button
            className={classes.button}
            color="white"
            size="small"
            href={url}
            target="_blank"
          >
            <h4>read</h4>
          </Button>
          <Typography variant="h5" color="white" size="small">
            {i + 1}
          </Typography>
        </CardActions>
      </Card>
    </Grow>
  );
};

export default NewsCard;
