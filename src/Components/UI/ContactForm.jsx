import React from 'react';

const ContactForm = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-3 border border-gray-200 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 border border-gray-200 rounded-lg"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
