import Sidebar from "../components/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <br />
      <br />

      <h1>Blogs</h1>
      <hr />
      <br />
      {children}
    </>
  );
}
