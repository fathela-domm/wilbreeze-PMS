import { useState } from 'react';
// material
import { Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  ProductList,
} from '../components/_dashboard/products';
//
import PRODUCTS from '../_mocks_/products';
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from '../layouts/dashboard/DashboardNavbar';
import DashboardSidebar from '../layouts/dashboard/DashboardSidebar';
import { useStateValue } from "../../Backend/Contexts/state-provider.module";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
  marginTop: "-200px"
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
  const [{ company }, dispatch] = useStateValue()

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle>
        <Page title={"Dashboard: Properties | " + company}>
          <Container >
            <div className="row col-sm-12" style={{ justifyContent: "space-between" }}>
              <Typography variant="h4" sx={{ mb: 5 }}>
                Properties
              </Typography>
              <button className="btn btn-primary">New Property</button>
            </div>

            <Stack
              direction="row"
              flexWrap="wrap-reverse"
              alignItems="center"
              justifyContent="flex-end"
              sx={{ mb: 5 }}
            >
            </Stack>

            <ProductList products={PRODUCTS} />
          </Container>
        </Page>
      </MainStyle>
    </RootStyle>
  );
}
