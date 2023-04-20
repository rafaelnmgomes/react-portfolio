import React from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skillsImage from "../assets/skills-image.png";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* Header */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            My <span className="text-red">SKILLS</span>
            <LineGradient width="w-1/3" />
          </p>
          <p className="mt-10 mb-7">
            Over the 2 years I have worked as a dev I have developed a strong
            skill set in HTML, CSS, Sass, JavaScript, ReactJS, Styled
            Components/Material UI, GitHub/GitLab, Agile/Scrum, and more
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
                before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img alt="skills" src={skillsImage} className="z-10" />
            </div>
          ) : (
            <img alt="skills" src={skillsImage} className="z-10" />
          )}
        </div>
      </div>

      {/* Skills */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* Certificate */}
        <motion.div
          className="md:w-1/3 mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-36">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Certificate
              </p>
            </div>
            <div className="w-1/2 md:w3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
            <p className="mt-10">
              I hold a MIT xPro Professional Certificate in Coding: Full Stack
              Development with MERN (MongoBD, Express, React and NodeJS)
              completed on March 2023.
            </p>
          </div>
        </motion.div>

        {/* Innovative */}
        <motion.div
          className="md:w-1/3 mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-36">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
            <p className="mt-10">
              I have been successful in creating new features for applications
              and updating existing ones, improving app performance and quality
              when comparing the before and after results.
            </p>
          </div>
        </motion.div>

        {/* Passionate */}
        <motion.div
          className="md:w-1/3 mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-36">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Passionate
              </p>
            </div>
            <div className="w-1/2 md:w3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
            <p className="mt-10">
              I am passionate about technology and thrive in collaborative
              environments that challenge me to continuously learn and grow.{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
