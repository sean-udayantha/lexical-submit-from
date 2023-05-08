import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { Grid, Typography } from "@mui/material";
import Editor from "./Editor";





const Form = () => {


  return (


<Grid   
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  padding={5}
  
  >
    <Box sx={{ maxWidth: 600,  backgroundColor:"#edf3ff",boxShadow: 15}} padding={5}>
    <Typography sx={{ fontFamily: "Quicksand-SemiBold", fontSize: "30px" }}>
            Submit form
    </Typography>
    <form >
      <TextField sx={{fontFamily:"Quicksand"}}
        id="Name"
        label="Your Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="Address"
        label="Address"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="Phone"
        label="Phone"
        variant="outlined"
        margin="normal"
        fullWidth
      />
           <Editor/>
      <Box
        sx={{
          display: "flex",
          mb: 2,
          paddingTop: "10px",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Button variant="contained" type="submit" sx={{ mt: 1, mr: 1, fontFamily:"Quicksand", background:"black" }}>
          SUBMIT
        </Button>
      </Box>
    </form>
  </Box>
</Grid>
  )
}

export default Form