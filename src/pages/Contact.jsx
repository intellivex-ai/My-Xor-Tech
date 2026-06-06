import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Terminal, Send, CheckCircle } from "lucide-react";
import { useScrollAnimations, scrollPresets } from "../components/useScrollAnimations";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", specs: "" });
  const [compilingLog, setCompilingLog] = useState([]);
  const [step, setStep] = useState("form"); // form, compiling, success
  const [submissionError, setSubmissionError] = useState(null);
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    if (step === "success") {
      setCountdown(4);
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            navigate("/");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step, navigate]);

  const logsSequence = [
    "> INITIALIZING CONNECTION PROTOCOL...",
    "> RESOLVING EMAIL INGEST HOSTNAME... OK",
    "> AUTHENTICATING ENCRYPTED CHANNEL...",
    "> CHANNEL ESTABLISHED // SECURE (AES-256)",
    "> COMPILING BLUEPRINT SPECIFICATION PAYLOAD...",
    "> ENCAPSULATING METADATA LOGS...",
    "> DISPATCHING PAYLOAD TO ENGINE COORDINATES..."
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.specs) {
      alert("ERROR: COMPLY WITH ALL PROTOCOLS FIRST.");
      return;
    }

    setStep("compiling");
    setCompilingLog([]);
    setSubmissionError(null);

    // Start sending the form data immediately to Web3Forms
    const submissionPromise = (async () => {
      if (ACCESS_KEY === "YOUR_ACCESS_KEY_HERE" || !ACCESS_KEY) {
        return { 
          success: false, 
          error: "MISSING ACCESS KEY. Please configure VITE_WEB3FORMS_ACCESS_KEY in your env file." 
        };
      }
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: ACCESS_KEY,
            name: form.name,
            email: form.email,
            phone: form.phone,
            message: form.specs,
            subject: `New Contact Submission from ${form.name}`,
            from_name: "MY XOR TECH Specs Compiler",
            replyto: form.email,
          }),
        });

        const data = await response.json();
        if (response.ok && data.success) {
          return { success: true };
        } else {
          return { success: false, error: data.message || "API Error" };
        }
      } catch (err) {
        return { success: false, error: err.message || "Network Error" };
      }
    })();

    // Run the animation
    let currentLogIndex = 0;
    const interval = setInterval(async () => {
      if (currentLogIndex < logsSequence.length) {
        setCompilingLog((prev) => [...prev, logsSequence[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        
        // Wait for submission result
        const result = await submissionPromise;
        if (result.success) {
          setCompilingLog((prev) => [
            ...prev,
            "> DEPLOYMENT COMPLETED SUCCESS // myxortech@gmail.com (STATUS: 200 OK)"
          ]);
          setTimeout(() => {
            setStep("success");
          }, 1200);
        } else {
          setCompilingLog((prev) => [
            ...prev,
            `> CONNECTION ERROR // COMPILATION FAILED (STATUS: 500)`,
            `> REASON: ${result.error.toUpperCase()}`
          ]);
          setSubmissionError(result.error);
        }
      }
    }, 450);
  };

  // GSAP ScrollTrigger animations scoped to the page
  const pageRef = useScrollAnimations((container) => {
    // 1. Label slide from left
    scrollPresets.slideLeft(
      ".contact-info",
      ".contact-label",
      { duration: 0.8, start: "top 90%" }
    );

    // 2. Title clip reveal
    scrollPresets.clipReveal(
      ".contact-info",
      ".contact-title",
      { duration: 1.2, start: "top 90%" }
    );

    // 3. Description fade up
    scrollPresets.fadeUpScale(
      ".contact-info",
      ".contact-desc",
      { duration: 1.0, start: "top 85%" }
    );

    // 4. Coordinate rows stagger
    scrollPresets.staggerAlternate(
      ".contact-info",
      ".contact-coord",
      { stagger: 0.15, duration: 0.8, start: "top 80%" }
    );

    // 5. Form card slide from right
    scrollPresets.slideRight(
      ".contact-form-wrapper",
      ".contact-form-card",
      { duration: 1.2, start: "top 85%" }
    );
  }, []);

  return (
    <div ref={pageRef} className="w-full bg-background select-none min-h-[85vh] flex flex-col justify-center">
      <section className="max-w-[1440px] mx-auto border-x-thick border-b-thick border-primary p-6 md:p-12 w-full flex-grow flex flex-col justify-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Informational Column */}
          <div className="contact-info md:col-span-5 select-none">
            <span className="contact-label font-mono text-label-caps text-secondary font-bold block mb-4">
              [ INITIATION PROTOCOL ]
            </span>
            <h1 className="contact-title font-display text-[48px] md:text-[80px] font-black uppercase leading-[0.9] mb-8 text-primary">
              INITIATE
              <br />
              CONTACT
            </h1>
            <p className="contact-desc font-mono text-body-lg text-secondary uppercase leading-relaxed mb-8">
              Send us your technical blueprints, MVP outlines, or platform specifications. Our compiler parses requests instantly.
            </p>
            <div className="space-y-4 font-mono text-[11px] uppercase text-secondary">
              <div className="contact-coord border-t border-primary/20 pt-2 flex justify-between">
                <span>SYSTEM COORDINATES</span>
                <span className="font-bold text-primary">52.5200° N, 13.4050° E</span>
              </div>
              <div className="contact-coord border-t border-primary/20 pt-2 flex justify-between">
                <span>COMPILER AGENT</span>
                <span className="font-bold text-primary">AGENT_MY_XOR_CORE_V4</span>
              </div>
            </div>
          </div>

          {/* Form / Terminal Interface */}
          <div className="contact-form-wrapper md:col-span-7">
            <div className="contact-form-card bg-white border-thick border-primary p-8 neo-shadow relative overflow-hidden min-h-[500px] flex flex-col justify-between">
              
              {step === "form" && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex justify-between items-center mb-4 border-b border-primary/20 pb-4">
                    <div className="flex items-center gap-2">
                      <Terminal size={18} />
                      <span className="font-mono text-[11px] font-bold text-primary uppercase">SPECS COMPILER V4</span>
                    </div>
                    <span className="font-mono text-[9px] text-secondary tracking-widest uppercase">INPUT READY</span>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-label-caps font-bold text-primary">CLIENT NAME</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border-thick border-primary p-4 font-mono text-body-md focus:outline-none focus:bg-surface-container-low transition-colors rounded-none"
                      placeholder="ENTER SPECIFICATION REGISTER NAME"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-label-caps font-bold text-primary">EMAIL NODE</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border-thick border-primary p-4 font-mono text-body-md focus:outline-none focus:bg-surface-container-low transition-colors rounded-none"
                      placeholder="ENTER REGISTERED EMAIL NODE"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-label-caps font-bold text-primary">PHONE NODE</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border-thick border-primary p-4 font-mono text-body-md focus:outline-none focus:bg-surface-container-low transition-colors rounded-none"
                      placeholder="ENTER REGISTERED TELEPHONE NODE"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-label-caps font-bold text-primary">BLUEPRINT SPECIFICATIONS / MESSAGE</label>
                    <textarea
                      required
                      rows={4}
                      value={form.specs}
                      onChange={(e) => setForm({ ...form, specs: e.target.value })}
                      className="w-full border-thick border-primary p-4 font-mono text-body-md focus:outline-none focus:bg-surface-container-low transition-colors rounded-none"
                      placeholder="COMPOSE BLUEPRINT SPECS..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-on-secondary py-5 font-display text-headline-md font-bold uppercase hover:bg-white hover:text-primary border-thick border-primary transition-all flex items-center justify-center gap-3 cursor-pointer active:translate-y-[2px]"
                  >
                    <Send size={18} />
                    COMPILE & SEND PROTOCOL
                  </button>
                </form>
              )}

              {step === "compiling" && (
                <div className="flex-grow flex flex-col justify-between font-mono bg-primary text-on-secondary p-6 h-[400px] select-none border border-primary overflow-y-auto custom-scrollbar-none">
                  <div>
                    <div className="text-on-tertiary-container mb-4 font-bold border-b border-on-secondary/15 pb-2 flex justify-between uppercase text-[10px]">
                      <span>&gt; RUNNING BLUEPRINT COMPILER SECTOR_9</span>
                      {submissionError ? (
                        <span className="text-error font-bold">FAILED</span>
                      ) : (
                        <span className="animate-pulse text-on-tertiary-container">COMPILING</span>
                      )}
                    </div>
                    <div className="space-y-2 text-[11px] uppercase tracking-wider leading-relaxed">
                      {compilingLog.map((log, idx) => (
                        <div key={idx} className={`${log.includes('ERROR') || log.includes('REASON') ? 'text-error font-bold' : 'opacity-95'}`}>{log}</div>
                      ))}
                    </div>
                  </div>
                  {submissionError ? (
                    <div className="mt-6 border-t border-on-secondary/15 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                      <span className="text-[9px] text-error uppercase tracking-widest font-bold">
                        TRANSMISSION BLOCKED
                      </span>
                      <button
                        onClick={() => {
                          setStep("form");
                          setSubmissionError(null);
                        }}
                        className="px-4 py-2 bg-on-secondary text-primary font-mono text-[10px] font-bold uppercase hover:bg-white transition-colors cursor-pointer"
                      >
                        RETRY TRANSMISSION
                      </button>
                    </div>
                  ) : (
                    <div className="mt-8 text-on-tertiary-container text-[9px] uppercase tracking-widest text-right font-bold">
                      AGENT CODE COMPILING STATUS: {Math.min(100, (compilingLog.length / (logsSequence.length + 1) * 100)).toFixed(0)}%
                    </div>
                  )}
                </div>
              )}

              {step === "success" && (
                <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-fade-in">
                  <div className="bg-white border-thick border-primary p-8 max-w-md w-full neo-shadow relative animate-scale-up">
                    <div className="flex justify-between items-center mb-6 border-b border-primary/20 pb-3">
                      <div className="flex items-center gap-2 text-primary font-mono text-[11px] font-bold">
                        <span className="w-2.5 h-2.5 bg-green-500 border border-primary animate-pulse"></span>
                        <span>TRANSMISSION SUCCESSFUL</span>
                      </div>
                      <span className="font-mono text-[9px] text-secondary uppercase tracking-wider">SECURE</span>
                    </div>

                    <div className="flex flex-col items-center text-center gap-6 my-4">
                      <div className="w-20 h-20 bg-primary text-white flex items-center justify-center border-thick border-primary neo-shadow">
                        <CheckCircle size={40} />
                      </div>
                      <div>
                        <h3 className="font-display text-headline-md font-black uppercase text-primary leading-tight">
                          FORM SUBMITTED SUCCESSFULLY!
                        </h3>
                        <p className="font-mono text-body-md text-secondary mt-3 uppercase leading-relaxed">
                          Your blueprint payload has been compiled and dispatched. Redirecting to home terminal in <span className="text-primary font-bold">{countdown}s</span>...
                        </p>
                      </div>

                      <button
                        onClick={() => navigate("/")}
                        className="w-full bg-primary text-on-secondary py-4 mt-4 font-display text-label-lg font-bold uppercase hover:bg-white hover:text-primary border-thick border-primary transition-all cursor-pointer active:translate-y-[2px]"
                      >
                        RETURN HOME IMMEDIATELY
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Fade-in keyframe directly inside to prevent any setup gaps */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-scale-up {
          animation: scaleUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
