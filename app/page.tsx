import Section from "@/components/Section";

const Page = () => {
   const title = "Find services near you";
   const title2 = "Experiences near you";
  return (
     <div className="">
        <Section title={title} />
        <Section title={title2} />
    </div>
  );
};

export default Page;
