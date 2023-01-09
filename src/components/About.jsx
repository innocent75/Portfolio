import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-black text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
             Salut, Je suis Thomas Loril, ravis de vous avoir rencontré 
            </p>
          </div>
          <div>
            <p>
              Passionné par l’informatique depuis mon enfance, j’utilise toutes
              les compétences que j’ai acquises durant mes expériences
              professionnelles et scolaires pour cette passion qu'est le Code. <br>
              </br>
              Je suis aujourd'hui Full-Stack Développeur Web
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
