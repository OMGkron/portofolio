"use client";

import dynamic from 'next/dynamic';

// --- GANTI IMPORT BIASA DENGAN DYNAMIC IMPORT ---

// Komponen animasi berat yang sering pakai 'window' wajib di-disable SSR-nya
const Particles = dynamic(() => import("../components/Particles"), { ssr: false });
const GooeyNav = dynamic(() => import("@/components/GooeyNav"), { ssr: false });
const TiltedCard = dynamic(() => import("../components/TiltedCard"), { ssr: false });
const DecayCard = dynamic(() => import("@/components/DecayCard"), { ssr: false });
const CurvedLoop = dynamic(() => import("@/components/CurvedLoop"), { ssr: false });
const ScrollReveal = dynamic(() => import("@/components/ScrollReveal"), { ssr: false });
const LogoLoop = dynamic(() => import("../components/LogoLoop"), { ssr: false });
const TextType = dynamic(() => import("../components/TextType"), { ssr: false });

// Komponen statis/ringan biasanya aman, tapi jika masih error, jadikan dynamic juga
import PixelTrail from "../components/PixelTrail";
import ScrambledText from "../components/ScrambledText";

export default function Home() {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <main className="relative min-h-screen w-full overflow-hidden">

      {/* BACKGROUND PART */}
  
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <Particles
          particleCount={400}
          particleSpread={8}
          speed={0.2}
          particleColors={["#000000ff", "#22474eff", "#21041fff"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.2}
          alphaParticles={true}
          particleBaseSize={85}
          sizeRandomness={0.5}
          cameraDistance={18}
          className="absolute inset-0"
        />

        
      </div>
      

      {/* TRANSPARENT GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-black -z-10"></div>

      {/* NAV */}
     <header className="fixed top-2 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[95vw] px-2 sm:px-4">

        <GooeyNav
          items={navItems}
          initialActiveIndex={0}
          animationTime={600}
          particleCount={18}
          particleR={120}
        />
      </header>
      {/* MAIN CONTENT */}
      <section className="relative z-30 px-8 md:px-12 pt-32 space-y-8 pointer-events-auto">

        <TextType
          text={["Hello, I'm Andika Ramadhan\nI'm an expert web developer"]}
          className="text-5xl font-bold text-white"
          typingSpeed={100}
          deletingSpeed={50}
          pauseDuration={1500}
          loop={false}
        />

        <p className="text-xl font-light text-white leading-relaxed max-w-2xl mt-10">
          I was born on August 31, 2008, I created this website
          to learn about React JS, Tailwind CSS, and also TypeScript.
          My goal is to apply for jobs in fields I am interested in,
          such as web development, UI design, and other related areas.
        </p>
        <div className="flex items-center gap-6 mt-4">

  {/* WhatsApp */}
  <a
    href="https://wa.me/62881027192232"
    target="_blank"
    className="transition duration-300 hover:scale-125 hover:opacity-90 hover:drop-shadow-[0_0_10px_rgba(0,255,100,0.7) ]"
  >
    <img
      src="/icons/whatsap.png"
      alt="WhatsApp"
      className="w-8 h-8"
    />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/username"
    target="_blank"
    className="transition duration-300 hover:scale-125 hover:opacity-90 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
  >
    <img
      src="/icons/github.png"
      alt="GitHub"
      className="w-8 h-8 invert"
    />
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/@rmdhanrax_"
    target="_blank"
    className="transition duration-300 hover:scale-125 hover:opacity-90 hover:drop-shadow-[0_0_12px_rgba(255,0,150,0.7)]"
  >
    <img
      src="/icons/instagram.png"
      alt="Instagram"
      className="w-8 h-8"
    />
  </a>

  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@i.msupersonic"
    target="_blank"
    className="transition duration-300 hover:scale-125 hover:opacity-90 hover:drop-shadow-[0_0_12px_rgba(0,250,255,0.7)]"
  >
    <img
      src="/icons/tiktok.png"
      alt="TikTok"
      className="w-10 h-10"
    />
  </a>

</div>

      </section>


      {/* PHOTO CARD */}
     <div className="mt-10 md:absolute md:top-32 md:right-10">

        <TiltedCard
          imageSrc="/cing.jpg"
          captionText=""
          rotateAmplitude={20}
          scaleOnHover={1.2}
        />
        <TextType
          text={["HELLO"]}
          className="text-5xl font-bold text-white"
          typingSpeed={100}
          deletingSpeed={50}
          pauseDuration={1500}
          loop={true}
        />
        
      </div>
<section>
  <div className="absolute inset-0 z-1 pointer-events-auto">
    <Particles
      particleCount={300}
      particleSpread={8}
      speed={0.2}
      particleColors={["#000000ff", "#151a1bff", "#21041fff"]}
      moveParticlesOnHover={true}
      particleHoverFactor={1.2}
      alphaParticles={true}
      particleBaseSize={80}
      sizeRandomness={0.5}
      cameraDistance={18}
      className="absolute inset-0"
    />
  </div>
 <div className="relative bg-gradient-to-r from-black to-black 
                min-h-[220px] sm:min-h-[320px] 
                flex items-center justify-center mt-20">

        <CurvedLoop
          marqueeText="WELCOME TO MY PORTFOLIO"
          speed={2}
         
          direction="left"
          interactive
        />
      </div>

     </section>
 

<section
  id="about"
  className="relative bg-gradient-to-r from-black to-black py-32"
>
   {/* PARTICLE BACKGROUND */}
  <div className="absolute inset-0 z-1 pointer-events-auto">
    <Particles
      particleCount={300}
      particleSpread={8}
      speed={0.2}
      particleColors={["#000000ff", "#151a1bff", "#21041fff"]}
      moveParticlesOnHover={true}
      particleHoverFactor={1.2}
      alphaParticles={true}
      particleBaseSize={80}
      sizeRandomness={0.5}
      cameraDistance={18}
      className="absolute inset-0"
    />
  </div>
  <div className="absolute inset-0 z-10 pointer-events-auto">
    
  </div>
  {/* CONTAINER */}
  <div className="max-w-6xl mx-auto px-6 md:px-12">

    {/* JUDUL */}
    <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
      About Me
    </h2>

    <div className="flex flex-col lg:flex-row items-start gap-10">
  
  {/* DESKRIPSI */}
  <div className="flex-1">
    <p className="text-gray-300 max-w-2xl leading-relaxed mb-6">
      I'm a web developer based in Depok, focusing on creating modern, responsive, and high-performance websites. I'm passionate about user interface (UI) and user experience (UX) design, and I strive to combine visual aesthetics with optimal functionality.
      I have experience developing websites using technologies like HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. I'm used to building interactive, clean, and user-friendly interfaces, and I enjoy experimenting with animations and micro-interactions to create a more vibrant visual experience.
    </p>

    <p className="text-gray-300 max-w-2xl leading-relaxed">
      Outside of coding, I enjoy alternative rock music, which often serves as a source of inspiration and a mood booster while working on projects. For me, building a website is like making music—it has to have a strong rhythm, structure, and character.
      I believe that a website is more than just about looks, but also about user experience, speed, and real solutions. I'm always open to learning new technologies, adapting to current trends, and collaborating to produce quality digital work.
    </p>
  </div>

  {/* DECAY CARD */}
  <div className="flex-shrink-0">
    <DecayCard
      width={320}
      height={440}
      image="/me.jpeg"
    />
  </div>

</div>


    {/* CONTENT GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* LEFT */}
      <div>
        <h3 className="text-white text-2xl font-semibold mb-4">
          What I Do
        </h3>

        <ul className="text-gray-400 space-y-3">
          <li>• Frontend Development</li>
          <li>• UI / UX Implementation</li>
          <li>• Responsive Web Design</li>
          <li>• Animation & Interaction</li>
        </ul>
      </div>

      {/* RIGHT */}
     
      <div>
        <h3 className="text-white text-2xl font-semibold mb-4">
          Tech Stack
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "GitHub"
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-white/10 text-white text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </div>
<div className="max-w-[600px] mx-auto pointer-events-auto mt-5">

  <LogoLoop
    logos={[
      { src: "/logos/4.png", alt: "React" },
      { src: "/logos/html.png", alt: "HTML" },
      { src: "/logos/2.svg", alt: "Tailwind" },
      { src: "/logos/3.svg", alt: "TypeScript" },
    ]}
    speed={100}
    direction="left"
    logoHeight={50}
    gap={40}
    fadeOut
    fadeOutColor="transparent"
    scaleOnHover
    pauseOnHover
    className="invert"
  />

</div>
  </div>
</section>
<section id="projects" className="relative z-30 px-8 md:px-12 py-32">
  <div className="absolute inset-0 z-1 pointer-events-auto">
    <Particles
      particleCount={300}
      particleSpread={8}
      speed={0.2}
      particleColors={["#000000ff", "#151a1bff", "#21041fff"]}
      moveParticlesOnHover={true}
      particleHoverFactor={1.2}
      alphaParticles={true}
      particleBaseSize={80}
      sizeRandomness={0.5}
      cameraDistance={18}
      className="absolute inset-0"
    />
  </div>
  {/* HEADING */}
  <div className="mb-20 max-w-3xl">

  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
      Selected Projects
    </h2>

  <ScrollReveal
  containerClassName="max-w-1xl"
  textClassName="text-gray-400 text-base leading-relaxed font-normal"
  baseOpacity={0.15}
  enableBlur={false}
>
  A collection of projects I've worked on, focusing on clean design,
  smooth interactions, and real-world solutions.
</ScrollReveal>


</div>


  {/* PROJECT LIST */}
  <div className="grid gap-12 md:grid-cols-2">
    

    {/* PROJECT CARD */}
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:border-white/20">
     
  

      {/* IMAGE */}
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <img
          src="/project2.png"
          alt="Project 1"
          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <h3 className="text-xl font-semibold text-white mb-2">
       E commerce Website
      </h3>

      <p className="text-gray-400 mb-4 leading-relaxed">
      
      </p>

      {/* TECH STACK */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["HTML", "CSS", "JavaScript", "Mysql"].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* ACTION */}
      <div className="flex items-center gap-4">
        <a
          href="https://semeruingredients.id/index"
          className="text-sm font-medium text-white underline-offset-4 hover:underline z-4"
        >
          View Project →
        </a>
      </div>
    </div>

    {/* DUPLICATE CARD FOR OTHER PROJECTS */}
     <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:border-white/20">
    <div className="relative mb-6 overflow-hidden rounded-xl">
        <img
          src="/project1.png"
          alt="Project 1"
          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
     <h3 className="text-xl font-semibold text-white mb-2">
      PORTOFOLIO WEBSITE
      </h3>

      <p className="text-gray-400 mb-4 leading-relaxed">
      
      </p>

      {/* TECH STACK */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["React", "TwilandCSS", "TypeScript"].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* ACTION */}
      <div className="flex items-center gap-4">
        <a
          href="https://semeruingredients.id/index"
          className="text-sm font-medium text-white underline-offset-4 hover:underline"
        >
          View Project →
        </a>
      </div>
      </div>
    {/* Copy & change content */}
    
  </div>
</section>

{/* CONTACT SECTION */}
<section id="contact" className="relative bg-gradient-to-r from-black to-black py-32">
  {/* PARTICLE BACKGROUND */}
  <div className="absolute inset-0 z-1 pointer-events-auto">
    <Particles
      particleCount={300}
      particleSpread={8}
      speed={0.2}
      particleColors={["#000000ff", "#151a1bff", "#21041fff"]}
      moveParticlesOnHover={true}
      particleHoverFactor={1.2}
      alphaParticles={true}
      particleBaseSize={80}
      sizeRandomness={0.5}
      cameraDistance={18}
      className="absolute inset-0"
    />
  </div>
  
  {/* CONTAINER */}
  <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
    {/* HEADING */}
    <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
      Get In Touch
    </h2>
    
    <p className="text-gray-300 max-w-2xl leading-relaxed mb-10">
      Feel free to reach out if you're interested in working together, have a project in mind, or just want to connect. I'm always open to discussing new opportunities.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* CONTACT INFO */}
      <div className="space-y-6">
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white">dikramdhan09@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white">+62 881-0271-92232</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">Depok, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Social Media</h3>
          <div className="flex gap-4">
            <a
              href="https://wa.me/62881027192232"
              target="_blank"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white/20"
            >
              <img src="/icons/whatsap.png" alt="WhatsApp" className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/username"
              target="_blank"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white/20"
            >
              <img src="/icons/github.png" alt="GitHub" className="w-6 h-6 invert" />
            </a>
            <a
              href="https://instagram.com/@rmdhanrax_"
              target="_blank"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white/20"
            >
              <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@i.msupersonic"
              target="_blank"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white/20"
            >
              <img src="/icons/tiktok.png" alt="TikTok" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* CONTACT FORM */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white text-xl font-semibold mb-4">Send Me a Message</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
              placeholder="Your Name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>
          
           <a
            href="mailto:dikramdhan09@gmail.com"
            className="inline-block px-6 py-3 bg-white text-black font-medium rounded-lg transition-all duration-300 hover:bg-white/90"
          >
            Send Message
          </a>
        </form>
      </div>
    </div>
  </div>
</section>
{/* FOOTER */}
<footer className="relative bg-black border-t border-white/10">
  {/* Particle Background */}
  <div className="absolute inset-0 pointer-events-none">
    <Particles
      particleCount={120}
      particleSpread={6}
      speed={0.15}
      particleColors={["#000000ff", "#151a1bff", "#21041fff"]}
      alphaParticles
      particleBaseSize={60}
      sizeRandomness={0.4}
      cameraDistance={20}
      className="absolute inset-0"
    />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-12">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

      {/* LEFT */}
      <p className="text-gray-400 text-sm text-center md:text-left">
        © {new Date().getFullYear()} Andika Ramadhan. All rights reserved.
      </p>

      {/* CENTER */}
      <div className="flex gap-6 text-sm text-gray-400">
        <a href="#home" className="hover:text-white transition">Home</a>
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </div>

      {/* RIGHT - SOCIAL */}
      <div className="flex gap-4">
        <a
          href="https://github.com/username"
          target="_blank"
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
        >
          <img src="/icons/github.png" alt="GitHub" className="w-5 h-5 invert" />
        </a>

        <a
          href="https://instagram.com/@rmdhanrax_"
          target="_blank"
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
        >
          <img src="/icons/instagram.png" alt="Instagram" className="w-5 h-5" />
        </a>

        <a
          href="https://www.tiktok.com/@i.msupersonic"
          target="_blank"
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
        >
          <img src="/icons/tiktok.png" alt="TikTok" className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</footer>

    </main>
  );
}