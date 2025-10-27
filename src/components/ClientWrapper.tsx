'use client';

import dynamic from 'next/dynamic';

const FloatingWhatsAppCTA = dynamic(
  () => import('./FloatingWhatsAppCTA'),
  { ssr: false }
);

export default FloatingWhatsAppCTA;