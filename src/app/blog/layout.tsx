import Sidebar from "../components/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <div className="bg-white dark:bg-gray-900 h-screen">{children}</div>
    </>
  );
}
