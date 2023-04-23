import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import expenseImage from "../assets/project-1.png";
import recipesImage from "../assets/project-2.png";
import restaurantImage from "../assets/project-3.png";
import socialMediaImage from "../assets/project-4.png";

const projects = [
  {
    title: "Sociopedia",
    subtitle: "Social media app the full MERN stack.",
    link: "https://social-media-84yb.onrender.com",
    image: socialMediaImage,
  },
  {
    title: "Expense tracker",
    subtitle: "Expense tracker using the full MERN stack.",
    link: "https://expense-tracker-wx1v.onrender.com",
    image: expenseImage,
  },
  {
    title: "Recipes",
    subtitle: "React project with spoonacular API.",
    link: "https://recipe-lake.vercel.app/",
    image: recipesImage,
  },
  {
    title: "Restaurants",
    subtitle:
      "MITxPRo final project using react, google auth, stripe and firebase.",
    link: "https://rafaelgomesfullstackrestaurantapplication.vercel.app/",
    image: restaurantImage,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, link, image }) => {
  console.log("🚀 ~ file: Projects.jsx:38 ~ Project ~ image:", image);
  return (
    <motion.div
      variants={projectVariant}
      className="relative"
      onClick={() => window.open(`${link}`, "_blank")}
    >
      <div
        className="absolute w-full opacity-0 hover:opacity-90 h-full transition duration-500 bg-grey z-30
        flex flex-col justify-center items-center text-center p-16 text-deep-blue cursor-pointer"
      >
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{subtitle}</p>
      </div>
      <img
        className="w-[400px] h-[200px] object-fill"
        src={image}
        alt={title}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* Headings */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            My <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5 mb-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
      </motion.div>

      {/* Projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* Row 1 */}
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>
          {projects.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              subtitle={project.subtitle}
              link={project.link}
              image={project.image}
            />
          ))}
          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
