import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";

const ContactButton = () => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        animate={{ opacity: 1, y: 0 }}
        as={motion.button}
        className="bg-opacity-40 text-slate-800 dark:text-neutral-100 bg-default font-bold text-lg px-8 py-6"
        color="default"
        initial={{ opacity: 10, y: 50 }}
        // transition={{ type: "spring", stiffness: 300, damping: 20 }}
        variant="shadow"
        // startContent={<Mail className="h-4 w-4" />}
      >
        Contact
      </Button>
    </motion.div>
  );
};

export default ContactButton;
