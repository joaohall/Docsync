"use client";
import { useState, useEffect } from "react";
import Topbar from "../components/topbar";
import PacientCard from "../components/pacientcard";

export default function Home() {
  const exampleDate = { day: 24, month: "Abril", year: 2024 };
const exampleUser = {
  photo: "/profilepictureplaceholder.png",
  name: "João Silva",
  info: "é imporannte lembrar que o joão teduardo tem alguma coisa de teste nesse texto a que legal eu não sei o que eu to escrevendo e nem dormi a noit...",
};
const exampleTags = [
  { name: "Teste", color: "#0250f5" },
  { name: "Urgente", color: "#0260f5"},
];
  return (
    <main>
      <section>
        <Topbar/>
        <article className="max-w-[1440px] m-auto p-6">
          <header className='shadow-sm w-full p-4 mb-4 px-6 items-center border rounded-xl bg-white flex justify-between'>
            <h1 className='text-xl font-semibold'>Dashboard principal</h1>
            <button className='border rounded-xl p-1 px-4'>
              <p className='font-bold text-[#5C5C5C] text-sm'>Filtrar por</p>
            </button>
          </header>
          <div>
            <PacientCard
              date={exampleDate}
              tags={exampleTags}
              user={exampleUser}
            />
          </div>
        </article>
      </section>
    </main>
  );
}
