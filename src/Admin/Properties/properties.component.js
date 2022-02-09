import { useState, useEffect, useLayoutEffect } from 'react';
// material
import { Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import CreatePropertyComponent from "./create-property.component";
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from '../DashboardNavbar';
import DashboardSidebar from '../DashboardSidebar';
import { useStateValue } from "../../Backend/Contexts/state-provider.module";
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { PropertiesDataTableComponent } from './properties-data-table.component';
import { FirestoreService } from "../../Backend/Firebase/FirebaseServices/cloud-firestore.module";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',
    marginTop: "-150px"
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

// ----------------------------------------------------------------------
export default function Properties() {
    const [open, setOpen] = useState(false);
    const [{ company }, dispatch] = useStateValue();
    const [showCreateModal, setShowCreateModal] = useState(false);
    const firestore = new FirestoreService("/");
    const [rows, setRows] = useState([]);
    const [isLoadingRowsData, setIsLoadingRowsData] = useState(true);

    const handleClick = (e) => {
        return setShowCreateModal(true);
    }

    useLayoutEffect(() => {
        let data = [];
        firestore.getAll()
            .then(snapshot => {
                for (let id in snapshot.val()) {
                    if (id == "properties") {
                        Object.keys(snapshot.val()[id])
                            .map(key => {
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
            <CreatePropertyComponent showCreateModal={showCreateModal} setRows={setRows} setShowCreateModal={setShowCreateModal} />
            <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
            <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
            <MainStyle>
                <Page title={"Dashboard: Properties | " + company}>
                    <Container >
                        <div className="row col-sm-12" style={{ justifyContent: "space-between" }}>
                            <Typography variant="h4" sx={{ mb: 5 }}>
                                Properties
                            </Typography>
                            <Button
                                variant="contained"
                                onClick={handleClick}
                                startIcon={<Icon icon={plusFill} />}
                            >
                                New property
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
                        <PropertiesDataTableComponent rows={rows} setRows={setRows} isLoadingRowsData={isLoadingRowsData} setIsLoadingRowsData={setIsLoadingRowsData} />
                    </Container>
                </Page>
            </MainStyle>
        </RootStyle>
    );
}
