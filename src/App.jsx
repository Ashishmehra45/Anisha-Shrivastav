import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // Header Reveal
      gsap.from('.site-header', { 
        yPercent: -100, 
        opacity: 0, 
        duration: 1.2, 
        ease: 'expo.out',
        delay: 0.1 
      });

      // Hero Text Stagger
      gsap.from('.hero-elem', {
        y: 40, 
        autoAlpha: 0, 
        duration: 1.5, 
        stagger: 0.15, 
        ease: 'expo.out', 
        delay: 0.3
      });

      // Hero Image Elegant Square Wipe Reveal
      gsap.fromTo('.hero-img-container', 
        { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.05 },
        { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.5, ease: 'power4.inOut', delay: 0.5 }
      );

      // Stats Counters
      gsap.from('.stat-card', {
        scrollTrigger: { trigger: '.stats-section', start: 'top 85%' },
        y: 30, 
        autoAlpha: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: 'power3.out'
      });

      // Bio Section Fade
      gsap.from('.bio-text > *', {
        scrollTrigger: { trigger: '.bio-section', start: 'top 75%' },
        y: 30, 
        autoAlpha: 0, 
        duration: 1.2, 
        stagger: 0.15, 
        ease: 'power2.out'
      });

      // Timeline Thread
      gsap.from('.timeline-line', {
        scrollTrigger: { trigger: '.service-section', start: 'top 70%' },
        scaleY: 0, 
        transformOrigin: 'top center',
        duration: 1.5, 
        ease: 'power3.inOut'
      });

      gsap.from('.timeline-card', {
        scrollTrigger: { trigger: '.service-section', start: 'top 70%' },
        x: -30, 
        autoAlpha: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: 'expo.out',
        delay: 0.2
      });

      // Press Cards Premium Stagger
      gsap.from('.press-card', {
        scrollTrigger: { trigger: '.press-section', start: 'top 75%' },
        y: 60, 
        autoAlpha: 0, 
        duration: 1.2, 
        stagger: 0.15, 
        ease: 'power4.out'
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#FAFAFA] text-gray-800 min-h-screen overflow-x-hidden font-sans selection:bg-[#0B192C] selection:text-[#B89955]">
      
      {/* HEADER CONTAINER */}
      <header className="site-header fixed w-full top-0 z-50 transition-all">
        
        {/* Top Utility Bar */}
        <div className="bg-[#0B192C] text-[#B89955] text-[10px] uppercase tracking-[0.2em] py-2 px-6 md:px-12 flex justify-between items-center">
         
          <div className="hidden md:flex items-center gap-4">
            <span>M.P. Industrial Development Corporation</span>
            <span className="w-px h-3 bg-[#B89955]/30"></span>
            <a href="https://invest.mp.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Invest MP</a>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="bg-white/90 backdrop-blur-xl border-b border-gray-100 py-4 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
            
            {/* Logo / Name */}
            <div className="text-xl font-serif font-semibold tracking-wide text-[#0B192C] flex items-center gap-3">
              Anisha Shrivastav 
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest bg-[#0B192C] text-[#B89955] px-2.5 py-1 rounded-sm">IAS</span>
            </div>
            
            {/* Desktop Links & Socials */}
            <div className="hidden md:flex space-x-8 items-center font-medium text-sm text-gray-500 uppercase tracking-widest">
              <a href="#biography" className="hover:text-[#B89955] transition-colors duration-300">Biography</a>
              <a href="#service" className="hover:text-[#B89955] transition-colors duration-300">Experience</a>
              <a href="#press" className="hover:text-[#B89955] transition-colors duration-300">Press</a>
              
              <div className="h-4 w-px bg-gray-300 mx-2"></div>
              
              {/* Minimal Social Icons */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#0B192C] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#0B192C] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
              </div>

              <a href="#correspondence" className="ml-4 px-6 py-2 bg-transparent text-[#0B192C] border border-[#0B192C] rounded hover:bg-[#0B192C] hover:text-[#B89955] transition-all duration-500">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="pt-48 pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center min-h-[95vh] relative mt-10 md:mt-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent -z-10"></div>
        
        <div className="md:w-[55%] pr-0 md:pr-16 mt-16 md:mt-0 z-10">
          <div className="hero-elem flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-[#B89955]"></span>
            <span className="text-[#B89955] font-sans font-semibold text-xs uppercase tracking-[0.2em]">Madhya Pradesh Cadre</span>
          </div>
          <h1 className="hero-elem text-6xl md:text-8xl font-serif text-[#0B192C] leading-[1.05] mb-6">
            Anisha <br/> Shrivastav
          </h1>
          <h2 className="hero-elem text-lg md:text-xl font-sans font-light tracking-[0.15em] text-gray-500 uppercase mb-8">
            Indian Administrative Service
          </h2>
          <p className="hero-elem text-lg text-gray-600 mb-12 leading-relaxed max-w-lg">
            Executive Director, M.P. Industrial Development Corporation.<br/>
            <span className="text-sm font-medium text-gray-400 mt-2 block">Gwalior · Madhya Pradesh · India</span>
          </p>
          <div className="hero-elem flex items-center space-x-6">
            <a href="#biography" className="px-9 py-4 bg-[#0B192C] text-[#B89955] rounded-sm font-sans font-medium uppercase tracking-widest text-xs hover:bg-[#142946] transition-all duration-500 shadow-2xl shadow-[#0B192C]/20">
              Read Biography
            </a>
          </div>
        </div>
        
        {/* Hero Image - Set to Square / Rectangular Format */}
        <div className="md:w-[45%] w-full flex justify-center md:justify-end relative">
          <div className="hero-img-container relative w-full max-w-[420px] aspect-[4/5] bg-gray-200 overflow-hidden shadow-[0_30px_60px_-15px_rgba(11,25,44,0.3)] rounded-md">
            <div className="absolute inset-0 bg-[#0B192C]/10 z-20 group-hover:bg-transparent transition-colors duration-700"></div>
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D03AQEpN2gem1MLoA/profile-displayphoto-scale_400_400/B4DZ05WvUOIoAg-/0/1774783763347?e=1788998400&v=beta&t=E-eJzCXj1uUc1rd1dkCtH6kA2l1hR4fKyKOU0qWz5FU" 
              alt="Anisha Shrivastav IAS" 
              className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-1000 scale-100"
            />
          </div>
          {/* Elegant Decor Element */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-[#B89955]/30 rounded-full -z-10 animate-pulse"></div>
        </div>
      </section>

      {/* HIGHLIGHT STATS SECTION */}
      <section className="stats-section max-w-6xl mx-auto px-6 relative z-20 -mt-16 mb-24">
        <div className="bg-white rounded-sm shadow-[0_20px_50px_rgba(11,25,44,0.05)] p-10 flex flex-col md:flex-row justify-between items-center text-center divide-y md:divide-y-0 md:divide-x divide-gray-100 border border-gray-100">
          <div className="stat-card w-full md:w-1/3 py-6">
            <h3 className="text-4xl font-serif text-[#0B192C] mb-2">AIR 66</h3>
            <p className="text-gray-400 font-sans text-xs uppercase tracking-widest font-semibold">Civil Services 2020</p>
          </div>
          <div className="stat-card w-full md:w-1/3 py-6">
            <h3 className="text-4xl font-serif text-[#0B192C] mb-2">2021</h3>
            <p className="text-gray-400 font-sans text-xs uppercase tracking-widest font-semibold">IAS Batch</p>
          </div>
          <div className="stat-card w-full md:w-1/3 py-6">
            <h3 className="text-4xl font-serif text-[#0B192C] mb-2">MPIDC</h3>
            <p className="text-gray-400 font-sans text-xs uppercase tracking-widest font-semibold">Industrial Development</p>
          </div>
        </div>
      </section>

      {/* BIOGRAPHY SECTION */}
      <section id="biography" className="bio-section py-32 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto bio-text relative z-10 text-center md:text-left">
          <h4 className="text-[#B89955] font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-8 flex items-center justify-center md:justify-start gap-4">
            <span className="w-8 h-px bg-[#B89955]"></span> Biography
          </h4>
          <p className="text-2xl md:text-4xl font-serif text-[#0B192C] leading-snug mb-10">
            Anisha Shrivastav is an officer of the Indian Administrative Service, of the 2021 batch and the Madhya Pradesh cadre. 
          </p>
          <p className="text-lg md:text-xl font-sans text-gray-500 leading-relaxed mb-10 font-light">
            Her service has spanned revenue and district administration, the administration of a Union Territory, and the industrial development of one of central India’s principal regions. She currently serves as Executive Director of the M.P. Industrial Development Corporation at Gwalior.
          </p>
          <div className="p-8 bg-[#FAFAFA] border-l-2 border-[#B89955] text-gray-600 font-sans text-base leading-relaxed italic shadow-sm">
            "The office develops and administers the region’s industrial estates, allots industrial land, and takes manufacturers from first enquiry through clearance to commissioning: land, approvals, power, water, and the steady resolution of whatever stands between an investment decision and an operating plant."
          </div>
        </div>
      </section>

      {/* RECORD OF SERVICE & EDUCATION */}
      <section id="service" className="service-section py-32 px-6 bg-[#0B192C] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          
          {/* Service Record */}
          <div className="relative">
            <h2 className="text-4xl font-serif text-white mb-16 flex items-center gap-6">
              Record of Service
              <span className="h-px bg-white/20 flex-1"></span>
            </h2>
            
            <div className="relative pl-8 space-y-12">
              <div className="timeline-line absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-[#B89955] to-transparent"></div>
              
              {[
                { year: "2025 – Present", role: "Executive Director", entity: "M.P. Industrial Development Corporation, Gwalior" },
                { year: "2024 – 2025", role: "Sub Divisional Magistrate", entity: "Pipariya, Government of Madhya Pradesh" },
                { year: "2023 – 2024", role: "Additional Deputy Commissioner", entity: "Chandigarh Administration" },
                { year: "2021 – 2022", role: "Officer Trainee", entity: "LBSNAA, Mussoorie" },
              ].map((item, idx) => (
                <div key={idx} className="timeline-card relative group cursor-default">
                  <div className="absolute w-2.5 h-2.5 bg-[#0B192C] border-2 border-[#B89955] rounded-full -left-[37px] top-1.5 group-hover:bg-[#B89955] transition-colors duration-300"></div>
                  <span className="text-xs font-sans font-semibold tracking-widest text-[#B89955] mb-2 block uppercase">{item.year}</span>
                  <h3 className="text-2xl font-serif text-white mb-1">{item.role}</h3>
                  <p className="text-gray-400 font-sans text-sm">{item.entity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div id="education">
            <h2 className="text-4xl font-serif text-white mb-16 flex items-center gap-6">
              Education
              <span className="h-px bg-white/20 flex-1"></span>
            </h2>
            <div className="space-y-6">
              <div className="timeline-card bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-[#B89955]/50 transition-colors duration-500 rounded-sm">
                <span className="text-xs font-sans font-semibold tracking-widest text-[#B89955] mb-3 block uppercase">2021</span>
                <h3 className="text-2xl font-serif text-white mb-2">Indian Administrative Service</h3>
                <p className="text-gray-400 font-sans text-sm mb-6">Lal Bahadur Shastri National Academy of Administration</p>
                <span className="text-xs font-sans font-bold uppercase tracking-widest bg-white/10 text-white px-3 py-1.5 rounded-sm">AIR 66, CSE 2020</span>
              </div>
              
              <div className="timeline-card bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-[#B89955]/50 transition-colors duration-500 rounded-sm">
                <span className="text-xs font-sans font-semibold tracking-widest text-[#B89955] mb-3 block uppercase">2011 – 2014</span>
                <h3 className="text-2xl font-serif text-white mb-2">Bachelor of Commerce (Honours)</h3>
                <p className="text-gray-400 font-sans text-sm">Shri Ram College of Commerce, University of Delhi</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PRESS ENGAGEMENTS WITH PREMIUM IMAGES */}
      <section id="press" className="press-section py-32 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h4 className="text-[#B89955] font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-4">In the Media</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0B192C]">Press & Public Engagements</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                source: "Goonj 90.8 FM", 
                type: "Radio interview", 
                title: "In conversation: the work of MPIDC’s Gwalior office",
                image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              { 
                source: "The Sootr", 
                type: "Feature", 
                title: "A profile of the Executive Director, MPIDC Gwalior",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              { 
                source: "Haribhoomi", 
                type: "News report", 
                title: "On allotment to the Madhya Pradesh cadre",
                image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
            ].map((press, idx) => (
              <div key={idx} className="press-card group bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(11,25,44,0.08)] hover:-translate-y-2 transition-all duration-500 rounded-md overflow-hidden flex flex-col">
                
                {/* Event Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-[#0B192C]/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={press.image} 
                    alt={press.source} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                     <span className="text-[10px] font-sans font-bold bg-white text-[#0B192C] px-3 py-1.5 uppercase tracking-wider shadow-sm rounded-sm">
                       {press.type}
                     </span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-1.5 bg-[#B89955] rounded-full"></div>
                      <span className="text-xs font-sans font-bold text-[#B89955] uppercase tracking-widest">{press.source}</span>
                    </div>
                    <h3 className="text-xl font-serif text-[#0B192C] leading-snug group-hover:text-[#B89955] transition-colors duration-300">
                      {press.title}
                    </h3>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center text-[#0B192C] text-sm font-sans font-semibold uppercase tracking-widest cursor-pointer group-hover:text-[#B89955] transition-colors">
                    Read Coverage <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORRESPONDENCE */}
      <section id="correspondence" className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#0B192C] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
            <svg className="w-6 h-6 text-[#B89955]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0B192C] mb-8">Correspondence</h2>
          <p className="text-gray-500 font-sans mb-12 text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Official matters are received through the office she currently holds. For industrial land, investment or facilitation in the Gwalior and Chambal divisions, the point of entry is the MPIDC Regional Office, Gwalior.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://invest.mp.gov.in" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center px-10 py-4 bg-[#0B192C] text-[#B89955] font-sans font-medium uppercase tracking-widest text-xs hover:bg-[#142946] transition-all duration-500 shadow-xl shadow-[#0B192C]/20">
              Govt. Portal: invest.mp.gov.in
            </a>
            <a href="https://linkedin.com/in/anishashrivastav" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center px-10 py-4 bg-transparent text-[#0B192C] border border-[#0B192C] font-sans font-medium uppercase tracking-widest text-xs hover:bg-[#FAFAFA] transition-all duration-500">
              Professional Profile
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-400 font-sans text-xs uppercase tracking-widest bg-white border-t border-gray-100">
        © 2026 Anisha Shrivastav, IAS. <br className="md:hidden mt-2" /> <span className="hidden md:inline">|</span> Madhya Pradesh Cadre.
      </footer>
    </div>
  );
};

export default App;