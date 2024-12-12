import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gyspsnlyzpyrovvgwron.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5c3Bzbmx5enB5cm92dmd3cm9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU3NDEyNjQsImV4cCI6MjA0MTMxNzI2NH0.DnGFyhtlE3hmN3Q6HT4MbkrcIjg2l8Ae3pL-N4jfRzU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
