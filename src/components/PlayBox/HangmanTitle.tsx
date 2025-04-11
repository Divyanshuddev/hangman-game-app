import { Stack, Typography } from "@mui/material"

const styles = {
    the: {
        fontSize:{
            lg:40,
            md:40,
            sm:30,
            xs:30
        },
        color: "white",
        "-webkit-text-stroke": "2px black",
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
            sm:30,
            xs:30
        },
        color: "white",
        "-webkit-text-stroke": "2px black",
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
            sm:60,
            xs:60
        },
        "-webkit-text-stroke": "3px black",
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
