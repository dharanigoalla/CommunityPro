import { PhoneInTalkOutlined } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import React, { useState } from 'react';

interface ServiceCardProps {
  image?: string;
  category: string;
  serviceName: string;
  title: string;
  description: string;
  contacts: string[];
  email?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image = '/assets/images/services.jpg',
  category,
  serviceName,
  title,
  description,
  contacts,
  email,
}) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded((prevState) => !prevState);
  };

  const whatsappMessage = `Hello, I'm interested in your ${serviceName} services.`;
  const getWhatsAppLink = (contact: string) => {
    return `https://wa.me/+1${contact.replace(/[^\d]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  };

  return (
    <Card
      sx={{
        display: 'flex',
        boxShadow: 3,
        '&:hover': { boxShadow: 6 },
        alignItems: 'center',
        padding: 1,
      }}
    >
      <CardMedia
        sx={{
          width: '20%', // Set width to 20% of the card's width
          height: {
            xs: 100, // 100px height on extra-small screens
            sm: '100%', // 100% height on small screens
            md: 100, // 200px height on medium and larger screens
          },
          objectFit: 'cover',
          borderRadius: 1,
        }}
        component="img"
        image={image}
        alt={serviceName}
      />
      <CardContent sx={{ padding: 1 }}>
        <Typography component="div" className="text-l">
          {serviceName}
        </Typography>
        <Typography variant="subtitle1" color="text.primary">
          {title}
        </Typography>
        <Box>
          <Typography variant="body2" color="text.secondary">
            Contacts:
          </Typography>
          {contacts.map((contact, index) => (
            <Stack direction="row" alignItems="center" spacing={1}>
              <Link
                key={index}
                href={`tel:${contact}`}
                color="inherit"
                underline="none"
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="body2" color="text.secondary">
                    {contact}
                  </Typography>
                  <PhoneInTalkOutlined />
                </Stack>
              </Link>

              <Link href={getWhatsAppLink(contact)} target="_blank">
                <WhatsAppIcon />
              </Link>
            </Stack>
          ))}
        </Box>
        {email && (
          <Typography variant="body2" color="text.secondary">
            Email: {email}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
