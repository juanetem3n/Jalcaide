import logo from "../pics/globe.jpg";
import logo2 from "../pics/exootaku.jpg";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
import Avatar from "@mui/joy/Avatar";

//www.youtube.com/watch?v=-pm-qPqNqgY   -> video del portfolio, bigote!!! 2:23:00 explica funcion de texto a la derecha, lo que va a recibir por porps el componente

const TextToTheRight = (props) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={3}
      mt={15}
      mb={15}
    >
      <Grid item xs alignItems="center" justifyContent="center">
        <img width="50%" src={logo2} alt="Esto no es una imagen" />
      </Grid>
      <Grid item xs={6}>
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs>
            <Typography variant="h6">
              <b>Countries & Activities - Proyecto Individual SoyHenry</b>
            </Typography>
            </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              - Construi una App utlizando React, Redux, Node, Express y
              Sequelize. Con la API gratuita de REST Countries, lleno una base
              de datos hecha con Postgres y renderizo informacion de distintos
              paises con filtros y ordenamientos combinables, ademas de un CRUD
              de actividades turisticas para realizar por pais-
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
const TextToTheLeft = (props) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={3}
      mt={15}
      mb={15}
    >
      <Grid item xs>
        <Grid container direction="column">
          <Grid item xs>
            <Typography variant="h6">
              <b>Countries & Activities - Proyecto Individual SoyHenry</b>
            </Typography>
          </Grid>
          <Grid item xs={12}alignItems="">
            <Typography variant="body1">
              - Construi una App utlizando React, Redux, Node, Express y
              Sequelize. Con la API gratuita de REST Countries, lleno una base
              de datos hecha con Postgres y renderizo informacion de distintos
              paises con filtros y ordenamientos combinables, ademas de un CRUD
              de actividades turisticas para realizar por pais-
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs alignItems="center" justifyContent="center" ml={10}>
        <Avatar
          src={logo}
          alt="Esto no es una imagen"
          sx={{ width: 300, height: 300 }}
        />
      </Grid>
    </Grid>
  );
};

const TextToTheRigthLast = (props) => {
  <Grid container direction="row" ml={10} mt={20}>
    <Grid item xs>
      <img
        width="40%"
        src={logo}
        alt="Esto no es una imagen"
         />
    </Grid>
    <Grid item xs></Grid>
  </Grid>;
};

export function TextWithImage(props) {
  return props.TextToTheRight ? <TextToTheRight /> : <TextToTheLeft />;
}
