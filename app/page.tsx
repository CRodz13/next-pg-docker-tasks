import { addTask } from "@/actions/actions";
import prisma from "@/lib/db";

export default async function Home() {
  // const tasks = [
  //   {
  //     id: 1,
  //     title: "Tast 1",
  //   },
  //   {
  //     id: 2,
  //     title: "Task 2"
  //   }
  // ]
  const tasks = await prisma.task.findMany();
  return (
    <main className="bg-zinc-200 flex min-h-screen flex-col items-center pt-10">
      <h1 className="text-3xl font-medium text-black">All Tasks:</h1>
      <ul className="my-10 text-center">
        {tasks.map((task) => (
          <li className="text-black text-lg" key={task.id}>{task.title}</li>
        ))}
      </ul>
      <form action={addTask} className="space-x-2 h-4">
        <input className="rounded-[5px] px-3 py-1 text-black" type="text" name="title" />
        <button className="px-3 py-1 bg-blue-500 rounded-[5px]">Add Task</button>
      </form>
    </main>
  );
}
