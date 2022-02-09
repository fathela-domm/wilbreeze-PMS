import { sentenceCase } from 'change-case';
import React, { useState, useLayoutEffect } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from '../DashboardNavbar';
import DashboardSidebar from '../DashboardSidebar';
import { useStateValue } from "../../Backend/Contexts/state-provider.module";
import { FirestoreService } from "../../Backend/Firebase/FirebaseServices/cloud-firestore.module";
import { AdminsTableComponent as AdminsDataTableComponent } from "./admin-table.component";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
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

export default function User(props) {
    const [open, setOpen] = useState(false);
    const [{ company }, dispatch] = useStateValue();
    const [showCreateModal, setShowCreateModal] = useState(false);
    const firestore = new FirestoreService("/");
    const [rows, setRows] = useState([]);
    const [isLoadingRowsData, setIsLoadingRowsData] = useState(true);

    useLayoutEffect(() => {
        let data = [];
        firestore.getAll()
            .then(snapshot => {
                for (let id in snapshot.val()) {
                    if (id == "users") {
                        Object.keys(snapshot.val()[id])
                            .map(key => {
                                if (snapshot.val()[id][key]["isAdmin"])
                                    data.push({ ...snapshot.val()[id][key], id: key })
                            });
                    }
                }
            })
            .then(snapshot => setRows(data))
            .then(snapshot => setIsLoadingRowsData(false))
            .catch(err => console.error(err));
    }, []);

    return (
        <RootStyle >
            <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
            <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
            <MainStyle>
                <Page title={"Dashboard: Admins | " + company}>
                    <Container >
                        <Typography variant="h4" sx={{ mb: 5 }}>
                            Admins
                        </Typography>
                        <Stack
                            direction="row"
                            flexWrap="wrap-reverse"
                            alignItems="center"
                            justifyContent="flex-end"
                            sx={{ mb: 5 }}
                        >
                        </Stack>
                        <AdminsDataTableComponent rows={rows} setRows={setRows} isLoadingRowsData={isLoadingRowsData} setIsLoadingRowsData={setIsLoadingRowsData} />
                    </Container>
                </Page>
            </MainStyle>
        </RootStyle>
    )
}