import { Github, Linkedin } from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className="py-4 bg-dark text-white text-center">
      <p>© 2025 Shauna Deleon. All rights reserved.</p>
      <div className="social-links d-flex justify-content-center gap-3 mt-2">
        <a
          href="https://github.com/pojoto4"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/in/ashley-shauna-deleon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
