import '../global.css';
import PocketBase from "pocketbase"

async function getNote(noteId: string) {
    const res = await fetch(
      `http://127.0.0.1:8090/api/collections/bio_data/records/${noteId}`,
      {
        next: { revalidate: 10 },
      }
    );
    const data = await res.json();
    return data;
  }

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <main > 
    <h3 className="text-2xl font-bold text-gray-500 p-5">{note.id}</h3>
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
              <tr>
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
                  <a className="inline-block px-4 py-2 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white" href={`/notes/${note.id}`}>
                    View
                    </a>
                    </td>
                <td className="p-3 text-sm"> <a className=" text-red-500 inline-block px-4 py-2 border border-red-500 hover:bg-red-500 hover:text-white rounded-full">Delete</a></td>
              </tr>

        </tbody>
      </table>
    </div>
    <div>

      </div>
    </main>

  );
}