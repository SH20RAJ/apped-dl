
const Nav = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          Apped
        </div>
        <div>
          <a href="/dmca" className="text-white mx-2">DMCA</a>
          <a href="/privacy-policy" className="text-white mx-2">Privacy Policy</a>
          <a href="/tos" className="text-white mx-2">Terms of Service</a>
          <a href="/faq" className="text-white mx-2">FAQ</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
