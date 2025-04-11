import { Stack } from "@mui/material";
import bg from '../assets/bg.jpg';
import { useLocation } from "react-router-dom";
import HangmanHeader from "../components/Hangman/HangmanHeader";
import HangmanQuiz from "../components/Hangman/HangmanQuiz";
import { useState } from "react";

const styles = {
    root: {
        backgroundImage: ` url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        width:"100%",
        height:"100vh"
    }
}
const Hangman = () => {
    const location = useLocation();
    const categoryName= location.state;
    const [progress,setProgress]=useState<number>(0);
    const handleProgress=()=>{
      setProgress(progress+5)
    }
  return (
    <Stack sx={styles.root} >
        <HangmanHeader categoryName={categoryName} progressStatus={progress} />
        <HangmanQuiz categoryName={categoryName} progress={handleProgress} />
    </Stack>
  )
}

export default Hangman
