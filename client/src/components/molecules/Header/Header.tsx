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
import { LanguageSwitcher } from '~/components/atoms/LanguageSwitcher';

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
              sx={{
                textAlign: 'center',
                color:
                  router.pathname === attributes?.path ? '#1976d2' : 'inherit',
                position: 'relative',
                // Underline effect for active path
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#1976d2',
                  transform:
                    router.pathname === attributes?.path
                      ? 'scaleX(1)'
                      : 'scaleX(0)',
                  transformOrigin: 'bottom right',
                  transition: 'transform 0.3s ease-out',
                },
                // Hover underline effect
                '&:hover::after': {
                  transform: 'scaleX(1)',
                  transformOrigin: 'bottom left',
                },
              }}
              onClick={() => handleNavigation(attributes?.path)}
            >
              <ListItemText primary={attributes?.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <LanguageSwitcher />
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
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
            }}
          >
            {menuItems.map(({ attributes }) => (
              <Button
                key={attributes?.path}
                sx={{
                  color: '#fff',
                  position: 'relative',
                  // Highlight the current path
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#fff',
                    transform:
                      router.pathname === attributes?.path
                        ? 'scaleX(1)'
                        : 'scaleX(0)',
                    transformOrigin: 'bottom right',
                    transition: 'transform 0.3s ease-out',
                  },
                  // Hover underline effect
                  '&:hover::after': {
                    transform: 'scaleX(1)',
                    transformOrigin: 'bottom left',
                  },
                }}
                onClick={() => handleNavigation(attributes?.path)}
              >
                {attributes?.label}
              </Button>
            ))}
            <LanguageSwitcher />
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
