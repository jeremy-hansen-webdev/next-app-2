import Link from 'next/link';
import UserTable from './UserTable';

type PageProps = {
  searchParams: Promise<{ sortOrder?: SortOrder }>;
};
export type SortOrder = 'name' | 'email';


export default async function User({searchParams}: PageProps) {
const { sortOrder } = await searchParams;

  return (
    <div>
      <Link className='btn' href={"/users/new"}>New User</Link>
      <h1>Users</h1>
        <UserTable sortOrder={sortOrder} />
    </div>
  );
}
