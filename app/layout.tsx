import './styles/globals.css';

export const metadata = {
  title: 'Digibility.ai',
  description: 'AI-driven digital marketing automation platform.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}