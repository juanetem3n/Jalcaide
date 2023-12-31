import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";

export function IconsTools() {
  return (
    <Box
      mt={15}
      sx={{ ml: "10%", p: 2, border: "2px solid green", width: "75%" }}
      borderRadius={5}
    >
      <Typography variant="h6" align="center">
        <b>Languages and Tools:</b>
      </Typography>
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        mt={5}
      >
        <Grid item>
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="bootstrap"
              width="40"
              height="40"
            />
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://www.w3schools.com/css/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width="40"
              height="40"
            />
          </a>
        </Grid>
        <Grid item>
          <a href="https://expressjs.com" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
              width="40"
              height="40"
            />
          </a>
        </Grid>
        <Grid item>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="40"
              height="40"
            />
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              width="40"
              height="40"
            />
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="40"
              height="40"
            />
          </a>
        </Grid>
        <Grid item>
          <a href="https://jestjs.io" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
              alt="jest"
              width="40"
              height="40"
            />
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://www.microsoft.com/en-us/sql-server"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
              alt="mssql"
              width="40"
              height="40"
            />
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql"
              width="40"
              height="40"
            />
          </a>
        </Grid>
        <Grid item>
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="40"
              height="40"
            />
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
              alt="postgresql"
              width="40"
              height="40"
            />
          </a>
        </Grid>
        <Grid item>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
            />
          </a>
        </Grid>
        <Grid item>
          <a href="https://redux.js.org" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              alt="redux"
              width="40"
              height="40"
            />
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
              alt="sqlite"
              width="40"
              height="40"
            />
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
              width="40"
              height="40"
            />
          </a>
        </Grid>
        <Grid item>
          <a href="https://webpack.js.org" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
              alt="webpack"
              width="40"
              height="40"
            />
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}
