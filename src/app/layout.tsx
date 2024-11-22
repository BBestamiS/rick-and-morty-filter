import './globals.css';

export const metadata = {
  title: 'Rick and Morty Characters',
  description: 'Filter and view Rick and Morty characters by status and gender.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}