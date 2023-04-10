import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const Post = () => {
  return (
    <div>
      <Card sx={{ margin: 3 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                width: 35,
                height: 35,
                cursor: "pointer",
              }}
              src="https://www.linkpicture.com/q/aswingt65.jpg"
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Aswin George Thomas"
          subheader="25 February, 2023"
        />
        <CardMedia
          component="img"
          image="https://westobserver.com/wp-content/uploads/2022/12/221218143136-lionel-messi-world-cup-trophy-kiss-121822-full-169.jpg"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            “Leo Messi’s publication in the World Cup is now the most ‘liked’ in
            the history of Instagram. WhatsApp also reached a record of 25
            million messages per second during the final,” Zuckerberg announced
            on Tuesday via an Instagram post.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>

      <Card sx={{ margin: 3 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                width: 35,
                height: 35,
                cursor: "pointer",
              }}
              src="https://www.linkpicture.com/q/aswingt65.jpg"
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Aswin George Thomas"
          subheader="25 February, 2023"
        />
        <CardMedia
          component="img"
          image="https://static.tnn.in/photo/msid-96998811,imgsize-491555,width-100,height-200,resizemode-75/96998811.jpg"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            ''We have got back the original Virat Kohli'. He is at his best now,
            he is in the right frame of mind.' The tough times he has gone
            through will only make him a better player and a stronger
            personality.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>

      <Card sx={{ margin: 3 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                width: 35,
                height: 35,
                cursor: "pointer",
              }}
              src="https://www.linkpicture.com/q/aswingt65.jpg"
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Aswin George Thomas"
          subheader="25 February, 2023"
        />
        <CardMedia
          component="img"
          image="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6f24e7f9fff8f0ae/63354dd2877dac3e2e0b9a10/GettyImages-1243555433.jpg"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Cristiano Ronaldo has been urged to “do himself a favour” and
            retire, with Antonio Cassano telling the Manchester United star he
            has reached the end.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>

      <Card sx={{ margin: 3 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                width: 35,
                height: 35,
                cursor: "pointer",
              }}
              src="https://www.linkpicture.com/q/aswingt65.jpg"
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Aswin George Thomas"
          subheader="25 February, 2023"
        />
        <CardMedia
          component="img"
          image="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202302/adani4_0-sixteen_nine.jpg?size=948:533"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Adani Group is looking to preserve cash as Hindenburg report wiped
            off over half of the m-cap of the conglomerate's listed firms, says
            the report
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>

      <Card sx={{ margin: 3 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                width: 35,
                height: 35,
                cursor: "pointer",
              }}
              src="https://www.linkpicture.com/q/aswingt65.jpg"
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Aswin George Thomas"
          subheader="25 February, 2023"
        />
        <CardMedia
          component="img"
          image="https://images.indianexpress.com/2023/01/Shahrukhkhan.jpg"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Actor Shah Rukh Khan‘s comeback vehicle Pathaan has brought cheer to
            his fans and, it seems, to the box office. As per reports, the film
            has already earned over Rs 50 crore in advance bookings for the
            first week. The superstar has chosen an out-and-out action thriller
            in Pathaan and this can very much be the inception of SRK 2.0.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
