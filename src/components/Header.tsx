'use client';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Drawer, IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const drawerWidth = 140;

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [container, setContainer] = useState<any>(undefined);

  React.useEffect(() => {
    setContainer(window !== undefined ? () => window.document.body : undefined);
  }, []);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className=" flex flex-col gap-4 p-5">
      <Link href="/">
        <Button color="inherit">Home</Button>
      </Link>
      <Link href="/about">
        <Button color="inherit">About</Button>
      </Link>
      <Link href="/singIn">
        <Button color="inherit">Sign In</Button>
      </Link>
      <Link href="/sinUp">
        <Button color="inherit">Sign Up</Button>
      </Link>
    </Box>
  );

  return (
    <Box component="header" sx={{ display: 'flex' }}>
      <AppBar position="relative" color="transparent">
        <Box className="flex flex-1 justify-between bg-transparent  pl-5 pt-5">
          <Link href="/">
            <Image
              src="/assets/images/crowdin-dark.png"
              alt="Crowdin"
              width={260}
              height={224}
            />
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link href="/about">
              <Button color="inherit">About</Button>
            </Link>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon height={24} width={24} />
          </IconButton>
        </Box>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            backgroundColor: '#f5f9ff',
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
