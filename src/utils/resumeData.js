import FacebookIcon from "@material-ui/icons/Facebook";
import YoutubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

let data = {
  name: "B Saichaitanya",
  title: "Full Stack Developer",
  birthday: "28th",
  email: "saichaitanya.bk@gmail.com",
  address: "123 test",
  phone: "012356655",
  social: {
    Gmail: {
      link: "mailto:saichaitanya.bk@gmail.com?subject=Can you please send me a copy of your resume for my reference!&amp;body=Hi, Can you please send me a copy of your resume for my reference? Thanks!",
      text: "Lets catch up",
      icon: <MailIcon />,
    },
    Facebook: {
      link: "https://www.facebook.com/saichaitanya.b.7/",
      text: "Chaybbx",
      icon: <FacebookIcon />,
    },
    Youtube: {
      link: "https://www.youtube.com/channel/UC2lQfR0GkK4_2JX69zvLaOg",
      text: "ChaybbxYT",
      icon: <YoutubeIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/saichaitanya-ballikonda",
      text: "Saichaitanya",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://github.com/sai2812",
      text: "Sai-Git",
      icon: <GithubIcon />,
    },
  },
  about: `Hi, I am Saichaitanya, a 27 year old software developer (JavaScript stack), based out of Hyderabad, Telangana. I am a Computer Science Engineering (B.Tech) degree holder presently employed with Deloitte Limited.

  Connect with me on LinkedIn for a professional relationship. I am game for any kind of conversation with like minded people. Lets have coffee together! Get in touch with me using above platforms.
  If you want to work together with me / view my projects, I have my public GitHub repo linked above.
  
  If you are looking to have random conversations far from the professional life, do get in touch with me through my social media accounts listed in this page !
  
  Wish you, the reader, all the very best in whatever you are working on now!
  
  Bon voyage!`,
  experience: [
    {
      title: "Deloitte",
      Date: "Nov 2020 - Present",
      description: `Role : Consultant
        IDE : Visual Studio Code, Git , AWS Console
        Tech Stack : NodeJs, AWS, Mocha`,
    },
    {
      title: "Inrhythms Solutions",
      Date: "Nov 2019 - Nov 2020",
      description: `Role : Software Engineer, Grade: A2
        IDE : Visual Studio Code, Visual Studio
        Tech Stack : Angular 8, Bootstrap 4,Ag-Grid ,Lodash,
        Ngx-bootstrap,Angular2-notifications,NgSelect.`,
    },
    {
      title: "VAM",
      Date: "Aug 2017 - Nov 2019",
      description: `Role : Software Engineer
        IDE/Tools : Visual Studio Code,Eclipse,TortoiseSVN.
        Tech Stack : Angular 6, Bootstrap 4,Prime-Ng.`,
    },
  ],
  education: [
    {
      title: "B. Tech - Computer Science and Engineering",
      Date: "May 2017 - 78.32%",
      description: "Mahatma Gandhi Institure of Technology,Gandipet, Hyderabad",
    },
    {
      title: "Intermediate - MPC",
      Date: "2013- 95.9% ",
      description: "Narayana Junior College, Saroornagar, Hyderabad",
    },
    {
      title: "10th Standard",
      Date: "2010 - 7.6 CGPA",
      description: "Kendriya Vidyalaya, Pushp Vihar, New Delhi",
    },
  ],
};

export default data;
