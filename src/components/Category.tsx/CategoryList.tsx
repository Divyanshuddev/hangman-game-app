import { Badge, Button, Grid, Stack, } from "@mui/material"
import category from '../formatted_category_words.json'
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const styles = {
    root: {
        width: {
            lg:"50%",
            md:"50%",
            sm:"100%",
            xs:"100%"
        },
        height: 500,
        boxSizing: "border-box",
        padding: 2,
        "::-webkit-scrollbar ": {
            width: "12px",
            height: "12px"
        },
        "::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            borderRadius: " 10px"
        },
        "::-webkit-scrollbar-thumb": {
            background: "#ff3399",
            borderRadius: "10px",
            border: "2px solid #f1f1f1"
        },
        marginLeft: "10rem !important"

    },
    button: {
        backgroundColor: "#2463FF",
        padding: 5,
        boxSizing: "border-box",
        width: "100%",
        borderRadius: 10,
        fontFamily: "Berlin Sans FB",
        fontSize: 20,
        boxShadow: "1px 1px 8px black"
    },
    selected: {
        width: "50%",
        borderRadius: 12,
    },
    correctIcon: {
        backgroundColor: " #33cc33",
        color: "white",
        width: 25,
        height: 25,
        borderRadius: "50%",
    },
    playButton: {
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
const CategoryList = () => {
    const [invisible, setInvisible] = useState<{ categoryTemp: string }>({ categoryTemp: "" });
    const navigate=useNavigate();
    return (
        <Stack direction={'column'} spacing={5} alignItems={'center'} width={'100%'} >
            <Grid container sx={styles.root} spacing={3} overflow={'auto'} alignSelf={'center'} >
                {
                    category.map((data, index) => {
                        return (
                            <Grid size={{lg:6,md:6,sm:12,xs:12}} key={index} >
                                <Badge badgeContent={<CheckIcon sx={styles.correctIcon} />} sx={styles.selected} invisible={!(data.category === invisible.categoryTemp)}>
                                    <Button variant="contained" sx={styles.button} onClick={() => setInvisible({ categoryTemp: data.category })}>
                                        {data.category}
                                    </Button>
                                </Badge>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Button variant="contained" sx={styles.playButton} disabled={invisible.categoryTemp === ""} onClick={()=>navigate('/hangman',{state:invisible.categoryTemp})}>Play</Button>
        </Stack>
    )
}

export default CategoryList
