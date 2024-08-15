'use client';

import {
  Avatar,
  Box,
  Breadcrumbs,
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import React, { useEffect } from 'react';

import ServiceCard from '@/components/ServiceCard';
import {
  getServiceCategory,
  getServiceProviders,
  getServicesByIds,
} from '@/utils/apiMock';

export default function Page(props: any) {
  const { params, query } = props;
  const { slug: categorySlug } = params;

  const [category, setCategory] = React.useState<any>(null);
  const [services, setServices] = React.useState<any>([]);
  const [serviceProviders, setServiceProviders] = React.useState<any>([]);
  const [selectedServices, setSelectedServices] = React.useState<any>([]);

  const onServiceSelect = (service: any) => {
    setSelectedServices((prev: any) => {
      if (prev.includes(service)) {
        return prev.filter((s: any) => s !== service);
      }
      return [...prev, service];
    });
  };

  useEffect(() => {
    if (query?.serviceId) {
      setSelectedServices([query?.serviceId]);
    }
  }, [query]);

  useEffect(() => {
    const categoryRes = getServiceCategory(categorySlug);
    if (categoryRes) {
      setCategory(categoryRes);
    }
  }, [categorySlug]);

  useEffect(() => {
    if (selectedServices.length === 0 && category?.service_ids) {
      const serviceProvidersRes = getServiceProviders(category.service_ids);
      setServiceProviders(serviceProvidersRes);
    } else if (selectedServices.length > 0) {
      const serviceProvidersRes = getServiceProviders(selectedServices);
      setServiceProviders(serviceProvidersRes);
    }
  }, [selectedServices, category]);

  useEffect(() => {
    if (category) {
      const servicedByCat = getServicesByIds(category.service_ids);
      setServices(servicedByCat);
    }
  }, [category]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Breadcrumbs>
          <Link href="/">Home</Link>
          <Link href="/services/categories">Services</Link>
        </Breadcrumbs>
        <Typography variant="h5">{category?.name}</Typography>
        <Grid container spacing={2} />
        <Stack direction="row" flexWrap="wrap" sx={{ gap: 1, mt: 3 }}>
          {services.map((service: any) => (
            <Chip
              key={service.name}
              label={service.name}
              // clickable
              onClick={() => onServiceSelect(service.id)}
              icon={
                <Avatar src={service.imageUrl} sx={{ height: 24, width: 24 }} />
              }
              sx={{
                backgroundColor: selectedServices.includes(service.id)
                  ? 'green'
                  : 'white;',
                color: 'black',
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 6,
                },
              }}
            />
          ))}
        </Stack>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4, mb: 1 }}>
          Service Providers
        </Typography>
        {serviceProviders.length === 0 && (
          <Typography>No service providers found</Typography>
        )}
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {serviceProviders.map((service: any) => (
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
      </Grid>
    </Grid>
  );
}
