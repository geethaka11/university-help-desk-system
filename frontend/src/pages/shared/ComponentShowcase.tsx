/**
 * Component Showcase - UWU Design System
 *
 * Visual preview of all UI components, theme colors, typography,
 * spacing, and shadows. Use this page during development to verify
 * the design system works correctly in both light and dark modes.
 */

import { useState } from 'react';
import { Search, Mail, Lock, Send, Trash2, Check, AlertCircle, Star } from 'lucide-react';
import {
  Button,
  Input,
  Card,
  Loader,
  Avatar,
  Badge,
  ThemeToggle,
} from '../../components/common';

/* ------------------------------------------------------------------ */
/*  Section wrapper                                                    */
/* ------------------------------------------------------------------ */
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold text-text-primary dark:text-text-inverse mb-8 pb-3 border-b-2 border-primary">
      {title}
    </h2>
    {children}
  </section>
);

/* ------------------------------------------------------------------ */
/*  Color swatch                                                       */
/* ------------------------------------------------------------------ */
const Swatch = ({ name, bg, textColor = 'text-white' }: { name: string; bg: string; textColor?: string }) => (
  <div className={`${bg} ${textColor} rounded-lg p-4 text-sm font-medium shadow-sm flex flex-col items-center justify-center min-h-[80px]`}>
    {name}
  </div>
);



/* ------------------------------------------------------------------ */
/*  Main Showcase                                                      */
/* ------------------------------------------------------------------ */
const ComponentShowcase = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="min-h-screen font-sans bg-background-default dark:bg-background-dark text-text-primary dark:text-text-inverse transition-colors duration-300">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-background-paper/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <h1 className="text-xl font-bold font-display text-primary dark:text-text-inverse">
          UWU Design System
        </h1>
        <ThemeToggle />
      </header>

      <main className="max-w-6xl mx-auto px-8 lg:px-12 py-12">

        {/* ── THEME COLORS ── */}
        <Section title="Theme Colors">
          <h3 className="text-lg font-semibold mb-4 text-text-secondary dark:text-gray-400">Brand</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            <Swatch name="Primary Light" bg="bg-primary-light" />
            <Swatch name="Primary" bg="bg-primary" />
            <Swatch name="Primary Dark" bg="bg-primary-dark" />
            <Swatch name="Secondary Light" bg="bg-secondary-light" />
            <Swatch name="Secondary" bg="bg-secondary" />
            <Swatch name="Secondary Dark" bg="bg-secondary-dark" />
          </div>

          <h3 className="text-lg font-semibold mb-4 text-text-secondary dark:text-gray-400">Semantic</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
            <Swatch name="Success" bg="bg-success" />
            <Swatch name="Success Light" bg="bg-success-light" textColor="text-gray-800" />
            <Swatch name="Error" bg="bg-error" />
            <Swatch name="Error Light" bg="bg-error-light" />
            <Swatch name="Warning" bg="bg-warning" textColor="text-gray-800" />
            <Swatch name="Warning Light" bg="bg-warning-light" textColor="text-gray-800" />
            <Swatch name="Info" bg="bg-info" />
            <Swatch name="Info Light" bg="bg-info-light" />
          </div>

          <h3 className="text-lg font-semibold mb-4 text-text-secondary dark:text-gray-400">Backgrounds & Text</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            <Swatch name="BG Default" bg="bg-background-default" textColor="text-text-primary" />
            <Swatch name="BG Paper" bg="bg-background-paper" textColor="text-text-primary" />
            <Swatch name="BG Dark" bg="bg-background-dark" textColor="text-text-inverse" />
            <Swatch name="Surface Dark" bg="bg-surface-dark" textColor="text-text-inverse" />
            <div className="bg-background-paper dark:bg-surface-dark rounded-lg p-4 text-sm shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col gap-2">
              <span className="text-text-primary dark:text-text-inverse font-semibold">Text Primary</span>
              <span className="text-text-secondary">Text Secondary</span>
              <span className="text-text-disabled">Text Disabled</span>
            </div>
          </div>
        </Section>

        {/* ── TYPOGRAPHY ── */}
        <Section title="Typography">
          <div className="space-y-5 bg-background-paper dark:bg-surface-dark rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-6xl font-bold font-display">Heading 1 — Montserrat</p>
            <p className="text-5xl font-bold font-display">Heading 2</p>
            <p className="text-4xl font-semibold font-display">Heading 3</p>
            <p className="text-3xl font-semibold">Heading 4</p>
            <p className="text-2xl font-medium">Heading 5</p>
            <p className="text-xl font-medium">Heading 6</p>
            <p className="text-base">Body text — The quick brown fox jumps over the lazy dog.</p>
            <p className="text-sm text-text-secondary">Small / Secondary text — Lorem ipsum dolor sit amet.</p>
            <p className="text-xs text-text-disabled">Caption / Disabled text</p>
          </div>
        </Section>

        {/* ── BUTTONS ── */}
        <Section title="Buttons">
          <h3 className="text-lg font-semibold mb-4 text-text-secondary dark:text-gray-400">Variants</h3>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
            <Button variant="danger">Danger</Button>
          </div>

          <h3 className="text-lg font-semibold mb-4 text-text-secondary dark:text-gray-400">Sizes</h3>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>

          <h3 className="text-lg font-semibold mb-4 text-text-secondary dark:text-gray-400">States</h3>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Button isLoading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button fullWidth variant="secondary">Full Width</Button>
          </div>

          <h3 className="text-lg font-semibold mb-4 text-text-secondary dark:text-gray-400">With Icons</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button startIcon={<Send size={18} />}>Send</Button>
            <Button variant="danger" startIcon={<Trash2 size={18} />}>Delete</Button>
            <Button variant="outlined" endIcon={<Star size={18} />}>Favorite</Button>
          </div>
        </Section>

        {/* ── INPUTS ── */}
        <Section title="Inputs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <Input
              label="Default Input"
              placeholder="Type something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Input
              label="With Helper Text"
              placeholder="student@uwu.ac.lk"
              helperText="Enter your university email"
              startIcon={<Mail size={18} />}
            />
            <Input
              label="Error State"
              placeholder="Enter password"
              error="Password must be at least 8 characters"
              type="password"
              startIcon={<Lock size={18} />}
            />
            <Input
              label="Success State"
              placeholder="Search..."
              variant="success"
              startIcon={<Search size={18} />}
            />
            <Input label="Small" size="sm" placeholder="Small input" />
            <Input label="Large" size="lg" placeholder="Large input" />
            <Input label="Required Field" required placeholder="This is required" />
            <Input label="Disabled" disabled placeholder="Cannot edit" />
          </div>
        </Section>

        {/* ── CARDS ── */}
        <Section title="Cards">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="default">
              <Card.Header>
                <h3 className="text-lg font-semibold">Default Card</h3>
              </Card.Header>
              <Card.Body>
                <p className="text-text-secondary dark:text-gray-400">
                  This is a default card with a subtle border.
                </p>
              </Card.Body>
              <Card.Footer>
                <Button size="sm" variant="text">Learn More</Button>
              </Card.Footer>
            </Card>

            <Card variant="outlined" hoverable>
              <Card.Header>
                <h3 className="text-lg font-semibold">Outlined + Hoverable</h3>
              </Card.Header>
              <Card.Body>
                <p className="text-text-secondary dark:text-gray-400">
                  Hover over this card to see the lift effect.
                </p>
              </Card.Body>
              <Card.Footer>
                <Button size="sm" variant="outlined">Action</Button>
              </Card.Footer>
            </Card>

            <Card variant="elevated" hoverable clickable>
              <Card.Header>
                <h3 className="text-lg font-semibold">Elevated + Clickable</h3>
              </Card.Header>
              <Card.Body>
                <p className="text-text-secondary dark:text-gray-400">
                  Elevated shadow with hover and click cursor.
                </p>
              </Card.Body>
              <Card.Footer>
                <Button size="sm">Click Me</Button>
              </Card.Footer>
            </Card>
          </div>

          <h3 className="text-lg font-semibold mt-10 mb-4 text-text-secondary dark:text-gray-400">Glass Variant</h3>
          <div className="relative rounded-xl overflow-hidden p-8" style={{ background: 'linear-gradient(135deg, #003366 0%, #009688 50%, #1A5490 100%)' }}>
            <Card variant="glass" hoverable>
              <Card.Header>
                <h3 className="text-lg font-semibold text-white">Glass Card</h3>
              </Card.Header>
              <Card.Body>
                <p className="text-white/80">
                  Frosted glass effect with backdrop blur. Best on gradient or image backgrounds.
                </p>
              </Card.Body>
              <Card.Footer>
                <Button size="sm" variant="outlined" className="border-white/30 text-white hover:bg-white/10">Glass Action</Button>
              </Card.Footer>
            </Card>
          </div>
        </Section>

        {/* ── BADGES ── */}
        <Section title="Badges">
          <h3 className="text-lg font-semibold mb-4 text-text-secondary dark:text-gray-400">Filled</h3>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="neutral">Neutral</Badge>
          </div>

          <h3 className="text-lg font-semibold mb-4 text-text-secondary dark:text-gray-400">Outlined</h3>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Badge variant="primary" outlined>Primary</Badge>
            <Badge variant="success" outlined>Success</Badge>
            <Badge variant="error" outlined>Error</Badge>
            <Badge variant="warning" outlined>Warning</Badge>
          </div>

          <h3 className="text-lg font-semibold mb-4 text-text-secondary dark:text-gray-400">Sizes & Icons</h3>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Badge variant="success" size="sm">Small</Badge>
            <Badge variant="info" size="md">Medium</Badge>
            <Badge variant="primary" size="lg">Large</Badge>
            <Badge variant="success" icon={<Check size={14} />}>Verified</Badge>
            <Badge variant="error" icon={<AlertCircle size={14} />}>Alert</Badge>
          </div>

          <h3 className="text-lg font-semibold mb-4 text-text-secondary dark:text-gray-400">Dot Indicators</h3>
          <div className="flex flex-wrap items-center gap-5">
            <Badge dot variant="success">.</Badge>
            <Badge dot variant="error">.</Badge>
            <Badge dot variant="warning">.</Badge>
            <Badge dot variant="info">.</Badge>
          </div>
        </Section>

        {/* ── AVATARS ── */}
        <Section title="Avatars">
          <h3 className="text-lg font-semibold mb-4 text-text-secondary dark:text-gray-400">Sizes</h3>
          <div className="flex flex-wrap items-end gap-5 mb-8">
            <Avatar name="John Doe" size="xs" />
            <Avatar name="John Doe" size="sm" />
            <Avatar name="John Doe" size="md" />
            <Avatar name="John Doe" size="lg" />
            <Avatar name="John Doe" size="xl" />
          </div>

          <h3 className="text-lg font-semibold mb-4 text-text-secondary dark:text-gray-400">With Status</h3>
          <div className="flex flex-wrap items-center gap-5 mb-8">
            <Avatar name="Alice" size="lg" showStatus status="online" />
            <Avatar name="Bob" size="lg" showStatus status="busy" />
            <Avatar name="Charlie" size="lg" showStatus status="offline" />
          </div>

          <h3 className="text-lg font-semibold mb-4 text-text-secondary dark:text-gray-400">Different Names (color variety)</h3>
          <div className="flex flex-wrap items-center gap-5">
            <Avatar name="Geethaka" size="lg" />
            <Avatar name="Kasun Perera" size="lg" />
            <Avatar name="Nimal Silva" size="lg" />
            <Avatar name="Sanduni" size="lg" />
            <Avatar name="Admin User" size="lg" />
          </div>
        </Section>

        {/* ── LOADER ── */}
        <Section title="Loader — Pulse Ring">
          <div className="flex flex-wrap items-end gap-10">
            {(['sm', 'md', 'lg', 'xl'] as const).map((s) => (
              <div key={s} className="flex flex-col items-center gap-3">
                <Loader size={s} />
                <span className="text-sm text-text-secondary dark:text-gray-400">{s}</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-3">
              <Loader size="lg" text="Loading…" />
            </div>
          </div>
        </Section>

        {/* ── THEME TOGGLE ── */}
        <Section title="Theme Toggle">
          <div className="flex flex-wrap items-center gap-10">
            <div className="flex flex-col items-center gap-3">
              <ThemeToggle size="sm" />
              <span className="text-sm text-text-secondary dark:text-gray-400">Small</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ThemeToggle size="md" />
              <span className="text-sm text-text-secondary dark:text-gray-400">Medium</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ThemeToggle size="lg" />
              <span className="text-sm text-text-secondary dark:text-gray-400">Large</span>
            </div>
          </div>
        </Section>

        {/* ── SHADOWS ── */}
        <Section title="Shadows">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {(['sm', 'DEFAULT', 'md', 'lg', 'xl', 'glass'] as const).map((s) => (
              <div
                key={s}
                className={`
                  bg-background-paper dark:bg-surface-dark
                  rounded-lg p-6 text-center text-sm font-medium
                  ${s === 'DEFAULT' ? 'shadow' : `shadow-${s}`}
                `}
              >
                {s === 'DEFAULT' ? 'default' : s}
              </div>
            ))}
          </div>
        </Section>

        {/* ── SPACING ── */}
        <Section title="Spacing (Tailwind Default · 4px Grid)">
          <div className="space-y-3">
            {[
              { label: '0.5 (2px)', cls: 'w-[2px]' },
              { label: '1 (4px)', cls: 'w-[4px]' },
              { label: '1.5 (6px)', cls: 'w-[6px]' },
              { label: '2 (8px)', cls: 'w-[8px]' },
              { label: '3 (12px)', cls: 'w-[12px]' },
              { label: '4 (16px)', cls: 'w-[16px]' },
              { label: '5 (20px)', cls: 'w-[20px]' },
              { label: '6 (24px)', cls: 'w-[24px]' },
              { label: '8 (32px)', cls: 'w-[32px]' },
              { label: '10 (40px)', cls: 'w-[40px]' },
              { label: '12 (48px)', cls: 'w-[48px]' },
            ].map(({ label, cls }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="text-sm w-24 text-text-secondary dark:text-gray-400">{label}</span>
                <div className={`${cls} h-3 bg-primary rounded-full`} />
              </div>
            ))}
          </div>
        </Section>

        {/* ── BORDER RADIUS ── */}
        <Section title="Border Radius (Tailwind Default)">
          <div className="flex flex-wrap gap-8">
            {[
              { label: 'none (0)', cls: 'rounded-none' },
              { label: 'sm (2px)', cls: 'rounded-sm' },
              { label: 'default (4px)', cls: 'rounded' },
              { label: 'md (6px)', cls: 'rounded-md' },
              { label: 'lg (8px)', cls: 'rounded-lg' },
              { label: 'xl (12px)', cls: 'rounded-xl' },
              { label: '2xl (16px)', cls: 'rounded-2xl' },
              { label: 'full', cls: 'rounded-full' },
            ].map(({ label, cls }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className={`w-16 h-16 bg-primary ${cls}`} />
                <span className="text-xs text-text-secondary dark:text-gray-400">{label}</span>
              </div>
            ))}
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-8 text-center text-sm text-text-secondary dark:text-gray-500 transition-colors duration-300">
        UWU Help Desk Design System — Component Showcase
      </footer>
    </div>
  );
};

export default ComponentShowcase;
