import React from 'react'
interface MainCardProps {
  title: string;
  value: number;
}
const MainCard: React.FC<MainCardProps> = ({ title, value }) => {
  return (
    <div className="transition break-words border border-lime-500 text-white md:ml-2 md:py-8 py-4 px-6 md:basis-1/3 text-center rounded-lg font-semibold text-2xl hover:border-lime-300 shadow-2xl mb-3 text-center">
      {title}
      <b className="block text-5xl font-normal pt-2">{value}</b>
    </div>
  );
};

export default MainCard