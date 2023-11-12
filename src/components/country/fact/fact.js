const Fact = ({ title, answer, color }) => (
  <div className={`flex flex-col items-center gap-2 ${color} p-2 md:p-5 rounded`}>
    <span className="font-semibold text-lg">
      {title}
    </span>
    <span>
      {answer}
    </span>
  </div>
)

export default Fact