import { List, ListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import videoIcon from "../../assets/images/video.svg";
import React from "react";
import { ActionPopover } from "./ActionPopover";
import Link from "next/link";

const useStyles = makeStyles(() => ({
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    minWidth: 400,
    "& >:nth-child(n+1)": {
      marginLeft: 20,
    },
  },
}));
const userVideosInfos = [
  {
    id: 1,
    title: "This is a Video 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "This is a Video 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "This is a Video 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "This is a Video 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    title: "This is a Video 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    title: "This is a Video 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 7,
    title: "This is a Video 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    title: "This is a Video 8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 9,
    title: "This is a Video 9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 10,
    title: "This is a Video 10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const UserVideosInfos = () => {
  const classes = useStyles();
  return (
    <List>
      {userVideosInfos.map((video) => {
        return (
          <ListItem key={video.id} className={classes.listItem} divider>
            <p>{video.id}</p>
            <p>
              <Link href={"/"}>
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
            <p>{video.title}</p>
            <p>{video.description}</p>
            <p>
              <ActionPopover />
            </p>
          </ListItem>
        );
      })}
    </List>
  );
};

export default UserVideosInfos;
