import 'bootstrap/dist/css/bootstrap.min.css';
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/Navbar"
import Footer from './_components/Footer';

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
          <Footer /> 
        </body>
      </html>
  );
}
