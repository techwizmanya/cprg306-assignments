import "./globals.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "CPRG 306 Assignments",
  description: "Shopping List App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}