import React from "react";
import { motion } from "framer-motion";
import FloatingParticles from "../Components/FloatingParticles";
import SpinningEarth from "../Components/SpinningEarth";
import ScrollRobot from "../Components/ScrollRobot";

const LegalPrivacy = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
      <FloatingParticles />
      <SpinningEarth />
      {/* <ScrollRobot /> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative h-[40vh] w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-radial from-black via-black/80 to-transparent opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-4">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 drop-shadow-lg mb-6">
              Privacy Policy
            </h1>
            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-4" />
            <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest">Last Updated: April 12, 2026</p>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Your privacy is important to us. Learn how we handle your data.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 px-6 sm:px-12 md:px-20 lg:px-32 py-10 space-y-12 max-w-5xl mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
        >
          <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                Welcome to GoRan AI. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at goran.dotin@gmail.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the website or otherwise contacting us.
              </p>
              <p>
                The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p>
                We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To facilitate account creation and logon process.</li>
                <li>To send administrative information to you.</li>
                <li>To fulfill and manage your orders.</li>
                <li>To post testimonials with your consent.</li>
                <li>To deliver services to the user.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Sharing Your Information</h2>
              <p>
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Updates to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
              <p>
                If you have questions or comments about this policy, you may email us at goran.dotin@gmail.com.
              </p>
            </section>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default LegalPrivacy;
