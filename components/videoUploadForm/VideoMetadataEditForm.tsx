import React, { useState, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Grid, TextareaAutosize, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Alert from "@mui/material/Alert";
import { useFetch } from "../../hooks/useFetch";
import { useInsert } from "../../hooks/useInsert";
import { useEdit } from "../../hooks/useEdit";
import { useQueryClient } from "react-query";

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
  const queryClient = useQueryClient();
  const { id, title, description, userId, videoId } = videoMetadata;
  const [metadata, setMetadata] = useState<any>({
    title,
    description,
    categoryId: "Choisir une catégorie",
    thumbnail: null,
  });

  const [alert, setAlert] = useState<string>();

  const { mutate: editVideoMetadataInfo } = useEdit(
    `/user/${userId}/videos/${videoId}`,
    {
      onSuccess: () => {
        setAlert("Les informations ont été modifiées avec succès");
        setTimeout(() => {
          setAlert("");
        }, 3000);
        // get all query keys
        const queryKeys = queryClient.getQueryCache().findAll();
        // find the query key that includes the userId
        const queryKey = queryKeys.find((key: any) => {
          if (key.queryKey === undefined) {
            return false;
          }

          if (typeof key.queryKey === "string") {
            return key.queryKey.includes(userId as string);
          }

          if (typeof key.queryKey === "object") {
            return key.queryKey[0].includes(userId as string);
          }

          return false;
        });

        // invalidate the query key
        queryClient.invalidateQueries(queryKey?.queryKey);
      },
      onError: () => {
        setAlert("Une erreur est survenue");
      },
    }
  );
  const { mutate: changeVideoThumbnail } = useInsert(
    `/user/${userId}/videos/${videoId}/thumbnail/${id}`,
    {
      onSuccess: () => {
        setAlert("La miniature a été modifiée avec succès");
        setTimeout(() => {
          setAlert("");
        }, 3000);
        // get all query keys
        const queryKeys = queryClient.getQueryCache().findAll();
        // find the query key that includes the userId
        const queryKey = queryKeys.find((key: any) => {
          if (key.queryKey === undefined) {
            return false;
          }

          if (typeof key.queryKey === "string") {
            return key.queryKey.includes(userId as string);
          }

          if (typeof key.queryKey === "object") {
            return key.queryKey[0].includes(userId as string);
          }

          return false;
        });

        // invalidate the query key
        queryClient.invalidateQueries(queryKey?.queryKey);
      },
      onError: () => {
        setAlert("Une erreur est survenue");
      },
    }
  );

  const { data: categories }: any = useFetch("/categories", {
    staleTime: 300000,
    refetchOnMount: true,
    select: (data: any) => {
      return data.data.categories;
    },
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.name === "thumbnail") {
      // cast event target to HTMLInputElement to access files
      const target = e.target as HTMLInputElement;
      setMetadata({ ...metadata, [e.target.name]: target.files![0] });
    } else {
      setMetadata({ ...metadata, [e.target.name]: e.target.value });
    }
  };

  const editVideoMetadata = async () => {
    const { title, description, categoryId, thumbnail } = metadata;
    try {
      if (
        categoryId !== "Choisir une catégorie" &&
        categoryId !== "" &&
        categoryId !== undefined &&
        title !== "" &&
        title !== undefined &&
        description !== "" &&
        description !== undefined &&
        (thumbnail === null || thumbnail === undefined)
      ) {
        editVideoMetadataInfo({
          data: { ...metadata },
          options: {
            headers: {
              "Content-Type": "application/json",
            },
          },
        });
      } else if (
        thumbnail !== null &&
        thumbnail !== undefined &&
        categoryId !== "Choisir une catégorie" &&
        categoryId !== "" &&
        categoryId !== undefined &&
        title !== "" &&
        title !== undefined &&
        description !== "" &&
        description !== undefined
      ) {
        const formData = new FormData();
        formData.append("file", thumbnail);
        changeVideoThumbnail({
          data: formData,
          options: {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            params: { title, description, categoryId },
          },
        });
      } else {
        setAlert("Veuillez remplir tous les champs");
        setTimeout(() => {
          setAlert("");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
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
          <Grid item xs={12} sm={4}>
            <TextField
              className={classes.textFields}
              sx={{ width: "100% !important" }}
              id="outlined-multiline-flexible"
              label="Titre de la vidéo"
              maxRows={4}
              name="title"
              value={metadata.title}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
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
              type="file"
              name="thumbnail"
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
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
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                handleChange(e)
              }
            />
          </Grid>
        </Grid>
      </Grid>
      {alert && (
        <Alert severity="error" className={classes.alert}>
          {alert}
        </Alert>
      )}
      <Button variant="contained" color="primary" onClick={editVideoMetadata}>
        Enregistrer
      </Button>
    </div>
  );
};
