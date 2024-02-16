import { redirect } from "next/navigation";


export default function Home() {
  const role: string = 'Administrator';

  
  if (role.toLocaleLowerCase() === 'administrator') {
    return redirect('/admin');
  }
  
  return (
    <div>Main Page</div>
  );
}
