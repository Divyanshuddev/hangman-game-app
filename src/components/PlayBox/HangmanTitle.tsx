import { Stack, Typography } from "@mui/material"

const styles = {
    the: {
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
            sm:"1px black",
            xs:"1px black"
        },
        fontWeight: "bolder",
        fontFamily: "Berlin Sans FB",
        position: "absolute",
        left: "20%",
        background: "-webkit-linear-gradient(#6699ff,#ffffcc)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
    },
    game: {
        fontSize: {
            lg:40,
            md:40,
            sm:35,
            xs:35
        },
        color: "white",
        "-webkit-text-stroke": {
            lg:"2px black",
            md:"2px black",
            sm:"1px black",
            xs:"1px black"
        },
        fontWeight: "bolder",
        fontFamily: "Berlin Sans FB",
        position: "absolute",
        left: "58%",
        bottom:-14,
        background: "-webkit-linear-gradient(#6699ff,#ffffcc)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
    },
    hangman: {
        fontFamily: "Berlin Sans FB",
        fontSize: {
            lg:80,
            md:80,
            sm:70,
            xs:70
        },
        "-webkit-text-stroke": {
            lg:"3px black",
            md:"3px black",
            sm:"2px black",
            xs:"2px black"
        },
        color: "white",
        fontWeight: "bolder",
        background: "-webkit-linear-gradient(#cc33ff,#ffffcc)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
    }
}
const HangmanTitle = () => {
    return (
        <Stack position={'relative'}>
            <Typography sx={styles.the}>THE</Typography>
            <Typography sx={styles.hangman}>Hangman</Typography>
            <Typography sx={styles.game} >Game</Typography>
        </Stack>
    )
}

export default HangmanTitle
