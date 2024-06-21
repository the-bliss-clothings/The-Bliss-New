"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Image from "next/image";

interface Task {
  _id: string;
  isCompleted: boolean;
  text: string;
}

export default function Home() {
  const tasks = useQuery(api.tasks.get);

  if (!tasks || !Array.isArray(tasks)) {
    return <div>Loading...</div>;
  }

  return (
    // <div className="flex flex-col items-center justify-between p-24">
    // {/* <div className="flex min-h-screen flex-col items-center justify-between p-24"> */}
    //   {/* {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)} */}
    //   {tasks?.map((task: Task) => (
    //     <div key={task._id}>{task.text}</div>
    //   ))}
    // </div>
    <div>Page is created</div>
  );
}
