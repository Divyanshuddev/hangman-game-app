import { Stack } from "@mui/material"
import bg from '../assets/bg.jpg';
import PlayBox from "../components/PlayBox/PlayBox";
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
const Home = () => {
    return (
        <Stack sx={styles.root} justifyContent={'center'} alignItems={'center'}>
            <PlayBox />
        </Stack>
    )
}

export default Home
