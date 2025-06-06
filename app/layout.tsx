export const metadata = {
  title: "Seu site",
  description: "Landing da Art House",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        {/* Pixel da Meta */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '723202246884028');
              fbq('track', 'PageView');
            `,
          }}
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Roboto } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Art House - Revestimento Vinílico Premium | 25 Anos de Experiência",
  description:
    "Revestimento vinílico 3x mais durável que pintura. Instalação sem sujeira, paredes sempre impecáveis. 25 anos de experiência em Brasília.",
  keywords: "papel de parede, revestimento vinílico, Brasília, decoração, reforma",
  openGraph: {
    title: "Art House - Revestimento Vinílico Premium",
    description: "Transforme suas paredes com revestimento vinílico de alta qualidade. 25 anos de experiência.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${montserrat.variable} ${roboto.variable}`}>
      <body className="font-roboto">{children}</body>
    </html>
  )
}
