import Button from "./Button";
import Hero from "./Hero";

function Header() {
  return (
    <div className="hero p-4 mb-10 text-xs">
      <nav className="flex justify-between items-center">
        <p>Freelancin.io</p>
        <ul className="flex gap-2">
          <li>Service</li>
          <li>About us</li>
          <li>blog</li>
        </ul>
        <Button button="Contact" />
      </nav>
      <Hero />
    </div>
  );
}

export default Header;
