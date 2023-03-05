import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

interface IProps {
  item: IPhoto;
}

export default function NewsItem({ item }: IProps) {
  const { src, photographer } = item;
  return (
    <Grid item xs={6} md={4}>
      <Card
        sx={{
          height: '100%',
        }}
      >
        <CardMedia
          image={src.medium}
          component="img"
          alt={photographer}
          title={photographer}
          sx={{ height: 140 }}
        />
        <CardContent>
          <Typography variant="h6" component="h3">
            Author: {photographer}
          </Typography>
          <Typography variant="body1">News: {photographer}.</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="text"
            // onClick={() =>
            //   setOrder({
            //     id: props.id,
            //     name: props.name,
            //     price: props.price,
            //   })
            // }
          >
            Not interested
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
