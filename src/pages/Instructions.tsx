import { Button, Stack, Typography } from "@mui/material"
import bg from '../assets/bg.jpg';
import { useNavigate } from "react-router-dom";

const styles = {
    root: {
        backgroundImage: ` url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        width:"100%",
        height:{
            lg:"100vh",
            md:"100vh",
            sm:"120vh",
            xs:"120vh"
        },
        boxSizing:"border-box",
        padding:5
    },
    instructions: {
        fontFamily: "Berlin Sans FB",
        fontSize: {
            lg:80,
            md:80,
            sm:60,
            xs:60
        },
       "-webkit-text-stroke": {
            lg:"3px black",
            md:"3px black",
            sm:"0px black",
            xs:"0px black"
        },
        color: "white",
        fontWeight: "bolder",
        background: "-webkit-linear-gradient(#cc33ff,#ffffcc)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
    },
    steps: {
        fontSize:{
            lg:40,
            md:40,
            sm:35,
            xs:35
        },
        color: "white",
        "-webkit-text-stroke": {
            lg:"2px black",
            md:"2px black",
            sm:"0px black",
            xs:"0px black"
        },
        fontWeight: "bolder",
        fontFamily: "Berlin Sans FB",
        background: "-webkit-linear-gradient(#6699ff,#ffffcc)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
    },
    backButton:{
        width: {
            lg:"10%",
            md:"10%",
            sm:"50%",
            xs:"50%"
        },
        background: "linear-gradient(to bottom, #fd72fe 0%, #918ffd 100%)",
        fontSize: 25,
        borderRadius: 20,
        boxShadow: "1px 1px 10px black",
        fontFamily: "Berlin Sans FB",

    }
}
const Instructions = () => {
    const navigate = useNavigate();
  return (
    <Stack sx={styles.root} direction={'column'}  alignItems={'center'}>
      <Typography sx={styles.instructions}>Instructions</Typography>
      <Stack direction={'column'} spacing={2} alignItems={'center'}>
      <Typography sx={styles.steps}>- Pick Your Poison (Category)</Typography>
      <Typography sx={styles.steps}>- Guess the Word... Or Die Trying (JK... but Not Really)</Typography>
      <Typography sx={styles.steps}>- Don’t Let Him Down… Literally</Typography>
      <Typography sx={styles.steps}>- Win Like a Legend (or Pretend You Meant to Lose)</Typography>
      <Button variant="contained" sx={styles.backButton} onClick={()=>navigate('/')} >Back</Button>
      </Stack>
    </Stack>
  )
}

export default Instructions
