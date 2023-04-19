import linkedinLogo from "../assets/linkedin.png";

// linkedin and github

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/janeesper/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedinLogo} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/janeesper/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={linkedinLogo} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
