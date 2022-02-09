import React from 'react';
import { useState, useLayoutEffect } from 'react';
// material
import { Container, Stack, Typography, Button, CircularProgress, Paper,  } from '@mui/material';
import Card from "@mui/material/Card"
// components
import Page from '../components/Page';
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from '../DashboardNavbar';
import DashboardSidebar from '../DashboardSidebar';
import { useStateValue } from "../../Backend/Contexts/state-provider.module";
import { CommentsListComponent } from './comments-list.component';
import { FirestoreService } from "../../Backend/Firebase/FirebaseServices/cloud-firestore.module";
import { useNavigate } from "react-router-dom";
import "../Properties/properties.component.css"

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',
});

const MainStyle = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
        paddingTop: APP_BAR_DESKTOP + 24,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    }
}));

export function CommentsComponent() {
    const [open, setOpen] = useState(false);
    const [{ company }, dispatch] = useStateValue();
    const firestore = new FirestoreService("/");

    const [comments, setComments] = useState([]);
    const [isLoadingCommentsData, setIsLoadingCommentsData] = useState(true);
    const navigate = useNavigate();

    useLayoutEffect(() => {
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
    }, []);
    return (
        <RootStyle >
            <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
            <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
            <MainStyle>
                <Page title={"Dashboard: Comments | " + company}>
                    <Container >
                        <div className="row col-sm-12" style={{ justifyContent: "space-between" }}>
                            <Typography variant="h4" sx={{ mb: 5 }}>
                                Comments
                            </Typography>
                            <Button
                                variant="contained"
                                onClick={() => navigate("/")}
                            >
                                Go Home
                            </Button>
                        </div>

                        <Stack
                            direction="row"
                            flexWrap="wrap-reverse"
                            alignItems="center"
                            justifyContent="flex-end"
                            sx={{ mb: 5 }}
                        >
                        </Stack>
                        <Container>
                            <Paper>
                                <Card style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                                    {
                                        !isLoadingCommentsData ? <CommentsListComponent comments={comments} setIsLoadingCommentsData={setIsLoadingCommentsData} setComments={setComments}/> : <div className="circular-progress"><CircularProgress style={{ zoom: 2.3 }} /></div>
                                    }
                                </Card>
                            </Paper>
                        </Container>
                    </Container>
                </Page>
            </MainStyle>
        </RootStyle>
    );
}
