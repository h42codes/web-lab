import { createClient } from "@supabase/supabase-js";

const URL = "https://zbmoaenbaebcnwlkhmys.supabase.co";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpibW9hZW5iYWViY253bGtobXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY3MDQ3NjgsImV4cCI6MTk5MjI4MDc2OH0.ywiG1mmzjA8g8r04mpRiJtlFzgH0HDKB4W6lDQxR26I";

export const supabase = createClient(URL, API_KEY);
