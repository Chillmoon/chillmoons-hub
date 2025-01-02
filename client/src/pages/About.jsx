import React from "react";
import { BsLinkedin, BsGithub, BsTelegram } from "react-icons/bs";

const skillsData = [
  {
    title: "Front-End Technologies",
    color: "bg-lime-100 text-lime-600",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5, CSS3",
      "React, React Hooks, React Router",
    ],
  },
  {
    title: "Front-end Tools & Libraries",
    color: "bg-teal-100 text-teal-600",
    skills: [
      "Git",
      "Axios",
      "React-table, Materialtable",
      "Firebase",
      "Formik, Yup, React Hook Form",
      "WebSocket",
      "i18next",
    ],
  },
  {
    title: "State Management",
    color: "bg-green-100 text-green-600",
    skills: ["Redux", "MobX"],
  },

  {
    title: "Back-End",
    color: "bg-sky-100 text-sky-600",
    skills: [
      "Node.js",
      "Firebase",
      "MongoDB",
      "Express.js",
      "RESTful APIs",
      "Integration with payment systems (Fondy API)",
    ],
  },

  {
    title: "Testing & Debugging",
    color: "bg-blue-100 text-blue-600",
    skills: [
      "Debugging with DevTools",
      "Basic unit testing with Jest and React Testing Library",
    ],
  },
  {
    title: "UI/UX & Design",
    color: "bg-emerald-100 text-emerald-600",
    skills: [
      "Responsive pixel-perfect design",
      "Material-UI, Bootstrap",
      "Figma",
      "BEM, Flexbox & Grid Layout",
    ],
  },
];

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10  min-h-screen">
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-teal-500 mb-6 animate-fade-in">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/chillmoons-hub.firebasestorage.app/o/photo.jpg?alt=media&token=e88e8e4b-1a99-433f-8a91-61daf186e1ef"
          alt="Tetiana"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold text-teal-600 dark:text-teal-300 mb-4 animate-slide-in">
        Hi, I'm Tetiana!
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mb-8 animate-fade-in-delay">
        A passionate React developer with a knack for creating beautiful and
        functional web applications. I am always excited to learn and grow in my
        craft, bringing creative solutions to the table.
      </p>
      <div className="w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 dark:text-teal-300 mb-4 animate-slide-in">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-lg ${category.color} animate-fade-in-delay`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <ul className="list-disc list-inside">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-700 ">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 dark:text-teal-300 mb-4 animate-slide-in">
          Work Experience
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>
            <strong>Web Developer</strong> at SharkSoftware - Worked on complex
            projects and mentored trainees.
          </li>
          <li>
            Sole developer for e-learning platforms with features like user
            registration, video watching, and payment integration.
          </li>
        </ul>
      </div>
      <div className="w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 dark:text-teal-300 mb-4 animate-slide-in">
          Hobbies
        </h2>
        <p className="text-gray-700 dark:text-gray-300 animate-fade-in-delay mb-4">
          In my free time, I enjoy traveling, watching horror movies, exploring
          new technologies, and spending quality time with my cats, Marcy and
          Olive.
        </p>
      </div>
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-teal-600  dark:text-teal-300 mb-4 animate-slide-in">
          Get in Touch
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 animate-fade-in-delay">
          Feel free to reach out if you'd like to collaborate on a project or
          just say hello!
        </p>
        <div className="flex gap-4 justify-center mt-6">
          <a
            href="https://www.linkedin.com/in/tetiana-kolomiiets-210a841a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500  hover:text-teal-700 text-2xl"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/Chillmoon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-700 text-2xl"
          >
            <BsGithub />
          </a>
          <a
            href="https://t.me/Chillmoon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-700 text-2xl"
          >
            <BsTelegram />
          </a>
        </div>
        <a
          href="mailto:Chillmoon07@gmail.com"
          className="mt-4 inline-block bg-teal-500 text-white py-2 px-6 rounded-lg shadow hover:bg-teal-600 animate-bounce-in"
        >
          Email Me
        </a>
      </div>
    </div>
  );
}
