import { AsideDashboard } from "@/components/dashboard/AsideComponent";

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
      <AsideDashboard />
      <main>
        {children}
        {blogs}
        {products}
        {setting}
      </main>
    </div>
  );
}