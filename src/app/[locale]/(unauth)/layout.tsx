'use client';

import { Box, CssBaseline } from '@mui/material';
import React from 'react';

// @ts-ignore
import Header from '@/components/Header';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <Box className="flex h-screen w-screen flex-col">
        <Header />
        <Box component="main" className="grow overflow-y-auto p-3">
          {props.children}
        </Box>
      </Box>
    </>
  );
}
