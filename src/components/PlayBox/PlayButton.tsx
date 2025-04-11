import { IconButton, Stack } from "@mui/material"
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { useNavigate } from "react-router-dom";
const styles={
    root:{
        background: "linear-gradient(to bottom, #fd72fe 0%, #918ffd 100%)",
        width:120,
        height:120,
        borderRadius:"50%",
         boxShadow:"1px 1px 10px black"
    },
    playIcon:{
        width:60,
        height:60,
        color:"white",
    }
}
const PlayButton = () => {
    const navigate=useNavigate();
  return (
    <Stack sx={styles.root} justifyContent={'center'} alignItems={'center'}>
      <IconButton  onClick={()=>navigate('/category')}>
        <PlayArrowRoundedIcon sx={styles.playIcon}   />
      </IconButton>
    </Stack>
  )
}

export default PlayButton
