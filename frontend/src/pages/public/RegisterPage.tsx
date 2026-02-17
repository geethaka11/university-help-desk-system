import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, GraduationCap } from 'lucide-react';
import { Button, Input } from '../../components/common';

/**
 * RegisterPage — registration form (UI only, no backend auth yet).
 */
const RegisterPage = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend auth
    console.log('Register submitted:', { email: form.email });
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
            Create Account
          </h1>
          <p className="mt-2 text-sm text-text-secondary dark:text-gray-400">
            Register with your university email to access student resources
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-background-paper dark:bg-surface-dark rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="First Name"
                placeholder="John"
                value={form.firstName}
                onChange={update('firstName')}
                startIcon={<User size={18} />}
                required
              />
              <Input
                label="Last Name"
                placeholder="Doe"
                value={form.lastName}
                onChange={update('lastName')}
                required
              />
            </div>

            <Input
              label="University Email"
              type="email"
              placeholder="your.name@uwu.ac.lk"
              value={form.email}
              onChange={update('email')}
              startIcon={<Mail size={18} />}
              helperText="Use your official @uwu.ac.lk email address"
              required
            />

            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a strong password"
              value={form.password}
              onChange={update('password')}
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

            <Input
              label="Confirm Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Re-enter your password"
              value={form.confirmPassword}
              onChange={update('confirmPassword')}
              startIcon={<Lock size={18} />}
              error={
                form.confirmPassword && form.password !== form.confirmPassword
                  ? 'Passwords do not match'
                  : undefined
              }
              required
            />

            <Button type="submit" fullWidth size="md">
              Create Account
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-text-secondary dark:text-gray-400">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-primary dark:text-primary-light hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
