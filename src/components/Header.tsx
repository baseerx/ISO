import siteLogo from "../assets/images/logo/so_logo.png";

const Header = () => {
  return (
    <>
      <nav className="bg-white md:p-4 shadow-md fixed top-0 left-0 z-10 w-full">
        <div className="container mx-auto md:flex md:justify-between items-center">
          <a href="#" className="text-xl font-bold">
            <img src={siteLogo} className="h-12 md:h-16" />
          </a>
          <ul className="flex flex-row space-x-6 font-title text-xl justify-center pt-4 md:pt-0">
            <li>
              <a href="#" className="text-blue-800 hover:text-blue-800">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-800">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-800">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-800">
                Contact
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="absolute md:relative transition btn-quote hover:bg-orange-500 top-2 md:top-0 right-2"
          >
            Request a Quote
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
