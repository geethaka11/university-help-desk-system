import { useState, useRef, useEffect, useCallback, type FormEvent } from 'react';
import {
  Send,
  Bot,
  User,
  Sparkles,
  Info,
  GraduationCap,
  FileText,
  Home,
  MapPin,
  Landmark,
  Star,
  type LucideIcon,
} from 'lucide-react';
import { Loader } from '../../components/common';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const suggestions: { text: string; icon: LucideIcon }[] = [
  { text: 'What degree programs does UWU offer?', icon: GraduationCap },
  { text: 'How do I apply for admission?', icon: FileText },
  { text: 'What are the hostel facilities?', icon: Home },
  { text: 'Where is the university located?', icon: MapPin },
  { text: 'Tell me about the faculties', icon: Landmark },
  { text: 'What is the university motto?', icon: Star },
];

/**
 * ChatPage — public AI chatbot interface.
 * Currently uses a mock response. Will connect to the RAG backend later.
 */
const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idCounterRef = useRef(0);

  // Scroll only the messages container (not the entire page)
  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages, isTyping]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const addMessage = useCallback((role: Message['role'], content: string) => {
    idCounterRef.current += 1;
    const msg: Message = {
      id: `msg-${idCounterRef.current}`,
      role,
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, msg]);
    return msg;
  }, []);

  const simulateResponse = async (userMessage: string) => {
    setIsTyping(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsTyping(false);

    const lowerMsg = userMessage.toLowerCase();
    let response: string;

    if (lowerMsg.includes('degree') || lowerMsg.includes('program')) {
      response =
        'Uva Wellassa University offers 13+ undergraduate programs across 5 faculties:\n\n• **Animal Science & Export Agriculture** — Aquatic Resources, Animal Production & Food Tech, Export Agriculture, Palm & Latex Technology, Tea Technology\n• **Applied Sciences** — Water Science, Mineral Resources, Computer Science, Industrial IT, Science & Technology\n• **Management** — Entrepreneurship, HRD, Hospitality & Tourism, English Language & Linguistics\n• **Technological Studies** — Biosystems Technology, Engineering Technology, ICT\n• **Medicine** — MBBS\n\nAdmissions are handled through the UGC based on GCE A/L results.';
    } else if (lowerMsg.includes('admission') || lowerMsg.includes('apply')) {
      response =
        'Admissions to UWU are handled through the University Grants Commission (UGC). Students are selected based on GCE A/L results. The process typically follows the national university admission cycle.\n\nFor detailed admission criteria, cutoff marks, and deadlines, please refer to the UGC handbook or contact the university registrar at info@uwu.ac.lk.';
    } else if (lowerMsg.includes('hostel') || lowerMsg.includes('accommodation')) {
      response =
        'UWU provides hostel accommodation primarily for 1st, 3rd, and 4th year students. In 2020, approximately 1,755 students were accommodated using both university-owned and rented facilities.\n\n• **On-campus hostels**: Rs. 5,000 per year\n• **Rented facilities**: Rs. 3,500 per year\n\nAllocation is based on distance from the university. For hostel rules and application forms, contact the Student Affairs division.';
    } else if (lowerMsg.includes('location') || lowerMsg.includes('where')) {
      response =
        'Uva Wellassa University is located along **Passara Road, Badulla 90000, Sri Lanka**. The campus occupies 35 acres in the scenic Uva Province, surrounded by mountains and tea plantations.\n\n📞 Phone: +94 55 222 6100\n📧 Email: info@uwu.ac.lk\n🌐 Website: www.uwu.ac.lk';
    } else if (lowerMsg.includes('facult')) {
      response =
        'UWU has 5 faculties:\n\n1. **Faculty of Animal Science & Export Agriculture** — Departments of Animal Science and Export Agriculture\n2. **Faculty of Applied Sciences** — Departments of Applied Earth Sciences, Computer Science & Informatics, and Science & Technology\n3. **Faculty of Management** — Departments of Management Sciences, Public Administration, Tourism Studies, and English Language Teaching\n4. **Faculty of Technological Studies** — Departments of Biosystems Technology, Engineering Technology, and ICT\n5. **Faculty of Medicine** — MBBS program';
    } else if (lowerMsg.includes('motto') || lowerMsg.includes('vision')) {
      response =
        'The motto of Uva Wellassa University is **"Centre of Excellence for Value Addition"**.\n\nUWU is known as Sri Lanka\'s first all-entrepreneurial university, focusing on producing graduates with entrepreneurial skills alongside academic excellence.';
    } else {
      response = `Thank you for your question. This is a demo response — once connected to the RAG backend, I'll provide accurate answers sourced directly from official university documents.\n\nIn the meantime, try asking about:\n• Degree programs and faculties\n• Admission process\n• Hostel facilities\n• University location and contact info`;
    }

    addMessage('assistant', response);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    addMessage('user', trimmed);
    setInput('');
    simulateResponse(trimmed);
  };

  const handleSuggestion = (text: string) => {
    if (isTyping) return;
    addMessage('user', text);
    simulateResponse(text);
  };

  const formatMessage = (text: string) => {
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {i > 0 && <br />}
        {line.split(/(\*\*.*?\*\*)/).map((part, j) =>
          part.startsWith('**') && part.endsWith('**') ? (
            <strong key={j} className="font-semibold">
              {part.slice(2, -2)}
            </strong>
          ) : (
            part
          )
        )}
      </span>
    ));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div
        className="flex flex-col"
        style={{ height: 'calc(100dvh - 8rem)' }}
      >
        {/* ── Messages Area ── */}
        <div
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto py-6 space-y-5 min-h-0 scroll-smooth"
        >
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary-light/10 dark:to-secondary/10 flex items-center justify-center mb-5">
                <Sparkles size={30} className="text-primary dark:text-primary-light" />
              </div>
              <h2 className="text-xl font-bold font-display mb-2">
                How can I help you today?
              </h2>
              <p className="text-sm text-text-secondary dark:text-gray-400 max-w-md mb-8">
                Ask me anything about Uva Wellassa University — admissions,
                programs, facilities, or campus life.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-2xl w-full">
                {suggestions.map(({ text, icon: Icon }) => (
                  <button
                    key={text}
                    type="button"
                    onClick={() => handleSuggestion(text)}
                    className="text-left px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-background-paper dark:bg-surface-dark text-sm hover:border-primary/50 dark:hover:border-primary-light/50 hover:shadow-sm transition-all duration-200 group"
                  >
                    <Icon size={18} className="mb-1 text-primary dark:text-primary-light" />
                    <span className="text-text-secondary dark:text-gray-400 group-hover:text-text-primary dark:group-hover:text-text-inverse transition-colors">
                      {text}
                    </span>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex items-start gap-2.5 max-w-lg bg-primary/5 dark:bg-primary-light/5 rounded-xl px-4 py-3 text-left">
                <Info size={16} className="text-primary dark:text-primary-light shrink-0 mt-0.5" />
                <p className="text-xs text-text-secondary dark:text-gray-400 leading-relaxed">
                  This is a public demo. Log in with your university account to
                  access student-specific information like exam schedules, internal
                  circulars, and application forms.
                </p>
              </div>
            </div>
          ) : (
            <>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Bot size={15} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-primary text-white rounded-br-md'
                        : 'bg-gray-100 dark:bg-surface-dark rounded-bl-md'
                    }`}
                  >
                    {formatMessage(msg.content)}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <User size={15} className="text-white" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shrink-0 shadow-sm">
                    <Bot size={15} className="text-white" />
                  </div>
                  <div className="bg-gray-100 dark:bg-surface-dark rounded-2xl rounded-bl-md px-4 py-3">
                    <Loader size="sm" />
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* ── Input Bar ── */}
        <div className="shrink-0 py-4 border-t border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about UWU — programs, admissions, facilities..."
              disabled={isTyping}
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-background-paper dark:bg-surface-dark text-text-primary dark:text-text-inverse placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-primary-light/40 focus:border-transparent transition-all duration-200 text-sm"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="px-4 py-3 rounded-xl bg-primary text-white hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shrink-0 shadow-sm hover:shadow"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>
          <p className="text-[11px] text-text-disabled text-center mt-2">
            Public mode · For student-specific queries, please{' '}
            <a href="/login" className="text-primary dark:text-primary-light hover:underline">
              log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
