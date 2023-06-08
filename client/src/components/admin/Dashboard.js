import * as React from 'react';
import './Dashboard.css';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

export default function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [isSubMenuOpen, setSubMenuOpen] = React.useState(false);

  const handleSubMenuToggle = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };
  const handleProduct = () => { };
  const mainItems = [
    {
      icon: <CategoryIcon />,
      text: "Catalog",
      onClick: handleSubMenuToggle,
      subItems: [
        { icon: <ShoppingCartIcon />, text: "Product", onClick: handleProduct },
      ],
    },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>

        <Link to='/Dashboard' className='routerLinks'>
          <ListItem disablePadding button onClick={mainItems.onClick}>
            <ListItemIcon>{mainItems[0].icon}</ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>
        </Link>
        {mainItems.map((mainItem, mainIndex) => (
          <div key={mainIndex}>
            <ListItem disablePadding button onClick={mainItem.onClick}>
              <ListItemIcon>{mainItem.icon}</ListItemIcon>
              <ListItemText primary={mainItem.text} />
            </ListItem>
            {isSubMenuOpen && mainItem.subItems.length > 0 && (
              <List component="div" disablePadding>
                {mainItem.subItems.map((subItem, subIndex) => (
                  <ListItem disablePadding key={subIndex}>
                    <Link to='/Dashboard/products' className='routerLinks'>
                      <ListItemButton onClick={subItem.onClick}>
                        <ListItemIcon>{subItem.icon}</ListItemIcon>
                        <ListItemText primary={subItem.text} />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                ))}
              </List>
            )}
          </div>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' ,height: '100%'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
