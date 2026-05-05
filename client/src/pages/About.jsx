import React from 'react';
import heroImage from '../assets/logo.png';
import worldBankImg from '../assets/worldbank.png';
import csaBadge from '../assets/certificate2.jpeg';
import cadBadge from '../assets/certificate2.jpeg';
import resumePdf from '../assets/resume.pdf';
import certificateImg from '../assets/certificate.jpeg';

const certifications = [
  {
    badge: csaBadge,
    label: 'ServiceNow Certified System Administrator',
    short: 'CSA',
    issuer: 'ServiceNow',
    date: 'Oct 2024',
    credentialId: 'CSA-20241024-SJA',
    link: 'https://www.credly.com/users/saxon-palle/badges',
  },
  {
    badge: cadBadge,
    label: 'ServiceNow Certified Application Developer',
    short: 'CAD',
    issuer: 'ServiceNow',
    date: '2023',
    credentialId: 'CAD-2023-SP',
    link: 'https://www.credly.com/users/saxon-palle/badges',
  },
  {
    badge: certificateImg,
    label: 'ServiceNow Certifications',
    short: 'Badges',
    issuer: 'Credly',
    date: 'Present',
    credentialId: 'Credly Profile',
    link: 'https://www.credly.com/users/saxon-palle/badges',
    isLarge: true,
  },
];

const hobbies = [
  'Mentoring junior ServiceNow developers',
  'Building personal workflow automations',
  'Exploring cloud-native architectures (AWS, Azure)',
  'Reading about enterprise AI and Now Assist',
  'Contributing to open-source tooling',
  'Dreaming about sci-fi tech becoming real',
];

const About = () => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
      );

      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-white selection:text-black pt-32">

      {/* --- HERO COLLAGE --- */}
      <section className="w-full px-6 md:px-12 lg:px-20 mb-32 reveal">
        <div className="relative mx-auto w-full max-w-[1200px] h-[400px] md:h-[600px]">
          {/* Main Photo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] md:w-[40%] aspect-[3/4] z-10 overflow-hidden rounded-sm shadow-2xl">
            <img src={heroImage} alt="Saxon Palle" className="w-full h-full object-cover" />
          </div>
          {/* Secondary Photo Left */}
          <div className="absolute left-[5%] top-[60%] -translate-y-1/2 w-[35%] md:w-[28%] aspect-[3/4] z-0 overflow-hidden rounded-sm opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <img src={worldBankImg} alt="Workspace" className="w-full h-full object-cover" />
          </div>
          {/* Secondary Photo Right */}
          <div className="absolute right-[5%] top-[40%] -translate-y-1/2 w-[35%] md:w-[28%] aspect-[3/4] z-0 overflow-hidden rounded-sm opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <img src={csaBadge} alt="Certifications" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* --- NARRATIVE CONTENT --- */}
      <section className="w-full px-6 md:px-12 lg:px-20 pb-32">
        <div className="mx-auto w-full max-w-[900px] space-y-12 reveal stagger-1">
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight uppercase tracking-tighter text-white">
            Hi, I’m Saxon Palle — <br />
            <span className="text-gray-400">ServiceNow Architect & Automation Enthusiast.</span>
          </h2>

          <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed text-gray-200">
            <p>
              I’m a ServiceNow Specialist with over <strong>9 years of experience</strong>,
              having worked at companies like <strong>The World Bank Group, Deluxe,</strong> and <strong>General Electronics</strong>.
            </p>
            <p>
              Over the years, I’ve led automation initiatives across IAM workflows,
              ITSM platforms, and CMDB governance—always with a focus on
              clarity, efficiency, and measurable impact.
            </p>
            <p>
              I believe great platform engineering starts with patience:
              to listen deeply, empathize sincerely, synthesize requirements clearly,
              iterate fearlessly, and deliver solutions with purpose.
            </p>
            <p>
              To me, the best enterprise systems aren’t just tools—they should
              behave like thoughtful companions: anticipating your needs,
              adapting with you, and sometimes even surprising you with how
              seamlessly they work.
            </p>
          </div>

          <div className="pt-16 grid grid-cols-1 md:grid-cols-2 gap-16 reveal stagger-2">
            <div className="space-y-8">
              <h3 className="font-mono text-sm uppercase tracking-[0.3em] text-white font-bold">When I'm not coding:</h3>
              <ul className="space-y-5 font-normal text-white text-lg md:text-xl">
                {hobbies.map((hobby, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-gray-400">/</span> {hobby}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="font-mono text-sm uppercase tracking-[0.3em] text-white font-bold">Current Base:</h3>
              <p className="font-normal text-white text-xl md:text-2xl leading-relaxed">
                Remote, USA. Originally from Hyderabad, India. <br />
                M.S. in Information Technology, SNHU.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CERTIFICATIONS --- */}
      <section className="w-full px-6 md:px-12 lg:px-20 pb-32">
        <div className="mx-auto w-full max-w-[1400px]">
          <h3 className="reveal font-mono text-sm md:text-base uppercase tracking-[0.3em] text-gray-400 mb-12 font-bold">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, i) => (
              <a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="reveal stagger-1 group block border border-white/10 p-8 rounded-sm hover:bg-[#111] transition-all duration-500"
              >
                <div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity w-full">
                  {cert.badge ? (
                    <img
                      src={cert.badge}
                      alt={cert.short}
                      className="w-full h-auto max-h-48 rounded-sm object-contain"
                    />
                  ) : (
                    <span className="text-4xl">{cert.emoji}</span>
                  )}
                </div>
                <h4 className="text-lg font-semibold uppercase tracking-tight mb-2">{cert.label}</h4>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{cert.issuer} • {cert.date}</p>
              </a>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;
