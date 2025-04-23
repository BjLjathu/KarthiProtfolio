import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

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

const Project = ({ title ,subTitle}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className=" text-xl md:text-2xl font-playfair">{title}</p>
        <p className=" mt-1 md:mt-7 " >
          {subTitle}
        </p>
      </div>
      <img src={`/assets/${projectTitle}.jpg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className=" pb-10 max-w-[1440px]">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
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
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-2 mb-10">
        Discover our projects where creativity meets functionality.
         Each project is tailored to bring visual appeal and seamless user experience.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" subTitle="This logo was created by a team of 4 people in 1 month. This logo company is located in Colombo. It is an Accounting company." />
          <Project title="Project 2" subTitle="I Working this Logo australian Cleaning Company . This work was completed in 3 days." />

          {/* ROW 2 */}
          <Project title="Project 3"  subTitle='This logo was provided to me by a Nugegoda client through my business.' />
          <Project title="Project 4" subTitle='This is Project kandy Hotel .This work was completed in 2 days. ' />
          <Project title="Project 5" subTitle='I Working This Logo. Food Industries.' />

          {/* ROW 3 */}
          <Project title="Project 6" subTitle='I  designed this logo to Jaffna Makeup Shop. Client 100% satisfied.' />
          <Project title="Project 7" subTitle='' />
          <Project title="Project 8" subTitle='' />


          {/* ROW 4 */}
          <Project title="Project 9" subTitle='' />
          <Project title="Project 10" subTitle='' />
          <Project title="Project 11" subTitle='' />

          {/* ROW 5 */}
          <Project title="Project 12" subTitle='' />
          <Project title="Project 13" subTitle='' />
          <Project title="Project 14" subTitle='' />


          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
      <img src={`/assets/project-1.jpg`} alt="project-1" />
    </section>
  );
};

export default Projects;
