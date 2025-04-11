import { LinearProgress, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
const styles = {
    category: {
        fontSize: 50,
        color: "white",
        fontFamily: "Berlin Sans FB",
        "-webkit-text-stroke": "2px black",
        fontWeight: "bolder",
        textShadow: "1px 1px 8px black"
    },
    root: {
        padding: 4
    },
    heartIcon: {
        width: 50,
        height: 50,
        color: "red",
    },
    progressBar: {
        backgroundColor: 'white',
        padding: 1,
        borderRadius: 10
    },
    categoryBox: {
        background: "-webkit-linear-gradient(#cc33ff,#ffffcc)",
        padding: 2,
        borderRadius: 3
    }
};
type HangmanHeaderProps = {
    categoryName: string;
    progressStatus:number;
}
const HangmanHeader: React.FC<HangmanHeaderProps> = ({ categoryName,progressStatus }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if(progressStatus===100)
        {
            setProgress(0)
        }
        else{
            setProgress(progressStatus)
        }
    }, [progressStatus]);
    return (
        <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}} justifyContent={'space-between'} alignItems={'center'} sx={styles.root} spacing={{lg:0,md:0,sm:5,xs:5}}>
            <Stack sx={styles.categoryBox}>
                <Typography sx={styles.category}>{categoryName}</Typography>
            </Stack>
            <Stack direction={'row'} width={{lg:"20%",md:"20%",sm:"100%",xs:"100%"}} alignItems={'center'} spacing={3}>
                <Stack width={'90%'} sx={styles.progressBar} >
                    <LinearProgress variant="determinate" color="secondary" value={progress} sx={{ height: 12, borderRadius: 5 }} />
                </Stack>
            </Stack>

        </Stack>
    )
}

export default HangmanHeader
