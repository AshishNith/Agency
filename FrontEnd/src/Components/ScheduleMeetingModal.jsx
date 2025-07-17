// src/components/CalendlyModal.jsx
import React from 'react';

const CalendlyModal = ({ show, onClose, calendlyUrl }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="relative w-full max-w-4xl h-[600px] bg-white rounded-xl overflow-hidden shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-800 hover:text-red-600 text-3xl font-bold"
        >
          ×
        </button>
        <iframe
          src={calendlyUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          title="Calendly Scheduler"
        />
      </div>
    </div>
  );
};

export default CalendlyModal;
