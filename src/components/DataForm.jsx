import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const classifications = [
  {
    value: "art",
    label: "Art",
  },
  {
    value: "history",
    label: "History",
  },
  {
    value: "nature",
    label: "Nature",
  },
  {
    value: "museum",
    label: "Museum",
  },
  {
    value: "outdoor",
    label: "Outdoor",
  },
  {
    value: "religious",
    label: "Religious",
  },
  {
    value: "shopping",
    label: "Shopping",
  },
  {
    value: "sport",
    label: "Sport",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function DataForm() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [officialSite, setOfficialSite] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [url, setUrl] = useState("");
  const [source, setSource] = useState("");
  const [url2, setUrl2] = useState("");
  const [source2, setSource2] = useState("");
  const [url3, setUrl3] = useState("");
  const [source4, setSource4] = useState("");
  const [url4, setUrl4] = useState("");
  const [source3, setSource3] = useState("");
  const [classification, setClassification] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://touristy.azurewebsites.net/attraction/", {
        name: name,
        description: description,
        rating: rating,
        official_site: officialSite,
        address: {
          street: street,
          city: city,
          state: state,
          zip: zip,
        },
        imagesLinks: [
          {
            url: url,
            source: source,
          },
          {
            url: url2,
            source: source2,
          },
          {
            url: url3,
            source: source3,
          },
          {
            url: url4,
            source: source4,
          },
        ],
        classifications: classification,
      })
      .then((res) => {
        alert("Success!");
        setName("");
        setDescription("");
        setRating("");
        setOfficialSite("");
        setStreet("");
        setCity("");
        setState("");
        setZip("");
        setUrl("");
        setSource("");
        setUrl2("");
        setSource2("");
        setUrl3("");
        setSource3("");
        setUrl4("");
        setSource4("");
        setClassification("");
      })
      .catch((err) => {
        alert("Error");
      });
  };

  return (
    <>
      <Navbar />
      <div className="dataForm">
        <h1>Submit a new attraction</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="description"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            id="rating"
            label="Rating"

            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <TextField
            id="officialSite"
            label="Official Site"
            value={officialSite}
            onChange={(e) => setOfficialSite(e.target.value)}
          />
          <TextField
            id="street"
            label="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <TextField
            id="city"
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            id="state"
            label="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <TextField
            id="zip"
            label="Zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
          <TextField
            id="url"
            label="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <TextField
            id="source"
            label="Source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
          <TextField
            id="url2"
            label="URL 2"
            value={url2}
            onChange={(e) => setUrl2(e.target.value)}
          />
          <TextField
            id="source2"
            label="Source 2"
            value={source2}
            onChange={(e) => setSource2(e.target.value)}
          />
          <TextField
            id="url3"
            label="URL 3"
            value={url3}
            onChange={(e) => setUrl3(e.target.value)}
          />
          <TextField
            id="source3"
            label="Source 3"
            value={source3}
            onChange={(e) => setSource3(e.target.value)}
          />
          <TextField
            id="url4"
            label="URL 4"
            value={url4}
            onChange={(e) => setUrl4(e.target.value)}
          />
          <TextField
            id="source4"
            label="Source 4"
            value={source4}
            onChange={(e) => setSource4(e.target.value)}
          />
          <TextField
            id="classification"
            select
            label="Classification"
            value={classification}
            onChange={(e) => setClassification(e.target.value)}
            helperText="Please select a classification"
          >
            {classifications.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </Button>
        </form>
      </div>
      <Footer />
    </>
  );
}
