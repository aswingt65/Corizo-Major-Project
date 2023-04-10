import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box position={"fixed"} width={350}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup
          max={5}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Avatar
            alt="Amitabh Bachchan"
            src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-49642,resizemode-1,msid-89427097/industry/healthcare/biotech/healthcare/medibuddy-ropes-in-amitabh-bachchan-as-brand-ambassador.jpg"
          />
          <Avatar
            alt="Elon Musk"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
          />
          <Avatar
            alt="MS Dhoni"
            src="https://images.mid-day.com/images/images/2021/jul/dhoni-july-seven_d.jpg"
          />
          <Avatar
            alt="Lionnel Messi"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
          />
          <Avatar
            alt="Christiano Ronaldo"
            src="https://imageio.forbes.com/specials-images/imageserve/627bd291633f3fbbcda36428/0x0.jpg?format=jpg&crop=2057,2059,x918,y85,safe&height=416&width=416&fit=bounds"
          />
          <Avatar
            alt="Mukesh Ambani"
            src="https://imageio.forbes.com/specials-images/imageserve/5c7d7829a7ea434b351ba0b6/0x0.jpg?format=jpg&crop=1837,1839,x206,y250,safe&height=416&width=416&fit=bounds"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={5} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://westobserver.com/wp-content/uploads/2022/12/221218143136-lionel-messi-world-cup-trophy-kiss-121822-full-169.jpg?tr=w-1200,h-900" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://static.tnn.in/photo/msid-96998811,imgsize-491555,width-100,height-200,resizemode-75/96998811.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6f24e7f9fff8f0ae/63354dd2877dac3e2e0b9a10/GettyImages-1243555433.jpg" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={5}>
          Latest Conversations
        </Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            b: "50",
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Ratan Tata"
                src="https://cdn2.storyasset.link/UnCJXa5InfQplDFEajN0hOKWgFY2/cbfe25decebe0416ed866fe97d75d6a0-ms-hmwktlhfye.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Ratan Tata"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Aswin George Thomas
                  </Typography>
                  {" — Hi, aswin how are you doing?"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Amitabh Bhachchan"
                src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-49642,resizemode-1,msid-89427097/industry/healthcare/biotech/healthcare/medibuddy-ropes-in-amitabh-bachchan-as-brand-ambassador.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Amitabh Bachchan"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Aswin George Thomas
                  </Typography>
                  {" — Should I arrange tickets of my next movie for you?"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
