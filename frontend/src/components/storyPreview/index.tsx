import {FC, useEffect, useState} from 'react';
import {ActiveStory, Story} from "../../types";
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography
} from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';
import {convertDate} from "../../helpers/converDate";
import {useSelector} from "react-redux";
import {avatarSelector, storySelector} from "../../redux/selectors";
import {createRandomColor} from "../../helpers/randomColor";
import {KeyboardArrowDown} from "@mui/icons-material";
import {Comments} from "../commentTree";


type TProps = {
    data: ActiveStory
}

export const StoryPreview:FC<TProps> = ({data}) => {
    const [content,setContent] = useState(data);
    const [open, setOpen] = useState(false);
    const avatars = useSelector(avatarSelector.bind(this, data.story.id));

    useEffect(() => {
        setContent(data)
    },[data])
    return (
        <Card>
            <CardHeader style={{textAlign: 'start'}} avatar={
                <Avatar sx={{bgcolor: avatars ? `${avatars}` : 'grey'}} arial-label="recipe">
                    {(content.story.by as string)[0].toUpperCase()}
                </Avatar>
            }
                title={content.story.by}
                subheader={convertDate(data.story.time,true)}
            />
            <CardContent style={{textAlign: 'left'}}>
                <Typography style={{paddingBottom: '20px'}} variant={'h4'} component={'h4'}>
                    {content.story.title}
                </Typography>
                <a target='_blank' style={{textDecoration: 'none', fontSize: '1.8rem',fontWeight: '700'}} href={`${content.story.url}`}>Read more</a>

            </CardContent>
            <ListItem style={{padding: 0}}>
                <ListItemButton onClick={() => setOpen(!open)}>
                    <ListItemText
                    primary={`Comments: ${content.comments.length}`}
                    primaryTypographyProps={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        lineHeight: 1,
                        mb: '5px'
                    }}
                    />
                    <KeyboardArrowDown
                     sx={{
                         transform: open ? 'rotate(-180deg)': 'rotate(0)',
                     }}
                    />
                </ListItemButton>
            </ListItem>
            {open && data.comments.length > 0 ? <Comments stories={content.comments} /> : null }
        </Card>
    )
}
