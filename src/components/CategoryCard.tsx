'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CategoryCardProps {
  Icon?: React.ReactNode;
  name: string;
  link: string;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  Icon,
  name,
  link,
  imageUrl,
}) => {
  return (
    <Link href={link} passHref>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 1,
          textAlign: 'center',
          // boxShadow: 3,
          borderRadius: 5,
          height: '100%',
        }}
      >
        <Box>
          {Icon || <Image src={imageUrl} alt={name} width={48} height={48} />}
        </Box>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          {name}
        </Typography>
      </Box>
    </Link>
  );
};

export default CategoryCard;
