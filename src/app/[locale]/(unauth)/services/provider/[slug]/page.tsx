'use client';

import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import {
  getService,
  getServiceProvider,
  getServiceProviders,
} from '@/utils/apiMock'; // Mock API function

const ServiceProviderPage = (props) => {
  const { slug } = props.params;

  const [provider, setProvider] = useState<any>(null);
  const [service, setService] = useState<any>(null);
  const [relatedProviders, setRelatedProvider] = useState<any>(null);

  useEffect(() => {
    if (slug) {
      const providerDetails = getServiceProvider(String(slug));
      setProvider(providerDetails);
    }
  }, [slug]);

  useEffect(() => {
    if (provider) {
      const serviceRes = getService(provider.service_id);
      setService(serviceRes);
      if (serviceRes) {
        const serviceProvidesRes = getServiceProviders([serviceRes.id]);
        if (Array.isArray(serviceProvidesRes)) {
          setRelatedProvider(serviceProvidesRes.filter((t) => t.id !== slug));
        }
      }
    }
  }, [provider]);

  if (!provider) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/services/categories">
          Services
        </Link>
        <Link color="inherit" href={`/services/${service?.id}`}>
          <Typography color="textPrimary">{provider.name}</Typography>
        </Link>
      </Breadcrumbs>
      <Card sx={{ marginTop: 2 }}>
        <CardMedia
          component="img"
          height="100"
          image="https://plus.unsplash.com/premium_photo-1664298059861-1560b39fb890?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%20388w"
          alt={provider.name}
          sx={{
            objectFit: 'downscaled',
            height: 200,
          }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {provider.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            {provider.category}
          </Typography>
          <Typography variant="body1" paragraph>
            {provider.description}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Contact: {provider.contact}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Email: {provider.email}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ServiceProviderPage;
