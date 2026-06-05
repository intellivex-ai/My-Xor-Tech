import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Terminal, Cpu, HardDrive, Shield } from "lucide-react";
import { useScrollAnimations, scrollPresets } from "../components/useScrollAnimations";
import rehmanImg from "../assets/rehman.png";

const getInitials = (name) => {
  const cleanName = name.replace(/^(er\.|er)\s+/i, "").trim();
  const parts = cleanName.split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return cleanName.slice(0, 2).toUpperCase();
};

export default function Team() {
  const [activeConsole, setActiveConsole] = useState(null);

  const team = [
    {
      id: "ABDUL REHMAN HASHMI",
      name: "ER. HASHMI ABDUL REHMAN ",
      role: "SYSTEM ARCHITECT & TEAM LEAD",
      avatar: rehmanImg,
      position: "object-[-80%_10%]",
      imgClass: "scale-[1.35] translate-x-10 -translate-y-8",
      specs: {
        optimization: "TEAM LEADER",
        latency: "DESIGNING SYSTEM ARCHITECT AND UI/UX",
        primary_tool: "REACT // NEXTJS // design software",
      },
      bio: [
        "Er. Hashmi Abdul Rehman\nTeam Leader | Designing System Architect | UI/UX Specialist",
        "Hashmi Abdul Rehman is a brilliant digital architect and UI/UX visionary who seamlessly bridges the gap between high-performance engineering and striking, modern design. As a natural Team Leader, he specializes in orchestrating complex projects from concept to deployment, utilizing a powerful toolkit that includes React, Next.js, and industry-leading design software.",
        "A fiercely competitive innovator and multiple hackathon winner, Hashmi has consistently proven his ability to build rapidly and effectively under pressure, with standout performances at major tech events like technoscope 20205-26, Hawkathon 2026 and Hacktoon 1.0 . Beyond his technical accolades, he is a driven Startup Founder. Whether he is leading operations at Decor Glass and Solutions (DGS) or engineering comprehensive digital platforms like Homigoz, his work is defined by a commitment to scalable architecture and sleek, modern aesthetics.",
        "With a relentless focus on crafting clean, high-performance assets, Hashmi doesn't just write code or design interfaces—he engineers complete, production-ready digital ecosystems."
      ]
    },
    {
      id: "Aamna Mohin Pathan",
      name: "ER Aamna Mohin Pathan",
      role: "OUTREACH & CONVERSION",
      avatar: "",
      specs: {
        optimization: "OUTREACH & CONVERSION",
        latency: "BUSINESS DEVELOPMENT & DIGITAL MARKETING EXECUTIVE",
        primary_tool: "OUTLOOK // SOCIAL MEDIA // CRM ",
        threat_level: "SECURE"
      },
      bio: [
        "Er. Aamna Mohin Pathan\nBusiness Development Executive | Outreach Specialist | Digital Marketing",
        "Aamna Mohin Pathan is a business development and digital marketing professional with a focused eye for opportunity and a natural ability to connect with people. She specializes in recognizing businesses that have yet to establish a digital presence and guiding them toward solutions that create lasting impact. Her approach is never transactional — she takes the time to understand each client's world, builds trust organically, and positions the right offering at the right moment, making every interaction feel purposeful rather than pressured.",
        "What sets her apart is the way she brings together two disciplines that are often kept separate — direct client outreach and strategic digital advertising — into one cohesive and high-performing workflow. From the very first touchpoint to the moment a deal is finalized, she moves with consistency, clarity, and a quiet confidence that clients respond to. Her work reflects not just an ability to generate results, but an understanding of what it truly takes to build meaningful business relationships in a competitive digital landscape"
      ]
    },
    {
      id: "Adiba Abdul Taksim Khan",
      name: "Er. Adiba Abdul Taksim Khan",
      role: "FRONTEND DEVELOPER",
      avatar: "",
      specs: {
        optimization: "FRONTEND DEVELOPER",
        latency: "DEVELOPING & DESIGNING UI/UX",
        primary_tool: "REACT // NEXTJS // THREE.JS // GLSL",
        threat_level: "ELEVATED"
      },
       bio: [
        "Er. Adiba Abdul Taksim Khan\nFrontend Developer | UI Implementation Specialist | Interactive Web Craftsman",
        "Er. Adiba Abdul Taksim Khan is a creative and precise frontend developer who builds websites from the ground up using raw, powerful web technologies: REACT, NEXTJS, THREE.JS, GLSL and JavaScript. With a strong eye for layout composition and user interaction, she turns static designs into fully responsive, interactive, and cross-browser compatible web experiences.",
        "A detail-driven builder and enthusiastic problem solver, Adiba excels at crafting clean, semantic markup, elegant styling, and lightweight JavaScript functionality without relying on heavy frameworks. Her work loads fast, scales beautifully across devices, and remains accessible to all users.",
        "Whether she is developing hand-coded landing pages, interactive dashboards, or dynamic client-side features, Adiba’s output is defined by clarity, consistency, and a deep respect for web fundamentals. She doesn't just write code — she builds reliable, engaging digital spaces that work everywhere."
      ]
    },
        {
      id: "SAHIL SHAIKH",
      name: "Er. SAHIL SHAIKH",
      role: "Product Developer & Systems Logic",
      avatar: "",
      specs: {
        optimization: "SYSTEM DEVELOPER",
        latency: "Product Developer & Systems Logic",
        primary_tool: "PYTHON // JAVA // REACT // FASTAPI",
        threat_level: "ELEVATED"
      },
       bio: [
        "Er. SAHIL SHAIKH\SYSTEM Developer | Product Development | Systems Logic Engineer",
        "Sahil Shaikh is a product-focused engineer who specialises in translating raw ideas into functional, efficient systems. His strength lies in building the logic layer — designing how a product thinks, behaves, and scales before a single pixel is placed.",
        "A first-year CS student and active builder, Sahil has already shipped two live products: TruSay, a real-time UPI fraud detection system with GPT-powered explainable alerts, and Homizgo, a PG and hostel discovery platform for students. Both projects reflect his approach — solve real problems, build fast, and keep the architecture clean.",
        "Working across Python, Java, HTML, React, and FastAPI, Sahil focuses on the intersection of product thinking and backend efficiency. At MY XOR TECH, he drives product development and ensures the internal logic of every system is built to perform — not just to ship."
      ]
    }
  ];

  const handleToggleConsole = (id) => {
    setActiveConsole(activeConsole === id ? null : id);
  };

  // GSAP ScrollTrigger animations scoped to the page
  const pageRef = useScrollAnimations((container) => {
    // 1. Header title clip reveal
    scrollPresets.clipReveal(
      ".team-header",
      ".team-title",
      { duration: 1.2, start: "top 90%" }
    );

    // 2. Header description slide from left
    scrollPresets.slideLeft(
      ".team-header",
      ".team-desc",
      { duration: 1.0, start: "top 85%" }
    );

    // 3. Revision badge scale reveal
    scrollPresets.scaleReveal(
      ".team-header",
      ".team-badge",
      { duration: 0.8, start: "top 85%" }
    );

    // 4. Team cards — staggered with different animation per card
    team.forEach((member, idx) => {
      const card = `.team-card-${idx}`;

      // Card entrance — alternating slide directions with scale
      if (idx === 1) {
        // Center card fades up with scale
        scrollPresets.fadeUpScale(
          ".team-grid",
          card,
          { duration: 1.2, stagger: 0, start: "top 80%" }
        );
      } else if (idx === 0) {
        // Left card slides from left
        scrollPresets.slideLeft(
          ".team-grid",
          card,
          { duration: 1.0, start: "top 80%" }
        );
      } else {
        // Right card slides from right
        scrollPresets.slideRight(
          ".team-grid",
          card,
          { duration: 1.0, start: "top 80%" }
        );
      }

      // Avatar image parallax
      scrollPresets.parallax(
        card,
        `${card} .team-avatar`,
        { yStart: 20, yEnd: -20, scrub: 2 }
      );

      // Spec rows stagger
      scrollPresets.fadeUpScale(
        card,
        `${card} .team-spec-row`,
        { stagger: 0.1, duration: 0.6, start: "top 75%" }
      );
    });
  }, []);

  return (
    <div ref={pageRef} className="w-full select-none bg-background">
      {/* Title Header */}
      <section className="team-header p-6 md:p-12 border-b-thick border-primary bg-surface-container-lowest select-none overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <h1 className="team-title font-display text-[50px] md:text-display-xl font-black uppercase leading-none text-primary">
              TEAM PROTOCOL
            </h1>
            <p className="team-desc font-mono text-body-lg text-secondary border-l-thick border-primary pl-8 uppercase leading-relaxed mt-8">
              A highly specialized squad of digital industrializers. Handcrafting clean high-performance assets. No compromises.
            </p>
          </div>
          <span className="team-badge font-mono text-label-caps bg-primary text-white px-4 py-2 font-bold select-none">
            REVISION.4.2.0
          </span>
        </div>
      </section>

      {/* Grid of Team Cards */}
      <section className="max-w-[1440px] mx-auto border-x-thick border-b-thick border-primary p-6 md:p-12 select-none overflow-hidden">
        <div className="team-grid grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {team.map((member, idx) => {
            const isConsoleOpen = activeConsole === member.id;

            return (
              <div
                key={member.id}
                className={`team-card-${idx} border-thick border-primary bg-white neo-shadow flex flex-col justify-between overflow-hidden hover-lift group`}
              >
                {/* Visual Header */}
                <div className="relative overflow-hidden w-full aspect-[3/4] border-b-thick border-primary pointer-events-none select-none bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:16px_16px] bg-surface-container-high">
                  {member.avatar ? (
                    <img
                      alt={member.name}
                      className={`team-avatar w-full h-full object-cover grayscale-0 brightness-100 md:grayscale md:brightness-90 transition-all duration-300 img-reveal group-hover:grayscale-0 group-hover:brightness-100 ${member.position || 'object-center'} ${member.imgClass || ''}`}
                      loading="lazy"
                      onLoad={(e) => e.currentTarget.classList.add('loaded')}
                      src={member.avatar}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center relative bg-surface-container-high/25 select-none">
                      {/* Corner bracket markers */}
                      <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-primary/45" />
                      <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-primary/45" />
                      <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-primary/45" />
                      <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-primary/45" />
                      
                      {/* Tech info tags */}
                      <div className="absolute top-8 left-8 font-mono text-[9px] text-primary/50 flex flex-col gap-0.5 uppercase tracking-widest leading-none">
                        <span>SYS.REF: {member.id.replace(/\s+/g, "_").slice(0, 8).toUpperCase()}_MEMBER</span>
                        <span>SECTOR: DIGITAL_OPS</span>
                      </div>
                      
                      <div className="absolute top-8 right-8 font-mono text-[9px] text-primary/50 flex flex-col items-end gap-0.5 uppercase tracking-widest leading-none">
                        <span>RENDER: BYPASS</span>
                        <span>VISUAL: NO_DATA</span>
                      </div>

                      {/* Cybernetic HUD graphics */}
                      <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 flex items-center justify-center">
                        {/* Animated outer ring */}
                        <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 animate-[spin_60s_linear_infinite]" />
                        {/* Inner static/dotted rings */}
                        <div className="absolute w-[85%] h-[85%] rounded-full border border-dotted border-primary/30" />
                        <div className="absolute w-[70%] h-[70%] rounded-full border border-primary/10" />
                        
                        {/* Big brutalist initials monogram */}
                        <span className="font-display text-[56px] sm:text-[64px] md:text-[72px] font-black tracking-tighter text-primary/20 group-hover:text-primary/40 group-hover:scale-105 transition-all duration-500 leading-none select-none z-10">
                          {getInitials(member.name)}
                        </span>
                        
                        {/* Crosshair markers inside */}
                        <div className="absolute left-0 right-0 h-[1px] bg-primary/10" />
                        <div className="absolute top-0 bottom-0 w-[1px] bg-primary/10" />
                      </div>

                      {/* Warning/Bypass message */}
                      <div className="absolute bottom-12 left-0 right-0 text-center font-mono text-[10px] text-primary/60 uppercase tracking-widest flex flex-col gap-1 items-center">
                        <span className="px-2 py-0.5 bg-primary/10 border border-primary/25 rounded-sm animate-pulse">
                          ENCRYPTED_SIGNATURE
                        </span>
                      </div>
                    </div>
                  )}
                  <span className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 font-mono text-[10px] font-bold">
                    {member.role}
                  </span>
                </div>

                {/* Info and interaction panel */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6 select-none">
                    <h2 className="font-display text-headline-md font-black uppercase text-primary">
                      {member.name}
                    </h2>
                    <button
                      onClick={() => handleToggleConsole(member.id)}
                      className={`w-10 h-10 border border-primary flex items-center justify-center cursor-pointer transition-colors ${isConsoleOpen ? "bg-primary text-white" : "bg-background hover:bg-primary hover:text-white"
                        }`}
                    >
                      <Terminal size={18} />
                    </button>
                  </div>

                  {/* Specification Table */}
                  <div className="space-y-2 font-mono text-[11px] text-secondary select-none uppercase">
                    <div className="team-spec-row flex justify-between border-b border-primary/20 pb-1">
                      <span className="flex items-center gap-1"><Cpu size={12} /> JOB</span>
                      <span className="text-primary font-bold">{member.specs.optimization}</span>
                    </div>
                    <div className="team-spec-row flex justify-between border-b border-primary/20 pb-1">
                      <span className="flex items-center gap-1"><HardDrive size={12} /> ROLE</span>
                      <span className="text-primary font-bold">{member.specs.latency}</span>
                    </div>
                    <div className="team-spec-row flex justify-between border-b border-primary/20 pb-1">
                      <span className="flex items-center gap-1"><Shield size={12} /> TOOLKIT</span>
                      <span className="text-primary font-bold">{member.specs.primary_tool}</span>
                    </div>
                  </div>
                </div>

                {/* Embedded Terminal Console */}
                <AnimatePresence>
                  {isConsoleOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="bg-primary text-on-secondary font-mono text-[10px] p-6 border-t-thick border-primary overflow-hidden"
                    >
                      {member.bio ? (
                        <div className="space-y-3 normal-case leading-relaxed text-xs">
                          {member.bio.map((paragraph, idx) => {
                            if (idx === 0) {
                              const [title, subtitle] = paragraph.split('\n');
                              return (
                                <div key={idx} className="border-b border-white/20 pb-2 mb-2">
                                  <div className="font-display text-[14px] md:text-[16px] font-black tracking-wide">{title}</div>
                                  <div className="font-mono text-[10px] md:text-[11px] opacity-80 mt-1">{subtitle}</div>
                                </div>
                              );
                            }
                            return (
                              <p key={idx} className="opacity-95 text-[11px] leading-relaxed">
                                {paragraph}
                              </p>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="space-y-1 uppercase leading-normal">
                          {member.logs.map((log, idx) => (
                            <div key={idx} className="opacity-95">{log}</div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
