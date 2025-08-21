
"use client";

import { useEffect, useState } from "react";

type Prefs = {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultPrefs: Prefs = {
  essential: true,   // cannot be disabled
  functional: true,
  analytics: false,
  marketing: false,
};

export default function CookieClient() {
  const [prefs, setPrefs] = useState<Prefs>(defaultPrefs);
  const [loaded, setLoaded] = useState(false);

  // Safe localStorage read (browser only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const raw = window.localStorage.getItem("dgbl_cookies");
        if (raw) {
          const parsed = JSON.parse(raw);
          setPrefs((p) => ({ ...p, ...parsed }));
        }
      } catch {
        // ignore parse errors
      } finally {
        setLoaded(true);
      }
    }
  }, []);

  // Persist on change (browser only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem("dgbl_cookies", JSON.stringify(prefs));
      } catch {
        // ignore quota/blocked storage errors
      }
    }
  }, [prefs]);

  const toggle = (k: keyof Prefs) => {
    if (k === "essential") return; // can't disable essential
    setPrefs((prev) => ({ ...prev, [k]: !prev[k] }));
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-10 space-y-6">
      {/* What are cookies */}
      <div className="bg-white rounded-2xl border shadow">
        <div className="px-5 py-4">
          <h2 className="text-xl font-semibold text-indigo-700">1) What Are Cookies?</h2>
          <p className="mt-2 text-gray-700">
            Cookies are small text files stored on your device by websites you visit. They help sites work properly,
            remember preferences, improve performance, and provide analytics or personalized experiences.
          </p>
        </div>
      </div>

      {/* Types */}
      <div className="bg-white rounded-2xl border shadow">
        <div className="px-5 py-4">
          <h2 className="text-xl font-semibold text-indigo-700">2) Types of Cookies We Use</h2>
          <ul className="mt-2 text-gray-700 list-disc pl-6">
            <li><strong>Essential</strong> – Required for core site features (e.g., navigation, security).</li>
            <li><strong>Functional</strong> – Remember choices to enhance your experience.</li>
            <li><strong>Analytics</strong> – Help us understand site usage and improve performance.</li>
            <li><strong>Marketing</strong> – Used to deliver relevant ads or measure campaign performance.</li>
          </ul>
        </div>
      </div>

      {/* Consent Controls */}
      <div className="bg-white rounded-2xl border shadow">
        <div className="px-5 py-4">
          <h2 className="text-xl font-semibold text-indigo-700">3) Your Choices (Consent)</h2>
          <p className="mt-2 text-gray-700">
            Manage non‑essential cookies below. Essential cookies are always on to provide the service.
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {loaded && (
              <>
                <label className="flex items-center justify-between bg-gray-50 border rounded-lg px-4 py-3">
                  <span>Essential (always on)</span>
                  <input type="checkbox" checked={prefs.essential} readOnly className="h-5 w-5" />
                </label>
                <label className="flex items-center justify-between bg-gray-50 border rounded-lg px-4 py-3">
                  <span>Functional</span>
                  <input
                    type="checkbox"
                    checked={prefs.functional}
                    onChange={() => toggle("functional")}
                    className="h-5 w-5"
                    aria-label="Toggle functional cookies"
                  />
                </label>
                <label className="flex items-center justify-between bg-gray-50 border rounded-lg px-4 py-3">
                  <span>Analytics</span>
                  <input
                    type="checkbox"
                    checked={prefs.analytics}
                    onChange={() => toggle("analytics")}
                    className="h-5 w-5"
                    aria-label="Toggle analytics cookies"
                  />
                </label>
                <label className="flex items-center justify-between bg-gray-50 border rounded-lg px-4 py-3">
                  <span>Marketing</span>
                  <input
                    type="checkbox"
                    checked={prefs.marketing}
                    onChange={() => toggle("marketing")}
                    className="h-5 w-5"
                    aria-label="Toggle marketing cookies"
                  />
                </label>
              </>
            )}
          </div>
          <p className="mt-3 text-sm text-gray-500">
            Your preferences are saved on this device.
          </p>
        </div>
      </div>

      {/* Manage in browser */}
      <div className="bg-white rounded-2xl border shadow">
        <div className="px-5 py-4">
          <h2 className="text-xl font-semibold text-indigo-700">4) Manage Cookies in Your Browser</h2>
          <p className="mt-2 text-gray-700">
            You can delete or block cookies via your browser settings. Note: some features may not work if certain cookies are disabled.
          </p>
        </div>
      </div>

      {/* Third‑party cookies */}
      <div className="bg-white rounded-2xl border shadow">
        <div className="px-5 py-4">
          <h2 className="text-xl font-semibold text-indigo-700">5) Third‑Party Cookies</h2>
          <p className="mt-2 text-gray-700">
            We may use third‑party tools (e.g., analytics, advertising networks) that set cookies according to their policies.
          </p>
        </div>
      </div>

      {/* Updates */}
      <div className="bg-white rounded-2xl border shadow">
        <div className="px-5 py-4">
          <h2 className="text-xl font-semibold text-indigo-700">6) Updates to This Policy</h2>
          <p className="mt-2 text-gray-700">
            We may update this Cookie Policy from time to time. Updates will be posted on this page with a new “Last Updated” date.
          </p>
          <div className="text-sm text-gray-500 mt-2">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-white rounded-2xl border shadow">
        <div className="px-5 py-4">
          <h2 className="text-xl font-semibold text-indigo-700">7) Contact</h2>
          <p className="mt-2 text-gray-700">
            Digibility Solutions Pvt. Ltd., Pune, India • support@digibility.ai
          </p>
        </div>
      </div>
    </section>
  );
}