import UserTable from './UserTable';
import { sort } from 'fast-sort';

export interface User {
  id: number;
  name: string;
  email: string;
}

type SortOrder = 'name' | 'email';

type PageProps = {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ sortOrder?: SortOrder }>;
};

export default async function SortUser({ searchParams }: PageProps) {
  const { sortOrder } = await searchParams;

  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });
  let users: User[] = await res.json();

  if (sortOrder === 'name') users = sort(users).asc(u => u.name)
  if (sortOrder === 'email') users = sort(users).asc(u => u.email);

  console.log('Server sort order is', sortOrder);

  return (
    <div>
      <UserTable users={users} />
    </div>
  );
}
