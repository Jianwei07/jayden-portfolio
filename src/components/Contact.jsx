import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Contact() {
  return (
    <div className="bg-amber-100 flex flex-col items-center justify-center h-[85vh] p-8 py-20">
      <div className="flex justify-center items-center">
        <h2
          style={{
            color: "#147EFB",
            fontSize: "3rem",
            margin: "0",
            fontWeight: "bold",
          }}
        >
          Contact Me
        </h2>
      </div>
      <p className="text-gray-700 py-2 text-[21px] md:text-base lg:text-lg mt-4">
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
        >
          <EmailIcon style={{ fontSize: "3rem", color: "#2D2E32" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/liawjianwei/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <LinkedInIcon style={{ fontSize: "3rem", color: "#2D2E32" }} />
        </a>
        <a
          href="https://github.com/Jianwei07"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <GitHubIcon style={{ fontSize: "3rem", color: "#2D2E32" }} />
        </a>
      </div>
      <div className="text-gray-700 py-2 text-[18px] md:text-base lg:text-lg mt-4">
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
