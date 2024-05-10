
const Button = ({label, iconUrl, backgroundColor, textColor, borderColor}) => {
  return (
    <button className={`flex justify-center items-center 
    gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`: "bg-coral-red  text-white border-coral-red"}
  
     rounded-full`}>{label}
   
   {iconUrl && <img src={iconUrl} alt="arrow right icon" className="w-5 h-5 ml-1 " />}
    </button>
  )
}

export default Button