import * as React from "react";
import { useRef, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import Checkbox from "@mui/material/Checkbox";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function RecipeReviewCard({
  id,
  isFavorite,
  date,
  title,
  shortDescription,
  longDescription,
  handleFavoriteCallback,
  maxWidth = 350,
}) {
  const addToFavoriteBtn = useRef("addToFavoriteBtn");
  const [isFavoriteBtn, setIsFavoriteBtn] = useState(isFavorite);

  useEffect(() => {
    console.log("isFavorite sdlfjdsk", isFavorite);
    if (isFavorite) {
      setIsFavoriteBtn(true);
    } else {
      setIsFavoriteBtn(false);
    }
  }, [isFavorite]);

  const handleAddToFavorite = (e) => {
    const isChecked = e.target.checked;
    setIsFavoriteBtn(isChecked);
    handleFavoriteCallback(e, id);
  };

  return (
    <Card sx={{ maxWidth: maxWidth, margin: 2 }}>
      <Link to={`/${id}`} style={{ textDecoration: "none" }}>
        <CardHeader
          action={<IconButton aria-label="settings"></IconButton>}
          title={title}
          subheader={date}
        />
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {shortDescription}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {longDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          ref={addToFavoriteBtn}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          onClick={handleAddToFavorite}
          name={`favorite-job-${id}`}
          checked={isFavoriteBtn ?? false}
        />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
