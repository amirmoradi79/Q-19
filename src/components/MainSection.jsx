import TodoList from "./TodoList";

export default function MainSection() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-4 mt-8">
        <p className="font-semibold text-3xl mb-4">My Todo List</p>
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            placeholder="what to do..."
            className="border-[1px] border-black p-2 rounded-lg outline-none"
          />
          <button
            type="button"
            className="bg-gray-300 p-2 rounded-2xl"
          ></button>
        </div>
        <TodoList />
      </div>
    </>
  );
}
