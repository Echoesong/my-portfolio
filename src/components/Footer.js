export default function Footer(props) {
 
  return (
    <div className='footerStyle'>
      <a href="/resume.pdf" download>
        <img src="/resumeIcon.png" alt="resume icon" style={{
            width: "6.25rem",
            height: "auto"
          }}></img>
      </a>
      <a
        href="https://github.com/Echoesong"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub Logo"
          style={{
            width: "6.25rem",
            height: "auto"
          }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/joseph-felker/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/linkedinIcon.png"
          alt="LinkedIn Logo"
          style={{
            width: "6.25rem",
            height: "auto"
          }}
        />
      </a>
    </div>
  );
}
