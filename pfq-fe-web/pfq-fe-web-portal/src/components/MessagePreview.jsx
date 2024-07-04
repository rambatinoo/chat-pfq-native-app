import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const MessagePreview = ({ msg, category, setTalkingTo }) => {
  const handleClick = (from) => {
    setTalkingTo(from);
  };

  if (msg.category === category || category === "All") {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={() => handleClick(msg.from)}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {msg.body}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {msg.created_at}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
};