import { Typography } from "@mui/material"

const styles={
    root: {
        fontFamily: "Berlin Sans FB",
        fontSize: {
          lg:80,
          md:80,
          sm:40,
          xs:40
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
    }
}
const CategoryHeader = () => {
  return (
    <Typography sx={styles.root}>Pick a Category</Typography>
  )
}

export default CategoryHeader
