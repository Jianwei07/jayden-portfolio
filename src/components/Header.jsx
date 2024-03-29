const Header = ({
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
  openResumeLink,
}) => {
  return (
    <div className="nav-container bg-amber-50 p-3">
      <nav className="navbar">
        <div className="w-400 mx-auto p-2 dark:bg-black shadow-lg rounded-2xl flex justify-center sm:text-sm sm:w-80">
          <ul className="flex justify-between w-full mt-1 mb-1 mx-7">
            <NavLink onClick={scrollToAbout}>About</NavLink>
            <NavLink onClick={scrollToProjects}>Projects</NavLink>
            <NavLink onClick={scrollToContact}>Contact</NavLink>
            <NavLink onClick={openResumeLink}>Resume</NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const NavLink = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="text-gray-500 hover:text-gray-700 text-sm font-bold"
  >
    {children}
  </button>
);

export default Header;
