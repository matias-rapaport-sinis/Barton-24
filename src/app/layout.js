import 'bootstrap/dist/css/bootstrap.min.css';
import localFont from "next/font/local";
import "./globals.css";
import { Container } from 'react-bootstrap';
import Navbar from "./_components/Navbar"
import Image from 'next/image';

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
 */

export const metadata = {
  title: "Barton",
  description: "Barton tu proxima contruccion",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className='w-100 h-100'>
          <Navbar />  
            {children}
        </body>
      </html>
  );
}
