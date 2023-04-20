import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/github.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/rafael-gomes1/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedinLogo} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 w-[30px] h-[30px]"
        href="https://github.com/NoNameP"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={githubLogo} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
