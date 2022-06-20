import Footer from "../globals/footer/Footer";
import Header from "../globals/header/Header";

export default function Layout({ children }) {
  return (
    <div className="grid grid-rows-layout min-h-screen overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
