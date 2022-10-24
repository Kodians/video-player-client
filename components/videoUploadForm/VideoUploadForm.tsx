import { useState, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Grid, TextareaAutosize, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useFetch } from "../../hooks/useFetch";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  textFields: {
    width: "100% !important",
  },
}));

export const VideoUploadForm = () => {
  const classes = useStyles();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setcategory] = useState<string>("Choisir une catégorie");
  const [video, setVideo] = useState<File>();
  const [videoThumbnail, setVideoThumbnail] = useState<File>();

  const { data } = useFetch("/categories", {
    staleTime: Infinity,
  });

  const handleVideoTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setcategory(e.target.value);
  };

  const handleVideoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setVideo(e.target.files![0]);
  };

  const handleVideoThumbnailUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setVideoThumbnail(e.target.files![0]);
  };

  const handleVideoDescriptionChange = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const saveVideo = () => {
    console.log({ title, description, category, video, videoThumbnail });
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
              value={title}
              onChange={handleVideoTitleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.textFields}
              id="outlined-select-category"
              select
              label="Catégorie"
              value={category}
              onChange={handleCategoryChange}
            >
              {data?.data?.categories.map((category: any) => {
                const { _id, name } = category;
                return (
                  <MenuItem key={_id} value={name}>
                    {name}
                  </MenuItem>
                );
              })}
            </TextField>
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6}>
            <label htmlFor="contained-button-file">Charger la vidéo</label>
            <br />
            <input
              accept="video/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleVideoUpload}
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
              onChange={handleVideoThumbnailUpload}
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
                maxWidth: 700,
                maxHeight: 300,
              }}
              onChange={handleVideoDescriptionChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Button variant="contained" onClick={saveVideo}>
        Publier
      </Button>
    </div>
  );
};
