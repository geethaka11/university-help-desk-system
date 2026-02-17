import {
  GraduationCap,
  Brain,
  Users,
  Shield,
  Clock,
  Database,
  Lightbulb,
  MapPin,
  Landmark,
  Sprout,
  Award,
} from 'lucide-react';

const pillars = [
  {
    icon: Brain,
    title: 'AI-Powered Understanding',
    description:
      'Our system uses Retrieval-Augmented Generation (RAG) to understand your questions in natural language and find the most relevant answers from the university knowledge base.',
  },
  {
    icon: Database,
    title: 'Comprehensive Knowledge Base',
    description:
      'Built from official university documents including circulars, policy documents, application forms, and administrative guidelines — always up to date.',
  },
  {
    icon: Shield,
    title: 'Role-Based Access',
    description:
      'Different access levels for the public, students, and staff. Authenticated users get access to more detailed and sensitive information relevant to their role.',
  },
  {
    icon: Clock,
    title: 'Available 24/7',
    description:
      'Unlike traditional help desks with limited operating hours, our AI assistant is available around the clock, whenever you need help.',
  },
];

const faculties = [
  {
    name: 'Animal Science & Export Agriculture',
    departments: [
      'Animal Science',
      'Export Agriculture',
      'Aquatic Resources Technology',
    ],
  },
  {
    name: 'Applied Sciences',
    departments: [
      'Applied Earth Sciences',
      'Computer Science & Informatics',
      'Science & Technology',
    ],
  },
  {
    name: 'Management',
    departments: [
      'Management Sciences',
      'Public Administration',
      'Tourism Studies',
      'English Language Teaching',
    ],
  },
  {
    name: 'Technological Studies',
    departments: [
      'Biosystems Technology',
      'Engineering Technology',
      'ICT',
    ],
  },
  {
    name: 'Medicine',
    departments: ['MBBS Programme'],
  },
];

const universityStats = [
  { icon: Landmark, label: 'Established', value: '2005' },
  { icon: GraduationCap, label: 'Faculties', value: '5' },
  { icon: Users, label: 'Students', value: '3,000+' },
  { icon: MapPin, label: 'Campus', value: '35 Acres' },
  { icon: Sprout, label: 'UG Programs', value: '13+' },
  { icon: Award, label: 'National Rank', value: '14th University' },
];

/**
 * AboutPage — explains the university, the system, technology, and team.
 */
const AboutPage = () => {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary-light blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6">
            <GraduationCap size={16} /> Uva Wellassa University
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            About the Help Desk
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            An AI-powered platform designed to make university information
            accessible and easy to find for students, staff, and the public.
          </p>
        </div>
      </section>

      {/* ── University Overview ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-3">
            Uva Wellassa University of Sri Lanka
          </h2>
          <p className="text-text-secondary dark:text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Established on 1 July 2005, Uva Wellassa University is Sri Lanka's
            14th national university and the nation's first all-entrepreneurial
            institution. Located on a scenic 35-acre campus along Passara Road,
            Badulla, UWU operates under the motto{' '}
            <span className="font-semibold italic">"Centre of Excellence for Value Addition"</span>.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {universityStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-background-paper dark:bg-surface-dark p-4 text-center"
            >
              <stat.icon
                size={22}
                className="mx-auto mb-2 text-primary dark:text-primary-light"
              />
              <p className="text-xl font-bold font-display">{stat.value}</p>
              <p className="text-xs text-text-secondary dark:text-gray-400 mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Faculties ── */}
      <section className="bg-gray-50 dark:bg-surface-dark py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-3">Five Faculties</h2>
            <p className="text-text-secondary dark:text-gray-400 max-w-lg mx-auto text-sm">
              UWU is organised into five faculties covering science, technology,
              management, agriculture, and medicine.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {faculties.map((fac) => (
              <div
                key={fac.name}
                className="bg-background-paper dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                  <GraduationCap size={20} className="text-secondary" />
                </div>
                <h3 className="font-bold text-sm mb-3">{fac.name}</h3>
                <ul className="space-y-1.5">
                  {fac.departments.map((dept) => (
                    <li
                      key={dept}
                      className="flex items-center gap-2 text-xs text-text-secondary dark:text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary/60 shrink-0" />
                      {dept}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-display mb-4">Our Mission</h2>
            <p className="text-text-secondary dark:text-gray-400 leading-relaxed mb-4">
              The traditional university help desk often struggles with long wait
              times, limited operating hours, and inconsistent answers. Students
              frequently have to visit multiple offices just to get simple
              information.
            </p>
            <p className="text-text-secondary dark:text-gray-400 leading-relaxed">
              We built this AI-powered help desk to change that. By digitizing
              university knowledge and pairing it with modern AI, we provide
              instant, accurate, and consistent answers — any time, anywhere.
            </p>
          </div>
          <div className="bg-primary/5 dark:bg-primary-light/5 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="text-secondary" size={28} />
              <h3 className="text-xl font-bold">How It Works</h3>
            </div>
            <ol className="space-y-4 text-sm text-text-secondary dark:text-gray-400">
              {[
                'You type a question in natural language.',
                'The system searches university documents using hybrid search (semantic + keyword).',
                'Retrieved documents are fed to a large language model for summarization and answer generation.',
                'You get a clear, accurate answer grounded in official university sources.',
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Key Features ── */}
      <section className="bg-gray-50 dark:bg-surface-dark py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-3">Key Features</h2>
            <p className="text-text-secondary dark:text-gray-400 max-w-lg mx-auto text-sm">
              What makes our help desk different from a simple FAQ or chatbot.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="bg-background-paper dark:bg-background-dark rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-primary dark:text-primary-light" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold font-display mb-3">The Team</h2>
          <p className="text-text-secondary dark:text-gray-400 text-sm max-w-lg mx-auto mb-10">
            A research project by the Faculty of Technological Studies, Uva
            Wellassa University.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { role: 'Project Supervisor', name: 'Faculty Advisor' },
              { role: 'Lead Developer', name: 'ICT Undergraduate' },
              { role: 'Knowledge Curation', name: 'Admin Staff' },
            ].map((member) => (
              <div
                key={member.role}
                className="bg-background-paper dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-700 px-8 py-6 min-w-[200px]"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center mx-auto mb-3">
                  <Users size={22} className="text-primary dark:text-primary-light" />
                </div>
                <p className="font-bold text-sm">{member.name}</p>
                <p className="text-xs text-text-secondary dark:text-gray-400 mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
