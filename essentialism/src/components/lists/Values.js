import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// import { axiosWithAuth } from '../utils/axiosWithAuth'

const useStyles = makeStyles({
  root: {
    minWidth: 245,
    maxWidth: 245,
  },
});

const initialValue = [
  {
    value: "Weight Loss",
    description: "Improve your health with weight loss.",
    img:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    id: 1,
    isSelected: false,
  },
  {
    value: "Organization",
    description: "An organized room is an organized mind.",
    img:
      "https://images.pexels.com/photos/670723/pexels-photo-670723.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    id: 2,
    isSelected: false,
  },
  {
    value: "Reading",
    description: "For those who love to read or want to read more.",
    img:
      "https://images.pexels.com/photos/34075/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    id: 3,
    isSelected: false,
  },
  {
    value: "Writing",
    description: "Write down your thoughts.",
    img:
      "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    id: 4,
    isSelected: true,
  },
  {
    value: "Less Social Media",
    description: "Unplug from the Matrix.",
    img:
      "https://images.pexels.com/photos/17663/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    id: 5,
    isSelected: true,
  },
  {
    value: "Nutrition",
    description: "Increase mind and body performance.",
    img:
      "https://images.pexels.com/photos/8110/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    id: 6,
    isSelected: true,
  },
];

const Values = () => {
  const classes = useStyles();

  const [data, setData] = useState(initialValue);

  // useEffect(() => {
  //     axiosWithAuth()
  //         .get('/api/friends')
  //         .then(res => setValue(res.data))
  //         .catch(err => console.log(err))
  // }, [])

  const toggleItem = (dataID) => {
    setData(
      data.map((item) => {
        if (dataID === item.id) {
          return {
            ...item,
            isSelected: !item.isSelected,
          };
        }
        return item;
      })
    );
  };

  console.log("Values data", data);

  return (
    <div>
      <div style={{ padding: "6%" }}>
        <h3 style={{ color: "white" }}>Your Values</h3>
        <Grid
          container
          spacing={7}
          display="flex"
          justify="space-around"
          align="center"
        >
          {data.map((item) => {
            return (
              item.isSelected && (
                <Grid item xs key={item.id}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt={item.value}
                        height="220"
                        image={item.img}
                        title={item.value}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.value}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      {item.isSelected ? (
                        <Button
                          onClick={() => toggleItem(item.id)}
                          size="small"
                          color="primary"
                        >
                          Remove
                        </Button>
                      ) : (
                        <Button size="small" color="primary">
                          Add
                        </Button>
                      )}
                      {/* <Button size="small" color="primary">
          Add
        </Button>
        <Button size="small" color="primary">
          Remove
        </Button> */}
                    </CardActions>
                  </Card>
                </Grid>
              )
            );
          })}
        </Grid>
      </div>
      <div style={{ padding: "6%" }}>
        <h3 style={{ color: "white" }}>Add Additional Values</h3>
        <Grid
          container
          spacing={7}
          display="flex"
          justify="space-around"
          align="center"
        >
          {data.map((item) => {
            return (
              !item.isSelected && (
                <Grid item xs key={item.id}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt={item.value}
                        height="220"
                        image={item.img}
                        title={item.value}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.value}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      {item.isSelected ? (
                        <Button size="small" color="primary">
                          Remove
                        </Button>
                      ) : (
                        <Button
                          onClick={() => toggleItem(item.id)}
                          size="small"
                          color="primary"
                        >
                          Add
                        </Button>
                      )}
                      {/* <Button size="small" color="primary">
          Add
        </Button>
        <Button size="small" color="primary">
          Remove
        </Button> */}
                    </CardActions>
                  </Card>
                </Grid>
              )
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Values;
