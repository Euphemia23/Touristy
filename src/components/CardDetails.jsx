import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Rating from "@material-ui/lab/Rating";
import Navbar from './Navbar'
import Recommend from "./Recommend";
import { Button } from "@material-ui/core";
import { Chip } from "@material-ui/core";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";




const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  content: {
    flexGrow: 1,
  },
  rating: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  ratingValue: {
    marginRight: "10px",
  },
  address: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  classifications: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  images: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    marginRight: "10px",
  },
  button: {
    paddingBottom: 16,
    textAlign: "center"
  }
}));

export default function CardDetails() {



    const location = useLocation();
  const data = location.state.destination;
  const classes = useStyles();



  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(data);
  }, [data]);

  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Card className={classes.root}>
      <CardContent className={classes.content}>
      <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center", fontWeight: "bold", fontSize: "35px" }}>
        {data.name}
      </Typography>
      <Typography variant="body1" color="primary" component="p" align="center">
        {data.description}
      </Typography>
      <div className={classes.rating}>
        <Typography className={classes.ratingValue} variant="h6" align="center" gutterBottom>
          {data.rating}
        </Typography>
        <Rating value={data.rating} precision={0.5} readOnly size="large" align="center" />
      </div>
      <div className={classes.address}>
        <Typography variant="body1" align="center" gutterBottom>
          {data.address.street}<br />
          {data.address.city}, {data.address.state} {data.address.zip}
        </Typography>
      </div>
      <div className={classes.classifications}>
      <div className={classes.classifications}>
        <Typography variant="body1" align="center" gutterBottom>
          <Chip label={data.classifications} color="primary" variant="outlined" size="small" />
        </Typography>
      </div>

      </div>
      <Link href={data.official_site} target="_blank" rel="noopener">
      <Button variant="contained" color="primary" size="large" className={classes.button}>
        Official Website
      </Button>
    </Link>
      
        </CardContent>
        <Grid container spacing={3} className={classes.images}>
        {data.images.map((image, index) => (
          <Grid item xs={6} key={index}>
            <CardMedia
              className={classes.media}
              image={image.url}
              title={data.name}
              expand={true}
            />
          </Grid>
        ))}
      </Grid>
      <CardContent>
        <Recommend />
      </CardContent>

    </Card>
    <Footer />
    </>
    );
}

