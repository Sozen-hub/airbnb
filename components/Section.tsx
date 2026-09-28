import CustomButton from "./CustomButton";
import SectionTitle from "./SectionTitle";

const Section = ({ title } : { title: string }) => {
   return (
    <div className="  flex flex-col items-start mx-16 my-8">
        <div className="py-3">
           <SectionTitle title={title} />
         </div>
         <div className="flex items-center gap-4 flex-wrap">
            <CustomButton text="car rentals" route="/car-rentals" />
            <CustomButton text="photoraphy" route="/photoraphy" />
            <CustomButton text="chefs" route="/chefs" />
            <CustomButton text="massage" route="/massage" />
         </div>
    </div>
  );
};

export default Section;
