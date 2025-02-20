import type {Metadata, Viewport} from "next";
import localFont from "next/font/local";
import "./globals.css";

export const viewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  width: 'device-width',
}

const chakraPetch = localFont({
  src: [
    {
      path: "../assets/fonts/ChakraPetch-Light.ttf",
      weight: '300'
    },
    {
      path: "../assets/fonts/ChakraPetch-Regular.ttf",
      weight: '400'
    },
    {
      path: "../assets/fonts/ChakraPetch-Medium.ttf",
      weight: '500'
    },
    {
      path: "../assets/fonts/ChakraPetch-SemiBold.ttf",
      weight: '600'
    },
    {
      path: "../assets/fonts/ChakraPetch-Bold.ttf",
      weight: '700'
    },
  ],
  variable: "--font-chakra-petch",
})

export const metadata: Metadata = {
  title: "Galaxy Games: Explore Immersive Gaming Universes",
  description: "Galaxy Games blends console gaming with blockchain. Featured on PlayStation, Xbox, IGN. Backed by Seedify. Epic MegaGrant winner with Unreal Engine 5.",
  openGraph: {
    description: "Galaxy Games blends console gaming with blockchain. Featured on PlayStation, Xbox, IGN. Backed by Seedify. Epic MegaGrant winner with Unreal Engine 5.",
    title: "Galaxy Games",
    images: ['https://opengraph.b-cdn.net/production/images/e7f924aa-4b71-4380-a18b-ec23b4e1732f.png?token=fGrRMfeP5DvBpMuc23-vy6zqwrsPa2e59NjMovPt23g&height=630&width=1200&expires=33272453739']
  },
  metadataBase: new URL('https://www.galaxygamestudio.io/'),
  publisher: 'Galaxy Games',
  alternates: {
    canonical: 'https://www.galaxygamestudio.io/'
  },
  keywords: ["Galaxy Games", "blockchain gaming", "Web3 games", "NFT gaming", "sci-fi games", "crypto gaming", "GameFi", "play-to-earn", "gaming studio", "blockchain technology"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chakraPetch.variable} overflow-x-hidden font-chakra-petch w-full scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
