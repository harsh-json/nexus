import React from "react";
import FuzzyText from "../components/FuzzyText";

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
            <p className="text-4xl text-white max-w-4xl z-50 font-[sixty]">
                Independence vs Interdependence
                A collapsing world order<span className="font-serif">. &nbsp; </span>
                A high<span className="font-serif">-</span>stakes business battleground<span className="font-serif">. &nbsp; </span>
                Your decisions shape destiny<span className="font-serif">. &nbsp; </span>
                Will you go solo<span className="font-serif">, &nbsp; </span> or rise through strategy and synergy<span className="font-serif">? &nbsp; </span>
            </p>
        </section>
    );
}
