import { Navigate, Route } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import Login from './pages/login';
import Register from './pages/register';
import Properties from './Properties/properties.component';
import User from './Clients/clients.component';
import AdminUser from './Admins/admin.component';
import NotFound from './pages/Page404';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import { CommentsComponent } from "./Comments/comments.component";

export const adminRoutes = [
  {
    path: '*', element: <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Navigate to="/404" replace />
    </ThemeConfig>
  },
  {
    path: '/admin/properties', element: <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <DashboardLayout />
      <Properties />
    </ThemeConfig>
  },

  {
    path: '404', element: <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <NotFound />
    </ThemeConfig>
  },
  {
    path: '/admin/admins', element: <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <AdminUser />
    </ThemeConfig>
  },
  {
    path: '/admin/clients', element: <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <User />
    </ThemeConfig>
  }, {
    path: '/admin/comments', element: <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <CommentsComponent />
    </ThemeConfig>
  }
]