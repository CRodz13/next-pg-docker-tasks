import { addTask, deleteTask } from "@/actions/actions";
import prisma from "@/lib/db";

export default async function Home() {
  const tasks = await prisma.task.findMany();
  return (
    <main className="bg-zinc-200 flex min-h-screen flex-col items-center pt-10">
      <h1 className="text-3xl font-medium text-black">All Tasks:</h1>
      <ul className="my-10 text-center">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between">
            <li className="text-black text-lg">{task.title}</li>
            <form action={deleteTask} method="post">
              <input type="hidden" name="taskId" value={task.id} />
              <button className="px-2 py-1 bg-red-500 text-white rounded-[5px]" type="submit">Delete</button>
            </form>
          </div>
        ))}
      </ul>
      <form action={addTask} className="space-x-2 h-4">
        <input className="rounded-[5px] px-3 py-1 text-black" type="text" name="title" />
        <button className="px-3 py-1 bg-blue-500 rounded-[5px]">Add Task</button>
      </form>
    </main>
  );
}
