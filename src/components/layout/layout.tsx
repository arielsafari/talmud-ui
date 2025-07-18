import { Navbar } from "./navbar/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col justify-between gap-10">
      <main className="flex flex-1 flex-col">
        <Navbar />

        {children}
      </main>
    </div>
  );
}
