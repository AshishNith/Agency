import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import SpinningEarth from "../Components/SpinningEarth";
import ScrollRobot from "../Components/ScrollRobot";
import FloatingParticles from "../Components/FloatingParticles";
import AnimatedCounter from "../Components/AnimatedCounter";

const portfolioItems = [
  {
    title: "The Pahadi Craft",
    description:
      "Custom e-commerce platform with sleek UI, Stripe integration, and fast performance.",
    image: "https://res.cloudinary.com/dspygzbmi/image/upload/v1749829580/pahadicraftwebsite_z3g08n.png",
    category: "Web Development",
    tech: ["Next.js", "Tailwind", "Stripe", "Node.js"],
    link: "https://thepahadicraft.com",
  },
  {
    title: "Mathed Edtech Platform",
    description:
      "AI-powered learning system with admin panel, quiz AI assistant, and student dashboard.",
    image: "https://res.cloudinary.com/dikisauij/image/upload/v1750229208/mathed_2025_kasi13.png",
    category: "EdTech + AI",
    tech: ["React", "Flask", "Firebase", "GPT"],
    link: "https://mathed-2025.vercel.app",
  },
  {
    title: "Insurance AI Assistant",
    description:
      "Chatbot for claim status, filing, and denial appeals with automated workflows.",
    image: "https://res.cloudinary.com/dspygzbmi/image/upload/v1749829563/Claim_Ai_aic5tw.png",
    category: "AI Chatbot",
    tech: ["React", "Flask", "OpenAI API"],
  },
  {
    title: "SkipIt Automation",
    description:
      "Automated email and task management system using n8n and OpenAI for Gmail.",
    image: "https://res.cloudinary.com/dspygzbmi/image/upload/v1749829578/SkipIt_kre9aw.png",
    category: "Automation",
    tech: ["n8n", "OpenAI", "Gmail API"],
  },
  {
    title: "Luxary Hotel Website",
    description:
      "Luxury hotel booking platform with booking system, user accounts, and admin panel.",
    image: "https://res.cloudinary.com/dspygzbmi/image/upload/v1749829580/hotel_klzkwb.png",
    category: "Hotels",
    tech: ["Next.js", "MongoDB", "Tailwind"],
  },
   {
    title: "GoRan SaaS Product",
    description:
      "AI-powered SaaS platform for automating business processes with a sleek UI.",
    image: "https://res.cloudinary.com/dmhabztbf/image/upload/v1753518756/Screenshot_2025-07-26_134757_lbqvvn.png",
    category: "SaaS",
    tech: ["Next.js", "MongoDB", "Tailwind"],
  },
   {
    title: "Luxe Salon",
    description:
      "Luxury salon booking platform with appointment scheduling, user accounts, and admin panel.",
    image: "https://res.cloudinary.com/dmhabztbf/image/upload/v1753518754/Screenshot_2025-07-26_135744_bvadl3.png",
    category: "Salon",
    tech: ["Next.js", "MongoDB", "Tailwind"],
  },
   {
    title: "Lumiere Restaurant",
    description:
      "Elegant restaurant website with menu, reservation system, and user accounts.",
    image: "https://res.cloudinary.com/dmhabztbf/image/upload/v1753518752/Screenshot_2025-07-26_135436_w7kuyp.png",
    category: "Restaurants",
    tech: ["Next.js", "MongoDB", "Tailwind"],
  },
   {
    title: "Chetan Art Gallery",
    description:
      "Art gallery website showcasing collections, artist profiles, and event management.",
    image: "https://res.cloudinary.com/dmhabztbf/image/upload/v1753518752/Screenshot_2025-07-26_135017_laivza.png",
    category: "Art Gallery",
    tech: ["Next.js", "MongoDB", "Tailwind"],
  },
   {
    title: "Tara Ayurveda",
    description:
      "Ayurvedic wellness platform with booking system, user accounts, and admin panel.",
    image: "https://res.cloudinary.com/dmhabztbf/image/upload/v1753518750/Screenshot_2025-07-26_135943_ffjqmk.png",
    category: "Healthcare",
    tech: ["Next.js", "MongoDB", "Tailwind"],
  },
  {
    title: "Luxe Furniture",
    description:
      "Luxury furniture e-commerce platform with product catalog, shopping cart, and user accounts.",
    image: "https://res.cloudinary.com/dmhabztbf/image/upload/v1753518748/Screenshot_2025-07-26_134927_ynsqlj.png",
    category: "E-commerce",
    tech: ["Next.js", "MongoDB", "Tailwind"],
  },
  {
    title: "DESE - IISc Bangalore",
    description:
      "Revolutionized insurance claims processing with AI — reduced processing time by 75% and operational costs by 50% while maintaining 99% accuracy rate.",
    image: "https://res.cloudinary.com/dikisauij/image/upload/v1750225505/iisc_banglore_asptrp.png",
    category: "Institutional Project",
    tech: ["Next.js", "MongoDB", "Tailwind"],
  },
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
      {/* Animated Background Elements */}
      <FloatingParticles />
      <SpinningEarth />
      <ScrollRobot />
      
      {/* Parallax Background */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          y: backgroundY,
        }}
      />

      {/* Hero Image Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative h-[55vh] w-full overflow-hidden"
      >
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://res.cloudinary.com/dmhabztbf/image/upload/v1753467280/pexels-pavel-danilyuk-8294605_owebyo.jpg"
          alt="Portfolio Hero"
          className="absolute inset-0 w-full h-full object-contain grayscale opacity-40"
        />
        
        {/* Animated overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"
        />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4"
          >
            <motion.span
              animate={{ 
                textShadow: [
                  '0 0 10px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(59, 130, 246, 0.8)',
                  '0 0 10px rgba(59, 130, 246, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Portfolio
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl"
          >
            Showcasing our finest AI-powered platforms, automation tools, and full-stack digital products.
          </motion.p>

          {/* Stats Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex space-x-8 mt-8"
          >
            <AnimatedCounter end={25} label="Projects" suffix="+" />
            <AnimatedCounter end={100} label="Clients" suffix="%" />
            <AnimatedCounter end={5} label="Years" />
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 px-6 sm:px-12 md:px-20 lg:px-32 py-20">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              item={item}
              index={index}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </motion.section>

        {/* Enhanced Modal */}
        <Dialog
          open={selectedItem !== null}
          onClose={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen px-4 text-center flex items-center justify-center bg-black/90 backdrop-blur-sm"
          >
            <Dialog.Panel
              as={motion.div}
              initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-[#111] to-[#1a1a1a] max-w-2xl w-full mx-auto rounded-2xl p-8 relative border border-white/20 text-left shadow-2xl"
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors"
              >
                <X className="h-6 w-6" />
              </motion.button>
              
              {selectedItem && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
                  />
                  <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {selectedItem.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedItem.description}
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-white/90 mb-6">
                    {selectedItem.tech.map((tag, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  {selectedItem.link && (
                    <motion.a
                      whileHover={{ scale: 1.05, x: 5 }}
                      href={selectedItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      Visit Project
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="ml-2"
                      >
                        ↗
                      </motion.span>
                    </motion.a>
                  )}
                </motion.div>
              )}
            </Dialog.Panel>
          </motion.div>
        </Dialog>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 text-center relative"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/10 max-w-4xl mx-auto relative overflow-hidden"
          >
            {/* Animated background glow */}
            <motion.div
              animate={{
                background: [
                  'radial-gradient(600px at 50% 50%, rgba(59, 130, 246, 0.1), transparent)',
                  'radial-gradient(600px at 60% 40%, rgba(147, 51, 234, 0.1), transparent)',
                  'radial-gradient(600px at 40% 60%, rgba(59, 130, 246, 0.1), transparent)',
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 opacity-50"
            />
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-6 text-white drop-shadow-md relative z-10"
            >
              Got a Project in Mind?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-200 mb-8 leading-relaxed text-lg relative z-10"
            >
              Let's craft your next big digital product together — powered by AI, automation, and design.
            </motion.p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(255, 255, 255, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-white to-gray-100 text-black font-semibold rounded-full transition-all duration-300 relative z-10 shadow-lg"
            >
              <motion.span
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Contact Us
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Enhanced Portfolio Card Component
const PortfolioCard = ({ item, index, onClick }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{
        y: -10,
        rotateX: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 group cursor-pointer relative"
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
            'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
            'linear-gradient(225deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))',
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="relative h-48 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
        />
        <div className="absolute top-4 left-4">
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 bg-black/60 backdrop-blur text-white text-sm rounded-full border border-white/20"
          >
            {item.category}
          </motion.span>
        </div>
      </div>
      
      <div className="p-6 relative z-10">
        <motion.h3
          className="text-xl font-bold mb-3 group-hover:text-white/90 transition-colors"
          animate={{ opacity: [1, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
        >
          {item.title}
        </motion.h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Portfolio;