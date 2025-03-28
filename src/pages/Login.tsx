
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, Loader } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { toast } from '../components/ui/use-toast';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';

const Login = () => {
  const { t } = useLanguage();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsLoading(true);
      await signIn(email, password);
      toast({
        title: "Success",
        description: "You have been logged in successfully",
      });
      navigate(from);
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Error",
        description: "Failed to log in. Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <img src="/lovable-uploads/0142a83e-bd17-43e1-891b-424264eaa72d.png" alt="Logo" className="h-16 mx-auto" />
            </Link>
            <h1 className="text-2xl font-bold mt-4 text-gray-800">Welcome back</h1>
            <p className="text-gray-600 mt-2">Please sign in to your account</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('email')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-krishi-primary"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">{t('password')}</label>
                <a href="#" className="text-sm text-krishi-primary hover:text-krishi-dark">{t('forgotPassword')}</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-krishi-primary"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            
            <div>
              <Button 
                type="submit" 
                className="w-full bg-krishi-primary hover:bg-krishi-dark text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <Loader size={16} className="animate-spin mr-2" />
                    Signing in...
                  </div>
                ) : (
                  t('login')
                )}
              </Button>
            </div>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {t('dontHaveAccount')} <Link to="/signup" className="text-krishi-primary hover:text-krishi-dark font-medium">{t('signup')}</Link>
            </p>
          </div>
          
          <div className="mt-8">
            <Button asChild variant="outline" className="w-full">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 bg-krishi-primary">
        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('/lovable-uploads/40ffc290-2562-41e7-beb1-2e4f20318caf.png')` }}>
          <div className="h-full w-full bg-krishi-primary bg-opacity-80 flex items-center justify-center text-white p-12">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-6">Access the best farming equipment</h2>
              <p className="text-lg mb-8">Join thousands of farmers who have revolutionized their farming practices.</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <img src="/lovable-uploads/0142a83e-bd17-43e1-891b-424264eaa72d.png" alt="Logo" className="h-8" />
                </div>
                <p className="text-lg font-medium">Farmwise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
