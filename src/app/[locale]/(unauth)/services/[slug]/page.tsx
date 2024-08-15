'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { getServiceCategory } from '@/utils/apiMock';

const ServiceCategory = (props) => {
  const {
    params: { slug: serviceId },
  } = props;
  const router = useRouter();
  useEffect(() => {
    if (!router) return;
    const categoryRes = getServiceCategory(serviceId);
    if (categoryRes) {
      router.push(
        `/services/categories/${categoryRes.id}?serviceId=${serviceId}`,
      );
    } else {
      router.replace('/services/categories/');
    }
  }, [router, serviceId]);
};

export default ServiceCategory;
