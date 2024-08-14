'use client';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface CategoryCardProps {
  Icon: React.ReactNode;
  name: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ Icon, name, link }) => {
  return (
    <Link href={link} passHref>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 1,
        }}
      >
        {Icon}
        <Typography>{name}</Typography>
      </Box>
    </Link>
  );
};

export default CategoryCard;
