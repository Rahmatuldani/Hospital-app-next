import User, { UserType } from "@/data/user";


async function AdminPage() {
    const users: UserType[] = await User.getUsers();
    
    return (
        <div>Admin Page
            <ul>
                {users.map(user => <li key={user._id}>{user.name}</li>)}
            </ul>
        </div>
    );
}

export default AdminPage;