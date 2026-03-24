import { AuthContextProvider } from "./contexts/AuthContext";
import "./globals.css";

export const metadata = {
  title: "CPRG 306 Assignments",
  description: "Shopping List App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}