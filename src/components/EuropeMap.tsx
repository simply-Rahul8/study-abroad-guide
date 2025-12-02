import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface University {
  name: string;
  website: string;
}

interface CountryData {
  name: string;
  position: { top: string; left: string };
  universities: University[];
}

const europeanCountries: CountryData[] = [
  {
    name: "Sweden",
    position: { top: "18%", left: "52%" },
    universities: [
      { name: "BTH Karlskrona University", website: "https://www.bth.se" },
      { name: "KTH Royal Institute of Technology", website: "https://www.kth.se" },
      { name: "Uppsala University", website: "https://www.uu.se" },
    ],
  },
  {
    name: "Norway",
    position: { top: "15%", left: "45%" },
    universities: [
      { name: "University of Oslo", website: "https://www.uio.no/english/" },
      { name: "NTNU", website: "https://www.ntnu.edu/" },
      { name: "University of Bergen", website: "https://www.uib.no" },
    ],
  },
  {
    name: "Germany",
    position: { top: "42%", left: "48%" },
    universities: [
      { name: "TU Munich", website: "https://www.tum.de/en/" },
      { name: "LMU Munich", website: "https://www.lmu.de/en/" },
      { name: "Heidelberg University", website: "https://www.uni-heidelberg.de/en" },
    ],
  },
  {
    name: "Netherlands",
    position: { top: "38%", left: "42%" },
    universities: [
      { name: "TU Delft", website: "https://www.tudelft.nl/en/" },
      { name: "University of Amsterdam", website: "https://www.uva.nl/en" },
      { name: "Utrecht University", website: "https://www.uu.nl/en" },
    ],
  },
  {
    name: "France",
    position: { top: "52%", left: "38%" },
    universities: [
      { name: "Sorbonne University", website: "https://www.sorbonne-universite.fr/en" },
      { name: "PSL University", website: "https://www.psl.eu/en" },
      { name: "École Polytechnique", website: "https://www.polytechnique.edu/en" },
    ],
  },
  {
    name: "Spain",
    position: { top: "68%", left: "32%" },
    universities: [
      { name: "University of Barcelona", website: "https://www.ub.edu/web/portal/en/" },
      { name: "Complutense University of Madrid", website: "https://www.ucm.es/english" },
      { name: "Pompeu Fabra University", website: "https://www.upf.edu/en/" },
    ],
  },
  {
    name: "Italy",
    position: { top: "58%", left: "50%" },
    universities: [
      { name: "University of Bologna", website: "https://www.unibo.it/en" },
      { name: "Politecnico di Milano", website: "https://www.polimi.it/en" },
      { name: "Sapienza University of Rome", website: "https://www.uniroma1.it/en" },
    ],
  },
  {
    name: "Portugal",
    position: { top: "65%", left: "25%" },
    universities: [
      { name: "University of Lisbon", website: "https://www.ulisboa.pt/en" },
      { name: "University of Porto", website: "https://www.up.pt/portal/en/" },
      { name: "NOVA University Lisbon", website: "https://www.unl.pt/en" },
    ],
  },
  {
    name: "Ireland",
    position: { top: "32%", left: "28%" },
    universities: [
      { name: "Trinity College Dublin", website: "https://www.tcd.ie/" },
      { name: "University College Dublin", website: "https://www.ucd.ie/" },
      { name: "University College Cork", website: "https://www.ucc.ie/en/" },
    ],
  },
  {
    name: "Finland",
    position: { top: "12%", left: "58%" },
    universities: [
      { name: "University of Helsinki", website: "https://www.helsinki.fi/en" },
      { name: "Aalto University", website: "https://www.aalto.fi/en" },
      { name: "Tampere University", website: "https://www.tuni.fi/en" },
    ],
  },
  {
    name: "Belgium",
    position: { top: "40%", left: "40%" },
    universities: [
      { name: "KU Leuven", website: "https://www.kuleuven.be/kuleuven" },
      { name: "Ghent University", website: "https://www.ugent.be/en" },
      { name: "UCLouvain", website: "https://uclouvain.be/en" },
    ],
  },
  {
    name: "Switzerland",
    position: { top: "50%", left: "44%" },
    universities: [
      { name: "ETH Zurich", website: "https://ethz.ch/en.html" },
      { name: "EPFL", website: "https://www.epfl.ch/en/" },
      { name: "University of Geneva", website: "https://www.unige.ch/en/" },
    ],
  },
  {
    name: "Austria",
    position: { top: "48%", left: "52%" },
    universities: [
      { name: "University of Vienna", website: "https://www.univie.ac.at/en/" },
      { name: "TU Wien", website: "https://www.tuwien.at/en/" },
      { name: "University of Graz", website: "https://www.uni-graz.at/en/" },
    ],
  },
];

const EuropeMap: React.FC = () => {
  return (
    <div className="w-full py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
        Explore European Destinations
      </h2>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Hover over a country to see top universities. Click to explore all destinations.
      </p>
      
      <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] bg-gradient-to-br from-primary/5 to-secondary/10 rounded-3xl border border-border/50 shadow-lg overflow-hidden">
        {/* Background map outline */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 800 600" className="w-full h-full">
            {/* Simplified Europe outline */}
            <path
              d="M150,200 Q200,150 280,180 Q350,120 420,150 Q500,100 580,140 Q650,120 700,180 Q720,250 680,320 Q700,400 650,450 Q580,500 500,480 Q420,520 350,480 Q280,500 220,450 Q150,400 160,320 Q120,250 150,200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary/30"
            />
          </svg>
        </div>

        {/* Country markers */}
        {europeanCountries.map((country) => (
          <HoverCard key={country.name} openDelay={100} closeDelay={200}>
            <HoverCardTrigger asChild>
              <Link
                to="/destinations"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
                style={{ top: country.position.top, left: country.position.left }}
              >
                <div className="flex flex-col items-center">
                  <div className="bg-primary text-primary-foreground p-2 rounded-full shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:shadow-xl group-hover:bg-primary/90">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <span className="mt-1 text-xs md:text-sm font-medium text-foreground bg-background/90 px-2 py-0.5 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {country.name}
                  </span>
                </div>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-72 p-4 bg-card border border-border shadow-xl z-50">
              <h4 className="font-semibold text-foreground mb-3 text-lg">{country.name}</h4>
              <p className="text-xs text-muted-foreground mb-3">Top Universities:</p>
              <ul className="space-y-2">
                {country.universities.map((uni) => (
                  <li key={uni.name}>
                    <a
                      href={uni.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {uni.name}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-3 italic">
                Click to view all destinations →
              </p>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default EuropeMap;
