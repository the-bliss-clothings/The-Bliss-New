export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <p>Navbar</p>
        {children}
      </main>
    </div>
  );
}
