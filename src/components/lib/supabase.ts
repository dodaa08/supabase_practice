// supabaseClient.ts

import { createClient } from '@supabase/supabase-js';

// Supabase API credentials (replace with your actual values)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://rjvcgcymdssupzsznwlv.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqdmNnY3ltZHNzdXB6c3pud2x2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyNTIxNTgsImV4cCI6MjA0NDgyODE1OH0.k1oRoQ_7FSSmzc9ixwTaeIaSgg1rieFSnBanjbL8Ab0';
    
// Create a Supabase client instance
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
