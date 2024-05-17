"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addTask(formData: FormData) {
    await prisma.task.create({
        data: {
            title: formData.get("title") as string,
        }
    })

    revalidatePath("/")
}

export async function deleteTask(formData: FormData) {
    const taskId = formData.get("taskId") as string;
    await prisma.task.delete({
        where: {
            id: taskId,
        }
    });

    revalidatePath("/");
}