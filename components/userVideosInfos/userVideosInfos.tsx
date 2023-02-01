import { useEffect, useState, useContext } from "react";
import { List, ListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import videoIcon from "../../assets/images/video.svg";
import React from "react";
import { ActionPopover } from "./ActionPopover";
import Link from "next/link";
import { useInfiniteFetch } from "../../hooks/useInfiniteFetch";
import { VideoMetadataEditForm } from "../videoUploadForm/VideoMetadataEditForm";
import { Store } from "../../utils/store";

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

let nbPageIndex = 0;
const UserVideosInfos = () => {
  const classes = useStyles();
  const {
    state: { userInfo },
  }: any = useContext(Store);
  const [userId, setUserId] = useState<string>();
  const [numberOfPages, setNumberOfPages] = useState<number>(4);

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
      if (pages.length < numberOfPages) {
        return pages.length + 1;
      }
      return undefined;
    },
  });

  const [isShowingEditForm, setIsShowingEditForm] = useState<boolean>(false);
  const [videoToEditMetadata, setVideoToEditMetadata] = useState<any>();

  const handleClose = () => {
    setIsShowingEditForm(false);
  };

  useEffect(() => {
    if (userInfo && userInfo.userId) {
      setUserId(userInfo.userId);
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <h2>{error instanceof Error && error.message}</h2>;
  }

  console.log(data?.pages);

  return (
    <>
      <List>
        {data?.pages.map((page: any, pageIndex: number) => {
          let nbPageIndex = 0;
          return page.data.map((video: any, index: any) => {
            nbPageIndex = pageIndex * numberOfPages + index + 1;
            const { id, videoId, title, description, categoryId } = video;
            return (
              <>
                <ListItem key={id} className={classes.listItem} divider>
                  <p>{nbPageIndex}</p>
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
                  <div>
                    <ActionPopover
                      videoId={videoId}
                      setIsShowingEditForm={setIsShowingEditForm}
                      setVideoToEditMetadata={setVideoToEditMetadata}
                    />
                  </div>
                </ListItem>

                {isShowingEditForm && videoToEditMetadata === videoId && (
                  <div className={classes.editForm}>
                    <Stack direction="row" justifyContent={"flex-end"}>
                      <IconButton
                        aria-label="delete"
                        size="medium"
                        onClick={handleClose}
                      >
                        <CloseIcon fontSize="inherit" color="error" />
                      </IconButton>
                    </Stack>
                    <VideoMetadataEditForm
                      videoMetadata={{
                        title,
                        description,
                        userId,
                        videoId,
                        id,
                        categoryId,
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
