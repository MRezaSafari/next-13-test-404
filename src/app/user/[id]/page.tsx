import { notFound } from "next/navigation";

async function fetchUsers(id: any) {
  return undefined;
}

const UserPage = async ({ params }: any) => {
  const data = await fetchUsers(params.id);

  if (!data) return notFound();

  return <div>This is a page for user {params.id}</div>;
};

export default UserPage;
