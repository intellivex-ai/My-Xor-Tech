import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Terminal, Cpu, HardDrive, Shield } from "lucide-react";
import { useScrollAnimations, scrollPresets } from "../components/useScrollAnimations";
import rehmanImg from "../assets/rehman.png";

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
        "A fiercely competitive innovator and multiple hackathon winner, Hashmi has consistently proven his ability to build rapidly and effectively under pressure, with standout performances at major tech events like Hacktoon 1.0 and Hawkathon 2026. Beyond his technical accolades, he is a driven Startup Founder. Whether he is leading operations at Decor Glass and Solutions (DGS) or engineering comprehensive digital platforms like Homigoz, his work is defined by a commitment to scalable architecture and sleek, modern aesthetics.",
        "With a relentless focus on crafting clean, high-performance assets, Hashmi doesn't just write code or design interfaces—he engineers complete, production-ready digital ecosystems."
      ]
    },
    {
      id: "syntax",
      name: "SYNTAX",
      role: "COMPILER CORE",
      avatar: "",
      specs: {
        optimization: "99.9%",
        latency: "8ms",
        primary_tool: "RUST // WEBGL",
        threat_level: "SECURE"
      },
      logs: [
        "> INITIALIZING COMPILER...",
        "> CONNECTING TO CLOUD WORKSPACE...",
        "> RUNNING UNIT TESTS... 100% OK",
        "> SYNTAX READY // COMPILER COMPILED"
      ]
    },
    {
      id: "matrix",
      name: "MATRIX",
      role: "SHADER ARTIST",
      avatar: "",
      specs: {
        optimization: "99.5%",
        latency: "12ms",
        primary_tool: "THREE.JS // GLSL",
        threat_level: "ELEVATED"
      },
      logs: [
        "> BOOTING WEBGL CANVAS...",
        "> DRAWING BLUEPRINT SCHEMATICS...",
        "> COMPILING SHADERS...",
        "> MATRIX ACTIVE // 60 FPS STABLE"
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
        <div className="team-grid grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, idx) => {
            const isConsoleOpen = activeConsole === member.id;

            return (
              <div
                key={member.id}
                className={`team-card-${idx} border-thick border-primary bg-white neo-shadow flex flex-col justify-between overflow-hidden hover-lift group`}
              >
                {/* Visual Header */}
                <div className="relative overflow-hidden h-[450px] border-b-thick border-primary pointer-events-none select-none bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:16px_16px] bg-surface-container-high">
                  <img
                    alt={member.name}
                    className={`team-avatar w-full h-full object-cover grayscale brightness-90 transition-all duration-300 img-reveal group-hover:grayscale-0 group-hover:brightness-100 ${member.position || 'object-center'} ${member.imgClass || ''}`}
                    loading="lazy"
                    onLoad={(e) => e.currentTarget.classList.add('loaded')}
                    src={member.avatar}
                  />
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
