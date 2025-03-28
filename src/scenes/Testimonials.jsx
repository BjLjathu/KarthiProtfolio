import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="  max-w-[1440px]   ">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here's What People are Saying About My Work. Aliquam aliquet integer
          ut fames odio in at. At magna ornare dictum lectus.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] xl:h-[425px]  flex flex-col justify-end p-16  mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-4xl  ">“</p>
          <span className="text-black text-2xl text-center ">Pirathapan Kanesapillai</span>
          <p className="text-center text-sm">
          
         I was looking for a good logo designer for my company and that's when I saw his Facebook and contacted him. Very hardworking also good Attitidue , work efficiently I like it

          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] xl:h-[425px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-4xl">“</p>
          <span className="text-black text-2xl text-center">Mathangie Sambavi</span>
          <p className="text-center text-sm">
          
          A good job requires a person with good manners. His work amazes me. No matter how hard he puts himself,
           he does it effectively without showing it. And wish you all the best Karthi

          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px]  xl:h-[425px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-4xl">“</p>
          <span className="text-black text-2xl text-center">Dilaxshana Manoharan</span>
          <p className="text-center text-sm">
          
          A good job requires a person with good manners. His work amazes me. No matter how hard he puts himself,
           he does it effectively without showing it. And wish you all the best Karthi

          </p>
        </motion.div>
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] xl:h-[425px] flex flex-col justify-end p-16 mt-48
           before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-4xl  lg:hidden" >“</p>
          <span className="text-black text-2xl text-center">Kabinath kabi</span>
          <p className="text-center text-[10px] md:text-sm">
          I had designers to design a logo for my wife's beauty salon.Your design work was great.
We really liked the logo you designed. And I sincerely wish that your design pursuits and talents grow and you grow more and more globally.


          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
