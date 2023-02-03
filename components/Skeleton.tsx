import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

function Media(props: any) {
  const { skeletons } = props;
  const skeletonArray = Array.from(Array(skeletons).keys());
  return (
    <>
      {skeletonArray.map((item: any) => {
        return (
          <Card key={item} sx={{ maxWidth: 345 }} elevation={0}>
            <Skeleton
              animation="wave"
              variant="rectangular"
              sx={{ pt: "56.25%" }}
            />
            <CardContent>
              <React.Fragment>
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={10} width={300} />
              </React.Fragment>
            </CardContent>
            {/* <CardHeader
              avatar={
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              }
              subheader={<Skeleton animation="wave" height={10} width={300} />}
            /> */}
          </Card>
        );
      })}
    </>
  );
}

export default Media;
