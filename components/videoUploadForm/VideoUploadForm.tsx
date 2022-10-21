import * as React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Grid, TextareaAutosize, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  textFields: {
    width: "100% !important",
  },
}));

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export const VideoUploadForm = () => {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");

  const [value, setValue] = React.useState("Controlled");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        flexDirection="column"
        spacing={6}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.textFields}
              id="outlined-multiline-flexible"
              label="Titre de la vidéo"
              maxRows={4}
              value={value}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.textFields}
              id="outlined-select-currency"
              select
              label="Catégorie"
              value={currency}
              onChange={handleChange}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6}>
            <label htmlFor="contained-button-file">Charger la vidéo</label>
            <br />
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <label htmlFor="contained-button-file">
              Charger la photo de couverture
            </label>{" "}
            <br />
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
          </Grid>
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item sx={{ width: "100%" }}>
            <TextareaAutosize
              minRows={10}
              aria-label="maximum height"
              placeholder="Décrivez la vidéo"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
              style={{
                width: "100%",
                minWidth: 300,
                maxWidth: 700,
                maxHeight: 300,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Button variant="contained">Publier</Button>
    </div>
  );
};
