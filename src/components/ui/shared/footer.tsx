const Footer = () => {
  return (
    <footer className="py-12 px-6 font-sans tracking-wide">
      <div className="flex flex-col items-center gap-6">
        <ul className="flex flex-wrap justify-center gap-x-7 gap-4">
          <li>
            <a
              href="https://github.com/BarriosXJavier"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/git.svg" alt="GitHub" className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/maksim404"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/link.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </li>
          <li id="#contact">
            <a href="mailto:muriithid05@gmail.com">
              <img src="/mail.png" alt="Email" className="w-6 h-6" />
            </a>
          </li>
        </ul>

        <hr className="border-gray-500 w-full" />

        <div className="text-center text-purple text-lg flex flex-col">
          <p>&copy;{new Date().getFullYear()} David Muriithi</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;