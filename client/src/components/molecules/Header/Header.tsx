import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { HeaderProps } from './Header.props';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

export const Header: React.FC<HeaderProps> = ({ menuItems, window }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigation = (path?: string) => {
    if (!path) return;
    router.push(path);
    setMobileOpen(false); // Close the drawer on mobile after navigation
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        Anthony Guido
      </Typography>
      <Divider />
      <List>
        {menuItems.map(({ attributes }) => (
          <ListItem key={attributes?.path} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => handleNavigation(attributes?.path)}
            >
              <ListItemText primary={attributes?.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component='nav'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left-aligned Logo or Name */}
          <Button onClick={() => handleNavigation('/')}>
            <Typography variant='h6' sx={{ color: '#fff' }}>
              Anthony Guido
            </Typography>
          </Button>

          {/* Desktop Menu Items */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {menuItems.map(({ attributes }) => (
              <Button
                key={attributes?.path}
                sx={{ color: '#fff' }}
                onClick={() => handleNavigation(attributes?.path)}
              >
                {attributes?.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon on the Right */}
          <Box sx={{ ml: 'auto', display: { xs: 'block', md: 'none' } }}>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='end'
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile View */}
      <nav>
        <Drawer
          anchor='right'
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 300,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};
