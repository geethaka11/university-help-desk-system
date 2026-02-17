import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Zap,
  Shield,
  Clock,
  BookOpen,
  ArrowRight,
  Search,
  Bot,
  User,
  GraduationCap,
} from 'lucide-react';
import { Button } from '../../components/common';

const features = [
  {
    icon: MessageSquare,
    title: 'AI-Powered Chat',
    description:
      'Get instant answers to your academic and administrative queries using our advanced RAG-based AI assistant.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description:
      'Access support anytime — no more waiting for office hours. Our AI assistant is always ready to help.',
  },
  {
    icon: Shield,
    title: 'Role-Based Access',
    description:
      'Secure information delivery. Students and staff see only the data relevant to their role.',
  },
  {
    icon: Search,
    title: 'Hybrid Search',
    description:
      'Combines semantic understanding with keyword precision to find exact circulars, by-laws, and documents.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base',
    description:
      'Built from official university documents — handbooks, exam by-laws, circulars, and administrative guidelines.',
  },
  {
    icon: Zap,
    title: 'Instant Updates',
    description:
      'Staff can upload new documents and the system updates instantly — no retraining required.',
  },
];

const stats = [
  { value: '24/7', label: 'Available', numeric: null },
  { value: '5', label: 'Faculties Covered', numeric: 5, suffix: '' },
  { value: '<2s', label: 'Response Time', numeric: 2, prefix: '<', suffix: 's' },
  { value: '3000+', label: 'Students Served', numeric: 3000, suffix: '+' },
];

/** Hook that animates a counter from 0 to `end` when the element is in view */
const useCountUp = (end: number | null, duration = 1800) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current || end === null) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, started]);

  useEffect(() => {
    if (!started || end === null) return;
    const startTime = performance.now();
    let raf: number;
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration]);

  return { ref, count };
};

/** Single animated stat cell */
const AnimatedStat = ({ stat }: { stat: typeof stats[number] }) => {
  const { ref, count } = useCountUp(stat.numeric);

  const displayValue = stat.numeric === null
    ? stat.value
    : `${stat.prefix ?? ''}${count.toLocaleString()}${stat.suffix ?? ''}`;

  return (
    <div>
      <p ref={ref} className="text-2xl sm:text-3xl font-bold text-primary dark:text-secondary-light">
        {displayValue}
      </p>
      <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">{stat.label}</p>
    </div>
  );
};

/** Fake chat preview for the hero section */
const chatPreview = [
  { role: 'user' as const, text: 'What degree programs does UWU offer?' },
  {
    role: 'bot' as const,
    text: 'UWU offers programs across 5 faculties: Animal Science & Export Agriculture, Applied Sciences, Management, Technological Studies, and Medicine. There are 13+ undergraduate programs available.',
  },
  { role: 'user' as const, text: 'How do I apply for hostel?' },
];

/**
 * LandingPage — public homepage with hero, features, stats, and CTA.
 */
const LandingPage = () => {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════ */}
      {/*  HERO                                                       */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[calc(100dvh-4rem)]">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
        {/* Decorative elements */}
        <div className="absolute top-20 -left-32 w-80 h-80 rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-primary-light/10 blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 min-h-[calc(100dvh-4rem)] flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/15 text-secondary-light mb-6 backdrop-blur-md border border-white/20 shadow-lg">
                <Zap size={14} />
                Powered by RAG AI
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold font-display text-white leading-[1.15]">
                Your University{' '}
                <span className="text-secondary-light">Help&nbsp;Desk,</span>{' '}
                Reimagined.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">
                Get instant, accurate answers to your academic and administrative
                questions — powered by AI that understands Uva Wellassa University
                documents.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/chat">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold bg-white/15 text-white backdrop-blur-md border border-white/25 shadow-lg hover:bg-white/25 hover:shadow-xl transition-all duration-200"
                  >
                    <MessageSquare size={18} />
                    Start Chatting
                  </button>
                </Link>
                <Link to="/about">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold bg-white/5 text-white/90 backdrop-blur-md border border-white/15 hover:bg-white/15 hover:text-white transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right — Chat Preview Mockup */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 p-1 shadow-2xl">
                {/* Mock window bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-white/20" />
                    <span className="w-3 h-3 rounded-full bg-white/20" />
                    <span className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-2 text-xs text-white/50">
                    <Bot size={14} />
                    UWU AI Assistant
                  </div>
                </div>
                {/* Mock messages */}
                <div className="p-4 space-y-3">
                  {chatPreview.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.role === 'bot' && (
                        <div className="w-7 h-7 rounded-full bg-secondary/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Bot size={14} className="text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-xl px-3.5 py-2.5 text-xs leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-white/20 text-white rounded-br-sm'
                            : 'bg-white/10 text-white/90 rounded-bl-sm'
                        }`}
                      >
                        {msg.text}
                      </div>
                      {msg.role === 'user' && (
                        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                          <User size={14} className="text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                  {/* Typing indicator */}
                  <div className="flex gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
                      <Bot size={14} className="text-white" />
                    </div>
                    <div className="bg-white/10 rounded-xl rounded-bl-sm px-3.5 py-2.5 flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
                {/* Mock input */}
                <div className="px-4 pb-4">
                  <div className="flex gap-2 bg-white/10 rounded-xl px-3.5 py-2.5">
                    <span className="flex-1 text-xs text-white/40">Type your question...</span>
                    <ArrowRight size={14} className="text-white/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/*  STATS BAR                                                  */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section className="bg-background-paper dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/*  ABOUT UWU BRIEF                                            */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-secondary-dark dark:text-secondary-light mb-4">
                <GraduationCap size={18} />
                About the University
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
                Uva Wellassa University
              </h2>
              <p className="text-text-secondary dark:text-gray-400 leading-relaxed mb-4">
                Established in 2005, Uva Wellassa University (UWU) is the 14th national
                university in Sri Lanka, located in Badulla in the scenic Uva Province.
                Known as the country's first all-entrepreneurial university, UWU serves
                over 3,000 students across 5 faculties.
              </p>
              <p className="text-text-secondary dark:text-gray-400 leading-relaxed mb-6">
                Our AI Help Desk brings the university's knowledge — circulars, policies,
                forms, and guides — to your fingertips through intelligent conversation.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary dark:text-primary-light hover:underline"
              >
                Learn more about the project
                <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Founded', value: '2005' },
                { label: 'Faculties', value: '5' },
                { label: 'Students', value: '3,000+' },
                { label: 'Campus', value: '35 Acres' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-background-paper dark:bg-background-dark rounded-xl p-5 border border-gray-200 dark:border-gray-700 text-center"
                >
                  <p className="text-2xl font-bold text-primary dark:text-primary-light">
                    {item.value}
                  </p>
                  <p className="text-xs text-text-secondary dark:text-gray-400 mt-1 font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/*  FEATURES                                                   */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold font-display">
            Why Use UWU Help Desk?
          </h2>
          <p className="mt-4 text-text-secondary dark:text-gray-400 max-w-2xl mx-auto">
            Built specifically for Uva Wellassa University — combining the latest
            in AI technology with your official university knowledge base.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-background-paper dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 dark:group-hover:bg-primary-light/15 transition-colors">
                <Icon size={22} className="text-primary dark:text-primary-light" />
              </div>
              <h3 className="text-base font-semibold mb-2">{title}</h3>
              <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/*  CTA                                                        */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            No login required for general inquiries. Just start a conversation
            and get the answers you need.
          </p>
          <Link to="/chat">
            <Button size="lg" variant="secondary" className="shadow-lg" startIcon={<MessageSquare size={18} />}>
              Try the AI Chat
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
