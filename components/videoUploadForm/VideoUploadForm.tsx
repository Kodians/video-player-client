import { useState, ChangeEvent, useEffect, useCallback } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Grid, TextareaAutosize, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useFetch } from "../../hooks/useFetch";
import { useInsert } from "../../hooks/useInsert";
import tokenService from "../../services/token.service";
import Alert from "@mui/material/Alert";
import { LoadingBackdrop } from "../LoadingBackDrop";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  textFields: {
    width: "100%",
  },
  alert: {
    margin: "10px 0 10px 0",
  },
}));

export const VideoUploadForm = () => {
  const classes = useStyles();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [categoryId, setcategoryId] = useState<string>("Choisir une catégorie");
  const [video, setVideo] = useState<File>();
  const [videoThumbnail, setVideoThumbnail] = useState<File>();
  const [userId, setUserId] = useState<string>();
  const [alert, setAlert] = useState<string>();

  const { data } = useFetch("/categories", {
    staleTime: Infinity,
  });
  const {
    mutate: insertVideo,
    isLoading: isVideoUploadLoading,
    isError,
    data: insertedVideo,
  } = useInsert(`/user/${userId}/videos`);
  const { mutate: insertThumbnail, isLoading: isVideoThumbnailUploadLoading } =
    useInsert(
      `/user/${userId}/videos/${insertedVideo?.data.lastUploadedFileId}/thumbnail`
    );

  const [isFireUploadThumbnail, setIsFireUploadThumbnail] =
    useState<boolean>(false);

  const handleVideoTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCategoryIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setcategoryId(e.target.value);
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
    if (userId !== undefined && userId !== null) {
      if (
        video !== undefined &&
        video !== null &&
        videoThumbnail !== undefined &&
        videoThumbnail !== null
      ) {
        if (
          title !== undefined &&
          title !== null &&
          title !== "" &&
          description !== undefined &&
          description !== null &&
          description !== "" &&
          categoryId !== undefined &&
          categoryId !== null &&
          categoryId !== "Choisir une catégorie"
        ) {
          const videoForm = new FormData();
          videoForm.append("file", video);
          insertVideo({
            data: videoForm,
            options: {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              params: { title, description, categoryId },
            },
          });
          setIsFireUploadThumbnail(true);
        } else {
          setAlert("Veuillez remplir tous les champs");
          setTimeout(() => {
            setAlert("");
          }, 3000);
        }
      } else {
        setAlert("Veuillez choisir une video et une miniature");
        setTimeout(() => {
          setAlert("");
        }, 3000);
      }
    } else {
      setAlert("Vous devez être connecté pour publier une vidéo");
      setTimeout(() => {
        setAlert("");
      }, 3000);
    }
  };

  const saveThumbnail = useCallback(() => {
    if (videoThumbnail !== undefined && videoThumbnail !== null) {
      if (
        categoryId !== undefined &&
        categoryId !== null &&
        categoryId !== "Choisir une catégorie" &&
        description !== undefined &&
        description !== null &&
        title !== undefined &&
        title !== null
      ) {
        // As i dont want to invoke insertThumbnail function, after title, description or categoryId change,
        // i used a state to control the execution of the function
        if (isFireUploadThumbnail === true) {
          const thumbnailForm = new FormData();
          thumbnailForm.append("file", videoThumbnail);
          insertThumbnail({
            data: thumbnailForm,
            options: {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              params: { title, description, categoryId },
            },
          });
        }
        setIsFireUploadThumbnail(false);
      } else {
        setAlert("Veuillez remplir tous les champs");
        setTimeout(() => {
          setAlert("");
        }, 3000);
      }
    } else {
      setAlert("Veuillez choisir une miniature");
      setTimeout(() => {
        setAlert("");
      }, 3000);
    }
  }, [
    categoryId,
    description,
    insertThumbnail,
    isFireUploadThumbnail,
    title,
    videoThumbnail,
  ]);

  useEffect(() => {
    const user = tokenService.getUser();
    if (user && user.userId) {
      setUserId(user.userId);
    }

    // insert video thumbnail after video is inserted
    // Wait for video to be inserted then get the video id and insert the thumbnail
    if (
      insertedVideo?.data.lastUploadedFileId !== undefined &&
      insertedVideo?.data.lastUploadedFileId !== null &&
      insertedVideo?.data.lastUploadedFileId !== ""
    ) {
      saveThumbnail();
    }
  }, [insertedVideo?.data.lastUploadedFileId, saveThumbnail]);

  if (isError) {
    return <div>Une erreur est survenue</div>;
  }

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
              sx={{ width: "100% !important" }}
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
              sx={{ width: "100% !important" }}
              id="outlined-select-categoryId"
              select
              label="Catégorie"
              value={categoryId}
              onChange={handleCategoryIdChange}
            >
              {data?.data?.categories.map((categoryId: any) => {
                const { _id, name } = categoryId;
                return (
                  <MenuItem key={_id} value={_id}>
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
      {alert && (
        <Alert severity="error" className={classes.alert}>
          {alert}
        </Alert>
      )}
      <Button variant="contained" onClick={saveVideo}>
        Publier
      </Button>
      <LoadingBackdrop
        open={isVideoUploadLoading || isVideoThumbnailUploadLoading || false}
      />
    </div>
  );
};
