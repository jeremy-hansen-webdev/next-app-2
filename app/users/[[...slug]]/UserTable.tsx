import { sort } from "fast-sort";
import Link from "next/link"
import { SortOrder } from "./page";


export interface User {
  id: number
  name: string
  email: string
}


const UserTable = async ({ sortOrder }: { sortOrder?: SortOrder }) => {
    

  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });
  let users: User[] = await res.json();

  if (sortOrder === 'name') users = sort(users).asc(u => u.name)
  if (sortOrder === 'email') users = sort(users).asc(u => u.email);

 
  return (
    <>
      <table className="table table-bordered">
      <thead>
        <tr>
          <th><Link href={'/users?sortOrder=name'}>Name</Link></th>
          <th><Link href={'/users?sortOrder=email'}>Email</Link></th>
        </tr>
      </thead>
      <tbody>

      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      ))}
      </tbody>
    </table>
    </>
  )
}

export default UserTable
