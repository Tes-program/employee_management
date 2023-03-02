import Link from "next/link";
import PocketBase from "pocketbase";
import CreateTaskDialog from "./createTask";



async function getNote () {
  // const res = await fetch('http://127.0.0.1:8090/api/collections/bio_data/records?page=1&perPage=30');
  // const data = await res.json();
  const pb = new PocketBase('http://127.0.0.1:8090');
  const data = await pb.collection('bio_data').getFullList();
  return data;
}

export default async function Home() {
  const notes = await getNote();

  return (
     <main > 
        <div className="flex justify-between items-center">
    <h3 className="text-2xl font-bold text-gray-500 p-5">
    Employee Management
    </h3>
  <CreateTaskDialog/>
</div>
      <div className="">
        <table className="w-full">
          <thead className="bg-gray-200 border-b-2 border-zinc-200">
            <tr>
              <th className="p-3 text-base font-semibold tracking-wide text-left">ID</th>
              <th className="p-3 text-base font-semibold tracking-wide text-left">Name</th>
              <th className="p-3 text-base font-semibold tracking-wide text-left">Email</th>
              <th className="p-3 text-base font-semibold tracking-wide text-left">Address</th>
              <th className="p-3 text-base font-semibold tracking-wide text-left">Status</th>
              <th className="p-3 text-base font-semibold tracking-wide text-left">Date</th>
              <th className="p-3 text-base font-semibold tracking-wide text-left">Action</th>
              <th className="p-3 text-base font-semibold tracking-wide text-left"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyan-100">
            {notes?.map((note) => {
              return (
                <tr key={note.id}>
                  <td className="p-3 text-sm text-gray-500 whitespace-nowrap"> 
                  <a className="font-bold text-blue-500 hover:underline">
                  {note.id}
                    </a></td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{note.name}</td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{note.email}</td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{note.address}</td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><span className={`p-1.5 text-xs font-medium uppercase tracking-wider text-white rounded-lg ${note.status === 'Active' ? 'bg-green-600' : 'bg-red-600'}`}>{note.status}</span></td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{new Date(note.date).toLocaleDateString()}</td>
                  <td className="p-3 text-sm">
                    <Link className="inline-block px-4 py-2 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white" href={`/notes/${note.id}`}>
                      View
                      </Link>
                      </td>
                  <td className="p-3 text-sm"> <a className=" text-red-500 inline-block px-4 py-2 border border-red-500 hover:bg-red-500 hover:text-white rounded-full">Delete</a></td>
                </tr>
              );
            })}

          </tbody>
        </table>
      </div>
      <div>

        </div>
      </main>
  );
}

