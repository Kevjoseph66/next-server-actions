
import TaskCard from "@/components/task-card";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';
export default async function Home() {

  const tasks = await prisma.task.findMany()
  return (
    <div className="grid grid-cols-3 gap-4">
      {tasks.map(task => (
          <TaskCard key={ task.id} task={task}/>
      ))}
    </div>
  );
}
