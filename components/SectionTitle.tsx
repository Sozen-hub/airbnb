type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
     <div>
        <span className="font-extrabold">
           {title}
        </span>
    </div>
  );
};

export default SectionTitle;
