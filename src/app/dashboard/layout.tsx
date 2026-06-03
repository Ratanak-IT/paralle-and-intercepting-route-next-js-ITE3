import { AsideDashboard } from "@/components/dashboard/AsideComponent";
import { Suspense } from "react";
import LoadingPage from "../loading";
import { Metadata } from "next";

export const metadata: Metadata ={
title: 'My Dashboard',
description: 'This is my dashboard page handle all my dashboard related page',
openGraph: {
  images: ['https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2400,h_1256/https://blog.snappa.com/wp-content/uploads/2024/12/bluesky-banner-og.jpg']
}
}

export default function DashboardLayout({
  children,
  blogs,
  products,
  setting,
}: {
  children: React.ReactNode;
  blogs: React.ReactNode;
  products: React.ReactNode;
  setting: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Suspense fallback={<LoadingPage/>}>
        <AsideDashboard />
      <main>
        {children}
        {blogs}
        {products}
        {setting}
      </main>
      </Suspense>
      
    </div>
  );
}