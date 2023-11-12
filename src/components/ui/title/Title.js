import Divider from "../divider/Divider";

const Title = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className={`text-neutral-500`}>
        {subtitle}
      </h3>
      <h2 className={`text-3xl font-bold leading-tight`}>
        {title}
      </h2>
      <Divider />
    </div>
  )
}

export default Title