import Footer from "../globals/footer/Footer";
import Header from "../globals/header/Header";

export default function Layout({ children, header, footer }) {
  return (
    <div className="grid grid-rows-layout min-h-screen max-w-full overflow-hidden">
      <Header header={header} />
      {children}
      <Footer footer={footer} />
    </div>
  );
}
