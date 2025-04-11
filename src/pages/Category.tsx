import { Stack } from "@mui/material";
import bg from '../assets/bg.jpg';
import CategoryHeader from "../components/Category.tsx/CategoryHeader";
import CategoryList from "../components/Category.tsx/CategoryList";
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
const Category = () => {
  return (
    <Stack sx={styles.root}  alignItems={'center'}>
        <CategoryHeader/>
        <CategoryList />
    </Stack>
  )
}

export default Category
