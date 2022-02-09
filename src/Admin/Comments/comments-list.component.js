import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { FirestoreService } from "../../Backend/Firebase/FirebaseServices/cloud-firestore.module";
import IconButton from "@mui/material/IconButton"

export function CommentsListComponent({ comments, setComments, setIsLoadingCommentsData }) {
    const firestore = new FirestoreService("/");
    const deleteComment = (commentId) => {
        firestore.delete("comments/" + commentId)
            .then(res => {
                let data = [];
                firestore.getAll()
                    .then(snapshot => {
                        for (let id in snapshot.val()) {
                            if (id == "comments") {
                                Object.keys(snapshot.val()[id])
                                    .map(key => {
                                        data.push({ ...snapshot.val()[id][key], id: key })
                                    });
                            }
                        }
                    })
                    .then(snapshot => setComments(data))
                    .then(snapshot => setIsLoadingCommentsData(false))
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err))
    }
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {
                comments.map((comment, i) => {
                    return (
                        <div key={Math.random()}>
                            <ListItem style={{ justifyContent: "space-between", display: "flex" }}>
                                <ListItemAvatar>
                                    <Avatar alt="avatar" src="/static/images/avatar/avatar_default.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={"Email:  " + comment.email}
                                    secondary={
                                        <React.Fragment>
                                            <br />
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {comment.name}
                                            </Typography>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className="text-primary"
                                                color="text.danger">
                                                {" — " + comment.comment}
                                            </Typography>
                                            <br />
                                            <br />
                                            {" — " + comment.phone}
                                            <br />
                                            {"Created On: -" + new Date(comment.dateCreate).toDateString()}
                                        </React.Fragment>
                                    }
                                />
                                <IconButton
                                    aria-label="more"
                                    onClick={() => deleteComment(comment.id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>
                            {
                                i !== comments.length - 1 && <Divider variant="inset" component="li" />
                            }
                        </div>
                    )
                })
            }
        </List >
    )
}
