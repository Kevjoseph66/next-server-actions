import { TaskForm } from '@/app/new/task-form'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'


const TaskPageEdit = async ({ params }: {
    params: {
        id: string

    }
}) => {


    const task = await prisma.task.findFirst({
        where: {
            id: Number(params.id)
        }
    })
    if (!task) {
        redirect('/')
    }
    console.log(task);
    return (
        <div className='flex justify-center items-center h-screen'>
            <TaskForm task={task} />
        </div>

    )
}

export default TaskPageEdit