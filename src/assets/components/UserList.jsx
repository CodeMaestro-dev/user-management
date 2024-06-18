import PropTypes from "prop-types";

export default function UserList({users, onEdit, onDelete}) {
  return (
    <>
      {users ? (
        <div className="col-start-1 col-end-9 md:col-start-2 md:col-end-8 lg:col-start-3 lg:col-end-7 overflow-scroll">
          <table className="border border-slate-500 px-5 py-2 w-full">
            <thead>
              <tr className="border border-slate-500 px-5 py-2">
                <th className="border border-slate-500 px-5 py-2">User ID</th>
                <th className="border border-slate-500 px-5 py-2">Name</th>
                <th className="border border-slate-500 px-5 py-2">Email</th>
                <th className="border border-slate-500 px-5 py-2" colSpan="2">
                  Options
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border border-slate-500 px-5 py-2">
                  <td className="border border-slate-500 py-2 text-center">
                    <input type="text" value={user.id} disabled className="ps-2 py-1 bg-transparent"/>
                  </td>
                  <td className="border border-slate-500 px-5 py-2 text-center">
                    {user.name}
                  </td>
                  <td className="border border-slate-500 px-5 py-2 text-center">
                    {user.email}
                  </td>
                  <td className="border border-slate-500 px-5 py-2 text-center">
                    <button onClick={()=> onEdit(user.id)}>Edit</button>
                  </td>
                  <td className="border border-slate-500 px-5 py-2 text-center">
                    <button onClick={() => onDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <p>Looks like you haven&apos;t added any users 😉</p>
        </div>
      )}
    </>
  );
}

UserList.propTypes = {
  users: PropTypes.any,
  onEdit: PropTypes.any,
  onDelete: PropTypes.any,
}
