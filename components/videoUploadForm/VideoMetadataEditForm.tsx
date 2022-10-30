import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Grid, TextareaAutosize, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useFetch } from "../../hooks/useFetch";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #D1D1D1",
    padding: 20,
    // width: "100%",
  },
  textFields: {
    width: "100%",
  },
  alert: {
    margin: "10px 0 10px 0",
  },
}));

export const VideoMetadataEditForm = ({ videoMetadata }: any) => {
  const classes = useStyles();
  const { title, description, userId, videoId } = videoMetadata;
  const [metadata, setMetadata] = useState<any>({
    title,
    description,
    categoryId: "Choisir une catégorie",
    thumbnail: null,
  });

  const { data: categories }: any = useFetch("/categories", {
    staleTime: 300000,
    refetchOnMount: true,
    select: (data: any) => {
      return data.data.categories;
    },
  });

  const handleChange = (e: any) => {
    setMetadata({ ...metadata, [e.target.name]: e.target.value });
  };

  const editVideoMetadata = async () => {};

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
          <Grid item xs={12} sm={4}>
            <TextField
              className={classes.textFields}
              sx={{ width: "100% !important" }}
              id="outlined-multiline-flexible"
              label="Titre de la vidéo"
              maxRows={4}
              name="title"
              value={metadata.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              className={classes.textFields}
              sx={{ width: "100% !important" }}
              id="outlined-select-categoryId"
              select
              label="Catégorie"
              value={metadata.categoryId}
              name="categoryId"
              onChange={handleChange}
            >
              {categories &&
                categories.map((categoryId: any) => {
                  const { _id, name } = categoryId;
                  return (
                    <MenuItem key={_id} value={_id}>
                      {name}
                    </MenuItem>
                  );
                })}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <label htmlFor="contained-button-file">Changer la miniature</label>{" "}
            <br />
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              name="thumbnail"
              value={metadata.thumbnail}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item sx={{ width: "100%" }}>
            <TextareaAutosize
              minRows={10}
              aria-label="maximum height"
              placeholder="Décrivez la vidéo"
              style={{
                width: "100%",
                minWidth: 300,
                maxWidth: "100%",
                minHeight: 50,
                maxHeight: 80,
              }}
              name="description"
              value={metadata.description}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" onClick={editVideoMetadata}>
        Enregistrer
      </Button>
    </div>
  );
};
