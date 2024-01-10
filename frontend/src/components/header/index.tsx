import {Box, Button, CircularProgress, Container, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStoriesThunk} from "../../redux/thunks";
import {addNews} from "../../redux/actions";
import {loadSelector, timeSelector} from "../../redux/selectors";

type TProps = {
    location: string,
    callback?: () => void
}

export const Header:FC<TProps> = ({location,callback}) => {
    const time = useSelector(timeSelector);
    const dispatch = useDispatch();
    const isLoad = useSelector(loadSelector);

    const updateHandle = () => {
        if (!isLoad) {
            dispatch(getStoriesThunk(addNews));
        }
    }
    return (
        <Box sx={{position: 'fixed', display: 'flex', width: '100%', bgcolor: 'white', zIndex: 21}}>
            <Container sx={{display: 'flex', justifyContent: 'space-between', padding: '25px 15px'}}>

                    {  isLoad ?
                        <CircularProgress />
                        : location === 'news' ?
                            <Button onClick={updateHandle} variant='contained'>
                                Update
                            </Button>
                         :
                            <Button sx={{width: '50px', height: '50px', borderRadius: "50%"}} onClick={() => callback ? callback() : null } variant='text'>
                                <ArrowBackIcon fontSize={'large'} />
                            </Button>
                    }
                <Typography variant="overline">
                    Last updated: <b>{time}</b>
                </Typography>
            </Container>
        </Box>

    )
}
