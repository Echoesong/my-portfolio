export default function Footer(props) {
  return (
    <div className='mx-auto w-1/3 border-t border-gray-200 flex justify-center'>
      <a
        className='mt-1'
        href="https://github.com/Echoesong"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className=''
          src="/github-mark-white.png"
          alt="GitHub Logo"
          style={{
            width: "6.25rem",
            height: "auto"
          }}
        />
      </a>
    </div>
  );
}
