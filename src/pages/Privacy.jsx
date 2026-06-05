import { useScrollAnimations, scrollPresets } from "../components/useScrollAnimations";

export default function Privacy() {
  const pageRef = useScrollAnimations((container) => {
    scrollPresets.clipReveal(
      ".privacy-header",
      ".privacy-title",
      { duration: 1.2, start: "top 90%" }
    );
    scrollPresets.slideLeft(
      ".privacy-header",
      ".privacy-desc",
      { duration: 1.0, start: "top 85%" }
    );
    scrollPresets.fadeUpScale(
      ".privacy-content",
      ".privacy-section",
      { stagger: 0.15, duration: 0.8, start: "top 85%" }
    );
  }, []);

  const sections = [
    {
      id: "01",
      title: "METADATA INGESTION",
      text: "WE COLLECT COMPILATION TELEMETRY, IP COORDINATES, BROWSER HEADER IDENTIFIERS, AND ACCESS TIME METRICS. THIS INGESTION PIPELINE IS STRICTLY DESIGNED TO OPTIMIZE TECHNICAL ROUTING AND RENDERING DYNAMICS."
    },
    {
      id: "02",
      title: "DATA ENCRYPTION ARCHITECTURE",
      text: "ALL CLIENT SPECIFICATIONS SENT VIA TRANSMISSION CHANNELS ARE PROTECTED BY HIGH-GRADE SYMMETRIC AES-256 SCHEMES IN TRANSIT. SECURE CRYPTOGRAPHIC HASHES SAFEGUARD ALL INTERNAL REGISTERS."
    },
    {
      id: "03",
      title: "THIRD-PARTY CONNECTIONS",
      text: "WE ENGAGE EXTERNAL NODES ONLY FOR COMPLYING ACTIONS (SUCH AS WEB3FORMS DISPATCH ENGINE). INDIVIDUAL CLIENT DATA IS NEVER LEAKED, DISTRIBUTED, OR MONETIZED TO ADS NETWORKS."
    },
    {
      id: "04",
      title: "USER ARCHIVE RIGHTS",
      text: "CLIENT AGENTS RETAIN THE RIGHT TO PURGE THEIR LOG RECORDS FROM OUR BLUEPRINT ARCHIVES. TO INITIALIZE AN INGEST PURGE PROTOCOL, DISPATCH A TARGET SIGNAL TO MYXORTECH@GMAIL.COM."
    },
    {
      id: "05",
      title: "CHANGES TO CODES",
      text: "WE RESERVE THE RIGHT TO REFACTOR THIS PRIVACY ENVELOPE AT ANY LOGICAL TIMESTAMP. CONTINUED INTERFACE CONNECTION REPRESENTS EXPLICIT CONSENT TO EVOLVING DATA ENVELOPE ENCRYPTIONS."
    }
  ];

  return (
    <div ref={pageRef} className="w-full bg-background select-none">
      {/* Title Header */}
      <section className="privacy-header p-6 md:p-12 border-b-thick border-primary bg-surface-container-lowest overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <h1 className="privacy-title font-display text-[50px] md:text-display-xl font-black uppercase leading-none text-primary">
              PRIVACY PROTOCOL
            </h1>
            <p className="privacy-desc font-mono text-body-lg text-secondary border-l-thick border-primary pl-8 uppercase leading-relaxed mt-8 max-w-2xl">
              ENCRYPTED CHANNEL SECURITY POLICIES. HOW WE CAPTURE, PROTECT, AND REDIRECT SYSTEM METADATA AND BLUEPRINT LOGS.
            </p>
          </div>
          <span className="font-mono text-label-caps bg-primary text-white px-4 py-2 font-bold">
            DOC.REF // PRIVACY_V4.2
          </span>
        </div>
      </section>

      {/* Privacy list */}
      <section className="privacy-content max-w-[1440px] mx-auto border-x-thick border-b-thick border-primary p-6 md:p-12 select-none overflow-hidden bg-background">
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} className="privacy-section border-thick border-primary bg-white p-8 neo-shadow flex flex-col md:flex-row gap-6 md:gap-12 items-start">
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
