import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, GraduationCap } from 'lucide-react';
import { Button, Input } from '../../components/common';

/**
 * LoginPage — email + password form (UI only, no backend auth yet).
 */
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend auth
    console.log('Login submitted:', { email });
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100dvh-12rem)] px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mx-auto mb-4 shadow-lg">
            <GraduationCap size={28} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold font-display text-text-primary dark:text-text-inverse">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-text-secondary dark:text-gray-400">
            Sign in to your UWU account
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-background-paper dark:bg-surface-dark rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Email Address"
              type="email"
              placeholder="your.name@uwu.ac.lk"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              startIcon={<Mail size={18} />}
              required
            />
            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              startIcon={<Lock size={18} />}
              endIcon={
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-text-disabled hover:text-text-secondary transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              }
              required
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-text-secondary dark:text-gray-400 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary/50"
                />
                Remember me
              </label>
              <a
                href="#"
                className="text-primary dark:text-primary-light hover:underline font-medium"
              >
                Forgot password?
              </a>
            </div>

            <Button type="submit" fullWidth size="md">
              Sign In
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-text-secondary dark:text-gray-400">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="text-primary dark:text-primary-light hover:underline font-medium"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
