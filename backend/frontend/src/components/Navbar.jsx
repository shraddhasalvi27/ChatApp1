const Navbar = () => {
    return (
      <header className="bg-blue-500 p-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="flex items-center">
            <img src="/ChatAppLogo.png" alt="Logo" className="h-10 w-auto" />
            <span className="ml-2 font-bold text-white text-xl">Panchat</span>
          </Link>
        </div>
      </header>
    );
  };
  
export default Navbar;