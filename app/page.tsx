import CustomButton from "@/components/CustomButton";

// comment
const Page = () => {
  return (
     <div className="p-2">
        <div className=" w-full flex items-center gap-3 flex-wrap">
           <CustomButton text="Experiences" route="experiences" />
           <CustomButton text="Widlife" route="/experiences/wildlife" />
        </div>
    </div>
  );
};

export default Page;
