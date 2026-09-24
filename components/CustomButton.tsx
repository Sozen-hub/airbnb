"use client";
import { useRouter } from "next/navigation";

type CustomButtonProps = {
   text: string;
   route: string;
}

const CustomButton = ({text, route}: CustomButtonProps) => {
   const router = useRouter();

   const handleClick = () => {
      router.push(route);
   };
   return (
      <button className="px-10 py-3 bg-black text-white rounded-full" onClick={handleClick}>
         {text}
      </button>
   )
}

export default CustomButton;

// propping/props
// change the routing - where the button routes when clicked.
// change of text display - the display text of the button to guide the user, on where the button routes.
