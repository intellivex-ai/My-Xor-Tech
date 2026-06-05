import { useScrollAnimations, scrollPresets } from "../components/useScrollAnimations";

export default function Terms() {
  const pageRef = useScrollAnimations((container) => {
    scrollPresets.clipReveal(
      ".terms-header",
      ".terms-title",
      { duration: 1.2, start: "top 90%" }
    );
    scrollPresets.slideLeft(
      ".terms-header",
      ".terms-desc",
      { duration: 1.0, start: "top 85%" }
    );
    scrollPresets.fadeUpScale(
      ".terms-content",
      ".terms-section",
      { stagger: 0.15, duration: 0.8, start: "top 85%" }
    );
  }, []);

  const sections = [
    {
      id: "01",
      title: "ACCEPTANCE OF TERMS",
      text: "BY ACCESSING AND USING THIS INTERFACE, YOU AGREE TO COMPLY WITH AND BE BOUND BY ALL LAWS, REGULATIONS, AND TECHNICAL FRAMEWORKS SPECIFIED HEREIN. IF YOU DO NOT AGREE TO THESE TERMS, TERMINATE ALL CLIENT SESSIONS IMMEDIATELY."
    },
    {
      id: "02",
      title: "INTELLECTUAL INTEGRITY",
      text: "ALL CODE BASE ASSETS, MOTION VECTORS, ARCHITECTURAL GRID SYSTEMS, AND GRAPHICAL SHADER LAYERS REMAIN THE EXCLUSIVE PROPERTY OF MY XOR TECH. MODIFICATION, COPYING, OR RE-DISTRIBUTION OF THE STITCH ENGINE CODE WITHOUT FORMAL WRITTEN BLUEPRINT CONSENT IS STRICTLY PROHIBITED."
    },
    {
      id: "03",
      title: "USER CONDUCT & API USAGE",
      text: "CLIENT AGENTS AGREE NOT TO ENGAGE IN REVERSE ENGINEERING, LOGS CORRUPTION, PORT SCANNING, OR COMPILER INTERCEPTIONS. ALL INTERACTION WITH MY XOR TECH ARCHITECTURES MUST COMPLY WITH STANDARD SECURITY COMPLIANCE SPECIFICATIONS."
    },
    {
      id: "04",
      title: "LIABILITY LIMITATIONS",
      text: "SERVICES ARE PROVIDED ON AN 'AS-IS' AND 'AS-AVAILABLE' BASIS WITH ZERO GUARANTEES OF COMPLETE UPTIME OR LATENCY OPTIMALITY. MY XOR TECH SHALL NOT BE LIABLE FOR DATABASE DECRYPTION OR DATA TRANSMISSION DELAYS."
    },
    {
      id: "05",
      title: "TERMINATION PROTOCOLS",
      text: "WE RESERVE THE RIGHT TO TERMINATE USER CONNECTIONS, REVOKE SECURITY TOKENS, OR INTERCEPT API SESSIONS AT OUR SOLE DISCRETION FOR VIOLATIONS OF ANY SYSTEM COMPLIANCE CLAUSES."
    }
  ];

  return (
    <div ref={pageRef} className="w-full bg-background select-none">
      {/* Title Header */}
      <section className="terms-header p-6 md:p-12 border-b-thick border-primary bg-surface-container-lowest overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <h1 className="terms-title font-display text-[50px] md:text-display-xl font-black uppercase leading-none text-primary">
              TERMS PROTOCOL
            </h1>
            <p className="terms-desc font-mono text-body-lg text-secondary border-l-thick border-primary pl-8 uppercase leading-relaxed mt-8 max-w-2xl">
              SYSTEM LEVEL COMPLIANCE CLAUSES. EXECUTING THIS SITE CONSTITUTES COMPLETE BINDING AGREEMENT TO ALL PIPELINES LISTED BELOW.
            </p>
          </div>
          <span className="font-mono text-label-caps bg-primary text-white px-4 py-2 font-bold">
            DOC.REF // TERMS_V4.2
          </span>
        </div>
      </section>

      {/* Terms list */}
      <section className="terms-content max-w-[1440px] mx-auto border-x-thick border-b-thick border-primary p-6 md:p-12 select-none overflow-hidden bg-background">
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} className="terms-section border-thick border-primary bg-white p-8 neo-shadow flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <span className="font-display text-[36px] md:text-[48px] font-black text-primary leading-none">
                {section.id}
              </span>
              <div className="space-y-4">
                <h2 className="font-display text-headline-md font-black uppercase text-primary leading-none">
                  {section.title}
                </h2>
                <p className="font-mono text-body-md text-secondary leading-relaxed uppercase">
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
