import { useState, useEffect, useRef } from "react";
import logo from "./logo.png";
import emailjs from "@emailjs/browser";
import myImage from "./assets/myImage.png";
import profilePic from "../src/assets/profile.png";
import Hero from "../src/assets/heroConsulven.png";
import About from "../src/assets/aboutConsulven.png";
import FooterMockup from "../src/assets/footerConsulven.png";
import PC1 from "../src/assets/HeroPrime.png"
import PC2 from "../src/assets/AboutPrime.png";
import PC3 from "../src/assets/ContactPrime.png";
import QQH01 from "../src/assets/QQH-01.png";
import QQH02 from "../src/assets/QQH-02.png";
import QQH03 from "../src/assets/QQH-03.png";
import AnburFur1 from "../src/assets/AnbuFur-Hero.png";
import AnburFur2 from "../src/assets/AnbuFur-01.png";
import AnburFur3 from "../src/assets/anbufur-2.png";
import fp1 from "../src/assets/fp1.jpeg";
import fp2 from "../src/assets/fp02.jpg";
import fp3 from "../src/assets/fp03.jpg";
import LP1 from "../src/assets/bfc.png";
import LP2 from "../src/assets/ELS.jpeg";
import LP3 from "../src/assets/DCP.png";

const typewriterText = "Every Problem Leaves Clues. I Design the Solution.";

const projects = [
  {
    id:"01", 
    title:"Consulven", 
    color:"#3D2817", 
    label:"CASE #2024-001",
    status:"SOLVED",
    client:"Consulven IFSC", 
    role:"UI/UX Design", 
    tools:"Figma, UX Research", 
    year:"2024",
    duration:"2 months",
    desc:"International advisory firm requiring a credible digital presence. Rebuilt website UX from ground up with structured navigation. Focused on clarity, compliance communication, and enterprise trust. Digital positioning successfully established.",
    challenge:"The client needed a professional digital presence that would communicate credibility and compliance expertise to international clients. The existing website lacked structure and failed to build trust.",
    solution:"Rebuilt website UX from ground up with structured navigation, clear compliance messaging, and enterprise-focused design language. Implemented intuitive information architecture and professional visual identity.",
    results:[
      "Successfully established digital positioning",
      "Improved user trust and engagement metrics",
      "Clear communication of compliance expertise",
      "Enhanced professional brand perception"
    ],
    websiteUrl:"https://consulvenifsc.com/",
    behanceUrl:"https://www.behance.net/gallery/230230983/Consulven-Consulting-Website-UIUX-Design",
    mockups:[{label:"Hero",src:Hero},{label:"About",src:About},{label:"Footer",src:FooterMockup}],
  },
  {
    id:"02", 
    title:"Prime Counsel", 
    color:"#8B6F47", 
    label:"CASE #2024-002",
    status:"SOLVED",
    client:"Prime Counsel Solution", 
    role:"UI/UX Design", 
    tools:"Figma, Illustrator, Photoshop", 
    year:"2024",
    duration:"3 months",
    desc:"Legal consultancy platform requiring modernization and UX overhaul. Redesigned legacy website into a structured, user-focused system. Built antique-inspired legal interface with modern usability standards. Navigation clarity improved. Brand authority strengthened. Deployment successful.",
    challenge:"Legacy legal website suffered from poor usability and outdated interface. Users struggled with complex navigation and the site failed to communicate professional authority effectively.",
    solution:"Redesigned into structured, user-focused system with antique-inspired legal aesthetic combined with modern usability standards. Implemented clear navigation hierarchy and improved content organization.",
    results:[
      "Navigation clarity significantly improved",
      "Brand authority strengthened",
      "Modern usability with classic legal aesthetics",
      "Successful deployment and user adoption"
    ],
    websiteUrl:"https://www.figma.com/proto/gHIhokLPZpAf1NQuBX8mwD/PRIME-COUNSEL?page-id=2622%3A17330&node-id=2622-20118&viewport=711%2C301%2C0.05&t=qZzAeEl1w1ARDyCM-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2622%3A21184",
    behanceUrl:"https://www.behance.net/gallery/230103201/Ancient-Legal-Web-Design?tracking_source=project_owner_other_projects",
    mockups:[{label:"Login",src:PC1},{label:"Portal",src:PC2},{label:"Records",src:PC3}],
  },
  {
    id:"03", 
    title:"QuantumQuest Wealth", 
    color:"#D4AF37", 
    label:"CASE #2025-003",
    status:"SOLVED",
    client:"QuantumQuest Wealth", 
    role:"UI/UX Designer, Logo", 
    tools:"Figma, Photoshop, AI", 
    year:"2025",
    duration:"1 week",
    desc:"Investment advisory firm requiring modern digital identity. Designed high-trust financial interface with structured UX flow. Implemented service architecture, testimonials, and conversion CTAs. User engagement increased. Investor confidence reinforced. System launch successful.",
    challenge:"Investment firm needed to establish digital credibility and trust with potential investors. Existing presence failed to communicate expertise and failed to convert visitors into leads.",
    solution:"Designed high-trust financial interface with structured UX flow, clear service architecture, strategic testimonial placement, and optimized conversion CTAs throughout the user journey.",
    results:[
      "User engagement metrics increased",
      "Investor confidence reinforced",
      "Successful system launch",
      "Improved lead conversion rates"
    ],
    websiteUrl:"https://www.figma.com/proto/XUMSBZvykv8g1BT424pB4R/QuantunQuest-Wealth?node-id=1-2030&viewport=219%2C59%2C0.04&t=LrY4kvU4vSj0N1Yn-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A3",
    behanceUrl:"https://www.behance.net/gallery/229369907/Modern-UIUX-for-Financial-Advisory/modules/1314047951",
    mockups:[{label:"Hero",src:QQH01},{label:"Services",src:QQH02},{label:"Contact",src:QQH03}],
  },
  {
    id:"04",
   title:"ELS Legal",
color:"#8B0000",
label:"CASE #2024-004",
status:"SOLVED",
client:"ELS Legal",
role:"UI/UX Designer, Website Design, Logo Design",
tools:"Figma, Photoshop, Illustrator",
year:"2024-2025",
duration:"2 months",
desc:"Designed a responsive legal services website for ELS Legal, focused on clear service presentation, trust-building visuals, and easy user navigation. Result: improved user experience, stronger brand credibility, and better accessibility across devices.",

challenge:"The website needed a professional legal identity, clear information hierarchy, and mobile-friendly navigation so users could easily understand services and contact the firm.",

solution:"Created a clean responsive website with structured legal content sections, strong call-to-action placement, and a trust-focused visual style. Applied a mobile-first approach for smooth browsing on all devices.",

results:[
  "Improved website clarity and navigation",
  "Stronger professional brand presentation",
  "Better mobile responsiveness",
  "Enhanced user engagement"
],

websiteUrl:"https://www.figma.com/proto/AWymbf5PAPNilmAtKYe2yZ/ELS-LEGAL?node-id=1-4489&viewport=-44%2C-367%2C0.05&t=cbRxiOyisFr0Zw6y-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",

behanceUrl:"https://www.behance.net/gallery/230103201/Ancient-Legal-Web-Design?tracking_source=project_owner_other_projects",

mockups:[
  {label:"Mockup",src:fp1},
  {label:"Home",src:fp2},
  {label:"Service",src:fp3}
]},
  {
    id:"05", 
    title:"AnbuFur", 
    color:"#D4A574", 
    label:"CASE #2025-005",
    status:"LIVE",
    client:"AnbuFur", 
    role:"Full-Stack Developer & UI/UX Designer",
    tools:"React, TypeScript, Supabase, Tailwind CSS, Figma", 
    year:"2025",
    duration:"2 weeks",
    desc:"Built a full-stack animal rescue & adoption platform for India — featuring a real-time community rescue feed, 3-step adoption flow, volunteer role marketplace, and local vet clinic finder. Result: end-to-end product from zero to live in 2 weeks, serving Tamil Nadu's animal welfare community.",
    challenge:"Tamil Nadu's animal welfare community lacked a centralized platform for rescue coordination, adoption processes, and volunteer management. Fragmented communication led to delayed rescues and poor adoption rates.",
    solution:"Built full-stack platform with real-time rescue feed, streamlined 3-step adoption flow, volunteer marketplace, and vet clinic directory. Rapid development cycle delivered complete solution in 2 weeks.",
    results:[
      "End-to-end platform launched successfully",
      "Serving Tamil Nadu animal welfare community",
      "Real-time rescue coordination enabled",
      "Streamlined adoption process implemented"
    ],
    websiteUrl:"https://anbu-fur.netlify.app/",
    behanceUrl:"https://www.behance.net/gallery/244613911/AnbuFur-Animal-Rescue-Adoption-Platform",
    mockups:[{label:"Adopt",src:AnburFur1},{label:"Community",src:AnburFur2},{label:"Volunteer",src:AnburFur3}],
  },
  {
    id:"06", 
    title:"Logo & Poster Design", 
    color:"#3D2817", 
    label:"CASE #2024-006",
    status:"SOLVED",
    client:"Multiple Clients", 
    role:"Brand Designer & Graphic Designer",
    tools:"Illustrator, Photoshop, Figma", 
    year:"2024–2025",
    duration:"Ongoing",
    desc:"Brand identity & poster design across diverse industries. Created mascot-led logo for AK's Cafe Point showcased in Instagram mockup format. Designed ELS Legal logo mounted on outdoor lightbox signage for real-world brand presence. Developed DCP Dream Cut Pictures cinematic logo identity. Delivered consistent visual language across print and digital formats for each brand.",
    challenge:"Multiple clients across different industries needed distinctive brand identities that would work across both digital and physical touchpoints. Each required unique visual language appropriate to their sector.",
    solution:"Created tailored brand identities including mascot-led designs, professional legal branding, and cinematic logos. Ensured consistency across print and digital formats with real-world application in mind.",
    results:[
      "Consistent visual language delivered",
      "Multi-industry brand portfolio created",
      "Physical and digital touchpoint integration",
      "Client satisfaction across all projects"
    ],
    websiteUrl:"https://www.behance.net/gopikakrishvfc",
    behanceUrl:"https://www.behance.net/gopikakrishvfc",
    mockups:[{label:"Digital",src:LP1},{label:"Legal",src:LP2},{label:"Editing",src:LP3}],
  },
];

const timeline = [
  { year:"2022-2023", title:"Sr Customer Support Associate", place:"Teleperformance",   desc:"Handled customer queries and solved e-commerce related issues. Managed complex cases and ensured smooth resolution within timelines." },
  { year:"2024-2025", title:"UX/UI Designer",                place:"BFC MEDIA PVT LMT", desc:"Designed user-friendly websites and apps. Created wireframes and UI screens, worked with the team, and improved user experience based on research and feedback." },
];

const education = [
  { year:"2019–2022", degree:"BCA", field:"Bachelor of Computer Applications", institution:"St. Peters Institute of Higher Education and Research", badge:"GRADUATED" },
  { year:"2023–2024", degree:"Full-stack developement", field:"Course", institution:"Innovate Technology", badge:"COMPLETED" },
  { year:"2024–2026", degree:"MBA-HR", field:"Master of Business Administration — Human Resources", institution:"University of Madras", badge:"PURSUING" },
];

function useWindowWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return w;
}

function SectionLabel({ children }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:12 }}>
      <div style={{ width:32, height:1, background:"#D4AF37", flexShrink:0 }} />
      <span style={{ fontFamily:"Courier New,monospace", color:"#D4AF37", letterSpacing:3, textTransform:"uppercase", fontWeight:"bold", fontSize:"clamp(10px,1.4vw,14px)", whiteSpace:"nowrap" }}>
        {children}
      </span>
      <div style={{ flex:1, height:1, background:"linear-gradient(to right,#D4AF37,transparent)" }} />
    </div>
  );
}

function Footer({ theme="noir" }) {
  const t = theme === "terminal";
  const [now, setNow] = useState(new Date());
  const w = useWindowWidth();
  const isMobile = w < 600;
  useEffect(() => { const id = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(id); }, []);
  const h = now.getHours(), m = now.getMinutes().toString().padStart(2,"0");
  const time = `${h%12||12}:${m} ${h>=12?"PM":"AM"}`;
  return (
    <footer style={{ background:t?"#050505":"#0A0604", borderTop:`1px solid ${t?"#00FF41":"#3D2817"}`, padding:isMobile?"40px 16px 24px":"50px 24px 28px" }}>
      <div style={{ maxWidth:680, margin:"0 auto" }}>
        {!t && (
          <div style={{ marginBottom:36 }}>
            <div style={{ textAlign:"center", marginBottom:24 }}>
              <h2 style={{ fontFamily:"Courier New,monospace", fontSize:isMobile?20:24, color:"#D4AF37", margin:"0 0 8px", letterSpacing:2, textTransform:"uppercase" }}>Open a New Case</h2>
              <p style={{ fontFamily:"Courier New,monospace", fontSize:12, color:"#8B6F47", margin:0 }}>Got a design mystery? Let us investigate together.</p>
            </div>
            <div style={{ maxWidth:420, margin:"0 auto", background:"linear-gradient(160deg,#1C1208,#0E0A04)", border:"3px solid #3D2C0A", borderRadius:16, padding:"16px 18px 20px", boxShadow:"0 20px 50px rgba(0,0,0,0.85)" }}>
              <div style={{ display:"flex", justifyContent:"flex-end", gap:5, marginBottom:12 }}>
                {[now.getDate(), time].map((v,i) => (
                  <div key={i} style={{ background:"rgba(212,175,55,0.08)", border:"1px solid rgba(212,175,55,0.2)", padding:"3px 8px", borderRadius:4, fontFamily:"Courier New,monospace", fontSize:11, color:"#D4AF37" }}>{v}</div>
                ))}
              </div>
              <div style={{ background:"linear-gradient(160deg,#0D1A0A,#0A1508)", border:"2px solid #2A1F08", borderRadius:8, padding:"13px 15px", marginBottom:14 }}>
                <div style={{ fontFamily:"Courier New,monospace", fontSize:10, color:"#6B9E5A", marginBottom:5, letterSpacing:2, textTransform:"uppercase" }}>Contact me via email</div>
                <div style={{ fontFamily:"Courier New,monospace", fontSize:isMobile?12:14, color:"#A8D898", fontWeight:"bold", wordBreak:"break-all" }}>gopikakrishna3081@gmail.com</div>
              </div>
              <div style={{ display:"flex", gap:9, alignItems:"center", flexWrap:"wrap" }}>
                <div style={{ display:"flex", gap:7 }}>
                  {[{href:"https://github.com/gopikaKrishnaaa",label:"Git"},{href:"https://www.behance.net/gopikakrishvfc",label:"Be"},{href:"https://www.linkedin.com/in/gopika-krishz/",label:"in"}].map(({ href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      style={{ width:40, height:40, background:"linear-gradient(145deg,#1E1608,#140E04)", border:"2px solid #3D2C0A", borderRadius:9, display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", fontFamily:"Arial,sans-serif", fontSize:13, fontWeight:"bold", color:"#8B6F47", transition:"all 0.15s" }}
                      onMouseEnter={e=>{e.currentTarget.style.borderColor="#D4AF37";e.currentTarget.style.color="#D4AF37";}}
                      onMouseLeave={e=>{e.currentTarget.style.borderColor="#3D2C0A";e.currentTarget.style.color="#8B6F47";}}>{label}</a>
                  ))}
                </div>
                <a href="#contact" style={{ flex:1, background:"linear-gradient(145deg,#D4AF37,#B8941F)", color:"#0E0A04", fontFamily:"Courier New,monospace", fontSize:12, fontWeight:"bold", textTransform:"uppercase", letterSpacing:2, padding:"11px 14px", textAlign:"center", borderRadius:9, textDecoration:"none", display:"block", minWidth:90 }}>Contact Me</a>
              </div>
            </div>
          </div>
        )}
        <div style={{ textAlign:"center", paddingTop:18, borderTop:`1px solid ${t?"#00FF41":"#3D2817"}` }}>
          <div style={{ fontFamily:"Courier New,monospace", color:t?"#00FF41":"#8B6F47", fontSize:11 }}>
            {t?"> CASE_FILE 2026 - GOPIKA KRISHNA :: DESIGN_DETECTIVE":"CASE FILE 2026 - GOPIKA KRISHNA DESIGN DETECTIVE"}
          </div>
        </div>
      </div>
    </footer>
  );
}

// NEW: Floppy Disk Component for grid view
function FloppyDisk({ p, isHover, onHover, onLeave, onClick, isMobile }) {
  const isLive = p.status === "LIVE";
  
  return (
    <div 
      style={{ 
        cursor:"pointer", 
        transform:isHover?"translateY(-10px) scale(1.05)":"none", 
        transition:"transform 0.25s cubic-bezier(0.22,1,0.36,1)",
        filter:isHover?"drop-shadow(0 10px 18px rgba(212,175,55,0.35))":"none"
      }}
      onMouseEnter={onHover} 
      onMouseLeave={onLeave} 
      onClick={onClick}
    >
      {/* Floppy Disk Body */}
      <div style={{ 
        background:"linear-gradient(to bottom right, #2A2A2A, #1A1A1A)", 
        border:`4px solid ${isHover?"#D4AF37":"#3D3D3D"}`, 
        aspectRatio:"1", 
        position:"relative", 
        overflow:"hidden",
        boxShadow:isHover?"0 10px 30px rgba(0,0,0,0.7)":"0 4px 12px rgba(0,0,0,0.6)",
        transition:"border-color 0.2s, box-shadow 0.2s"
      }}>
        {/* Top gradient area */}
        <div style={{ position:"absolute", top:0, left:0, right:0, height:"33%", background:"linear-gradient(to bottom, #3D3D3D, transparent)" }} />
        
        {/* Metal shutter */}
        <div style={{ 
          position:"absolute", 
          bottom:"2rem", 
          left:"50%", 
          transform:"translateX(-50%)", 
          width:"75%", 
          height:"3rem", 
          background:"linear-gradient(to bottom, #5A5A5A, #2A2A2A)", 
          border:"2px solid #3D3D3D",
          boxShadow:"inset 0 2px 4px rgba(0,0,0,0.5)"
        }} />
        
        {/* Center hub */}
        <div style={{ 
          position:"absolute", 
          top:"50%", 
          left:"50%", 
          transform:"translate(-50%, -50%)", 
          width:isMobile?"3rem":"4rem", 
          height:isMobile?"3rem":"4rem", 
          borderRadius:"50%", 
          background:"linear-gradient(to bottom right, #1A1A1A, #0A0A0A)", 
          border:"4px solid #3D3D3D",
          boxShadow:"inset 0 2px 6px rgba(0,0,0,0.8)"
        }}>
          <div style={{ 
            position:"absolute", 
            inset:"0.75rem", 
            borderRadius:"50%", 
            border:"2px solid #2A2A2A" 
          }} />
        </div>
        
        {/* Label sticker */}
        <div style={{ 
          position:"absolute", 
          top:isMobile?"1rem":"1.5rem", 
          left:"50%", 
          transform:"translateX(-50%)", 
          width:"83%", 
          background:"linear-gradient(to bottom right, #F4E8D0, #E8DCC4)", 
          padding:isMobile?"0.5rem":"0.75rem", 
          boxShadow:"0 2px 8px rgba(0,0,0,0.3)", 
          border:"1px solid #8B6F47",
          transition:"box-shadow 0.2s"
        }}>
          <div style={{ display:"flex", flexDirection:"column", gap:isMobile?"0.15rem":"0.25rem" }}>
            <p style={{ 
              fontFamily:"Courier New,monospace", 
              fontSize:isMobile?"0.65rem":"0.75rem", 
              color:"#3D2817", 
              fontWeight:"bold", 
              margin:0,
              overflow:"hidden",
              textOverflow:"ellipsis",
              whiteSpace:"nowrap"
            }}>
              {p.title}
            </p>
            <p style={{ 
              fontFamily:"Courier New,monospace", 
              fontSize:isMobile?"0.5rem":"0.6rem", 
              color:"#8B6F47",
              margin:0
            }}>
              {p.label}
            </p>
            <div style={{ 
              display:"flex", 
              alignItems:"center", 
              justifyContent:"space-between", 
              paddingTop:"0.25rem", 
              borderTop:"1px solid #8B6F47" 
            }}>
              <span style={{ 
                fontFamily:"Courier New,monospace", 
                fontSize:"0.5rem", 
                color:"#5A4A3A" 
              }}>
                {p.status}
              </span>
              <div style={{ 
                width:isMobile?"0.4rem":"0.5rem", 
                height:isMobile?"0.4rem":"0.5rem", 
                borderRadius:"50%", 
                background:isLive?"#0057FF":"#00CC33" 
              }} />
            </div>
          </div>
        </div>
        
        {/* Write protection tabs */}
        <div style={{ position:"absolute", top:"1rem", left:"1rem", width:"1.5rem", height:"0.75rem", background:"#3D3D3D", border:"1px solid #5A5A5A" }} />
        <div style={{ position:"absolute", top:"1rem", right:"1rem", width:"1.5rem", height:"0.75rem", background:"#1A1A1A", border:"1px solid #5A5A5A" }} />
        
        {/* Bottom notch */}
        <div style={{ position:"absolute", bottom:0, right:"2rem", width:"2rem", height:"1rem", background:"#0A0A0A" }} />
      </div>
      
      {/* Save icon indicator - ONLY SHOWS ON HOVER */}
      <div style={{ 
        position:"absolute", 
        bottom:"-0.75rem", 
        right:"-0.75rem", 
        width:isMobile?"2.5rem":"3rem", 
        height:isMobile?"2.5rem":"3rem", 
        background:"#8B0000", 
        borderRadius:"50%", 
        display:"flex", 
        alignItems:"center", 
        justifyContent:"center", 
        boxShadow:"0 2px 8px rgba(0,0,0,0.5)", 
        border:"2px solid #F4E8D0",
        transform:isHover?"scale(1.1)":"scale(1)",
        opacity:isHover?1:0,
        transition:"transform 0.2s, opacity 0.2s"
      }}>
        <svg width={isMobile?"16":"20"} height={isMobile?"16":"20"} viewBox="0 0 24 24" fill="none" stroke="#F4E8D0" strokeWidth="2">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
          <polyline points="17 21 17 13 7 13 7 21"/>
          <polyline points="7 3 7 8 15 8"/>
        </svg>
      </div>
      
      {/* Label below */}
      <div style={{ 
        marginTop:"1rem", 
        textAlign:"center", 
        fontFamily:"Courier New,monospace", 
        fontSize:isMobile?"0.7rem":"0.875rem", 
        color:isHover?"#D4AF37":"#D4A574",
        transition:"color 0.2s"
      }}>
        CLICK TO LOAD
      </div>
    </div>
  );
}

// NEW: Terminal Project Page Component
function ProjectPage({ project, onBack, onNext, nextProject }) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [cursor, setCursor] = useState(true);
  const w = useWindowWidth();
  const isMobile = w < 600;

  useEffect(() => {
    setLoadingProgress(0);
    setIsLoaded(false);
    setTypedText("");
    
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoaded(true), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, [project.id]);

  useEffect(() => {
    if (isLoaded && project) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= project.title.length) {
          setTypedText(project.title.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [isLoaded, project]);

  useEffect(() => {
    const blink = setInterval(() => setCursor(c => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <div style={{ background:"#0A0A0A", minHeight:"100vh", color:"#00FF41", fontFamily:"Courier New,monospace", position:"relative", overflow:"hidden" }}>
      {/* CRT Scanlines Effect */}
      <div style={{ 
        position:"fixed", 
        inset:0, 
        pointerEvents:"none", 
        zIndex:50, 
        opacity:0.1,
        backgroundImage:"repeating-linear-gradient(0deg, transparent, transparent 2px, #00FF41 2px, #00FF41 4px)"
      }} />
      
      {/* CRT Screen Curvature */}
      <div style={{ 
        position:"fixed", 
        inset:0, 
        pointerEvents:"none", 
        zIndex:50, 
        border:"20px solid #1A1A1A", 
        borderRadius:"3%",
        boxShadow:"inset 0 0 100px rgba(0,255,65,0.1)"
      }} />

      {/* Terminal Container */}
      <div style={{ position:"relative", zIndex:10, minHeight:"100vh", padding:isMobile?"1rem":"2rem" }}>
        {/* Terminal Header */}
        <div style={{ maxWidth:"1200px", margin:"0 auto 2rem" }}>
          <div style={{ 
            background:"#1A1A1A", 
            border:"2px solid #00FF41", 
            padding:"1rem", 
            display:"flex", 
            alignItems:"center", 
            justifyContent:"space-between",
            boxShadow:"0 0 20px rgba(0,255,65,0.3)"
          }}>
            <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF41" strokeWidth="2">
                <polyline points="4 17 10 11 4 5"/>
                <line x1="12" y1="19" x2="20" y2="19"/>
              </svg>
              <span style={{ fontSize:isMobile?"0.75rem":"0.875rem" }}>SYSTEM_A: CASE FILE VIEWER v2.0</span>
            </div>
            <button
              onClick={onBack}
              style={{ 
                fontSize:isMobile?"0.75rem":"0.875rem", 
                background:"none", 
                border:"1px solid #00FF41", 
                color:"#00FF41",
                padding:"0.5rem 1rem",
                cursor:"pointer",
                transition:"all 0.2s"
              }}
              onMouseEnter={e => {e.currentTarget.style.background="#00FF41"; e.currentTarget.style.color="#0A0A0A";}}
              onMouseLeave={e => {e.currentTarget.style.background="none"; e.currentTarget.style.color="#00FF41";}}
            >
              [X] EXIT
            </button>
          </div>
        </div>

        {/* Loading Screen */}
        {!isLoaded && (
          <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
            <div style={{ marginBottom:"2rem" }}>
              <p style={{ fontSize:"0.875rem", marginBottom:"0.5rem" }}>&gt; INITIALIZING SYSTEM...</p>
              <p style={{ fontSize:"0.875rem", marginBottom:"0.5rem" }}>&gt; LOADING CASE FILE: {project.id}</p>
              <p style={{ fontSize:"0.875rem", marginBottom:"0.5rem" }}>&gt; ACCESSING DATABASE...</p>
              <p style={{ fontSize:"0.875rem", animation:"pulse 1.5s infinite" }}>&gt; RETRIEVING EVIDENCE...</p>
            </div>

            <div style={{ marginBottom:"0.5rem" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
                <span style={{ fontSize:"0.875rem" }}>PROGRESS:</span>
                <div style={{ flex:1, height:"1.5rem", border:"2px solid #00FF41", background:"#0A0A0A", overflow:"hidden" }}>
                  <div style={{ 
                    width:`${loadingProgress}%`, 
                    height:"100%", 
                    background:"#00FF41",
                    transition:"width 0.1s linear"
                  }} />
                </div>
                <span style={{ fontSize:"0.875rem", width:"4rem", textAlign:"right" }}>{loadingProgress}%</span>
              </div>
              <p style={{ fontSize:"0.75rem", opacity:0.7, marginTop:"0.5rem" }}>
                {loadingProgress < 30 && '██████░░░░░░░░░░░░░░ LOADING...'}
                {loadingProgress >= 30 && loadingProgress < 60 && '████████████░░░░░░░░ DECRYPTING...'}
                {loadingProgress >= 60 && loadingProgress < 90 && '████████████████░░░░ ANALYZING...'}
                {loadingProgress >= 90 && '████████████████████ COMPLETE'}
              </p>
            </div>
          </div>
        )}

        {/* Main Content */}
        {isLoaded && (
          <div style={{ maxWidth:"1200px", margin:"0 auto", opacity:1, animation:"fadeIn 0.5s" }}>
            {/* Project Header */}
            <div style={{ 
              border:"2px solid #00FF41", 
              padding:isMobile?"1rem":"1.5rem", 
              background:"#0A0A0A",
              boxShadow:"0 0 30px rgba(0,255,65,0.2)",
              marginBottom:"2rem"
            }}>
              <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"1rem", flexWrap:"wrap", gap:"1rem" }}>
                <div style={{ flex:1 }}>
                  <p style={{ fontSize:"0.75rem", marginBottom:"0.5rem", opacity:0.7 }}>&gt; CASE FILE LOADED</p>
                  <h1 style={{ fontSize:isMobile?"1.5rem":"2rem", margin:"0 0 0.5rem" }}>
                    &gt; {typedText}
                    <span style={{ opacity:cursor?1:0 }}>_</span>
                  </h1>
                  <p style={{ fontSize:"0.875rem", opacity:0.7 }}>STATUS: {project.status} ✓</p>
                </div>
                <div style={{ 
                  display:"flex", 
                  flexDirection:"column",
                  gap:"0.75rem"
                }}>
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      padding:isMobile?"0.5rem 0.75rem":"0.6rem 1rem",
                      border:"2px solid #00FF41",
                      background:"none",
                      color:"#00FF41",
                      fontFamily:"Courier New,monospace",
                      fontSize:isMobile?"0.65rem":"0.75rem",
                      fontWeight:"bold",
                      textDecoration:"none",
                      textAlign:"center",
                      cursor:"pointer",
                      transition:"all 0.2s",
                      letterSpacing:1,
                      whiteSpace:"nowrap"
                    }}
                    onMouseEnter={e => {e.currentTarget.style.background="#00FF41"; e.currentTarget.style.color="#0A0A0A";}}
                    onMouseLeave={e => {e.currentTarget.style.background="none"; e.currentTarget.style.color="#00FF41";}}
                  >
                    CASE STUDY
                  </a>
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      padding:isMobile?"0.5rem 0.75rem":"0.6rem 1rem",
                      border:"2px solid #00FF41",
                      background:"none",
                      color:"#00FF41",
                      fontFamily:"Courier New,monospace",
                      fontSize:isMobile?"0.65rem":"0.75rem",
                      fontWeight:"bold",
                      textDecoration:"none",
                      textAlign:"center",
                      cursor:"pointer",
                      transition:"all 0.2s",
                      letterSpacing:1,
                      whiteSpace:"nowrap"
                    }}
                    onMouseEnter={e => {e.currentTarget.style.background="#00FF41"; e.currentTarget.style.color="#0A0A0A";}}
                    onMouseLeave={e => {e.currentTarget.style.background="none"; e.currentTarget.style.color="#00FF41";}}
                  >
                    LIVE SITE
                  </a>
                </div>
              </div>

              {/* Metadata Grid */}
              <div style={{ 
                display:"grid", 
                gridTemplateColumns:isMobile?"1fr":"repeat(4, 1fr)", 
                gap:"1rem", 
                paddingTop:"1rem", 
                borderTop:"2px dashed #00FF41" 
              }}>
                <div>
                  <p style={{ fontSize:"0.75rem", opacity:0.7, marginBottom:"0.25rem" }}>CLIENT:</p>
                  <p style={{ fontSize:"0.875rem", display:"flex", alignItems:"center", gap:"0.5rem" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00FF41" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    {project.client}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize:"0.75rem", opacity:0.7, marginBottom:"0.25rem" }}>ROLE:</p>
                  <p style={{ fontSize:"0.875rem" }}>{project.role}</p>
                </div>
                <div>
                  <p style={{ fontSize:"0.75rem", opacity:0.7, marginBottom:"0.25rem" }}>DURATION:</p>
                  <p style={{ fontSize:"0.875rem", display:"flex", alignItems:"center", gap:"0.5rem" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00FF41" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {project.duration}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize:"0.75rem", opacity:0.7, marginBottom:"0.25rem" }}>TOOLS:</p>
                  <p style={{ fontSize:"0.875rem" }}>{project.tools}</p>
                </div>
              </div>
            </div>

            {/* Terminal Windows Grid */}
            <div style={{ 
              display:"grid", 
              gridTemplateColumns:isMobile?"1fr":"repeat(2, 1fr)", 
              gap:"1.5rem",
              marginBottom:"2rem"
            }}>
              {/* Description */}
              <div style={{ border:"2px solid #00FF41", padding:"1.5rem", background:"#0A0A0A" }}>
                <p style={{ fontSize:"0.75rem", marginBottom:"1rem", opacity:0.7 }}>&gt; PROJECT_OVERVIEW.txt</p>
                <p style={{ fontSize:"0.875rem", lineHeight:1.6 }}>{project.desc}</p>
              </div>

              {/* Challenge */}
              <div style={{ border:"2px solid #00FF41", padding:"1.5rem", background:"#0A0A0A" }}>
                <p style={{ fontSize:"0.75rem", marginBottom:"1rem", opacity:0.7 }}>&gt; CHALLENGE.log</p>
                <p style={{ fontSize:"0.875rem", lineHeight:1.6 }}>{project.challenge}</p>
              </div>

              {/* Solution */}
              <div style={{ border:"2px solid #00FF41", padding:"1.5rem", background:"#0A0A0A" }}>
                <p style={{ fontSize:"0.75rem", marginBottom:"1rem", opacity:0.7 }}>&gt; SOLUTION.md</p>
                <p style={{ fontSize:"0.875rem", lineHeight:1.6 }}>{project.solution}</p>
              </div>

              {/* Results */}
              <div style={{ border:"2px solid #00FF41", padding:"1.5rem", background:"#0A0A0A" }}>
                <p style={{ fontSize:"0.75rem", marginBottom:"1rem", opacity:0.7 }}>&gt; RESULTS.dat</p>
                <ul style={{ listStyle:"none", padding:0, margin:0 }}>
                  {project.results.map((result, index) => (
                    <li key={index} style={{ 
                      fontSize:"0.875rem", 
                      display:"flex", 
                      alignItems:"flex-start", 
                      gap:"0.5rem",
                      marginBottom:"0.5rem",
                      opacity:0,
                      animation:`fadeInLeft 0.3s ease-out ${index * 0.1 + 0.5}s forwards`
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00FF41" strokeWidth="2" style={{ flexShrink:0, marginTop:"0.125rem" }}>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image Placeholders */}
            <div style={{ 
              display:"grid", 
              gridTemplateColumns:isMobile?"1fr":"repeat(3, 1fr)", 
              gap:"1.5rem",
              marginBottom:"2rem"
            }}>
              {project.mockups.map((mockup, i) => (
                <div key={i} style={{ border:"2px solid #00FF41", padding:"1rem", background:"#0A0A0A" }}>
                  <p style={{ fontSize:"0.75rem", marginBottom:"0.5rem", opacity:0.7 }}>&gt; {mockup.label.toUpperCase()}.png</p>
                  <div style={{ 
                    aspectRatio:"16/9", 
                    background:mockup.src?"#001a0a":"linear-gradient(to bottom right, #001a0a, #0A0A0A)", 
                    border:"1px solid #00FF41", 
                    display:"flex", 
                    alignItems:"center", 
                    justifyContent:"center",
                    overflow:"hidden"
                  }}>
                    {mockup.src ? (
                      <img src={mockup.src} alt={mockup.label} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                    ) : (
                      <p style={{ fontSize:"0.75rem", opacity:0.5 }}>[PROJECT MOCKUP {i+1}]</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Floppy Disk Drive Indicator */}
            <div style={{ 
              border:"2px solid #00FF41", 
              padding:"1.5rem", 
              background:"#0A0A0A", 
              display:"flex", 
              alignItems:"center", 
              justifyContent:"space-between",
              flexWrap:"wrap",
              gap:"1rem",
              marginBottom:"2rem"
            }}>
              <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
                <div style={{ 
                  width:"4rem", 
                  height:"3rem", 
                  border:"2px solid #00FF41", 
                  background:"#1A1A1A", 
                  position:"relative" 
                }}>
                  <div style={{ position:"absolute", inset:"0.5rem", border:"1px solid #00FF41" }} />
                  <div style={{ 
                    position:"absolute", 
                    bottom:0, 
                    left:"50%", 
                    transform:"translateX(-50%)", 
                    width:"2rem", 
                    height:"0.25rem", 
                    background:"#00FF41" 
                  }} />
                </div>
                <div>
                  <p style={{ fontSize:"0.75rem", opacity:0.7 }}>DISK LOADED:</p>
                  <p style={{ fontSize:"0.875rem" }}>{project.title}.flp</p>
                </div>
              </div>
              <div style={{ fontSize:"0.75rem", opacity:0.7 }}>
                CAPACITY: UNLIMITED | STATUS: READ-ONLY
              </div>
            </div>

            {/* Navigation */}
            <div style={{ 
              display:"flex", 
              alignItems:"center", 
              justifyContent:"space-between", 
              paddingTop:"2rem", 
              borderTop:"2px dashed #00FF41",
              gap:"1rem",
              flexWrap:"wrap"
            }}>
              <button
                onClick={onBack}
                style={{ 
                  display:"flex", 
                  alignItems:"center", 
                  gap:"0.5rem", 
                  padding:"0.75rem 1.5rem", 
                  border:"2px solid #00FF41",
                  background:"none",
                  color:"#00FF41",
                  cursor:"pointer",
                  fontSize:"0.875rem",
                  transition:"all 0.2s"
                }}
                onMouseEnter={e => {e.currentTarget.style.background="#00FF41"; e.currentTarget.style.color="#0A0A0A";}}
                onMouseLeave={e => {e.currentTarget.style.background="none"; e.currentTarget.style.color="#00FF41";}}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12"/>
                  <polyline points="12 19 5 12 12 5"/>
                </svg>
                <span>[BACK TO CASES]</span>
              </button>

              <button
                onClick={onNext}
                style={{ 
                  display:"flex", 
                  alignItems:"center", 
                  gap:"0.5rem", 
                  padding:"0.75rem 1.5rem", 
                  border:"2px solid #00FF41",
                  background:"none",
                  color:"#00FF41",
                  cursor:"pointer",
                  fontSize:"0.875rem",
                  transition:"all 0.2s"
                }}
                onMouseEnter={e => {e.currentTarget.style.background="#00FF41"; e.currentTarget.style.color="#0A0A0A";}}
                onMouseLeave={e => {e.currentTarget.style.background="none"; e.currentTarget.style.color="#00FF41";}}
              >
                <span>[NEXT: {nextProject.title.toUpperCase()}]</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>

            {/* Terminal Prompt */}
            <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", paddingTop:"1rem" }}>
              <span style={{ fontSize:"0.875rem" }}>&gt;</span>
              <span style={{ fontSize:"0.875rem", opacity:cursor?1:0 }}>_</span>
            </div>
          </div>
        )}
      </div>

      {/* Screen Glow */}
      <div style={{ 
        position:"fixed", 
        inset:0, 
        pointerEvents:"none", 
        background:"radial-gradient(circle at center, rgba(0,255,65,0.05), transparent)" 
      }} />

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
      `}</style>
    </div>
  );
}

function HomePage({ onSelectProject }) {
  const [typed, setTyped] = useState("");
  const [diskHover, setDiskHover] = useState(null);
  const [submitStamp, setSubmitStamp] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const iv = useRef(null);
  const w = useWindowWidth();
  const isMobile = w < 600;
  const isTablet = w >= 600 && w < 960;
  const isDesktop = w >= 960;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_iijmuo8","template_i2g9qo9",e.target,"E_7Nfy2YOkCxvnaNG")
      .then(()=>{setSubmitStamp(true);setTimeout(()=>setSubmitStamp(false),2200);e.target.reset();})
      .catch(err=>{alert("Failed to send.");console.error(err);});
  };

  useEffect(()=>{
    let i=0;
    iv.current=setInterval(()=>{setTyped(typewriterText.slice(0,i));if(i++>typewriterText.length)clearInterval(iv.current);},52);
    return()=>clearInterval(iv.current);
  },[]);

  const navLinks=[{label:"About",id:"about"},{label:"Skills",id:"skills"},{label:"Cases",id:"cases"},{label:"Contact",id:"contact"}];
  const scrollTo=(id)=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setMenuOpen(false);};
  const sp = isMobile ? "56px 16px" : isTablet ? "70px 28px" : "96px 48px";

  return (
    <div style={{ fontFamily:"Georgia,serif", background:"#1A0F0A", color:"#F4E8D0", minHeight:"100vh", overflowX:"hidden" }}>

      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, background:"rgba(26,15,10,0.97)", backdropFilter:"blur(8px)", borderBottom:"1px solid #8B6F47", display:"flex", alignItems:"center", justifyContent:"space-between", padding:isMobile?"11px 16px":"13px 40px" }}>
        <img src={logo} alt="Logo" style={{ height:36, width:"auto", objectFit:"contain" }} />
        {!isMobile && (
          <div style={{ display:"flex", gap:isTablet?16:28 }}>
            {navLinks.map(({label,id})=>(
              <a key={id} href={`#${id}`} onClick={e=>{e.preventDefault();scrollTo(id);}}
                style={{ color:"#D4A574", textDecoration:"none", fontFamily:"Courier New,monospace", fontSize:isTablet?12:14, letterSpacing:2, textTransform:"uppercase", cursor:"pointer" }}>{label}</a>
            ))}
          </div>
        )}
        {isMobile && (
          <button onClick={()=>setMenuOpen(o=>!o)} style={{ background:"none", border:"1px solid #8B6F47", color:"#D4A574", fontFamily:"Courier New,monospace", fontSize:18, padding:"3px 10px", cursor:"pointer" }}>
            {menuOpen?"X":"="}
          </button>
        )}
      </nav>
      {isMobile && menuOpen && (
        <div style={{ position:"fixed", top:60, left:0, right:0, zIndex:99, background:"rgba(26,15,10,0.98)", borderBottom:"1px solid #8B6F47" }}>
          {navLinks.map(({label,id})=>(
            <a key={id} href={`#${id}`} onClick={e=>{e.preventDefault();scrollTo(id);}}
              style={{ display:"block", color:"#D4A574", textDecoration:"none", fontFamily:"Courier New,monospace", fontSize:15, letterSpacing:2, textTransform:"uppercase", padding:"14px 22px", borderBottom:"1px solid rgba(139,111,71,0.2)" }}>{label}</a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section style={{ minHeight:"100vh", background:"linear-gradient(to bottom,#3D2817 0%,#1A0F0A 100%)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", paddingTop:74, overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"5%", left:"50%", transform:"translateX(-50%)", width:400, height:400, background:"radial-gradient(ellipse at center,rgba(212,175,55,0.2) 0%,transparent 60%)", pointerEvents:"none", filter:"blur(40px)" }} />
        <div style={{ maxWidth:1040, width:"100%", padding:isMobile?"0 16px":"0 36px", position:"relative", zIndex:1 }}>
          <div style={{ display:"grid", gridTemplateColumns:isDesktop?"1fr 1fr":"1fr", gap:isDesktop?40:24, alignItems:"center" }}>
            {!isMobile && (
              <div style={{ background:"linear-gradient(145deg,#8B6F47,#6B5437)", padding:isTablet?18:26, borderRadius:8, boxShadow:"8px 8px 24px rgba(0,0,0,0.6)", position:"relative", minHeight:isTablet?360:440 }}>
                <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle at 20% 30%,rgba(139,111,71,0.4) 1px,transparent 1px)", backgroundSize:"20px 20px", pointerEvents:"none", borderRadius:8 }} />
                <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none" }}>
                  <line x1="30%" y1="25%" x2="70%" y2="40%" stroke="#8B0000" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="70%" y1="40%" x2="50%" y2="70%" stroke="#8B0000" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="30%" y1="25%" x2="50%" y2="70%" stroke="#8B0000" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
                <div style={{ position:"relative", zIndex:2 }}>
                  <div style={{ background:"#F4E8D0", padding:14, position:"absolute", top:12, left:12, width:isTablet?155:178, transform:"rotate(-4deg)", boxShadow:"4px 4px 12px rgba(0,0,0,0.4)" }}>
                    <div style={{ position:"absolute", top:-7, left:"50%", transform:"translateX(-50%)", width:10, height:10, borderRadius:"50%", background:"#8B0000" }} />
                    <div style={{ borderBottom:"2px solid #8B0000", marginBottom:7, paddingBottom:4 }}>
                      <div style={{ fontFamily:"Courier New,monospace", fontSize:11, fontWeight:"bold", color:"#8B0000", letterSpacing:2 }}>CASE FILE #001</div>
                    </div>
                    <div style={{ fontFamily:"Courier New,monospace", fontSize:10, color:"#3D2817", lineHeight:1.7 }}>SUBJECT: UI/UX DESIGNER<br/>STATUS: ACTIVE<br/>DETECTIVE: GOPIKA KRISHNA<br/>PRIORITY: 5 STARS</div>
                  </div>
                  <div style={{ background:"#D4AF37", padding:"10px 13px", position:"absolute", top:isTablet?150:165, right:isTablet?18:26, transform:"rotate(8deg)", boxShadow:"4px 4px 12px rgba(0,0,0,0.5)", border:"2px solid #B8941F", borderRadius:4 }}>
                    <div style={{ position:"absolute", top:-6, left:"50%", transform:"translateX(-50%)", width:9, height:9, borderRadius:"50%", background:"#8B0000" }} />
                    <div style={{ textAlign:"center" }}>
                      <img src={myImage} alt="Profile" style={{ width:26, height:42, marginBottom:3 }} />
                      <div style={{ fontFamily:"Courier New,monospace", fontSize:9, color:"#1A0F0A", fontWeight:"bold" }}>DETECTIVE</div>
                    </div>
                  </div>
                  <div style={{ background:"#E8DCC4", padding:"8px 8px 6px", position:"absolute", bottom:isTablet?22:24, left:isTablet?28:40, transform:"rotate(5deg)", boxShadow:"4px 4px 12px rgba(0,0,0,0.5)" }}>
                    <div style={{ width:isTablet?80:92, height:isTablet?80:92, background:"#3D2817", display:"flex", alignItems:"center", justifyContent:"center", fontSize:36, marginBottom:5 }}>🔍</div>
                    <div style={{ fontFamily:"Courier New,monospace", fontSize:9, color:"#8B6F47", textAlign:"center" }}>EVIDENCE #47</div>
                  </div>
                  <div style={{ background:"#FFE97F", padding:"8px 10px", position:"absolute", top:isTablet?235:252, left:isTablet?136:155, width:isTablet?110:122, transform:"rotate(-6deg)", boxShadow:"3px 3px 10px rgba(0,0,0,0.3)" }}>
                    <div style={{ fontFamily:"Courier New,monospace", fontSize:isTablet?9:10, color:"#3D2817", lineHeight:1.6 }}>
                      Interview users<br/>Map journey<br/>Design solution<br/>SOLVE CASE!
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div>
              <div style={{ fontFamily:"Courier New,monospace", fontSize:10, color:"#8B6F47", letterSpacing:3, textTransform:"uppercase", marginBottom:13, display:"flex", alignItems:"center", gap:9 }}>
                <span style={{ display:"inline-block", width:20, height:1, background:"#8B6F47" }} />DETECTIVE CASE FILE #001
              </div>
              <h1 style={{ fontFamily:"Courier New,monospace", fontSize:isMobile?"clamp(20px,7vw,30px)":isTablet?"clamp(24px,4vw,38px)":"clamp(26px,3.5vw,44px)", color:"#D4AF37", lineHeight:1.2, margin:"0 0 16px", textShadow:"2px 2px 0 rgba(0,0,0,0.3)" }}>
                Cracking Design Mysteries, One Case at a Time
              </h1>
              <div style={{ background:"#F4E8D0", padding:isMobile?14:20, marginBottom:20, boxShadow:"4px 4px 0 #8B6F47", position:"relative" }}>
                <div style={{ position:"absolute", top:-6, left:16, fontSize:16, color:"#8B6F47", transform:"rotate(90deg)" }}>📎</div>
                <p style={{ fontFamily:"Courier New,monospace", fontSize:isMobile?12:14, color:"#3D2817", margin:"0 0 10px", lineHeight:1.8 }}>
                  {typed}<span style={{ borderRight:"2px solid #3D2817", animation:"blink 1s step-end infinite" }}> </span>
                </p>
                <div style={{ fontFamily:"Courier New,monospace", fontSize:11, color:"#8B6F47", fontStyle:"italic" }}>Gopika Krishna, UX/UI Detective</div>
              </div>
              <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:24 }}>
                <a href="#cases" onClick={e=>{e.preventDefault();scrollTo("cases");}}
                  style={{ padding:isMobile?"10px 16px":"12px 24px", background:"#D4AF37", color:"#1A0F0A", fontFamily:"Courier New,monospace", fontWeight:"bold", fontSize:isMobile?11:12, letterSpacing:2, textDecoration:"none", textTransform:"uppercase", boxShadow:"4px 4px 0 #8B6F47", transition:"all 0.2s" }}
                  onMouseEnter={e=>e.currentTarget.style.transform="translate(-2px,-2px)"}
                  onMouseLeave={e=>e.currentTarget.style.transform="none"}>VIEW CASE FILES</a>
                <a href="#contact" onClick={e=>{e.preventDefault();scrollTo("contact");}}
                  style={{ padding:isMobile?"10px 16px":"12px 24px", border:"2px solid #8B6F47", color:"#D4A574", fontFamily:"Courier New,monospace", fontSize:isMobile?11:12, letterSpacing:2, textDecoration:"none", textTransform:"uppercase", transition:"all 0.2s" }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="#D4AF37";e.currentTarget.style.color="#D4AF37";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="#8B6F47";e.currentTarget.style.color="#D4A574";}}>OPEN NEW CASE</a>
              </div>
              <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                {[["6+","Cases Solved"],["2.5yrs","Field Work"],["4.9","Rating"]].map(([val,label])=>(
                  <div key={label} style={{ background:"rgba(212,175,55,0.15)", border:"1px solid #8B6F47", padding:isMobile?"8px 12px":"10px 16px", borderRadius:4 }}>
                    <div style={{ fontFamily:"Courier New,monospace", fontSize:isMobile?17:20, color:"#D4AF37", fontWeight:"bold" }}>{val}</div>
                    <div style={{ fontFamily:"Courier New,monospace", fontSize:9, color:"#8B6F47", letterSpacing:1, marginTop:2 }}>{label.toUpperCase()}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background:"#221409", padding:sp }}>
        <div style={{ maxWidth:800, margin:"0 auto" }}>
          <SectionLabel>ABOUT ME</SectionLabel>
          <div style={{ display:"flex", gap:isMobile?0:32, flexWrap:"wrap", marginTop:36, justifyContent:"center", flexDirection:isMobile?"column":"row", alignItems:isMobile?"center":"flex-start" }}>
            <div style={{ flexShrink:0, width:isMobile?160:188, marginBottom:isMobile?22:0 }}>
              <div style={{ background:"#3D2817", border:"2px solid #8B6F47", padding:16, position:"relative", transform:"rotate(-2deg)", boxShadow:"6px 6px 0 #1A0F0A" }}>
                <div style={{ background:"#8B0000", color:"#F4E8D0", fontFamily:"Courier New,monospace", fontSize:9, padding:"3px 8px", letterSpacing:3, textAlign:"center", marginBottom:9, fontWeight:"bold" }}>DETECTIVE BUREAU</div>
                <div style={{ width:"100%", aspectRatio:"1", background:"#1A0F0A", marginBottom:9 }}>
                  <img src={profilePic} alt="Gopika" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                </div>
                <div style={{ fontFamily:"Courier New,monospace", color:"#D4AF37", fontSize:13, fontWeight:"bold" }}>GOPIKA</div>
                <div style={{ fontFamily:"Courier New,monospace", color:"#D4A574", fontSize:10, marginTop:4, lineHeight:1.7 }}>BADGE: GK30<br/>STATUS: ACTIVE<br/>CLEARANCE: LVL 5</div>
              </div>
            </div>
            <div style={{ flex:"1 1 240px", minWidth:0 }}>
              <div style={{ background:"#F4E8D0", padding:isMobile?16:22, position:"relative", boxShadow:"4px 4px 0 #8B6F47", fontFamily:"Courier New,monospace", fontSize:isMobile?12:13, color:"#3D2817", lineHeight:1.8 }}>
                <div style={{ borderBottom:"1px solid #8B6F47", marginBottom:11, paddingBottom:7, fontWeight:"bold", fontSize:10, letterSpacing:2, color:"#8B0000" }}>SUBJECT PROFILE - CONFIDENTIAL REPORT</div>
                <p style={{ margin:"0 0 10px" }}>I am a UI/UX Designer who loves creating simple and meaningful digital experiences. I always think from the user perspective and focus on making designs that are clear, easy to use, and visually clean.</p>
                <p style={{ margin:0 }}>With a background in customer support and design, I understand user problems deeply and work towards practical solutions.</p>
                <div style={{ position:"absolute", top:8, right:8, border:"2px solid #8B0000", color:"#8B0000", fontFamily:"Courier New,monospace", fontSize:7, padding:"2px 6px", fontWeight:"bold", letterSpacing:2, transform:"rotate(-5deg)", opacity:0.5 }}>CONFIDENTIAL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS - keeping original */}
      <section id="skills" style={{ background:"#2A1B0E", padding:sp, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(139,111,71,0.04) 60px,rgba(139,111,71,0.04) 62px)", pointerEvents:"none" }} />
        <div style={{ maxWidth:800, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <SectionLabel>SKILLS - DETECTIVE DESK</SectionLabel>
            <p style={{ fontFamily:"Courier New,monospace", color:"#8B6F47", fontSize:12, marginTop:9 }}>Every clue pinned. Every skill documented. Evidence does not lie.</p>
          </div>
          <div style={{ display:"flex", gap:20, alignItems:"flex-start", marginBottom:32, flexWrap:"wrap" }}>
            <div style={{ flex:"1 1 260px", minWidth:0 }}>
              <div style={{ background:"linear-gradient(145deg,#6B4A1E,#4A3210)", border:"11px solid #5A3D15", borderRadius:6, padding:18, boxShadow:"6px 6px 24px rgba(0,0,0,0.7)", position:"relative" }}>
                <div style={{ position:"absolute", bottom:-18, left:0, right:0, height:10, background:"#4A3210", borderRadius:"0 0 4px 4px", display:"flex", alignItems:"center", paddingLeft:14, gap:8 }}>
                  {["#F4E8D0","#D4AF37","#8B0000"].map((c,i)=><div key={i} style={{ width:24, height:4, background:c, borderRadius:2, opacity:0.8 }} />)}
                </div>
                <div style={{ background:"#1C2A1C", borderRadius:2, padding:"16px 18px", minHeight:190, position:"relative" }}>
                  <div style={{ textAlign:"center", marginBottom:14 }}>
                    <div style={{ fontFamily:"Georgia,serif", fontSize:19, color:"#E8E8D8", opacity:0.92, lineHeight:1.3 }}>Investigation<br/>Philosophy</div>
                    <div style={{ height:2, background:"rgba(212,175,55,0.6)", margin:"7px auto 0", width:90, borderRadius:1 }} />
                  </div>
                  <div style={{ display:"flex", gap:8, justifyContent:"center", flexWrap:"wrap" }}>
                    {[{text:"Every problem leaves clues",bg:"#D4AF37",rot:-3,color:"#1A0F0A"},{text:"Every design starts with a question",bg:"#8B0000",rot:2,color:"#F4E8D0"},{text:"Every solution must be tested",bg:"#3D6B3D",rot:-1.5,color:"#F4E8D0"}].map((note,i)=>(
                      <div key={i} style={{ background:note.bg, padding:"8px 10px", width:86, transform:`rotate(${note.rot}deg)`, boxShadow:"3px 4px 10px rgba(0,0,0,0.5)", cursor:"default", transition:"transform 0.2s", position:"relative" }}
                        onMouseEnter={e=>e.currentTarget.style.transform="rotate(0deg) scale(1.06) translateY(-4px)"}
                        onMouseLeave={e=>e.currentTarget.style.transform=`rotate(${note.rot}deg)`}>
                        <div style={{ position:"absolute", top:-5, left:"50%", transform:"translateX(-50%)", width:7, height:7, borderRadius:"50%", background:"rgba(0,0,0,0.4)" }} />
                        <div style={{ fontFamily:"Courier New,monospace", fontSize:9, color:note.color, lineHeight:1.5, fontWeight:"bold" }}>{note.text}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop:13, textAlign:"center" }}>
                    <div style={{ fontFamily:"Georgia,serif", fontSize:9.5, color:"rgba(232,232,216,0.5)", fontStyle:"italic" }}>I believe great design comes from understanding users deeply before crafting pixels.</div>
                  </div>
                </div>
              </div>
            </div>
            {!isMobile && (
              <div style={{ display:"flex", flexDirection:"column", gap:16, flexShrink:0 }}>
                <div style={{ width:100, height:100, borderRadius:"50%", background:"linear-gradient(145deg,#3D2817,#2A1B0E)", border:"5px solid #8B6F47", boxShadow:"0 0 0 3px #5A3D15,5px 5px 18px rgba(0,0,0,0.7)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
                  <div style={{ position:"absolute", inset:7, borderRadius:"50%", background:"rgba(212,175,55,0.06)", border:"1px solid rgba(212,175,55,0.2)" }} />
                  {[12,3,6,9].map((n,i)=>{const a=[-90,0,90,180];const x=50+38*Math.cos((a[i]*Math.PI)/180);const y=50+38*Math.sin((a[i]*Math.PI)/180);return<div key={n} style={{ position:"absolute",left:`${x}%`,top:`${y}%`,transform:"translate(-50%,-50%)",fontFamily:"Courier New,monospace",fontSize:9,color:"#D4AF37",fontWeight:"bold" }}>{n}</div>;})}
                  <div style={{ position:"absolute", bottom:"50%", left:"50%", transformOrigin:"bottom center", transform:"translateX(-50%) rotate(-60deg)", width:2, height:22, background:"#D4AF37", borderRadius:2 }} />
                  <div style={{ position:"absolute", bottom:"50%", left:"50%", transformOrigin:"bottom center", transform:"translateX(-50%) rotate(120deg)", width:1.5, height:30, background:"#F4E8D0", borderRadius:2 }} />
                  <div style={{ position:"absolute", width:6, height:6, borderRadius:"50%", background:"#D4AF37", boxShadow:"0 0 6px #D4AF37" }} />
                </div>
                <div style={{ width:80, height:104, background:"#3D2817", border:"2px solid #5A3D15", borderRadius:"3px 6px 6px 3px", overflow:"hidden", position:"relative" }}>
                  <div style={{ position:"absolute", left:0, top:0, bottom:0, width:11, background:"#8B0000", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:5 }}>
                    {[0,1,2,3,4].map(i=><div key={i} style={{ width:5, height:5, borderRadius:"50%", background:"#F4E8D0", opacity:0.6 }} />)}
                  </div>
                  <div style={{ marginLeft:11, padding:"8px 6px" }}>
                    <div style={{ fontFamily:"Courier New,monospace", fontSize:8, color:"#D4AF37", fontWeight:"bold", marginBottom:4 }}>NOTEBOOK</div>
                    {[0,1,2,3,4,5].map(i=><div key={i} style={{ height:1, background:"rgba(212,175,55,0.2)", marginBottom:7 }} />)}
                    <div style={{ fontFamily:"Courier New,monospace", fontSize:7, color:"#8B6F47" }}>Case Notes...</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div style={{ display:"flex", flexDirection:isMobile?"column":"row", gap:isMobile?28:20, alignItems:isMobile?"stretch":"flex-end", marginBottom:32 }}>
            <div style={{ flexShrink:0, alignSelf:isMobile?"center":"flex-end", width:isMobile?160:140 }}>
              <div style={{ background:"#1A0F0A", borderRadius:20, padding:"8px 7px", border:"3px solid #3D2817", boxShadow:"6px 6px 20px rgba(0,0,0,0.7)", transform:isMobile?"none":"rotate(-2deg)" }}>
                <div style={{ width:32, height:7, background:"#0A0604", borderRadius:4, margin:"0 auto 7px" }} />
                <div style={{ background:"#0d0d0d", borderRadius:12, padding:"8px 7px", border:"1px solid #2A1B0E" }}>
                  <div style={{ fontFamily:"Courier New,monospace", fontSize:10, color:"#D4AF37", textAlign:"center", fontWeight:"bold", marginBottom:8, letterSpacing:1 }}>Tools</div>
                  {[
                    [{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",label:"Figma"},{src:"https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",label:"Illustrator"},{src:"https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",label:"XD"}],
                    [{src:"https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",label:"Photoshop"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",label:"VS Code"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",label:"Canva"}],
                    [{src:"https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg",label:"Sketch"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",label:"GitHub"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",label:"Python"}],
                  ].map((row,ri)=>(
                    <div key={ri} style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:5, marginBottom:ri<2?5:0 }}>
                      {row.map((app,i)=>(
                        <div key={i} style={{ background:"linear-gradient(145deg,#2A1B0E,#1A0F0A)", border:"1px solid #3D2817", borderRadius:8, padding:"7px 4px", cursor:"default", transition:"border-color 0.2s", display:"flex", alignItems:"center", justifyContent:"center" }}
                          onMouseEnter={e=>e.currentTarget.style.borderColor="#D4AF37"}
                          onMouseLeave={e=>e.currentTarget.style.borderColor="#3D2817"}>
                          <img src={app.src} alt={app.label} style={{ width:26, height:26, objectFit:"contain", display:"block", filter:app.label==="GitHub"?"invert(1)":"none" }} />
                        </div>
                      ))}
                    </div>
                  ))}
                  <div style={{ width:36, height:3, background:"#3D2817", borderRadius:2, margin:"8px auto 0" }} />
                </div>
              </div>
            </div>

            <div style={{ flex:"1 1 0", minWidth:0 }}>
              <div style={{ background:"linear-gradient(145deg,#2e2e2e,#1c1c1c)", borderRadius:"11px 11px 4px 4px", padding:"6px 6px 0", boxShadow:"0 14px 50px rgba(0,0,0,0.85)", border:"2px solid #383838" }}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"3px 10px 5px" }}>
                  <div style={{ display:"flex", gap:5 }}>{["#ff5f57","#febc2e","#28c840"].map((c,i)=><div key={i} style={{ width:8, height:8, borderRadius:"50%", background:c }} />)}</div>
                  <span style={{ fontFamily:"Courier New,monospace", color:"#555", fontSize:isMobile?8:9, letterSpacing:1 }}>SKILLS_TERMINAL.exe</span>
                  <div style={{ width:28 }} />
                </div>
                <div style={{ background:"#080808", borderRadius:"5px 5px 0 0", padding:isMobile?"12px 12px":"14px 16px", minHeight:isMobile?180:190, border:"2px solid #0d0d0d" }}>
                  <div style={{ display:"flex", flexDirection:isMobile?"column":"row" }}>
                    <div style={{ flex:1, paddingRight:isMobile?0:11, paddingBottom:isMobile?11:0, borderRight:isMobile?"none":"1px solid #3D2817", borderBottom:isMobile?"1px solid #3D2817":"none", marginBottom:isMobile?12:0 }}>
                      <div style={{ fontFamily:"Courier New,monospace", fontSize:11, color:"#D4AF37", fontWeight:"bold", letterSpacing:1, marginBottom:9 }}>UX skills</div>
                      {["User Research","Persona Creation","Journey Mapping","Wireframing","Usability Testing"].map((s,i)=>(
                        <div key={i} style={{ display:"flex", alignItems:"center", gap:5, marginBottom:isMobile?7:6 }}>
                          <div style={{ width:4, height:4, borderRadius:"50%", background:"#D4AF37", flexShrink:0 }} />
                          <span style={{ fontFamily:"Courier New,monospace", fontSize:isMobile?11:10, color:"#D4A574" }}>{s}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ flex:1, paddingLeft:isMobile?0:11 }}>
                      <div style={{ fontFamily:"Courier New,monospace", fontSize:11, color:"#D4AF37", fontWeight:"bold", letterSpacing:1, marginBottom:9 }}>UI skills</div>
                      {["Visual Hierarchy","Design Systems","Responsive Layouts","Prototyping","A/B Testing"].map((s,i)=>(
                        <div key={i} style={{ display:"flex", alignItems:"center", gap:5, marginBottom:isMobile?7:6 }}>
                          <div style={{ width:4, height:4, borderRadius:"50%", background:"#8B0000", flexShrink:0 }} />
                          <span style={{ fontFamily:"Courier New,monospace", fontSize:isMobile?11:10, color:"#D4A574" }}>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ borderTop:"1px solid #2A1B0E", marginTop:11, paddingTop:6, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <div style={{ fontFamily:"Courier New,monospace", fontSize:8, color:"#5A3D15" }}>NOIR_OS v2.4 SKILLS_DB LOADED</div>
                    <div style={{ display:"flex", gap:4, alignItems:"center" }}>
                      <div style={{ width:5, height:5, borderRadius:"50%", background:"#28c840", boxShadow:"0 0 5px #28c840" }} />
                      <div style={{ fontFamily:"Courier New,monospace", fontSize:8, color:"#28c840" }}>ACTIVE</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display:"flex", justifyContent:"center" }}><div style={{ width:42, height:13, background:"linear-gradient(to bottom,#222,#181818)", borderRadius:"0 0 3px 3px" }} /></div>
              <div style={{ display:"flex", justifyContent:"center" }}><div style={{ width:140, height:9, background:"linear-gradient(145deg,#282828,#181818)", borderRadius:4 }} /></div>
            </div>

            {isDesktop && (
              <div style={{ flexShrink:0, display:"flex", flexDirection:"column", alignItems:"center", gap:11 }}>
                <div style={{ position:"relative" }}>
                  <div style={{ width:46, height:46, background:"linear-gradient(145deg,#6B4A1E,#3D2817)", borderRadius:"6px 6px 10px 10px", border:"2px solid #5A3D15", position:"relative", overflow:"hidden" }}>
                    <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"60%", background:"radial-gradient(ellipse at center top,#5C3317,#3D2010)", borderRadius:"0 0 8px 8px" }} />
                    <div style={{ position:"absolute", top:5, left:"50%", transform:"translateX(-50%)", fontFamily:"Courier New,monospace", fontSize:7, color:"#D4AF37", fontWeight:"bold", whiteSpace:"nowrap" }}>COFFEE.</div>
                  </div>
                  <div style={{ position:"absolute", right:-8, top:"25%", width:8, height:18, border:"2px solid #5A3D15", borderLeft:"none", borderRadius:"0 7px 7px 0" }} />
                </div>
                <div style={{ display:"flex", gap:3, alignItems:"flex-end" }}>
                  {[{bg:"#D4AF37",tip:"#8B6F47",rot:-8},{bg:"#8B0000",tip:"#5A0000",rot:3}].map((p,i)=>(
                    <div key={i} style={{ width:7, height:58, background:`linear-gradient(to bottom,${p.tip} 12%,${p.bg} 12%)`, borderRadius:"2px 2px 0 0", transform:`rotate(${p.rot}deg)`, transformOrigin:"bottom center", position:"relative" }}>
                      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:8, background:"#F4E8D0", borderRadius:"0 0 2px 2px" }} />
                      <div style={{ position:"absolute", bottom:8, left:0, right:0, height:2, background:"#C0C0C0" }} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div style={{ background:"#3D2817", border:"2px solid #5A3D15", borderRadius:"6px 6px 0 0", padding:"4px 13px", display:"inline-flex", alignItems:"center", gap:10 }}>
              <span style={{ fontFamily:"Courier New,monospace", fontSize:11, color:"#D4AF37", letterSpacing:2, fontWeight:"bold" }}>PROFICIENCY REPORT</span>
              <span style={{ fontFamily:"Courier New,monospace", fontSize:9, color:"#8B6F47" }}>// DEV SKILLS</span>
            </div>
            <div style={{ background:"#F4E8D0", padding:isMobile?"16px 12px":"24px 22px", boxShadow:"4px 4px 0 #8B6F47", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", left:0, right:0, height:2, background:"linear-gradient(90deg,transparent,rgba(212,175,55,0.35),transparent)", animation:"scanline 3s linear infinite", pointerEvents:"none" }} />
              <div style={{ position:"absolute", top:10, right:12, border:"2px solid #8B0000", color:"#8B0000", fontFamily:"Courier New,monospace", fontSize:7, padding:"2px 6px", fontWeight:"bold", letterSpacing:2, opacity:0.45, animation:"floatBadge 4s ease-in-out infinite" }}>CONFIDENTIAL</div>
              <div style={{ display:"grid", gridTemplateColumns:isMobile?"1fr":isTablet?"repeat(2,1fr)":"repeat(4,1fr)", gap:"18px 20px" }}>
                {[
                  {label:"HTML",value:90,icon:"🌐",color:"#E44D26"},
                  {label:"CSS",value:88,icon:"🎨",color:"#264DE4"},
                  {label:"Bootstrap",value:82,icon:"⚡",color:"#7952B3"},
                  {label:"JavaScript",value:78,icon:"JS",color:"#F0C000"},
                  {label:"React JS",value:75,icon:"⚛",color:"#61DAFB"},
                  {label:"Python",value:70,icon:"🐍",color:"#3776AB"},
                  {label:"SQL",value:72,icon:"🗄",color:"#336791"},
                ].map((s,idx)=>(
                  <div key={s.label}
                    style={{ background:"linear-gradient(145deg,#fff8ee,#f0e6d0)", border:"1px solid rgba(139,111,71,0.3)", borderRadius:6, padding:"12px 13px", position:"relative", overflow:"hidden", animation:`cardSlideIn 0.5s ease-out both`, animationDelay:`${idx*0.08}s`, transition:"transform 0.2s,box-shadow 0.2s" }}
                    onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 6px 18px rgba(139,111,71,0.25)";}}
                    onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
                    <div style={{ display:"flex", alignItems:"center", gap:7, marginBottom:9 }}>
                      <div style={{ width:28, height:28, borderRadius:6, background:`linear-gradient(145deg,${s.color}22,${s.color}44)`, border:`1px solid ${s.color}88`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:s.icon==="JS"?10:13, fontWeight:"bold", color:s.icon==="JS"?s.color:undefined, flexShrink:0, fontFamily:"Courier New,monospace" }}>{s.icon}</div>
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ fontFamily:"Courier New,monospace", fontSize:10, fontWeight:"bold", color:"#3D2817", letterSpacing:0.5, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{s.label}</div>
                      </div>
                      <div style={{ fontFamily:"Courier New,monospace", fontSize:10, fontWeight:"bold", color:"#fff", background:`linear-gradient(135deg,#8B0000,${s.color})`, padding:"1px 6px", borderRadius:3, flexShrink:0 }}>{s.value}%</div>
                    </div>
                    <div style={{ height:7, background:"rgba(61,40,23,0.15)", borderRadius:4, overflow:"hidden" }}>
                      <div style={{ height:"100%", width:s.value+"%", background:`linear-gradient(90deg,#8B0000,${s.color})`, borderRadius:4, animation:`barFill 1.2s cubic-bezier(0.22,1,0.36,1) ${idx*0.1}s both`, position:"relative" }}>
                        <div style={{ position:"absolute", top:0, left:0, right:0, bottom:0, background:"linear-gradient(90deg,transparent 60%,rgba(255,255,255,0.35) 80%,transparent 100%)", animation:`scanline 2s linear ${idx*0.15}s infinite` }} />
                      </div>
                    </div>
                    <div style={{ marginTop:5, fontFamily:"Courier New,monospace", fontSize:8, color:"#8B6F47", letterSpacing:1 }}>
                      {s.value>=85?"EXPERT":s.value>=75?"PROFICIENT":s.value>=65?"INTERMEDIATE":"LEARNING"}
                    </div>
                    <div style={{ position:"absolute", bottom:6, right:8, width:5, height:5, borderRadius:"50%", background:s.color, opacity:0.5 }} />
                  </div>
                ))}
              </div>
              <div style={{ marginTop:16, paddingTop:10, borderTop:"1px dashed rgba(139,111,71,0.3)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:8 }}>
                <div style={{ fontFamily:"Courier New,monospace", fontSize:8, color:"#8B6F47" }}>NOIR_OS :: DEV_SKILLS_MODULE v2.4</div>
                <div style={{ display:"flex", gap:5, alignItems:"center" }}>
                  <div style={{ width:5, height:5, borderRadius:"50%", background:"#28c840", animation:"pulse 2s infinite" }} />
                  <div style={{ fontFamily:"Courier New,monospace", fontSize:8, color:"#28c840" }}>ALL SYSTEMS ACTIVE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE + EDUCATION - keeping original */}
      <section style={{ background:"#1A0F0A", padding:sp }}>
        <div style={{ maxWidth:800, margin:"0 auto" }}>
          <SectionLabel>CASE TIMELINE - INVESTIGATION HISTORY</SectionLabel>
          <div style={{ marginTop:36, position:"relative", marginBottom:48 }}>
            {!isMobile && <div style={{ position:"absolute", left:96, top:0, bottom:0, width:1, background:"linear-gradient(to bottom,transparent,#8B6F47 8%,#8B6F47 92%,transparent)" }} />}
            {timeline.map(t=>(
              <div key={t.year} style={{ display:"flex", gap:isMobile?0:20, marginBottom:26, alignItems:"flex-start", flexDirection:isMobile?"column":"row" }}>
                {!isMobile && <div style={{ flex:"0 0 96px", textAlign:"right", fontFamily:"Courier New,monospace", color:"#D4AF37", fontSize:13, fontWeight:"bold", paddingTop:4 }}>{t.year}</div>}
                {!isMobile && <div style={{ flexShrink:0, width:12, height:12, borderRadius:"50%", background:"#D4AF37", marginTop:4, boxShadow:"0 0 12px rgba(212,175,55,0.5)" }} />}
                <div style={{ flex:1, width:"100%" }}>
                  {isMobile && <div style={{ fontFamily:"Courier New,monospace", color:"#D4AF37", fontSize:13, fontWeight:"bold", marginBottom:6 }}>{t.year}</div>}
                  <div style={{ background:"#F4E8D0", padding:"13px 15px", position:"relative", boxShadow:"3px 3px 0 #8B6F47" }}>
                    <div style={{ fontFamily:"Courier New,monospace", color:"#3D2817", fontWeight:"bold", fontSize:13 }}>{t.title}</div>
                    <div style={{ fontFamily:"Courier New,monospace", color:"#8B0000", fontSize:11, letterSpacing:1, marginTop:2 }}>{t.place}</div>
                    <div style={{ fontFamily:"Courier New,monospace", color:"#8B6F47", fontSize:12, marginTop:5, lineHeight:1.6 }}>{t.desc}</div>
                    <div style={{ position:"absolute", top:8, right:8, background:"#D4AF37", color:"#1A0F0A", fontFamily:"Courier New,monospace", fontSize:9, padding:"2px 5px", fontWeight:"bold" }}>SOLVED</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <SectionLabel>ACADEMIC RECORDS - TRAINING DOSSIER</SectionLabel>
          <div style={{ marginTop:32, position:"relative" }}>
            {!isMobile && <div style={{ position:"absolute", left:96, top:0, bottom:0, width:1, background:"linear-gradient(to bottom,transparent,#8B6F47 8%,#8B6F47 92%,transparent)" }} />}
            {education.map(e=>(
              <div key={e.year} style={{ display:"flex", gap:isMobile?0:20, marginBottom:22, alignItems:"flex-start", flexDirection:isMobile?"column":"row" }}>
                {!isMobile && <div style={{ flex:"0 0 96px", textAlign:"right", fontFamily:"Courier New,monospace", color:"#D4AF37", fontSize:12, fontWeight:"bold", paddingTop:5, lineHeight:1.4 }}>{e.year}</div>}
                {!isMobile && <div style={{ flexShrink:0, width:12, height:12, borderRadius:2, background:"#8B6F47", marginTop:5, boxShadow:"0 0 10px rgba(139,111,71,0.5)", transform:"rotate(45deg)" }} />}
                <div style={{ flex:1, width:"100%" }}>
                  {isMobile && <div style={{ fontFamily:"Courier New,monospace", color:"#D4AF37", fontSize:12, fontWeight:"bold", marginBottom:6 }}>{e.year}</div>}
                  <div style={{ background:"linear-gradient(135deg,#1A0F0A,#221409)", border:"1px solid #3D2817", padding:"13px 15px", position:"relative", boxShadow:"3px 3px 0 #3D2817" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:6 }}>
                      <div style={{ background:"#D4AF37", color:"#1A0F0A", fontFamily:"Courier New,monospace", fontSize:12, fontWeight:"bold", padding:"2px 9px", letterSpacing:1 }}>{e.degree}</div>
                      <div style={{ fontFamily:"Courier New,monospace", color:"#D4A574", fontSize:11, fontWeight:"bold" }}>{e.field}</div>
                    </div>
                    <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                      <span style={{ color:"#8B6F47", fontSize:10 }}>🎓</span>
                      <span style={{ fontFamily:"Courier New,monospace", color:"#8B6F47", fontSize:11, lineHeight:1.5 }}>{e.institution}</span>
                    </div>
                    <div style={{ position:"absolute", top:8, right:8, background:e.badge==="PURSUING"?"#4D1A1A":"#1A4D1A", color:e.badge==="PURSUING"?"#FF9944":"#00FF41", fontFamily:"Courier New,monospace", fontSize:8, padding:"2px 6px", fontWeight:"bold", letterSpacing:1 }}>{e.badge}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: CASES SECTION WITH FLOPPY DISKS */}
      <section id="cases" style={{ position:"relative", padding:sp, background:"#1A1A1A" }}>
        {/* Desk texture */}
        <div style={{ 
          position:"absolute", 
          inset:0, 
          opacity:0.1,
          backgroundImage:"linear-gradient(90deg, #8B6F47 1px, transparent 1px), linear-gradient(#8B6F47 1px, transparent 1px)",
          backgroundSize:"50px 50px"
        }} />

        <div style={{ maxWidth:"1400px", margin:"0 auto", position:"relative", zIndex:1 }}>
          {/* Section Header */}
          <div style={{ textAlign:"center", marginBottom:"4rem" }}>
            <div style={{ display:"inline-block", marginBottom:"1rem" }}>
              <div style={{ 
                padding:"0.5rem 1.5rem", 
                background:"#8B0000", 
                color:"#F4E8D0", 
                fontFamily:"Courier New,monospace", 
                fontSize:"0.875rem", 
                letterSpacing:3, 
                transform:"rotate(-2deg)", 
                boxShadow:"0 4px 12px rgba(0,0,0,0.5)" 
              }}>
                CASE ARCHIVES
              </div>
            </div>
            <h2 style={{ 
              fontFamily:"Courier New,monospace", 
              fontSize:isMobile?"1.5rem":"2rem", 
              color:"#D4AF37", 
              marginBottom:"0.5rem", 
              fontWeight:"bold",
              letterSpacing:3,
              textTransform:"uppercase"
            }}>
              Project Portfolio
            </h2>
            <p style={{ fontFamily:"Courier New,monospace", color:"#D4A574" }}>
              SOLVED CASES / CLICK TO VIEW EVIDENCE
            </p>
          </div>

          {/* Filing Cabinet Header */}
          <div style={{ maxWidth:"800px", margin:"0 auto 3rem" }}>
            <div style={{ 
              background:"linear-gradient(to bottom, #8B6F47, #5A4A3A)", 
              padding:"1.5rem", 
              boxShadow:"0 8px 24px rgba(0,0,0,0.7)", 
              border:"4px solid #3D2817" 
            }}>
              <div style={{ 
                display:"flex", 
                alignItems:"center", 
                justifyContent:"space-between", 
                color:"#F4E8D0",
                flexWrap:"wrap",
                gap:"1rem"
              }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.75rem" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F4E8D0" strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    <line x1="12" y1="11" x2="12" y2="17"/>
                    <line x1="9" y1="14" x2="15" y2="14"/>
                  </svg>
                  <div>
                    <h3 style={{ fontFamily:"Courier New,monospace", fontSize:"1.25rem", margin:0 }}>
                      CASE FILES CABINET
                    </h3>
                    <p style={{ fontFamily:"Courier New,monospace", fontSize:"0.75rem", color:"#D4A574", margin:0 }}>
                      Click any disk to load case details
                    </p>
                  </div>
                </div>
                <div style={{ fontFamily:"Courier New,monospace", fontSize:"0.875rem" }}>
                  {projects.length} CASES
                </div>
              </div>
            </div>
          </div>

          {/* Floppy Disks Grid */}
          <div style={{ 
            display:"grid", 
            gridTemplateColumns:isMobile?"repeat(2, 1fr)":"repeat(3, 1fr)", 
            gap:isMobile?"1.5rem":"2rem", 
            maxWidth:"900px", 
            margin:"0 auto 3rem",
            position:"relative"
          }}>
            {projects.map((p) => (
              <div key={p.id} style={{ maxWidth:isMobile?"160px":"240px", margin:"0 auto", width:"100%" }}>
                <FloppyDisk 
                  p={p}
                  isHover={diskHover === p.id}
                  onHover={() => setDiskHover(p.id)}
                  onLeave={() => setDiskHover(null)}
                  onClick={() => onSelectProject(p)}
                  isMobile={isMobile}
                />
              </div>
            ))}
          </div>

          {/* Desk Items */}
          <div style={{ 
            display:"flex", 
            alignItems:"center", 
            justifyContent:"center", 
            gap:isMobile?"2rem":"3rem", 
            marginTop:"4rem",
            flexWrap:"wrap"
          }}>
            {!isMobile && (
              <div style={{ fontFamily:"Courier New,monospace", color:"#8B6F47", fontSize:"0.875rem" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.5rem" }}>
                  <div style={{ width:"0.75rem", height:"0.75rem", background:"#8B6F47", borderRadius:"50%" }} />
                  <span>ARCHIVED</span>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
                  <div style={{ width:"0.75rem", height:"0.75rem", background:"#00CC33", borderRadius:"50%" }} />
                  <span>ACTIVE</span>
                </div>
              </div>
            )}

            {/* Coffee Cup */}
            <div style={{ 
              width:"5rem", 
              height:"6rem", 
              background:"linear-gradient(to bottom, #8B6F47, #5A4A3A)", 
              borderRadius:"0 0 999px 999px", 
              border:"4px solid #3D2817", 
              boxShadow:"0 8px 24px rgba(0,0,0,0.7)", 
              position:"relative" 
            }}>
              <div style={{ 
                position:"absolute", 
                top:"0.5rem", 
                left:"0.5rem", 
                right:"0.5rem", 
                height:"1rem", 
                background:"linear-gradient(to bottom, #3D2817, transparent)", 
                borderRadius:"999px" 
              }} />
              <div style={{ 
                position:"absolute", 
                top:"50%", 
                right:"-1.5rem", 
                width:"2rem", 
                height:"3rem", 
                border:"4px solid #3D2817", 
                borderRadius:"0 999px 999px 0",
                transform:"translateY(-50%)"
              }} />
            </div>

            {!isMobile && (
              <div style={{ 
                fontFamily:"Courier New,monospace", 
                color:"#D4A574", 
                fontSize:"0.75rem", 
                textAlign:"center", 
                maxWidth:"20rem" 
              }}>
                <p style={{ margin:"0 0 0.25rem" }}>"Evidence preserved on 3.5" floppy disks"</p>
                <p style={{ color:"#8B6F47", margin:0 }}>- Detective's Archive, 2026</p>
              </div>
            )}
          </div>

          {/* Note */}
          <div style={{ 
            maxWidth:"28rem", 
            margin:"3rem auto 0",
            transform:"rotate(-1deg)"
          }}>
            <div style={{ 
              background:"linear-gradient(to bottom right, #FFFACD, #F0E68C)", 
              padding:"1.5rem", 
              boxShadow:"0 4px 16px rgba(0,0,0,0.3)", 
              position:"relative" 
            }}>
              <div style={{ 
                position:"absolute", 
                top:"-0.5rem", 
                left:"50%", 
                transform:"translateX(-50%)", 
                width:"1rem", 
                height:"1rem", 
                background:"#8B0000", 
                borderRadius:"50%", 
                boxShadow:"0 2px 6px rgba(0,0,0,0.3)" 
              }} />
              <p style={{ 
                fontFamily:"Courier New,monospace", 
                fontSize:"0.75rem", 
                color:"#3D2817", 
                textAlign:"center",
                margin:0,
                lineHeight:1.6
              }}>
                💾 Each disk contains full case documentation including research, wireframes, final designs, and results. Click any disk to access the terminal and review the evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background:"#2A1B0E", padding:sp }}>
        <div style={{ maxWidth:540, margin:"0 auto" }}>
          <SectionLabel>SUBMIT CONFIDENTIAL EVIDENCE</SectionLabel>
          <p style={{ fontFamily:"Courier New,monospace", color:"#8B6F47", fontSize:12, marginTop:8, marginBottom:32 }}>All tip submissions reviewed within 24 hours handled with full discretion</p>
          <div style={{ background:"#F4E8D0", padding:isMobile?18:34, position:"relative", boxShadow:"8px 8px 0 #8B6F47" }}>
            <div style={{ position:"absolute", top:-10, left:32, fontSize:20, transform:"rotate(180deg)", color:"#8B6F47" }}>📎</div>
            <div style={{ fontFamily:"Courier New,monospace", color:"#8B0000", fontSize:10, fontWeight:"bold", letterSpacing:2, marginBottom:18, borderBottom:"1px solid #8B6F47", paddingBottom:8 }}>CONFIDENTIAL TIP SUBMISSION REF: DET-2026</div>
            <form onSubmit={handleSubmit}>
              {[{label:"WITNESS NAME:",name:"from_name",type:"text",ph:"Your full name..."},{label:"CONTACT EMAIL:",name:"from_email",type:"email",ph:"witness@secure.com..."}].map(f=>(
                <div key={f.name} style={{ marginBottom:18 }}>
                  <label style={{ display:"block", fontFamily:"Courier New,monospace", color:"#8B6F47", fontSize:11, letterSpacing:2, marginBottom:5, fontWeight:"bold" }}>{f.label}</label>
                  <input type={f.type} name={f.name} placeholder={f.ph} required style={{ width:"100%", background:"transparent", border:"none", borderBottom:"1px solid #8B6F47", fontFamily:"Courier New,monospace", color:"#3D2817", fontSize:13, padding:"5px 0", outline:"none", boxSizing:"border-box" }} />
                </div>
              ))}
              <div style={{ marginBottom:18 }}>
                <label style={{ display:"block", fontFamily:"Courier New,monospace", color:"#8B6F47", fontSize:11, letterSpacing:2, marginBottom:5, fontWeight:"bold" }}>CASE MESSAGE:</label>
                <textarea name="message" rows={4} placeholder="Describe the evidence..." required style={{ width:"100%", background:"transparent", border:"none", borderBottom:"1px solid #8B6F47", fontFamily:"Courier New,monospace", color:"#3D2817", fontSize:13, padding:"5px 0", resize:"none", outline:"none", boxSizing:"border-box" }} />
              </div>
              <button type="submit" style={{ marginTop:5, padding:"12px 28px", background:"#8B0000", color:"#F4E8D0", fontFamily:"Courier New,monospace", fontWeight:"bold", fontSize:12, letterSpacing:3, border:"none", cursor:"pointer", textTransform:"uppercase", boxShadow:"3px 3px 0 #3D2817", width:isMobile?"100%":"auto" }}>
                {submitStamp?"EVIDENCE FILED":"SUBMIT EVIDENCE"}
              </button>
            </form>
            {submitStamp && (
              <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%) rotate(-12deg)", border:"4px solid #8B0000", color:"#8B0000", fontFamily:"Courier New,monospace", fontWeight:"bold", fontSize:isMobile?18:24, padding:"8px 16px", letterSpacing:4, opacity:0.8, pointerEvents:"none", animation:"stampIn 0.3s ease-out" }}>RECEIVED</div>
            )}
            <div style={{ position:"absolute", bottom:16, right:16, width:44, height:44, borderRadius:"50%", border:"4px solid rgba(139,111,71,0.2)" }} />
          </div>
        </div>
      </section>

      <div style={{ background:"repeating-linear-gradient(45deg,#FFD700 0px,#FFD700 40px,#1A0F0A 40px,#1A0F0A 80px)", height:40 }} />
      <Footer theme="noir" />

      <style>{`
        @keyframes blink        { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes stampIn      { from{transform:translate(-50%,-60%) rotate(-12deg) scale(1.5);opacity:0} to{transform:translate(-50%,-50%) rotate(-12deg) scale(1);opacity:0.8} }
        @keyframes pulse        { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.1)} }
        @keyframes barFill      { from{width:0%} to{width:var(--bar-w,100%)} }
        @keyframes cardSlideIn  { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scanline     { 0%{left:-100%} 100%{left:200%} }
        @keyframes floatBadge   { 0%,100%{transform:rotate(-2deg) translateY(0px)} 50%{transform:rotate(-2deg) translateY(-5px)} }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        input::placeholder, textarea::placeholder { color:#C4A882; opacity:0.5; }
        button, a { -webkit-tap-highlight-color:transparent; }
        img { max-width:100%; display:block; }
        * { cursor:auto; }
        button, a, [role="button"] { cursor:pointer; }
        body.clicking, body.clicking * { cursor:none !important; }
        body.clicking #mag-cursor { display:block !important; }
      `}</style>
    </div>
  );
}

export default function App() {
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    const el = document.getElementById("mag-cursor");
    const track = (e) => {
      window._magX = e.clientX; window._magY = e.clientY;
      if (el && document.body.classList.contains("clicking")) {
        el.style.left = e.clientX + "px"; el.style.top = e.clientY + "px";
      }
    };
    const down = (e) => {
      document.body.classList.add("clicking");
      if (el) { el.style.left=(window._magX||e.clientX)+"px"; el.style.top=(window._magY||e.clientY)+"px"; }
    };
    const up = () => document.body.classList.remove("clicking");
    window.addEventListener("mousemove", track);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup",   up);
    return () => { window.removeEventListener("mousemove",track); window.removeEventListener("mousedown",down); window.removeEventListener("mouseup",up); };
  }, []);

  const handleSelect  = (p) => { setCurrentProject(p); window.scrollTo({top:0,behavior:"smooth"}); };
  const handleBack    = ()  => { setCurrentProject(null); setTimeout(()=>document.getElementById("cases")?.scrollIntoView({behavior:"smooth"}),100); };
  const handleNext    = ()  => { const idx=projects.findIndex(p=>p.id===currentProject.id); setCurrentProject(projects[(idx+1)%projects.length]); window.scrollTo({top:0,behavior:"smooth"}); };
  const nextProject   = currentProject ? projects[(projects.findIndex(p=>p.id===currentProject.id)+1)%projects.length] : null;

  return (
    <>
      <div id="mag-cursor" style={{ position:"fixed", pointerEvents:"none", zIndex:99999, transform:"translate(-50%,-50%)", left:"-200px", top:"-200px", display:"none" }}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter:"drop-shadow(0 2px 8px rgba(0,0,0,0.8))" }}>
          <circle cx="16" cy="16" r="11.5" stroke="#D4AF37" strokeWidth="3" fill="rgba(212,175,55,0.12)"/>
          <circle cx="16" cy="16" r="11.5" stroke="#8B6F47" strokeWidth="0.5" fill="none" opacity="0.5"/>
          <ellipse cx="11.5" cy="11.5" rx="4" ry="2.2" fill="rgba(255,255,255,0.22)" transform="rotate(-35 11.5 11.5)"/>
          <line x1="24.5" y1="24.5" x2="36" y2="36" stroke="#6B5437" strokeWidth="4" strokeLinecap="round"/>
          <line x1="24.5" y1="24.5" x2="36" y2="36" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
          <circle cx="16" cy="16" r="6" stroke="rgba(212,175,55,0.15)" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      {currentProject
        ? <ProjectPage project={currentProject} onBack={handleBack} onNext={handleNext} nextProject={nextProject} />
        : <HomePage onSelectProject={handleSelect} />}
    </>
  );
}