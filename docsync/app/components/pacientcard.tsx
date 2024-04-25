import Image from "next/image";
import { useState } from "react";

type Date = {
  day: number;
  month: string;
  year: number;
};

type Tag = {
  name: string;
  color: string;
};

type User = {
  photo: string;
  name: string;
  info: string;
};

interface Cards {
  date: Date;
  user: User;
  tags: Tag[];
}

const TagComponent = ({ name, color }: Tag) => {
  // Remover os colchetes da cor para que seja interpretada corretamente pelo Tailwind CSS
  return (
    <div className={`border-2 border-${color} rounded-full text-sm p-2 px-4`}>
      <p className={`text-${color}`}>{name}</p>
    </div>
  );
};


export default function PacientCard({ date, user, tags }: Cards) {
  return (
    <section className='bg-white border rounded-xl w-80 p-6'>
      <article>
        <div className="flex justify-between items-center">
          <p>{date.day} {date.month}, {date.year}</p>
        </div>
        <div className="mb-4">
          <h1 className="text-2xl font-semibold mb-2 mt-3">{user.name}</h1>
          <p className='font-medium text-[#909090]'>{user.info}</p>
        </div>
        <div className='flex gap-2'>
          {tags.map((tag, index) => (
            <TagComponent {...tag} key={index} />
          ))}
        </div>
      </article>
    </section>
  );
}
