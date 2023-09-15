import { InputLabel, Input } from "@mui/material";
import { FormHelperText, MenuItem, Select } from "@mui/material";
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

export function FormularioContacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, message);
  };

  return (
    <Box
      mt={15}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          p: 2,
          border: "2px solid green",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: 5,
        }}
      >
        <Typography variant="h4" align="center" mb={3}>
          <b>Send me an E-mail!</b>
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={3}
            direction="column"
            justifyContent="center"
          >
            <Grid>
              <FormControl margin="dense" sx={{ width: "100%" }}>
                <InputLabel>Name or Company</InputLabel>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                />
                <FormHelperText id="name"></FormHelperText>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl margin="dense" sx={{ width: "100%" }}>
                <InputLabel>Email</InputLabel>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <FormHelperText id="email"></FormHelperText>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl margin="dense" sx={{ width: "100%" }}>
                <InputLabel>Message</InputLabel>
                <TextareaAutosize
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleMessageChange}
                  rows={5}
                />
                <FormHelperText id="message"></FormHelperText>
              </FormControl>
            </Grid>
            <Grid>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}
