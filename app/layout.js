import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.javafruitindonesia.com'),
  title: {
    default: 'Java Fruit — Premium Cavendish & Mas Kirana Bananas from East Java, Indonesia',
    template: '%s | Java Fruit',
  },
  description:
    'Java Fruit by CV Intiplant Agro Lestari supplies premium Cavendish and Mas Kirana bananas grown by millennial farmers in Lumajang, East Java. Carbide-free, ethylene-ripened, export-ready.',
  keywords: [
    'Java Fruit',
    'pisang cavendish',
    'pisang mas kirana',
    'banana exporter Indonesia',
    'Lumajang banana',
    'CV Intiplant Agro Lestari',
    'premium banana supplier',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Java Fruit — CV Intiplant Agro Lestari',
    title: 'Java Fruit — Premium Cavendish & Mas Kirana Bananas from Indonesia',
    description:
      'Carbide-free, ethylene-ripened Cavendish and Mas Kirana bananas grown across 50 hectares in Lumajang, East Java. 7 tons/week, farm-to-table quality.',
    images: ['/assets/hero-bananas.jpg'],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Java Fruit — Premium Bananas from East Java, Indonesia',
    description: 'Premium Cavendish & Mas Kirana bananas. Carbide-free, ethylene-ripened, hygienically packaged for export.',
    images: ['/assets/hero-bananas.jpg'],
  },
  icons: {
    icon: '/assets/logo-cv.jpeg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CV Intiplant Agro Lestari',
  alternateName: 'Java Fruit',
  url: 'https://www.javafruitindonesia.com/',
  logo: 'https://www.javafruitindonesia.com/assets/logo-cv.jpeg',
  description:
    'Producer and exporter of premium Cavendish and Mas Kirana bananas from Lumajang Regency, East Java, Indonesia.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Krajan Kidul Hamlet RT/RW 001/003, Rojopolo Village, Jatiroto District',
    addressLocality: 'Lumajang Regency',
    addressRegion: 'East Java',
    postalCode: '67355',
    addressCountry: 'ID',
  },
  telephone: '+62-857-0603-286',
  email: 'javafruitindonesia@gmail.com',
  sameAs: [
    'https://www.instagram.com/javafruitindonesia',
    'https://www.tiktok.com/@javafruitindonesia',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
