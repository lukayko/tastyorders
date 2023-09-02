export const metadata = {
  title: "TastyOrders | Delicious food delivered to your door",
  description: "Generated by create next app",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["apple-touch-icon.png"],
    manifest: "/site.webmanifest",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
        <div id='overlays'></div>
      </body>
    </html>
  );
}
