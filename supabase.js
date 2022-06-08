import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabase_url = 'https://dydgwksoafrslkxxnhgt.supabase.co';
const supabase_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5ZGd3a3NvYWZyc2xreHhuaGd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ1MjcwNDYsImV4cCI6MTk3MDEwMzA0Nn0.ppkm1tanm3rihL6QwFyRdfGTYEegRFnsg3UKiWB3gog';
const supabase = createClient(supabase_url, supabase_key, {
  localStorage: AsyncStorage,
});

export default supabase;