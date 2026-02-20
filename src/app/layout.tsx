export const metadata = {
  title: "PD Secure Client Authorization",
  description: "Create Authorization Key",
  icons: {
    apple: "/icon-192.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'serif', background: '#0a0f1c', color: '#fff' }}>
        {children}
      </body>
    </html>
  );
}
