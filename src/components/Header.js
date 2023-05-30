import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    
  };

  return (
    <header className='mb-2'>
      <div className='navbar flex flex-row bg-slate-700 border-r-2'>
      <Link to="/">
          <div className='btn btn-ghost normal-case txt-xl'>Home</div>
        </Link>
        <Link to="/about">
          <div className='btn btn-ghost normal-case txt-xl'>About</div>
        </Link>
        <Link to="/projects">
          <div className='btn btn-ghost normal-case txt-xl'>Projects</div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
