import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: 'General',
    items: [
      {
        question: 'What is the UWU AI Help Desk?',
        answer:
          'It is an AI-powered virtual assistant that answers questions about Uva Wellassa University using a Retrieval-Augmented Generation (RAG) system. It draws from official university documents, circulars, and policy guides to give you accurate and up-to-date information.',
      },
      {
        question: 'Is the help desk free to use?',
        answer:
          'Yes, the public chat is completely free. Anyone can ask general questions about the university without creating an account.',
      },
      {
        question: 'Do I need to create an account?',
        answer:
          'No account is needed for general queries. However, if you are a registered student or staff member, logging in gives you access to role-specific information such as exam schedules, internal circulars, and personalised documents.',
      },
    ],
  },
  {
    title: 'Using the Chat',
    items: [
      {
        question: 'What kind of questions can I ask?',
        answer:
          'You can ask about degree programs, admissions, hostel facilities, university policies, application procedures, contact details, and much more. The system covers information available in official university documents.',
      },
      {
        question: 'How accurate are the responses?',
        answer:
          'Responses are generated from verified university documents and grounded in factual sources. The AI may occasionally paraphrase, but it always references the source material. If the system is unsure, it will let you know.',
      },
      {
        question: 'Can I ask questions in Sinhala or Tamil?',
        answer:
          'Currently, the system is optimised for English queries as most university documents are in English. Multilingual support is planned for a future update.',
      },
      {
        question: 'What happens if the AI doesn\'t know the answer?',
        answer:
          'If the AI cannot find relevant information in the knowledge base, it will tell you honestly and suggest contacting the relevant university office directly.',
      },
    ],
  },
  {
    title: 'Accounts & Access',
    items: [
      {
        question: 'How do I register as a student?',
        answer:
          'Click the "Register" button at the top of the page and fill in your university email address and other details. Your account will need to be verified before you can access student-specific features.',
      },
      {
        question: 'I forgot my password. What should I do?',
        answer:
          'Click "Forgot Password?" on the login page and enter your registered email. You will receive a password reset link in your inbox.',
      },
      {
        question: 'What extra features do students get?',
        answer:
          'Authenticated students can access internal circulars, exam-related information, application forms, loan details, and other restricted documents that are not available to the public.',
      },
    ],
  },
  {
    title: 'Technical',
    items: [
      {
        question: 'Which browsers are supported?',
        answer:
          'The system works on all modern browsers including Chrome, Firefox, Safari, and Edge (latest two major versions).',
      },
      {
        question: 'Is my data private?',
        answer:
          'Yes. Chat messages are processed to generate answers but are not shared with third parties. We follow university data-protection policies and do not store personal information beyond what is required for account management.',
      },
      {
        question: 'How is the knowledge base updated?',
        answer:
          'University administrators can upload new documents and circulars through the admin dashboard. These are automatically processed and indexed so the AI can reference them in future responses.',
      },
    ],
  },
];

const Accordion = ({ item }: { item: FAQItem }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-background-paper dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="font-medium text-sm">{item.question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-text-secondary transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 pt-0 text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * FAQPage — Frequently Asked Questions organised by category.
 */
const FAQPage = () => {
  return (
    <div>
      {/* ── Header ── */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5">
            <HelpCircle size={30} />
          </div>
          <h1 className="text-4xl font-bold font-display mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-white/80">
            Find quick answers to common questions about the UWU Help Desk system.
          </p>
        </div>
      </section>

      {/* ── FAQ Sections ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="space-y-10">
          {faqData.map((category) => (
            <div key={category.title}>
              <h2 className="text-xl font-bold font-display mb-4">
                {category.title}
              </h2>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <Accordion key={item.question} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Still have questions CTA ── */}
      <section className="bg-gray-50 dark:bg-surface-dark py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold font-display mb-3">
            Still have questions?
          </h2>
          <p className="text-sm text-text-secondary dark:text-gray-400 mb-6">
            Try the AI chatbot or reach out to the university directly.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/chat"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary-dark transition-colors duration-200"
            >
              Try the AI Chat
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
