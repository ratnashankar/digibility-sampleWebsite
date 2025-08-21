import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ConsentBanner({ onConsent }) {
  const [consent, setConsent] = useState(false);

  const handleProceed = () => {
    if (onConsent) onConsent();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">

        <button
          onClick={() => onConsent(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">
          Please Confirm Your Consent
        </h2>

        <div className="text-sm text-gray-700 space-y-3 text-center">
          <p>
            By continuing, you agree to our{" "}
            <Link to="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>
            ,{" "}
            <Link to="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link to="/refund" className="text-blue-600 hover:underline">
              Refund Policy
            </Link>
            .
          </p>

          <div className="flex items-center justify-center gap-2">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-500"
            />
            <label htmlFor="consent" className="text-gray-800 cursor-pointer">
              I agree to the above policies
            </label>
          </div>

          <button
            onClick={handleProceed}
            disabled={!consent}
            className={`mt-4 w-full px-6 py-2 rounded-lg transition 
              ${consent 
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
