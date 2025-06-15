import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://<bqbzrczvyzlpirpkjxwp>.supabase.co';
const supabaseAnonKey = '<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxYnpyY3p2eXpscGlycGtqeHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMDM4NDUsImV4cCI6MjA2NTU3OTg0NX0.BLrxHgcyDHnR7Krca51cWFV8G80ceBuY-lV8EhjFWqs>';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
