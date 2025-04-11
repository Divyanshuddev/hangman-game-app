import { Button, Stack } from "@mui/material"
import HangmanTitle from "./HangmanTitle"
import PlayButton from "./PlayButton"
import { useNavigate } from "react-router-dom"
const styles = {
    root: {
        background: "linear-gradient(to bottom, #0099ff 26%, #0d1f86 100%)",
        borderRadius: 10,
        width: {
            lg:"25%",
            md:"25%",
            sm:"80%",
            xs:"80%"
        },
        height: 300,
        boxShadow: "1px 1px 10px black"
    },
    title: {
        position: "absolute",
        top: -80,
    },
    button: {
        position: "absolute",
        bottom: 20,
        color: "white",
        fontFamily: "Berlin Sans FB",
        fontSize: 18,
        borderRadius: 20,

    }
}
const PlayBox = () => {
    const navigate=useNavigate();
    return (
        <Stack sx={styles.root} position={'relative'} justifyContent={'center'} alignItems={'center'}>
            <Stack sx={styles.title}>
                <HangmanTitle />
            </Stack>
            <PlayButton />
            <Button sx={styles.button} variant="contained" onClick={()=>navigate('/instructions')}>How to play</Button>
        </Stack>
    )
}

export default PlayBox
