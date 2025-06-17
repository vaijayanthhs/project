import React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import GroupsIcon from '@mui/icons-material/Groups';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import logoImage from '../assets/tasks.png';
import ProjectAdmin from './ProjectAdmin';

// Navigation configuration
const NAVIGATION = [
  {
    kind: 'header',
    title: 'Admin',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'project',
    title: 'Project',
    icon: <ArticleIcon />,
    children: [
      {
        segment: 'add',
        title: 'Add',
        icon: <AddIcon />,
      },
      {
        segment: 'edit',
        title: 'Edit',
        icon: <EditIcon />,
      },
      {
        segment: 'view',
        title: 'View',
        icon: <VisibilityIcon />,
      }
    ],
  },
  {
    segment: 'teams',
    title: 'Teams',
    icon: <GroupsIcon />,
    children: [
        {
            segment: 'add',
          title: 'Add',
          icon: <AddIcon />,
        },
        {
          segment: 'edit',
          title: 'Edit',
          icon: <EditIcon />,
        },
        {
          segment: 'view',
          title: 'View',
          icon: <VisibilityIcon />,
        }   
  ]
  },
  {
    segment: 'tasks',
    title: 'Tasks',
    icon: <AssignmentTurnedInIcon />,
    children: [
      {
        segment:'create',
        title: 'Create',
        icon: <AddIcon/>
      },
      {
        segment:'edit',
        title: 'Edit',
        icon: <EditIcon/>

      },
        {
            segment:'view',
            title: 'View',
            icon: <VisibilityIcon/>
        }
    ]     
  }
];

// Theme configuration
const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Custom styled component
const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

// Router hook
function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => ({
    pathname,
    searchParams: new URLSearchParams(),
    navigate: (path) => setPathname(String(path)),
  }), [pathname]);

  return router;
}

// Admin component
function Admin({ window }) {
  const router = useDemoRouter('/dashboard');
  const demoWindow = window ? window() : undefined;

// Function to render the content based on the current route
const renderContent = () => {
  const basePath=router.pathname.split('/')[1];
    // Switch statement to determine which content to render based on the current route
    switch (basePath) {
    case 'project':
      return(
      <ProjectAdmin pathname={router.pathname}/>
    );
    case 'teams':
      return <h1>Teams</h1>;
    case 'tasks':
      return <h1>Tasks</h1>;
    default: return <h1>Welcome to the Admin Dashboard..Select an option from the sidebar </h1>;
    }
}
  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={{
        logo: <img src={logoImage} alt="Logo" />,
        title: 'Admin',
      }}
    >
      <DashboardLayout>
        <PageContainer title=''>
            {renderContent()}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}

export default Admin;