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
    minWidth: 225,
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
    isSelected: false,
  },
  {
    value: "Less Social Media",
    description: "Unplug from the Matrix.",
    img:
      "https://images.pexels.com/photos/17663/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    id: 5,
    isSelected: false,
  },
  {
    value: "Nutrition",
    description: "Increase mind and body performance.",
    img:
      "https://images.pexels.com/photos/8110/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    id: 6,
    isSelected: false,
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
      {/* <div style={{display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center", marginBottom: "4%", marginTop: "-2%"}}>
        <h3 style={{color: "white", marginRight: "2%"}}>Select at least three values</h3>
      <Button style={{color: "black", backgroundColor: "white"}} color="primary">Done</Button>
      </div> */}
    <div style={{display: "flex", flexDirection: "row-reverse", paddingTop: "2%"}}>
      <div style={{ marginTop: "3%", paddingBottom: "2%", paddingRight: "2%", paddingLeft: "2%", width: "50%"}}>
        <h3 style={{ color: "white", paddingBottom: "5%", paddingTop: "2%", textAlign: "center" }}>Your Values</h3>
        <Grid
          container
          spacing={7}
          display="flex"
          direction="column-reverse"
          justify="space-around"
          align="center"
        >
          {data.map((item) => {
            return (
              item.isSelected && (
                <Grid item xs key={item.id}>
                  <Card className={classes.root} style={{backgroundColor: "black"}}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt={item.value}
                        height="200"
                        image={item.img}
                        title={item.value}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" style={{color: "white"}}>
                          {item.value}
                        </Typography>
                        <Typography style={{color: "lightgray"}}
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
                        style={{color: "white"}}
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
      <div style={{ marginTop: "3%", paddingBottom: "2%", paddingRight: "2%", paddingLeft: "2%", width: "50%", borderRight: "white 2px solid" }}>
        <h3 style={{ color: "white", paddingBottom: "5%", paddingTop: "2%", textAlign: "center" }}>Value List</h3>
        <Grid
          container
          spacing={7}
          display="flex"
          direction="column"
          justify="space-around"
          align="center"
        >
          {data.map((item) => {
            return (
              !item.isSelected && (
                <Grid item xs key={item.id}>
                  <Card className={classes.root} style={{backgroundColor: "black"}}>
                    <CardActionArea>
                      <CardMedia
                        style={{filter: "grayscale(1)"}}
                        component="img"
                        alt={item.value}
                        height="200"
                        image={item.img}
                        title={item.value}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" style={{color: "white"}}>
                          {item.value}
                        </Typography>
                        <Typography style={{color: "lightgray"}}
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
                          style={{color: "white"}}
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
    </div>
  );
};

export default Values;
