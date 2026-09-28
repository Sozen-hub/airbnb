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
      <div className="flex flex-col gap-2 min-w-40">
      <button
        onClick={handleClick}
        className="w-[198.55px] h-[198.55px] bg-[#f7f7f7] rounded-2xl hover:bg-[#eeeeee] transition"
      >
      </button>

      <span className="text-[13px] text-[#222222] capitalize font-bold">
        {text}
      </span>
    </div>
   )
}

export default CustomButton;

// propping/props
// change the routing - where the button routes when clicked.
// change of text display - the display text of the button to guide the user, on where the button routes.
