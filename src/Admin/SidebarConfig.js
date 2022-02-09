import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'properties',
    path: '/admin/properties',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'admins',
    path: '/admin/admins',
    icon: getIcon(peopleFill)
  },
  {
    title: 'clients',
    path: '/admin/clients',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'comments',
    path: '/admin/comments',
    icon: getIcon(fileTextFill)
  },
];

export default sidebarConfig;
