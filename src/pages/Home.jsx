import React from "react";
import FuzzyText from "../components/FuzzyText";
import bg from "../assets/bg.jpg";

const founderArr = [{
    name: "Prof. Dilip Shah",
    position: "Director and Dean of Student Affairs",
    content: "We at BESC are thrilled to host Nexus: Experience the perfect inter-college business festival. Nexus offers students a dynamic platform to showcase their skills in public speaking, marketing, entrepreneurship, and strategic thinking. It’s a space where young minds engage, innovate, and dive deep into real-world business of challenges. We look forward to welcoming participants from all corners to be a part of this exhilarating experience at THE B.E.S.C.",
    imageUrl: bg, // Replace with actual image path
},
{
    name: "Prof. Miraj D Shah",
    position: "Vice President",
    content: "BESC is not just the most celebrated institution in search of academic excellence; it is also one where the students constantly expand their horizons of possibilities, leaving examples of creativity that empower them to achieve all that is desired. NEXUS is a case in point. It is held in the college campus and is the most happening event, organized by students who are known go-getters. I invite you to participate, to be a part of a way of life.",
    imageUrl: bg
}];

function FounderCard({ founder }) {
    return (
        <div style={{zIndex:1000}} className="mt-6 founder-card bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl shadow-2xl w-full mx-auto transform hover:scale-[1.02] transition-all duration-300 group">
            <p className="text-6xl mb-6 bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent font-bold tracking-tight">{founder.position}</p>
            <img src={founder.imageUrl} alt={founder.name} className="w-full h-48 object-cover rounded-lg mb-6 shadow-lg transform group-hover:scale-[1.02] transition-all duration-300" />
            <h4 className="text-2xl font-bold text-gold mb-4">{founder.name}</h4>
            <p className="text-xl font-[atami] px-4 text-amber-100/90 backdrop-blur-sm px-6 rounded-full bg-black/20 shadow-lg transform hover:scale-[1.02] transition-all mt-4 tracking-wide leading-8 duration-300">{founder.content}</p>
        </div>
    );
}

export default function Home() {
    return (
        <section className="flex flex-col gap-12 items-center justify-center min-h-[60vh] mt-10 text-center z-50">
            <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover={false}
            >
                Nexus
            </FuzzyText>
            <div className="text-3xl flex flex-col gap-0 text-white font-thin max-w-4xl z-[105] font-[atami]">
                <h1 className="text-6xl mb-6 bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent font-bold tracking-tight">
                    Independence vs Interdependence
                </h1>
                <p className="text-amber-100/90 backdrop-blur-sm px-6 rounded-full bg-black/20 shadow-lg transform hover:scale-[1.02] transition-all duration-300" >
                    A collapsing world order<span className="font-serif text-gold/70">. &nbsp; </span>
                </p>
                <p className="text-amber-100/90 backdrop-blur-sm px-6 rounded-full bg-black/20 shadow-lg transform hover:scale-[1.02] transition-all duration-300" >
                    A high<span className="font-serif text-gold/70">-</span>stakes business battleground<span className="font-serif text-gold/70">. &nbsp; </span>
                </p>
                <p className="text-amber-100/90 backdrop-blur-sm px-6 rounded-full bg-black/20 shadow-lg transform hover:scale-[1.02] transition-all duration-300" >
                    Your decisions shape destiny<span className="font-serif text-gold/70">. &nbsp; </span>
                </p>
                <p className="text-amber-100/90 backdrop-blur-sm px-6 rounded-full bg-black/20 shadow-lg transform hover:scale-[1.02] transition-all duration-300" >
                    Will you go solo<span className="font-serif text-gold/70">, &nbsp;</span>or rise through strategy and synergy<span className="font-serif text-gold/70">? &nbsp; </span>
                </p>
            </div>
            <p className="text-2xl font-[atami] max-w-5xl text-amber-100/90 backdrop-blur-sm px-6 rounded-full bg-black/20 shadow-lg transform hover:scale-[1.02] transition-all mt-4 tracking-wide leading-8 duration-300 whitespace-pre-wrap">
                Why You’re Here
                Independence vs Interdependence — A War of Wits
                The world is in turmoil. A superpower imposes trade barriers, and chaos follows.
                Fictional nations clash.
                You lead one.
                Will you isolate to survive or collaborate to thrive?
                Each event simulates a real-world corporate crisis — and your team must decide:
                Fight alone, or form powerful alliances?
                Trust others, or rely on your instincts?
                Welcome to NEXUS.
                Where business isn’t taught.
                It’s lived.
            </p>
            <div className="grid md:grid-cols-1 gap-8 w-full max-w-7xl px-4">
                {founderArr.map((founder, index) => (
                    <FounderCard key={index} founder={founder} />
                ))}
            </div>
        </section>
    );
}
