const ThreadList: React.FC = () => {
  const threads = [
    { id: 1, name: "David" },
    { id: 2, name: "Sarah" },
    { id: 3, name: "Leo" },
    { id: 4, name: "Emma" },
    { id: 5, name: "Carlos" },
  ];

  return (
    <div className="ThreadList max-w-sm mx-auto mt-10 py-8 bg-white rounded-2xl border border-gray-300">
      {threads.map((thread) => (
        <div
          key={thread.id}
          className="threadListItem p-4 last:mb-0  border border-gray-200 bg-gray-50 hover:bg-gray-100 transition flex flex-col gap-1 pointer"
        >
          <span className="threadListItem__id text-sm text-gray-600">
            id: {thread.id}
          </span>
          <span className="threadListItem__name text-base font-medium text-gray-800">
            name: {thread.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ThreadList;
