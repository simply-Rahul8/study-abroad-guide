import React from "react";
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
    position: { top: "28%", left: "54%" },
    universities: [
      { name: "BTH Karlskrona University", website: "https://www.bth.se" },
      { name: "KTH Royal Institute of Technology", website: "https://www.kth.se" },
      { name: "Uppsala University", website: "https://www.uu.se" },
    ],
  },
  {
    name: "Norway",
    position: { top: "25%", left: "50%" },
    universities: [
      { name: "University of Oslo", website: "https://www.uio.no/english/" },
      { name: "NTNU", website: "https://www.ntnu.edu/" },
      { name: "University of Bergen", website: "https://www.uib.no" },
    ],
  },
  {
    name: "Germany",
    position: { top: "42%", left: "52%" },
    universities: [
      { name: "TU Munich", website: "https://www.tum.de/en/" },
      { name: "LMU Munich", website: "https://www.lmu.de/en/" },
      { name: "Heidelberg University", website: "https://www.uni-heidelberg.de/en" },
    ],
  },
  {
    name: "Netherlands",
    position: { top: "40%", left: "49%" },
    universities: [
      { name: "TU Delft", website: "https://www.tudelft.nl/en/" },
      { name: "University of Amsterdam", website: "https://www.uva.nl/en" },
      { name: "Utrecht University", website: "https://www.uu.nl/en" },
    ],
  },
  {
    name: "France",
    position: { top: "48%", left: "47%" },
    universities: [
      { name: "Sorbonne University", website: "https://www.sorbonne-universite.fr/en" },
      { name: "PSL University", website: "https://www.psl.eu/en" },
      { name: "École Polytechnique", website: "https://www.polytechnique.edu/en" },
    ],
  },
  {
    name: "Spain",
    position: { top: "55%", left: "44%" },
    universities: [
      { name: "University of Barcelona", website: "https://www.ub.edu/web/portal/en/" },
      { name: "Complutense University of Madrid", website: "https://www.ucm.es/english" },
      { name: "Pompeu Fabra University", website: "https://www.upf.edu/en/" },
    ],
  },
  {
    name: "Italy",
    position: { top: "50%", left: "53%" },
    universities: [
      { name: "University of Bologna", website: "https://www.unibo.it/en" },
      { name: "Politecnico di Milano", website: "https://www.polimi.it/en" },
      { name: "Sapienza University of Rome", website: "https://www.uniroma1.it/en" },
    ],
  },
  {
    name: "Portugal",
    position: { top: "52%", left: "41%" },
    universities: [
      { name: "University of Lisbon", website: "https://www.ulisboa.pt/en" },
      { name: "University of Porto", website: "https://www.up.pt/portal/en/" },
      { name: "NOVA University Lisbon", website: "https://www.unl.pt/en" },
    ],
  },
  {
    name: "Ireland",
    position: { top: "36%", left: "43%" },
    universities: [
      { name: "Trinity College Dublin", website: "https://www.tcd.ie/" },
      { name: "University College Dublin", website: "https://www.ucd.ie/" },
      { name: "University College Cork", website: "https://www.ucc.ie/en/" },
    ],
  },
  {
    name: "Finland",
    position: { top: "22%", left: "58%" },
    universities: [
      { name: "University of Helsinki", website: "https://www.helsinki.fi/en" },
      { name: "Aalto University", website: "https://www.aalto.fi/en" },
      { name: "Tampere University", website: "https://www.tuni.fi/en" },
    ],
  },
  {
    name: "Belgium",
    position: { top: "42%", left: "48%" },
    universities: [
      { name: "KU Leuven", website: "https://www.kuleuven.be/kuleuven" },
      { name: "Ghent University", website: "https://www.ugent.be/en" },
      { name: "UCLouvain", website: "https://uclouvain.be/en" },
    ],
  },
  {
    name: "Switzerland",
    position: { top: "46%", left: "50%" },
    universities: [
      { name: "ETH Zurich", website: "https://ethz.ch/en.html" },
      { name: "EPFL", website: "https://www.epfl.ch/en/" },
      { name: "University of Geneva", website: "https://www.unige.ch/en/" },
    ],
  },
  {
    name: "Austria",
    position: { top: "44%", left: "54%" },
    universities: [
      { name: "University of Vienna", website: "https://www.univie.ac.at/en/" },
      { name: "TU Wien", website: "https://www.tuwien.at/en/" },
      { name: "University of Graz", website: "https://www.uni-graz.at/en/" },
    ],
  },
];

const WorldMap: React.FC = () => {
  return (
    <div className="w-full py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        Explore European Destinations
      </h2>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Hover over a country to see top universities. Click to explore all destinations.
      </p>
      
      <div className="relative w-full max-w-5xl mx-auto aspect-[2/1]">
        {/* Transparent World Map SVG */}
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full"
          style={{ opacity: 0.6 }}
        >
          {/* World Map Paths - Detailed continents */}
          <g fill="none" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.7">
            {/* North America */}
            <path d="M150,120 Q180,100 220,110 Q260,95 300,105 Q320,90 340,100 L350,130 Q360,150 350,180 L340,200 Q320,220 300,230 L280,240 Q250,250 220,240 L190,230 Q160,220 150,200 L140,170 Q130,140 150,120" />
            <path d="M200,230 Q220,260 210,290 L190,310 Q170,330 150,320 L140,300 Q130,280 140,260 L160,240 Q180,230 200,230" />
            
            {/* South America */}
            <path d="M250,320 Q270,310 290,320 L310,340 Q330,370 320,400 L310,430 Q300,460 280,470 L260,475 Q240,480 230,460 L220,430 Q210,400 220,370 L230,340 Q240,320 250,320" />
            
            {/* Africa */}
            <path d="M470,280 Q500,260 530,270 L560,280 Q590,290 600,320 L605,360 Q610,400 590,430 L570,460 Q540,480 510,470 L480,450 Q450,430 440,400 L435,360 Q430,320 450,290 Q460,280 470,280" />
            
            {/* Europe - More detailed */}
            <path d="M440,140 Q460,120 490,125 L520,130 Q550,125 570,140 L590,150 Q610,160 620,180 L625,200 Q630,220 620,240 L600,260 Q580,275 550,270 L520,265 Q490,270 470,260 L450,250 Q430,240 425,220 L420,190 Q415,160 440,140" />
            {/* UK & Ireland */}
            <path d="M430,160 Q440,150 450,155 L455,165 Q460,175 455,185 L445,190 Q435,195 430,185 L425,175 Q420,165 430,160" />
            {/* Scandinavia */}
            <path d="M500,100 Q520,80 540,90 L555,100 Q570,110 565,130 L555,150 Q545,165 530,160 L515,150 Q500,140 495,125 L495,115 Q495,105 500,100" />
            
            {/* Asia */}
            <path d="M620,120 Q680,100 740,110 L800,120 Q860,130 900,160 L920,190 Q940,230 920,270 L890,300 Q850,330 800,340 L740,345 Q680,350 640,330 L610,300 Q580,270 590,230 L600,190 Q610,150 620,120" />
            {/* India */}
            <path d="M700,260 Q720,250 740,260 L755,280 Q770,310 760,340 L745,365 Q730,385 710,380 L695,365 Q680,345 685,320 L690,290 Q695,270 700,260" />
            
            {/* Australia */}
            <path d="M800,380 Q840,370 880,380 L910,400 Q940,420 930,450 L910,470 Q880,490 840,485 L810,475 Q780,460 780,430 L785,405 Q790,385 800,380" />
            
            {/* Antarctica hint */}
            <path d="M200,490 Q400,480 600,485 Q800,480 900,490" strokeDasharray="5,5" />
          </g>
          
          {/* Grid lines for detail */}
          <g stroke="hsl(var(--primary))" strokeWidth="0.3" opacity="0.3">
            {/* Latitude lines */}
            <line x1="50" y1="125" x2="950" y2="125" />
            <line x1="50" y1="250" x2="950" y2="250" />
            <line x1="50" y1="375" x2="950" y2="375" />
            {/* Longitude lines */}
            <line x1="250" y1="50" x2="250" y2="480" />
            <line x1="500" y1="50" x2="500" y2="480" />
            <line x1="750" y1="50" x2="750" y2="480" />
          </g>
          
          {/* Equator */}
          <line x1="50" y1="250" x2="950" y2="250" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" strokeDasharray="10,5" />
        </svg>

        {/* Country markers positioned on the map */}
        {europeanCountries.map((country) => (
          <HoverCard key={country.name} openDelay={100} closeDelay={200}>
            <HoverCardTrigger asChild>
              <Link
                to="/destinations"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
                style={{ top: country.position.top, left: country.position.left }}
              >
                <div className="flex flex-col items-center">
                  <div className="bg-primary text-primary-foreground p-1.5 md:p-2 rounded-full shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:shadow-xl group-hover:bg-primary/90 animate-pulse">
                    <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                  </div>
                  <span className="mt-1 text-[10px] md:text-xs font-semibold text-foreground bg-background/80 px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap">
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

export default WorldMap;
