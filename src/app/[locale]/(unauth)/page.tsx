'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { MoreHoriz } from '@mui/icons-material';
import { Box, Chip, Grid, InputBase, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { SearchIcon } from '@storybook/icons';
import Image from 'next/image';

import CategoryCard from '@/components/CategoryCard';
import ServiceCard from '@/components/ServiceCard';
import {
  getTopServiceCategories,
  getTopServiceProviders,
  getTopServices,
} from '@/utils/apiMock';

const SearchBar = () => {
  return (
    <Paper
      component="form"
      className="flex w-full bg-white"
      sx={{
        borderRadius: '1.5rem',
        boxShadow: 'md',
        alignItems: 'center',
        padding: 1,
      }}
    >
      <InputBase
        className="ml-2 flex-1"
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        sx={{
          pr: 1,
        }}
        endAdornment={<SearchIcon size={20} />}
      />
    </Paper>
  );
};

export default function Index() {
  const topServices = getTopServices();
  const topServiceCategories = getTopServiceCategories();
  const topServiceProviders = getTopServiceProviders();
  return (
    <Box>
      <Typography sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
        Your One-Stop Solution for Local Services
      </Typography>
      <Box>
        <SearchBar />
      </Box>
      <Stack direction="row" flexWrap="wrap" sx={{ gap: 1, mt: 2 }}>
        {topServices.map((service) => (
          <Chip
            key={service.name}
            label={service.name}
            clickable
            icon={
              <Image
                src={service.imageUrl}
                alt={service.name}
                width={24}
                height={24}
              />
            }
            sx={{
              backgroundColor: '#f5f9ff;',
              color: 'black',
              boxShadow: 3,
              '&:hover': {
                boxShadow: 6, // Increase shadow on hover
              },
              padding: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        ))}
      </Stack>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4, mb: 1 }}>
        Service Categories
      </Typography>
      <Stack direction="row" flexWrap="wrap" sx={{ gap: 2, mt: 2 }}>
        {topServiceCategories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            link={`/services/${category.id}`}
            imageUrl={category.imageUrl}
          />
        ))}
        <CategoryCard
          Icon={<MoreHoriz size={48} />}
          name="More"
          link="/services/categories"
          imageUrl="/assets/images/more.png"
        />
      </Stack>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4, mb: 1 }}>
        Top Services
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {topServiceProviders.map((service) => (
            <Grid item xs={12} sm={4} md={4} key={service.id}>
              <ServiceCard
                id={service.id}
                key={service.name}
                category="Home Repair"
                serviceName={service.name}
                title={service.title}
                description={service.description}
                contacts={service.phone}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
