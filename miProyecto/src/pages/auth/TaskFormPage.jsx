import { useForm } from "react-hook-form";
import { useTasks } from "../../context/TasksContext";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { createTask } = useTasks();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
  });

  return (
    <div className="h-auto w-auto bg-secondary-100  rounded-xl">
      <div className="h-full w-full border-b-[1px] border-grisOscuroCustom px-[20px] py-[16px]">
        <h3 className="text-[25px] font-semibold text-white mb-[5px] ">
          Asignacion de Tareas
        </h3>
      </div>
      <div className="block">
        <form
          onSubmit={onSubmit}
          className="flex flex-col my-[10px] px-[20px] py-[20px]"
        >
          <input
            type="text"
            placeholder="Title"
            {...register("title")}
            className="mb-[15px] rounded-md py-[8px] px-[10px] text-white bg-secondary-900 text-[16px] font-medium leading-[24px] hover:bg-secondary-900/70 transition-colors"
            autoFocus
          />
          <textarea
            rows="3"
            placeholder="Descriprion"
            {...register("description")}
            className="mb-[15px] rounded-md py-[5px] px-[10px] text-white bg-secondary-900 text-[16px] font-medium leading-[24px] hover:bg-secondary-900/70 transition-colors"
          ></textarea>
          <div className="basis-auto text-end">
            <button className="bg-secondary-900 px-[12px] py-[8px] rounded-lg text-[15px] font-normal leading-[21px] text-white hover:bg-secondary-900/70 hover:transition-colors ">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
