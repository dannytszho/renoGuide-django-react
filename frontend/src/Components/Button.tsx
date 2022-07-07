export const LongButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-[350px] md:w-[650px] h-[60px] border rounded-lg bg-zinc-200 hover:cursor-pointer hover:scale-[102%]">
      <h2>{children}</h2>
    </button>
  )
}