"use client";

import dynamic from 'next/dynamic';

// Kita buat SEMUA komponen yang berpotensi menyentuh DOM/Window menjadi dynamic no-SSR
const PixelTrail = dynamic(() => import("../components/PixelTrail"), { ssr: false });
const Particles = dynamic(() => import("../components/Particles"), { ssr: false });
const TextType = dynamic(() => import("../components/TextType"), { ssr: false });
const ScrambledText = dynamic(() => import("../components/ScrambledText"), { ssr: false });
const TiltedCard = dynamic(() => import("../components/TiltedCard"), { ssr: false });
const LogoLoop = dynamic(() => import("../components/LogoLoop"), { ssr: false });
const GooeyNav = dynamic(() => import("@/components/GooeyNav"), { ssr: false });
const CurvedLoop = dynamic(() => import("@/components/CurvedLoop"), { ssr: false });
const DecayCard = dynamic(() => import("@/components/DecayCard"), { ssr: false });
const ScrollReveal = dynamic(() => import("@/components/ScrollReveal"), { ssr: false });

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
          <a href="https://wa.me/62881027192232" target="_blank" className="transition duration-300 hover:scale-125">
            <img src="/icons/whatsap.png" alt="WhatsApp" className="w-8 h-8" />
          </a>
          <a href="https://github.com/username" target="_blank" className="transition duration-300 hover:scale-125">
            <img src="/icons/github.png" alt="GitHub" className="w-8 h-8 invert" />
          </a>
          <a href="https://instagram.com/@rmdhanrax_" target="_blank" className="transition duration-300 hover:scale-125">
            <img src="/icons/instagram.png" alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="https://www.tiktok.com/@i.msupersonic" target="_blank" className="transition duration-300 hover:scale-125">
            <img src="/icons/tiktok.png" alt="TikTok" className="w-10 h-10" />
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
        <div className="relative bg-gradient-to-r from-black to-black min-h-[220px] sm:min-h-[320px] flex items-center justify-center mt-20">
          <CurvedLoop
            marqueeText="WELCOME TO MY PORTFOLIO"
            speed={2}
            direction="left"
            interactive
          />
        </div>
      </section>

      <section id="about" className="relative bg-gradient-to-r from-black to-black py-32">
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
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="flex-1">
              <p className="text-gray-300 max-w-2xl leading-relaxed mb-6">
                I'm a web developer based in Depok... (isi deskripsi kamu)
              </p>
            </div>
            <div className="flex-shrink-0">
              <DecayCard width={320} height={440} image="/me.jpeg" />
            </div>
          </div>
          
          <div className="max-w-[600px] mx-auto mt-10">
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
              className="invert"
            />
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-30 px-8 md:px-12 py-32">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Selected Projects</h2>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Card Project 1 */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
            <img src="/project2.png" alt="Project" className="h-56 w-full object-cover rounded-xl" />
            <h3 className="text-xl font-semibold text-white mt-4">E-commerce Website</h3>
            <a href="#" className="text-white mt-4 inline-block">View Project →</a>
          </div>
          {/* Card Project 2 */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
            <img src="/project1.png" alt="Project" className="h-56 w-full object-cover rounded-xl" />
            <h3 className="text-xl font-semibold text-white mt-4">Portfolio Website</h3>
            <a href="#" className="text-white mt-4 inline-block">View Project →</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-black border-t border-white/10 py-12">
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Andika Ramadhan. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}