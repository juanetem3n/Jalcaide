import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
import { FormatItalic } from "@mui/icons-material";
import Avatar from "@mui/joy/Avatar";
import logo from "../pics/1.jpg"



export function CenteredText() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={4} alignItems="center">
          <Avatar alt="Juan" src={logo} sx={{ width: "60%", height: "60%" }} />
        </Grid>
        <Grid item xs={6} justifyContent="center" alignItems="center" mt={5}>
          <Typography variant="body1" fontStyle="normal" fontSize={17}>
            <h2>
              <b>¡Hola, soy Juan! 👋</b>
            </h2>
            Analista de Sistemas, Sys Admin y Desarrollador Fullstack MERN
            Freelance y Apasionado por la Tecnología.
            <br />
            Soy un profesional apasionado por la tecnología con una amplia
            experiencia en el mundo de la informática. Mi enfoque principal se
            centra en tres áreas principales:
            <br />
            <b>Desarrollo Fullstack MERN:</b>{" "}
            <i>
              Mi experiencia en el desarrollo de aplicaciones web utilizando
              tecnologías MERN (MongoDB, Express.js, React y Node.js) me permite
              crear soluciones robustas y escalables que satisfacen las
              necesidades de mis clientes.
            </i>
            <br />
            <b>Sys Admin y Analista de Sistemas:</b>
            <i>
              {" "}
              Como Sys Admin, me encargo de mantener sistemas informáticos
              eficientes y seguros. Además, como Analista de Sistemas, estoy
              constantemente buscando formas de optimizar los procesos y mejorar
              la eficiencia de las organizaciones.
            </i>
            <br />
            <b>DevOps, Cloud y Cyberseguridad:</b>
            <i>
              {" "}
              Estoy en un viaje constante de aprendizaje en áreas vitales como
              DevOps, Programación, Cloud y Cyberseguridad. Creo en mantenerme
              actualizado con las últimas tendencias y prácticas para garantizar
              la seguridad y el rendimiento de los sistemas que gestiono.
            </i>
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={4} justifyContent="center" alignItems="center" mt={15}>
        <Typography variant="body1" align="center">
          <b>Algunos de mis proyectos fullstack!👇</b>
        </Typography>
      </Grid>
    </Grid>
  );
}

