"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTasks, setLoading, setError } from "../redux/reducers";
import { TasksSliceType, TaskType } from "./types";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";
import ListItem from "./ListItem";

function TodoListApp() {
  const dispatch = useDispatch();
  const [toggleLoad, setToggleLoad] = useState(false);
  const { tasks, isLoading, isError } = useSelector(
    (state: { tasks: TasksSliceType }) => state.tasks
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      dispatch(setError(false));
      try {
        const response = await fetch("http://localhost:3001/api/tasks");
        const data = await response.json();
        dispatch(setTasks(data));
        dispatch(setLoading(false));
      } catch {
        dispatch(setError(true));
      }
    };

    fetchData();
  }, [dispatch, toggleLoad]);
  return (
    <div>
      {isError ? (
        <ErrorMsg onClick={() => setToggleLoad((prev_val) => !prev_val)} />
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          {tasks.map((item: TaskType)=> <ListItem key={item.id} task={item} />)}
        </>
      )}
    </div>
  );
}

export default TodoListApp;
