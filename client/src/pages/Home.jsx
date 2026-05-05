import React from 'react';
import { ArrowUpRight, Linkedin, Mail, Phone } from 'lucide-react';
import heroImage from '../assets/logo.png';
import worldBankImg from '../assets/worldbank.png';
import deluxeImg from '../assets/deluxe.png';
import frontendImg from '../assets/frontend.png';
import worldBankLogo from '../assets/worldlogo.png';
import deluxeLogo from '../assets/deluxelogo.png';
import geLogo from '../assets/generalelectronics logo.png';
import billboardsLogo from '../assets/billboards_logo.png';

const caseStudies = [
  {
    company: 'The World Bank Group',
    logo: worldBankLogo,
    role: 'ServiceNow Admin/Developer',
    period: 'Sep 2017 - Present',
    title: 'Enterprise ITSM, IAM And Workflow Automation',
    image: worldBankImg,
    context: 'The World Bank required scalable, automated IT services to support global finance and operations programs with secure workflows and reduced manual overhead.',
    challenge:
      'Support large-scale finance and operations programs (CIF, GPE, Adaptation Fund) with secure, scalable workflows and reduced manual overhead.',
    contribution:
      'Configured core ITSM modules, built automation with Client Scripts/Business Rules/Flow Designer, and integrated ServiceNow with Microsoft Entra ID (Azure AD).',
    impact: [
      'Reduced manual effort by 30-40% through IAM workflow automation',
      'Improved SLA compliance and incident resolution performance',
      'Enabled automated provisioning via Azure AD integration',
    ],
    stack: ['ServiceNow', 'Flow Designer', 'Glide API', 'JavaScript', 'REST/SOAP', 'Azure AD'],
  },
  {
    company: 'Deluxe',
    logo: deluxeLogo,
    role: 'ServiceNow Administrator / Developer',
    period: 'Aug 2016 - Sep 2017',
    title: 'CMDB Governance, Catalog Engineering And Security Operations',
    image: deluxeImg,
    context: 'Deluxe needed stronger governance and data quality within their CMDB while scaling their service catalog for global IT support.',
    challenge:
      'Strengthen CMDB data quality and role-based controls while scaling service catalog, onboarding/offboarding, and global IT support processes.',
    contribution:
      'Implemented Discovery remediation, transform scripts, custom workflows, portal enhancements, and ACL governance across ITSM and custom apps.',
    impact: [
      'Improved CMDB data integrity through normalization and reconciliation',
      'Reduced service desk load with stronger self-service experiences',
      'Improved release stability with stronger regression and deployment practices',
    ],
    stack: ['CMDB', 'Discovery', 'Service Catalog', 'ACLs', 'Import Sets', 'Script Includes'],
  },
  {
    company: 'General Electronics',
    logo: geLogo,
    role: 'UX/UI Developer',
    period: 'Mar 2016 - Jul 2016',
    title: 'Responsive Frontend Engineering And UX Delivery',
    image: frontendImg,
    context: 'General Electronics aimed to modernize their web products with responsive, maintainable user interfaces using Agile methodologies.',
    challenge:
      'Build responsive, maintainable user interfaces quickly while supporting iterative design feedback in Agile teams.',
    contribution:
      'Developed AngularJS-based SPAs, implemented form validations and custom interactions, and translated design artifacts into production UI.',
    impact: [
      'Improved usability through iterative UX testing and refinements',
      'Delivered responsive cross-browser interfaces for web products',
      'Established reusable UI patterns that accelerated delivery',
    ],
    stack: ['AngularJS', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Figma'],
  },
  {
    company: 'Billboards India Advertising',
    logo: billboardsLogo,
    role: 'UX Designer',
    period: 'Sep 2013 - Aug 2014',
    title: 'Digital Advertising Workflow Automation',
    image: worldBankImg,
    context: 'Billboards India aimed to automate their digital advertising workflows to improve efficiency and reduce manual errors.',
    challenge:
      'Automate digital advertising workflows while ensuring high data accuracy and performance.',
    contribution:
      'Designed and developed custom automation tools for ad placement and performance tracking.',
    impact: [
      'Increased operational efficiency by 50%',
      'Reduced ad placement errors by 80%',
      'Improved real-time reporting capabilities',
    ],
    stack: ['UX Design', 'Automation', 'JavaScript', 'HTML5', 'CSS3'],
  },
];

const Home = () => {
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
    <div className="min-h-screen bg-black text-white font-body selection:bg-white selection:text-black">

      {/* --- HERO SECTION --- */}
      <section className="relative w-full bg-[#110705] text-[#f4f3ef] pt-32 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px]">

          {/* Main Hero Image Container */}
          <div className="reveal reveal-img relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-16 shadow-2xl">
            <img
              src={heroImage}
              alt="Saxon Palle"
              className="absolute inset-0 h-full w-full object-cover object-center brightness-75"
            />
            {/* Overlay Text on Image */}
            <div className="absolute bottom-4 left-6 md:bottom-16 md:left-16 max-w-2xl">
              <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.1] text-white drop-shadow-lg">
                Ambiguity to Action — <br />
                Through Automation.
              </h1>
            </div>
          </div>

          {/* Intro Text & Watermark */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
            <div className="lg:col-span-7 z-10">
              <p className="text-xl md:text-3xl lg:text-4xl font-body font-medium leading-relaxed mb-10 reveal stagger-1 text-white">
                Hello! I am Saxon. I help transform complex enterprise workflows and abstract operational hurdles into scalable and reliable automated systems.
              </p>
              <p className="text-lg md:text-xl font-body text-gray-200 leading-relaxed reveal stagger-2">
                At ServiceNow, I am leading the vision of AI-charged automation for enterprise platforms used by global institutions — and I'm excited about how AI and automated workflows are reshaping the way we solve complex problems.
              </p>
            </div>

            {/* Large Watermark Typography */}
            <div className="absolute right-0 top-0 lg:col-span-5 flex justify-end select-none pointer-events-none opacity-20">
              <span className="font-display font-bold text-[120px] md:text-[180px] lg:text-[250px] leading-none text-[#5d3a3a] tracking-tighter">
                SP
              </span>
            </div>
          </div>

          {/* Meta Details */}
          <div className="flex flex-col gap-3 mb-24 reveal stagger-3">
            <div className="flex items-center gap-4">
              <p className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-gray-300 font-bold min-w-[100px]">Current:</p>
              <p className="text-sm md:text-lg font-mono uppercase tracking-widest text-white">The World Bank Group</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-gray-300 font-bold min-w-[100px]">Role:</p>
              <p className="text-sm md:text-lg font-mono uppercase tracking-widest text-white">Sr. ServiceNow Developer</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-gray-300 font-bold min-w-[100px]">Locations:</p>
              <p className="text-sm md:text-lg font-mono uppercase tracking-widest text-white">Washington, D.C.</p>
            </div>
          </div>

          {/* Section Divider / Label */}
          <div className="flex justify-center items-center gap-4 py-12 border-t border-white/5 reveal stagger-4">
            <span className="font-display text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/40 flex items-center gap-4">
              ~~ SELECTED WORK ~~ 2018 - PRESENT ~~
            </span>
          </div>

        </div>
      </section>

      {/* --- CASE STUDIES --- */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-32 bg-white text-black">
        <div className="mx-auto w-full max-w-[1400px] space-y-48">
          {caseStudies.map((study, index) => (
            <article key={index} className="reveal group">
              {/* Project Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12 border-b border-black/10 pb-12">
                <div className="lg:max-w-4xl">
                  {/* Logo + Company */}
                  <div className="flex items-center gap-5 mb-4">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center overflow-hidden border border-black/10 shadow-sm shrink-0">
                      <img src={study.logo} alt={study.company} className="w-full h-full object-contain p-1.5" />
                    </div>
                    <span className="font-display font-bold text-2xl md:text-4xl uppercase tracking-tighter text-black">
                      {study.company}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 mb-6 block font-bold">
                    {study.period}
                  </span>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold uppercase tracking-tighter leading-[1] text-black mt-4">
                    {study.title}
                  </h2>
                </div>
                <div className="hidden lg:block lg:min-w-[200px] mt-12">
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-black font-bold flex flex-col gap-1.5 leading-relaxed">
                    <span className="text-gray-500 tracking-[0.3em]">ROLE:</span> 
                    {study.role}
                  </span>
                </div>
              </div>

              {/* Project Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
                {/* Text Context */}
                <div className="lg:col-span-8 space-y-12">
                  <div className="space-y-6">
                    <h3 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">Context & Challenge</h3>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed font-light">
                      {study.context} {study.challenge}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
                    <div className="space-y-6">
                      <h3 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">My Role</h3>
                      <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium">
                        {study.contribution}
                      </p>
                    </div>
                    <div className="space-y-6">
                      <h3 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">Impact</h3>
                      <ul className="space-y-3">
                        {study.impact.map((point, i) => (
                          <li key={i} className="text-sm md:text-base text-gray-800 flex gap-3 font-medium">
                            <span className="text-gray-500 font-bold">—</span> {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Column - Styled as a Sidebar */}
                <div className="lg:col-span-4">
                  <div className="bg-gray-50 p-8 rounded-md h-full flex flex-col border border-black/5 space-y-8">
                    <h3 className="font-mono font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.stack.map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-black/5 border border-black/10 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-widest text-black">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Image */}
              <div className="reveal reveal-img relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-md bg-gray-100 shadow-xl mb-16">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Call to Action */}
              <div className="flex justify-center pb-24">
                <a
                  href={`mailto:saxonpalle15@gmail.com?subject=Enquiry: ${study.company}`}
                  className="px-12 py-5 rounded-full border border-[#2d110d] text-[#2d110d] font-display font-bold text-xs md:text-sm tracking-[0.3em] uppercase hover:bg-[#2d110d] hover:text-[#f4f3ef] transition-all duration-500 inline-block"
                >
                  Enquire For Case Study
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* --- CONTACT CTA --- */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-24 bg-white border-t border-black/5">
        <div className="mx-auto w-full max-w-[1400px] text-center">
          <p className="reveal font-mono text-sm md:text-base uppercase tracking-[0.3em] text-gray-400 mb-6">Get In Touch</p>
          <h2 className="reveal stagger-1 text-4xl md:text-6xl lg:text-[80px] font-semibold uppercase tracking-tight leading-[1.1] mb-10 text-black">
            Let's build <br />
            <span className="text-gray-400 italic">TOGETHER.</span>
          </h2>
          <a
            href="mailto:saxonpalle15@gmail.com"
            className="reveal stagger-2 px-12 py-5 rounded-full border border-[#2d110d] text-[#2d110d] font-display font-bold text-xs md:text-sm tracking-[0.3em] uppercase hover:bg-[#2d110d] hover:text-[#f4f3ef] transition-all duration-500 inline-block mt-4"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

