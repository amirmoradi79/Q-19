import { useMutation } from "react-query";
import TodoList from "./TodoList";

export default function MainSection() {
  const { mutate } = useMutation({
    mutationFn: async (newItem) => {
      try {
        const res = await axios.post("http://localhost:5173/list");
        return res.data;
      } catch (e) {
        console.log(e.message);
      }
    },
  });
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-4 mt-8">
        <p className="font-semibold text-3xl mb-4">My Todo List</p>
        <div className="flex flex-col gap-y-3">
          <form
            className="flex flex-col gap-y-4"
            onSubmit={mutate({
              action: input.value,
              id: +new Date(),
            })}
          >
            <input
              type="text"
              placeholder="what to do..."
              className="border-[1px] border-black p-2 rounded-lg outline-none"
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gray-300 p-2 rounded-2xl"
            ></button>
          </form>
        </div>
        <TodoList />
      </div>
    </>
  );
}
