import type {Metadata} from "next";
import "./globals.css";
import {AOSInit} from '@/lib/aos'
import Navbar from "@/components/common/Navbar";
import localFont from "next/font/local";
import Footer from "@/components/common/Footer";
import {GoogleTagManager} from '@next/third-parties/google'
import {PostHogProvider} from './providers'

const exo = localFont({
  src: [
    {
      path: "../assets/fonts/Exo-Regular.ttf",
      weight: '400'
    },
    {
      path: "../assets/fonts/Exo-Medium.ttf",
      weight: '500'
    },
    {
      path: "../assets/fonts/Exo-SemiBold.ttf",
      weight: '600'
    },
    {
      path: "../assets/fonts/Exo-Bold.ttf",
      weight: '700'
    },
    {
      path: "../assets/fonts/Exo-ExtraBold.ttf",
      weight: '800'
    },
  ],
  variable: "--font-exo",
});

const myriadPro = localFont({
  src: [
    {
      path: "../assets/fonts/MyriadPro-Regular.otf",
      weight: '400'
    },
  ],
  variable: "--font-myriad-pro",

})

const chakraPetch = localFont({
  src: [
    {
      path: "../assets/fonts/ChakraPetch-Medium.ttf",
      weight: '500'
    },
  ],
  variable: "--font-chakra-petch",
})

export const metadata: Metadata = {
  title: "Galaxy Games",
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

export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">

    <AOSInit/>
    <GoogleTagManager gtmId="G-HMR3V5WPCQ"/>
    <body
      className={`${exo.variable} ${myriadPro.variable} ${chakraPetch.variable} font-myriad-pro overflow-x-hidden`}
    >
    <PostHogProvider>
      <Navbar/>
      {children}
      <Footer/>
    </PostHogProvider>
    </body>

    </html>
  );
}
