
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createClient } from '@supabase/supabase-js';
import { toast } from '../components/ui/use-toast';

// Supabase configuration
const supabaseUrl = 'https://supabase-url.co'; // This will be replaced with an actual URL
const supabaseAnonKey = 'your-anon-key'; // This will be replaced with an actual key

// Initialize Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// User type definition
export type User = {
  id: string;
  email: string;
  name?: string;
};

// Auth context type
type AuthContextType = {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
};

// Create auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for user session on mount
  useEffect(() => {
    // For demo purposes, we'll use localStorage
    // In a real app, this would check the Supabase session
    const checkUser = () => {
      const storedUser = localStorage.getItem('krishiUser');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    };

    checkUser();

    // Listen for auth state changes
    // This would be a Supabase auth subscription in a real app
  }, []);

  // Sign up function
  const signUp = async (email: string, password: string, name: string) => {
    try {
      setLoading(true);
      // In a real app, this would call supabase.auth.signUp
      // For demo, we'll simulate a successful signup
      const newUser = { id: `user_${Date.now()}`, email, name };
      localStorage.setItem('krishiUser', JSON.stringify(newUser));
      setUser(newUser);
      toast({
        title: "Success",
        description: "Account created successfully!",
      });
    } catch (error) {
      console.error('Error signing up:', error);
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign in function
  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      // In a real app, this would call supabase.auth.signInWithPassword
      // For demo, we'll simulate a successful login
      const loggedInUser = { id: `user_${Date.now()}`, email };
      localStorage.setItem('krishiUser', JSON.stringify(loggedInUser));
      setUser(loggedInUser);
      toast({
        title: "Success",
        description: "Logged in successfully!",
      });
    } catch (error) {
      console.error('Error signing in:', error);
      toast({
        title: "Error",
        description: "Failed to log in. Please check your credentials and try again.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign out function
  const signOut = async () => {
    try {
      // In a real app, this would call supabase.auth.signOut
      localStorage.removeItem('krishiUser');
      setUser(null);
      toast({
        title: "Success",
        description: "Logged out successfully!",
      });
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  // Forgot password function
  const forgotPassword = async (email: string) => {
    try {
      // In a real app, this would call supabase.auth.resetPasswordForEmail
      toast({
        title: "Success",
        description: "Password reset link sent to your email!",
      });
    } catch (error) {
      console.error('Error in forgot password:', error);
      toast({
        title: "Error",
        description: "Failed to send password reset link. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut, forgotPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
