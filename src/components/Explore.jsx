import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { explores } from "../constants";

const FeedbackCard = ({
  index,
  platform,
  link,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >

    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{platform}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <a href={link} target="_blank">
          <img
            src={image}
            alt={`${platform}`}
            className="w-full h-full object-cover"
          />
        </a>
      </div>
    </div>

  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>you want to know more ?</p>
          <h2 className={styles.sectionHeadText}>Explore.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {explores.map((platform, index) => (
          <FeedbackCard key={platform.platform} index={index} {...platform} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "explore");
