import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="mb-2">
  <div className="navbar flex justify-between bg-slate-700 border-r-2">
    <div className="flex">
      <Link to="/">
        <div className="btn btn-ghost normal-case txt-xl">Home</div>
      </Link>
      <Link to="/about">
        <div className="btn btn-ghost normal-case txt-xl">About</div>
      </Link>
      <Link to="/projects">
        <div className="btn btn-ghost normal-case txt-xl">Projects</div>
      </Link>
    </div>
    <div className='flex justify-end'>
    <a href="/resume.pdf" download className="h-12 w-12">
  <img
    src="/resumeIcon.png"
    alt="resume icon"
    className="h-full w-full object-contain"
  />
</a>
<a
  href="https://www.linkedin.com/in/joseph-felker/"
  target="_blank"
  rel="noopener noreferrer"
  className="h-12 w-12"
>
  <img
    src="/linkedinIcon.png"
    alt="LinkedIn Logo"
    className="h-full w-full object-contain"
  />
</a>

    </div>
  </div>
</header>

  );
}

export default Header;
