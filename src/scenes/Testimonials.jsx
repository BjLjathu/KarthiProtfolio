import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="max-w-[1440px] mx-auto px-4 py-20">
      {/* HEADING */}
      <motion.div
        className="md:w-1/2 text-center md:text-left mb-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-playfair font-semibold text-4xl mb-3 text-red">TESTIMONIALS</p>
        <LineGradient width="mx-auto md:mx-0 w-2/5" />
        <p className="mt-6 text-gray-600">
          Here's What People are Saying About My Work. Aliquam aliquet integer ut fames odio in at. At magna ornare dictum lectus.
        </p>
      </motion.div>

      {/* TESTIMONIALS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {/* Testimonial Card */}
        <motion.div
          className="relative bg-blue rounded-xl shadow-lg p-10 flex flex-col justify-end hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {/* Avatar Circle */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg content-person1">
          P
          </div>

          <p className="font-playfair text-4xl text-red mb-4">“</p>
          <span className="text-black text-xl font-semibold text-center mb-4">Pirathapan Kanesapillai</span>
          <p className="text-center text-sm text-gray-700">
            I was looking for a good logo designer for my company and that's when I saw his Facebook and contacted him. Very hardworking also good attitude, work efficiently. I like it.
          </p>
        </motion.div>

        <motion.div
          className="relative bg-blue rounded-xl shadow-lg p-10 flex flex-col justify-end hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg content-person2">
            M
          </div>

          <p className="font-playfair text-4xl text-red mb-4">“</p>
          <span className="text-black text-xl font-semibold text-center mb-4">Mathangie Sambavi</span>
          <p className="text-center text-sm text-gray-700">
            A good job requires a person with good manners. His work amazes me. No matter how hard he puts himself, he does it effectively without showing it. And wish you all the best Karthi.
          </p>
        </motion.div>

        <motion.div
          className="relative bg-blue rounded-xl shadow-lg p-10 flex flex-col justify-end hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg content-person3">
            D
          </div>

          <p className="font-playfair text-4xl text-red mb-4">“</p>
          <span className="text-black text-xl font-semibold text-center mb-4">Dilaxshana Manoharan</span>
          <p className="text-center text-sm text-gray-700">
            A good job requires a person with good manners. His work amazes me. No matter how hard he puts himself, he does it effectively without showing it. And wish you all the best Karthi.
          </p>
        </motion.div>
        <motion.div
          className="relative bg-blue rounded-xl shadow-lg p-10 flex flex-col justify-end hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg content-person4">
            D
          </div>

          <p className="font-playfair text-4xl text-red mb-4">“</p>
          <span className="text-black text-xl font-semibold text-center mb-4">Kabianth Kabi</span>
          <p className="text-center text-sm text-gray-700">
            A good job requires a person with good manners. His work amazes me. No matter how hard he puts himself, he does it effectively without showing it. And wish you all the best Karthi.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
