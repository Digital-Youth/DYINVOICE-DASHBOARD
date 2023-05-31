import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { Inter } from 'next/font/google'
import { Container } from 'postcss'
import SideBar from "@/components/Navbar/SideBar";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <SideBar/>
    </div>
  )
}
