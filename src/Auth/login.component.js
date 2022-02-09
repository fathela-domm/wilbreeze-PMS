import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Paper, Typography } from '@mui/material';
// layouts
import Page from '../Admin/components/Page';
import { MHidden } from '../Admin/components/@material-extend';
import { useStateValue } from "../Backend/Contexts/state-provider.module";
import firebase, { uiConfig } from "../Backend/Firebase/firebase.config";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const RootStyle = styled(Page)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex'
    }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
}))

export function LoginComponent(props) {
    const [{ company }, dispatch] = useStateValue()
    return (
        <RootStyle title={"Login | " + company}>
            <MHidden width="mdDown">
                <SectionStyle>
                    <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                        Hi, Welcome To {company}
                    </Typography>
                    <img src="/static/illustrations/illustration_login.png" alt="login" />
                </SectionStyle>
            </MHidden>

            <Container maxWidth="sm">
                <Paper>
                    <ContentStyle>
                        <Stack sx={{ mb: 5 }}>
                            <Typography variant="h4" style={{ textAlign: "center" }} gutterBottom>
                                Sign in
                            </Typography>
                            <Typography variant="p" style={{ textAlign: "center" }} gutterBottom>
                                Sign in or create an account with us today
                            </Typography>
                            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                        </Stack>
                    </ContentStyle>
                </Paper>
            </Container>
        </RootStyle >
    )
}
