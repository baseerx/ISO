import React from 'react'

interface BelowHeroProps{
    title: string;
    detail: string;
}
const BelowHero: React.FC<BelowHeroProps> = ({title,detail}) => {
  return (
    <div className="container mx-auto flex justify-between items-center p-5 pb-3 md:px-0">
      <div className="md:flex md:flex-row md:gap-10">
        <div className="md:w-1/2 pb-6">
                  <h1 className="font-title text-5xl">{ title }</h1>
        </div>
        <div className="md:w-1/2">
                  <div>{ detail }</div>
        </div>
      </div>
    </div>
  );
};

export default BelowHero