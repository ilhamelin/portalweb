import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useTasks } from "../../context/TasksContext";

function TasksPage() {
  function formatDate(dateString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>No hay tareas</h1>;

  return (
    <div className="">
      <div className="">
        <h1 className="text-white text-center mb-[20px] text-[30px] font-semibold leading-[25px]">
          Lista de Tarea Creadas
        </h1>
      </div>
      {tasks.map((task) => (
        <div
          key={task._id}
          className="bg-secondary-100 py-[20px] px-[20px] rounded-xl mb-[18px] "
        >
          <div className="border-b-[1px] border-grisOscuroCustom h-full w-full">
            <h1 className="mb-[10px]  px-[10px] py-[10px] text-white font-medium text-[20px] leading-[24px] rounded-lg text-start">
              {task.title}
            </h1>
          </div>
          <div className="">
            <div>
              <h2 className="relative text-[15px] font-medium leading-[20px] mb-[10px] mt-[25px] px-[3px] ">
                Descripcion:
              </h2>
            </div>
            <div className="">
              <p className=" bg-secondary-900/80 px-[10px] py-[10px] text-start text-grisCustom font-semibold text-[15px] leading-[19px] rounded-md h-auto min-h-[150px] max-sm:h-auto max-md:h-auto max-lg:h-auto max-xl:h-auto w-auto overflow-y-scroll overflow-visible">
                {task.description}
              </p>
              <p className="text-[15px] font-medium leading-[20px] my-[10px] pl-[5px] text-grisCustom2">
                <span className="text-grisCustom text-[13px] font-semibold leading-[21px] mr-[4px] hover:text-grisCustom/80 transition-colors">
                  Fecha de Creacion:
                </span>
                {formatDate(task.createdAt)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TasksPage;
