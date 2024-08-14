'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { MoreHoriz } from '@mui/icons-material';
import { Box, Chip, InputBase, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { HomeIcon, SearchIcon } from '@storybook/icons';

import CategoryCard from '@/components/CategoryCard';
import ServiceCard from '@/components/ServiceCard';

import HomeRepair from '../../../icons/House-repair.svg';

const TopServices = [
  {
    name: 'Plumber',
    icon: HomeRepair,
  },
  {
    name: 'Electrician',
    icon: HomeRepair,
  },
  {
    name: 'Painter',
    icon: HomeRepair,
  },
  {
    name: 'Carpenter',
    icon: HomeRepair,
  },
  {
    name: 'Maid',
    icon: HomeRepair,
  },
  {
    name: 'Gardener',
    icon: HomeRepair,
  },
];

const ServiceCategories = [
  {
    name: 'Home Repair',
    icon: <HomeRepair />,
    link: '/services/home-repair',
  },
  {
    name: 'Cleaning',
    icon: <HomeRepair />,
    link: '/services/cleaning',
  },
  {
    name: 'Gardening',
    icon: <HomeRepair />,
    link: '/services/gardening',
  },
  {
    name: 'Electrical',
    icon: <HomeRepair />,
    link: '/services/electrical',
  },
  {
    name: 'Plumbing',
    icon: <HomeRepair />,
    link: '/services/plumbing',
  },
];

const Categories = [
  'Home Repair',
  'Cleaning',
  'Gardening',
  'Electrical',
  'Plumbing',
  'More',
];

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

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
  return (
    <Box>
      <Typography sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
        Your One-Stop Solution for Local Services
      </Typography>
      <Box>
        <SearchBar />
      </Box>
      <Stack direction="row" flexWrap="wrap" sx={{ gap: 1, mt: 2 }}>
        {TopServices.map((service) => (
          <Chip
            key={service.name}
            label={service.name}
            clickable
            icon={<HomeIcon />}
            sx={{
              backgroundColor: '#f5f9ff;',
              color: 'black',
              boxShadow: 3,
              '&:hover': {
                boxShadow: 6, // Increase shadow on hover
              },
            }}
          />
        ))}
      </Stack>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4, mb: 1 }}>
        Service Categories
      </Typography>
      <Stack direction="row" flexWrap="wrap" sx={{ gap: 2, mt: 2 }}>
        {ServiceCategories.map((category) => (
          <CategoryCard
            key={category.name}
            Icon={<HomeIcon size={24} />}
            name={category.name}
            link={category.link}
          />
        ))}
        <CategoryCard
          Icon={<MoreHoriz size={24} />}
          name="More"
          link="/services"
        />
      </Stack>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4, mb: 1 }}>
        Top Services
      </Typography>
      <Box className="flex flex-col gap-4">
        {TopServices.map((service) => (
          <ServiceCard
            key={service.name}
            category="Home Repair"
            serviceName={service.name}
            title="Top-Notch Service"
            description="We offer the best services in your area with top-quality professionals ready to assist you."
            contacts={['(123) 456-7890', '(551) 260-6654']}
          />
        ))}
      </Box>
    </Box>
  );
}
