function PillBotton({type, text, click}){
  let myClasses = [
    "w-full",
    "flex",
    "items-center",
    "justify-center",
    "px-8",
    "py-4",
    "my-4",
    "border",
    "border-transparent",
    "text-base",
    "font-medium",
    "rounded-lg",
    "text-white",
    "text-yellow-700",
    "bg-yellow-200",
    "hover:bg-yellow-300",
    "md:py-4",
    "md:text-lg",
    "md:px-10"
  ];
  return (
    <button className={myClasses.join(" ")} type={type} onClick={click}>{text}</button>
  );
}

export default PillBotton;
