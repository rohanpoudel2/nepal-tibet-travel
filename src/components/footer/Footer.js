'use client'
import { usePathname } from 'next/navigation';
import HomeFooter from "./HomeFooter";
import SlimFooter from "./SlimFooter";

const Footer = () => {
  const pathname = usePathname();

  const isHomepage = pathname === '/';

  return isHomepage ? <HomeFooter /> : <SlimFooter />;
};

export default Footer;
