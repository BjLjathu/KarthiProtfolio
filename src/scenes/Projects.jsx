import { useState } from "react";
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

// Single Project Component
const Project = ({ title, subTitle, onClick }) => {
  const overlayStyles = `
    absolute inset-0 opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-6 md:p-16 text-deep-blue
  `;

  // Convert title to lowercase and hyphen-separated
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div
      variants={projectVariant}
      className="relative w-full sm:w-80 md:w-96 m-4"
      onClick={() => onClick(`${process.env.PUBLIC_URL}/assets/${projectTitle}.jpg`)}
    >
      {/* Overlay */}
      <div className={overlayStyles}>
        <p className="text-lg md:text-2xl font-playfair">{title}</p>
        {subTitle && (
          <p className="mt-2 md:mt-4 text-sm md:text-base">{subTitle}</p>
        )}
      </div>

      {/* Image */}
      <img
        src={`${process.env.PUBLIC_URL}/assets/${projectTitle}.jpg`}
        alt={projectTitle}
        className="w-full h-auto object-cover rounded-md shadow-md"
      />
    </motion.div>
  );
};

// Projects Grid Component
const Projects = () => {
  const [modalImg, setModalImg] = useState(null);
  return (
    <section id="projects" className="pb-10 max-w-[1440px] mx-auto px-4">
      {/* Headings */}
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
        <p className="font-playfair font-semibold text-4xl">
          <span className="text-red">PRO</span>JECTS
        </p>
        <div className="flex justify-center mt-5">
          <LineGradient width="w-2/3" />
        </div>
        <p className="mt-2 mb-10 text-sm md:text-base">
          Discover our projects where creativity meets functionality. Each
          project is tailored to bring visual appeal and seamless user
          experience.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="flex flex-wrap justify-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Example Header */}
        <div className="flex justify-center items-center p-6 bg-red text-2xl font-playfair font-semibold w-full sm:w-80 md:w-96 m-4 text-center">
          BEAUTIFUL USER INTERFACES
        </div>

        {/* Projects */}
        <Project
          onClick={setModalImg}
          title="Project 1"
          subTitle="This logo was created by a team of 4 people in 1 month. This logo company is located in Colombo. It is an Accounting company."
        />
        <Project
        onClick={setModalImg}
          title="Project 2"
          subTitle="I Working this Logo australian Cleaning Company. This work was completed in 3 days."
        />
        <Project
        onClick={setModalImg}
          title="Project 3"
          subTitle="This logo was provided to me by a Nugegoda client through my business."
        />
        <Project
        onClick={setModalImg}
          title="Project 4"
          subTitle="This is Project kandy Hotel. This work was completed in 2 days."
        />
        <Project
        onClick={setModalImg}
          title="Project 5"
          subTitle="I Working This Logo. Food Industries."
        />
        <Project
        onClick={setModalImg}
          title="Project 6"
          subTitle="I designed this logo to Jaffna Makeup Shop. Client 100% satisfied."
        />

        {/* Additional empty project slots */}
        <Project onClick={setModalImg} title="Project 7" subTitle="" />
        <Project onClick={setModalImg} title="Project 8" subTitle="" />
        <Project onClick={setModalImg} title="Project 9" subTitle="" />
        <Project onClick={setModalImg} title="Project 10" subTitle="" />
        <Project onClick={setModalImg} title="Project 11" subTitle="" />
        <Project  onClick={setModalImg} title="Project 12" subTitle="" />
        <Project onClick={setModalImg} title="Project 13" subTitle="" />
        <Project onClick={setModalImg} title="Project 14" subTitle="" />

        {/* Footer Header */}
        <div className="flex justify-center items-center p-6 bg-blue text-2xl font-playfair font-semibold w-full sm:w-80 md:w-96 m-4 text-center">
          SMOOTH USER EXPERIENCE
        </div>
      </motion.div>

      {/* Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setModalImg(null)}
        >
          <img
            src={modalImg}
            alt="Project"
            className="max-w-[90%] max-h-[90%] rounded-md shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
