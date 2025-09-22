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
        <div style={{zIndex:1000}} className="mt-16 p-8 founder-card bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl shadow-2xl w-full max-w-5xl mx-auto transform hover:scale-[1.01] transition-all duration-500 group">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/3">
                    <img 
                        src={founder.imageUrl} 
                        alt={founder.name} 
                        className="aspect-[0.8] w-full object-cover rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500 border border-gold/10" 
                    />
                </div>
                <div className="w-full md:w-2/3 flex flex-col items-start text-left space-y-6">
                    <div>
                        <h4 className="text-4xl mb-2 bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent font-bold tracking-tight">{founder.name}</h4>
                        <p className="text-xl text-amber-100/80 tracking-wider">{founder.position}</p>
                    </div>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
                    <p className="text-lg font-[atami] text-amber-100/90 tracking-wide leading-8 backdrop-blur-sm p-6 rounded-xl bg-black/20 shadow-lg border border-gold/5">{founder.content}</p>
                </div>
            </div>
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
            <div className="text-3xl flex flex-col gap-4 text-white font-thin max-w-4xl z-[105] font-[atami] mt-8">
                <h1 className="text-7xl mb-8 bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent font-bold tracking-tight animate-gold-glow">
                    Independence vs Interdependence
                </h1>
                <p className="text-amber-100/90 backdrop-blur-sm px-8 py-3 rounded-full bg-black/20 shadow-lg transform hover:scale-[1.02] transition-all duration-300 border border-gold/10" >
                    A collapsing world order<span className="font-serif text-gold/70">. &nbsp; </span>
                </p>
                <p className="text-amber-100/90 backdrop-blur-sm px-8 py-3 rounded-full bg-black/20 shadow-lg transform hover:scale-[1.02] transition-all duration-300 border border-gold/10" >
                    A high<span className="font-serif text-gold/70">-</span>stakes business battleground<span className="font-serif text-gold/70">. &nbsp; </span>
                </p>
                <p className="text-amber-100/90 backdrop-blur-sm px-8 py-3 rounded-full bg-black/20 shadow-lg transform hover:scale-[1.02] transition-all duration-300 border border-gold/10" >
                    Your decisions shape destiny<span className="font-serif text-gold/70">. &nbsp; </span>
                </p>
                <p className="text-amber-100/90 backdrop-blur-sm px-8 py-3 rounded-full bg-black/20 shadow-lg transform hover:scale-[1.02] transition-all duration-300 border border-gold/10" >
                    Will you go solo<span className="font-serif text-gold/70">, &nbsp;</span>or rise through strategy and synergy<span className="font-serif text-gold/70">? &nbsp; </span>
                </p>
            </div>
            <div className="max-w-5xl mt-12 mb-8 px-8 py-10 backdrop-blur-md bg-black/30 rounded-2xl border border-gold/10 shadow-2xl">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent mb-8">
                    Why You're Here
                </h2>
                <div className="space-y-6 text-xl font-[atami] tracking-wide">
                    <p className="text-2xl font-semibold text-amber-100">
                        Independence vs Interdependence — A War of Wits
                    </p>
                    <div className="space-y-4 text-amber-100/90">
                        <p className="leading-relaxed">
                            The world is in turmoil. A superpower imposes trade barriers, and chaos follows.
                            Fictional nations clash.
                        </p>
                        <p className="text-gold font-semibold text-2xl">You lead one.</p>
                        <p className="leading-relaxed">
                            Will you isolate to survive or collaborate to thrive?
                            Each event simulates a real-world corporate crisis — and your team must decide:
                        </p>
                        <div className="flex flex-col gap-3 pl-4">
                            <p className="flex items-center gap-2">
                                <span className="text-gold">→</span> Fight alone, or form powerful alliances?
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="text-gold">→</span> Trust others, or rely on your instincts?
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 pt-6 border-t border-gold/10">
                        <p className="text-3xl font-bold text-gold mb-2">Welcome to NEXUS</p>
                        <p className="text-xl text-amber-100/90">Where business isn't taught.</p>
                        <p className="text-2xl font-bold text-gold mt-1">It's lived.</p>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 space-y-16">
                {founderArr.map((founder, index) => (
                    <FounderCard key={index} founder={founder} />
                ))}
            </div>
        </section>
    );
}
