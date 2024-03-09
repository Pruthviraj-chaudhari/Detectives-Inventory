import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative max-h-screen  w-[95vw]">
      <footer className="text-center text-xs font-normal text-slate-700 tracking-wide py-4 mt-auto">
        <p>
          Designed & Developed By
          <span className="text-slate-500">
            <Link to="https://www.linkedin.com/in/pruthviraj-chaudhari-8386ab230" target="_blank" rel="noopener noreferrer">
              {" "}
              @The Akatsuki Coding Club 
            </Link>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
