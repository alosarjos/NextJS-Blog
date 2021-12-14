import Footer from "../Footer";
import Profile from "../Profile";

export default function Layout({ children }) {
  return (
    <div>
      <div className="pt-8 flex flex-col items-center">
        <Profile />
        {children}
        <Footer />
      </div>
    </div>
  );
}
