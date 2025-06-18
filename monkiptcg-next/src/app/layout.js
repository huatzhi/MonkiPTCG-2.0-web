import "../styles/globals.css"; // We'll create a minimal global file

export const metadata = {
  title: "Team Monki: Malaysia Top PTCG Team",
  description: "Join Team Monki on our journey to become the best PTCG team in Malaysia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}