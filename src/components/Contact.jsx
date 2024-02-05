import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Contact() {
  return (
    <div className="bg-amber-100 flex flex-col items-center justify-center p-8 md:p-16">
      <div className="w-full flex justify-center items-center py-4">
        <h2 className="text-blue-500 text-3xl md:text-4xl lg:text-5xl font-bold m-0">
          Contact Me
        </h2>
      </div>
      <p className="text-gray-700 text-center text-xs md:text-sm lg:text-base font-public-sans">
        Thank you for your time! I`m open to a variety of opportunities and
        collaborations within the tech industry. Here`s how you can get in touch
        with me:
      </p>
      <div className="flex justify-center items-center mt-4 space-x-4">
        <a
          href="mailto:liawjianwei@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
          className="text-3xl text-gray-800 hover:text-gray-600 transition duration-300"
        >
          <EmailIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/liawjianwei/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="text-3xl text-gray-800 hover:text-gray-600 transition duration-300"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/Jianwei07"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="text-3xl text-gray-800 hover:text-gray-600 transition duration-300"
        >
          <GitHubIcon />
        </a>
      </div>

      <div className="text-gray-700 text-left text-xs md:text-sm lg:text-base mb-6 font-public-sans">
        I'm excited about the following opportunities:
        <ul className="list-disc list-inside text-center text-gray-700 mt-2 px-2">
          <li>Project Collaborations</li>
          <li>Event Invitations</li>
          <li>Mentorship</li>
          <li>Job Opportunities</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
