import React from "react";
import image from "../msl.jpg"

export default function Home() {
    return (
        <main>
            <img src={image} alt="Monstra Leaf" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screeen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cusrsive leading-none lg:leading-snug home-name" >
                Aloha, I'm Kapehe
                </h1>
            </section>
        </main>
    )
}