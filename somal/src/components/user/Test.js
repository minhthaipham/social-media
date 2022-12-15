import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Button,
  CardActionArea,
  CardActions,
  CardHeader,
} from "@mui/material";

const Test = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardHeader
          className="bg-gray-100"
          avatar={
            <Avatar
              src="https://i.pinimg.com/236x/1e/7e/93/1e7e933cd8bff079f341755865519304.jpg"
              className="cursor-pointer"
              //   onClick={handleGetUser}
            />
          }
          //   action={
          //     <IconButton
          //       aria-label="settings"
          //       //   onClick={handleClick}
          //       //   aria-controls={open ? "account-menu" : undefined}
          //       //   aria-haspopup="true"
          //       //   aria-expanded={open ? "true" : undefined}
          //     >
          //       <MoreVert />
          //     </IconButton>
          //   }
          //   title={posts?.creator?.fullName}
          //   subheader={moment(posts?.createdAt).fromNow()}
          title="Nguyễn Văn A"
          subheader="1 giờ trước"
        />
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/564x/4f/6f/61/4f6f61ef549a4315269715f5ab0c5469.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default Test;
