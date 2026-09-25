import CustomButton from "@/components/CustomButton";

// comment
const Page = () => {
  return (
   
     <div className="p-2">

        <div className=" w-full flex items-center gap-8 flex-wrap">

           <CustomButton text="Experiences" route="experiences" />

           <CustomButton text="car rental" route="/experiences/wildlife" />

            <CustomButton text="Chef" route="/Chef" />

             <CustomButton text="Makeup" route="/Makeup" />

              <CustomButton text="Photography" route="/Photography" />

               <CustomButton text="Massaage" route="/Massage" />

                <CustomButton text="Training" route="/Training" />

                 <CustomButton text="Hair" route="/Hair" />
        </div>
    </div>
  );
};

export default Page;
