-- Ensure RLS is enabled and allow users to view their own roles
alter table public.user_roles enable row level security;

-- Drop existing policy if present to avoid duplicates
drop policy if exists "Users can view their own roles" on public.user_roles;

-- Allow authenticated users to read their own roles only
create policy "Users can view their own roles"
on public.user_roles
for select
to authenticated
using (user_id = auth.uid());