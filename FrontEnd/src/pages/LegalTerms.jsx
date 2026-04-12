import React from "react";
import { motion } from "framer-motion";
import FloatingParticles from "../Components/FloatingParticles";
import SpinningEarth from "../Components/SpinningEarth";
import ScrollRobot from "../Components/ScrollRobot";

const LegalTerms = () => {
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
              Terms & Conditions
            </h1>
            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-4" />
            <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest">Last Updated: April 12, 2026</p>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Please read these terms and conditions carefully before using our services.
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
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, then you may not access the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of GoRan AI and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of GoRan AI.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Obligations</h2>
              <p>
                As a user of our service, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information when requested.</li>
                <li>Maintain the confidentiality of your account credentials.</li>
                <li>Not use the service for any illegal or unauthorized purpose.</li>
                <li>Not attempt to interfere with the proper working of the service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
              <p>
                In no event shall GoRan AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimer</h2>
              <p>
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Changes</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at goran.dotin@gmail.com.
              </p>
            </section>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default LegalTerms;
