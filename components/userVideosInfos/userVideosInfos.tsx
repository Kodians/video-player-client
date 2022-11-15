import { useEffect } from "react";
import { List, ListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import videoIcon from "../../assets/images/video.svg";
import React from "react";
import { ActionPopover } from "./ActionPopover";
import Link from "next/link";
import tokenService from "../../services/token.service";
import { useInfiniteFetch } from "../../hooks/useInfiniteFetch";
import { VideoMetadataEditForm } from "../videoUploadForm/VideoMetadataEditForm";

const useStyles = makeStyles(() => ({
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "& >:nth-child(n+1)": {
      marginLeft: 20,
      padding: 10,
    },
    "& >:nth-child(1), & >:nth-child(2), & >:nth-child(5)": {
      width: "calc(100% / 100)",
    },
    "& >:nth-child(3), & >:nth-child(4)": {
      width: "calc(100% / 3)",
    },
  },
  editForm: {
    marginTop: 10,
  },
}));

const UserVideosInfos = () => {
  const classes = useStyles();

  const [userId, setUserId] = React.useState<string>();

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteFetch(`/user/${userId}/videos/metadata/info`, {
    enabled: !!userId,
    staleTime: Infinity,
    getNextPageParam: (_lastPage: any, pages: any) => {
      if (pages.length < 4) {
        return pages.length + 1;
      }
      return undefined;
    },
  });

  const [isShowingEditForm, setIsShowingEditForm] =
    React.useState<boolean>(false);
  const [videoToEditMetadata, setVideoToEditMetadata] = React.useState<any>();

  const handleClose = () => {
    setIsShowingEditForm(false);
  };

  useEffect(() => {
    const user = tokenService.getUser();
    if (user && user.userId) {
      setUserId(user.userId);
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <h2>{error instanceof Error && error.message}</h2>;
  }

  return (
    <>
      <List>
        {data?.pages.map((page: any) => {
          return page.data.map((video: any, index: any) => {
            const { id, videoId, title, description } = video;
            return (
              <>
                <ListItem key={title} className={classes.listItem} divider>
                  <p>{index + 1}</p>
                  <p>
                    <Link href={`/videos/${videoId}`}>
                      <a>
                        <Image
                          src={videoIcon}
                          layout="fixed"
                          width={20}
                          height={20}
                          alt="video.svg"
                        />
                      </a>
                    </Link>
                  </p>
                  <p>{title}</p>
                  <p>{description}</p>
                  <p>
                    <ActionPopover
                      videoId={videoId}
                      setIsShowingEditForm={setIsShowingEditForm}
                      setVideoToEditMetadata={setVideoToEditMetadata}
                    />
                  </p>
                </ListItem>

                {isShowingEditForm && videoToEditMetadata === videoId && (
                  <div className={classes.editForm}>
                    <Stack direction="row" justifyContent={"flex-end"}>
                      <IconButton
                        aria-label="delete"
                        size="medium"
                        onClick={handleClose}
                      >
                        <CloseIcon fontSize="inherit" />
                        Fermer
                      </IconButton>
                    </Stack>
                    <VideoMetadataEditForm
                      videoMetadata={{
                        title,
                        description,
                        userId,
                        videoId,
                        id,
                      }}
                      setIsShowingEditForm={setIsShowingEditForm}
                    />
                  </div>
                )}
              </>
            );
          });
        })}
        <ListItem sx={{ display: "flex", justifyContent: "center" }}>
          <div>{isFetching && isFetchingNextPage ? "Fetching..." : null}</div>
        </ListItem>
      </List>
      <button disabled={!hasNextPage} onClick={() => fetchNextPage()}>
        Load More
      </button>
    </>
  );
};

export default UserVideosInfos;
