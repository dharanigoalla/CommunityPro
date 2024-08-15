'use client';

import '@/styles/global.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Using internationalization in Client Components

  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: '#F6F5F7',
        }}
      >
        {props.children}
      </body>
    </html>
  );
}
