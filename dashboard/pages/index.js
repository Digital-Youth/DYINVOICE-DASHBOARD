import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Accueil from './Accueil'
import Navbar from "@/components/navBar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button, Checkbox } from 'sylphkit'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Accueil />
      
    </>
  );
}
