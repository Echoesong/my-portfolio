export default function Footer(props) {
    
      const headerStyle = {
        display: "flex",
        flexDirection: 'column',
      }
  return (
    
    <div style={headerStyle}>
      <a href="https://github.com/Echoesong" target="_blank" rel="noopener noreferrer">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub Logo"
          width="100"
          height="100"
        />
      </a>
      <a href='https://www.linkedin.com/in/joseph-felker/' target="_blank" rel="noopener noreferrer">
        <img
        src='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg'
        alt='LinkedIn Logo'
        width='120'
        height=''
        />
      </a>
      <div><strong>J.e.felker@Berkeley.edu</strong></div>
    </div>
  );
}
