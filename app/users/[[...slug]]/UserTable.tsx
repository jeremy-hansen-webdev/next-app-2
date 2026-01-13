import Link from "next/link"


export interface User {
  id: number
  name: string
  email: string
}


interface UserTableProps {
  users: User[];
}

const UserTable = ({users}: UserTableProps ) => {
 
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
