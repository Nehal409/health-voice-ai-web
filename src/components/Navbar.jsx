import logo from "../assets/images/ET-logo-removebg-preview.png";

const Navbar = () => {
  return (
<nav className="navbar fixed-top z-1 bg-white shadow-lg" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0,0.3)' }}>
<div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-center">
    <div className="flex items-center justify-center">
      <a
        className="inline-block mr-2 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline"
        href="/"
      >
        <img src={logo} alt="alternative" className="h-10" />
      </a>
      <span className="text-xl text-center">Ehsaan Health AI Solutions</span>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
