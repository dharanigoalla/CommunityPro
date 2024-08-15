'use client';

import { Grid, Typography } from '@mui/material';

import CategoryCard from '@/components/CategoryCard';
import { getServiceCategories } from '@/utils/apiMock';

const Categories = () => {
  const categories = getServiceCategories();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Categories</Typography>
        <Grid container spacing={2}>
          {categories.map((category) => (
            <Grid item key={category.id} xs={4} sm={6} md={4}>
              <CategoryCard
                name={category.name}
                link={`/services/categories/${category.id}/`}
                imageUrl={category.imageUrl}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Categories;
