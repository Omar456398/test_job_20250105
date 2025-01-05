import React from "react";
import { TaskType } from "./types";

function ListItem({ task }: { task: TaskType }) {
  return (
    <div className="py-3 border-green-200 border-y flex justify-between">
      <div className="flex flex-col items-start lg:flex-row">
        <div className="lg:text-lg font-semibold">{task.title}</div>
        <div className="lg:text-lg font-semibold hidden lg:block">&nbsp;{":"}&nbsp;&nbsp;&nbsp;</div>
        <div>{task.description}</div>
      </div>
      <div
      >
        {task.status}
      </div>
    </div>
  );
}

export default ListItem;
