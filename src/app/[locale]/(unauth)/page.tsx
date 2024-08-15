'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { MoreHoriz } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import {
  Avatar,
  Box,
  Chip,
  CircularProgress,
  Grid,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';

import CategoryCard from '@/components/CategoryCard';
import ServiceCard from '@/components/ServiceCard';
import {
  getTopServiceCategories,
  getTopServiceProviders,
  getTopServices,
  searchAll,
} from '@/utils/apiMock';

const SearchBar = () => {
  const [results, setResults] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length > 2) {
      setLoading(true);
      const searchResults = searchAll(value);
      setResults(searchResults);
      setLoading(false);
    } else {
      setResults([]);
    }
  };

  return (
    <Box sx={{ position: 'relative' }}>
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
          onChange={handleSearch}
          inputProps={{ 'aria-label': 'search' }}
          sx={{
            pr: 1,
          }}
          endAdornment={<SearchIcon color="secondary" />}
        />
      </Paper>
      {loading && (
        <CircularProgress
          size={24}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
          }}
        />
      )}
      {results.length > 0 && (
        <Paper
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 10,
            mt: 1,
          }}
        >
          <List>
            {results.map((result: any) => (
              <ListItem key={result.id} component="a" href={result.link}>
                <ListItemText primary={result.name} secondary={result.type} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
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
              <Avatar src={service?.imageUrl} sx={{ height: 24, width: 24 }} />
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
          Icon={
            <MoreHoriz
              sx={{
                height: 48,
                width: 48,
              }}
            />
          }
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
                serviceName={service.name}
                title={service.title}
                contacts={service.phone}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
