import React, { useState } from "react";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

interface University {
  name: string;
  website: string;
  description: string;
}

interface Destination {
  country: string;
  image: string;
  tagline: string;
  universityList: University[];
}

const destinations: Destination[] = [
  {
    country: "Sweden",
    image:
      "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1200&q=80",
    tagline: "Innovation-driven education with excellent quality of life.",
    universityList: [
      {
        name: "BTH Karlskrona University",
        website: "https://www.bth.se",
        description:
          "Blekinge Institute of Technology (BTH) in Karlskrona, specializing in applied IT, software engineering, and sustainable development with strong industry partnerships.",
      },
      {
        name: "KTH Royal Institute of Technology",
        website: "https://www.kth.se",
        description:
          "Sweden's leading technical university, renowned for engineering, computer science, and sustainability research with strong industry links.",
      },
      {
        name: "Uppsala University",
        website: "https://www.uu.se",
        description:
          "One of Europe’s oldest universities, highly regarded in life sciences, humanities, and law with a classic student-city atmosphere.",
      },
      {
        name: "Chalmers University of Technology",
        website: "https://www.chalmers.se",
        description:
          "Specialised in engineering, technology, and architecture with close collaboration with automotive and maritime industries.",
      },
      {
        name: "Stockholm University",
        website: "https://www.su.se",
        description:
          "Major Swedish research university known for environmental science, social sciences, and humanities in a vibrant capital city.",
      },
      {
        name: "Karolinska Institutet",
        website: "https://ki.se",
        description:
          "World-famous medical university focusing on medicine, biomedicine, and public health and home of the Nobel Assembly in Physiology or Medicine.",
      },
      {
        name: "Linköping University",
        website: "https://liu.se",
        description:
          "Innovative university known for problem-based learning in engineering, IT, and interdisciplinary programmes with strong industry ties.",
      },
    ],
  },
  {
    country: "Norway",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&h=800&q=80",
    tagline: "High-quality, research-led education in spectacular nature.",
    universityList: [
      {
        name: "University of Oslo",
        website: "https://www.uio.no/english/",
        description:
          "Norway’s oldest and largest university, strong in humanities, law, natural sciences, and health with a central city campus.",
      },
      {
        name: "Norwegian University of Science and Technology (NTNU)",
        website: "https://www.ntnu.edu/",
        description:
          "Leading technical university in Trondheim specialising in engineering, technology, and maritime research.",
      },
      {
        name: "University of Bergen",
        website: "https://www.uib.no",
        description:
          "Research-intensive university with strengths in marine science, climate research, arts, and humanities.",
      },
      {
        name: "UiT The Arctic University of Norway",
        website: "https://en.uit.no",
        description:
          "World’s northernmost university focusing on Arctic studies, indigenous issues, and marine biology.",
      },
      {
        name: "Norwegian University of Life Sciences (NMBU)",
        website: "https://www.nmbu.no",
        description:
          "Specialised in environmental sciences, agriculture, and sustainability with a green campus at Ås.",
      },
      {
        name: "BI Norwegian Business School",
        website: "https://www.bi.edu",
        description:
          "Norway’s largest business school with internationally oriented business and finance programmes taught in English.",
      },
      {
        name: "Oslo Metropolitan University (OsloMet)",
        website: "https://www.oslomet.no",
        description:
          "Modern applied sciences university offering practice-oriented programmes in health, education, and technology.",
      },
    ],
  },
  {
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
    tagline: "World-class research universities with low or no tuition fees.",
    universityList: [
      {
        name: "Technical University of Munich (TUM)",
        website: "https://www.tum.de/en/",
        description:
          "Top technical university in Munich, renowned for engineering, natural sciences, and entrepreneurship.",
      },
      {
        name: "Ludwig Maximilian University of Munich (LMU)",
        website: "https://www.lmu.de/en/",
        description:
          "Comprehensive research university with strong humanities, social sciences, and medicine.",
      },
      {
        name: "Heidelberg University",
        website: "https://www.uni-heidelberg.de/en",
        description:
          "Germany’s oldest university, excelling in medicine, life sciences, law, and philosophy.",
      },
      {
        name: "Humboldt University of Berlin",
        website: "https://www.hu-berlin.de/en",
        description:
          "Historic Berlin university famous for humanities, social sciences, and life sciences.",
      },
    ],
  },
  {
    country: "Netherlands",
    image:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1200&q=80",
    tagline: "International, innovative programmes with problem-based learning.",
    universityList: [
      {
        name: "Delft University of Technology (TU Delft)",
        website: "https://www.tudelft.nl/en/",
        description:
          "Top technical university specialising in engineering, technology, and design with a strong international reputation.",
      },
      {
        name: "University of Amsterdam",
        website: "https://www.uva.nl/en",
        description:
          "Large research university offering programmes across arts, sciences, economics, and law.",
      },
      {
        name: "Utrecht University",
        website: "https://www.uu.nl/en",
        description:
          "Research-intensive university known for life sciences, social sciences, and sustainability.",
      },
      {
        name: "Leiden University",
        website: "https://www.universiteitleiden.nl/en",
        description:
          "Oldest university in the Netherlands, especially strong in law, humanities, and social sciences.",
      },
    ],
  },
  {
    country: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    tagline: "Rich culture, strong engineering and business grandes écoles.",
    universityList: [
      {
        name: "Sorbonne University",
        website: "https://www.sorbonne-universite.fr/en",
        description:
          "Historic Paris university with strengths in arts, humanities, sciences, and medicine.",
      },
      {
        name: "Paris Sciences et Lettres (PSL)",
        website: "https://www.psl.eu/en",
        description:
          "Collegiate university combining elite schools in sciences, engineering, humanities, and arts.",
      },
      {
        name: "École Polytechnique",
        website: "https://www.polytechnique.edu/en",
        description:
          "Prestigious engineering grande école near Paris, focusing on science and technology.",
      },
      {
        name: "Université Paris-Saclay",
        website: "https://www.universite-paris-saclay.fr/en",
        description:
          "Research-intensive university excelling in science, engineering, and innovation.",
      },
    ],
  },
  {
    country: "Spain",
    image:
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1200&q=80",
    tagline: "Sunny climate, vibrant campuses, and growing English-taught offer.",
    universityList: [
      {
        name: "University of Barcelona",
        website: "https://www.ub.edu/web/portal/en/",
        description:
          "Leading Spanish university with strong programmes in sciences, humanities, and health sciences.",
      },
      {
        name: "Complutense University of Madrid",
        website: "https://www.ucm.es/english",
        description:
          "One of the world’s oldest universities, offering a very broad range of disciplines.",
      },
      {
        name: "Pompeu Fabra University",
        website: "https://www.upf.edu/en/",
        description:
          "Modern Barcelona university recognised for economics, communication, and life sciences.",
      },
      {
        name: "Autonomous University of Madrid",
        website: "https://www.uam.es/uam/en/inicio",
        description:
          "Research-oriented public university with strong international partnerships.",
      },
    ],
  },
  {
    country: "Italy",
    image:
      "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1200&q=80",
    tagline: "Historic universities paired with iconic art, culture, and food.",
    universityList: [
      {
        name: "University of Bologna",
        website: "https://www.unibo.it/en",
        description:
          "Founded in 1088, considered the world’s oldest university with strengths across disciplines.",
      },
      {
        name: "Sapienza University of Rome",
        website: "https://www.uniroma1.it/en",
        description:
          "One of Europe’s largest universities with strong research and diverse programmes.",
      },
      {
        name: "Politecnico di Milano",
        website: "https://www.polimi.it/en",
        description:
          "Italy’s leading technical university for engineering, architecture, and design.",
      },
      {
        name: "University of Padua",
        website: "https://www.unipd.it/en/",
        description:
          "Historic university known for sciences, medicine, and humanities.",
      },
    ],
  },
  {
    country: "Portugal",
    image:
      "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1200&q=80",
    tagline: "Atlantic lifestyle with affordable, high-quality study options.",
  universityList: [
    {
      name: "University of Lisbon",
      website: "https://www.ulisboa.pt/en",
      description:
        "Portugal’s largest university, offering programmes across sciences, humanities, and technology.",
    },
    {
      name: "University of Porto",
      website: "https://www.up.pt/portal/en/",
      description:
        "Research-intensive university recognised for engineering, health, and natural sciences.",
    },
    {
      name: "NOVA University Lisbon",
      website: "https://www.unl.pt/en",
      description:
        "Modern university with strong business, social sciences, and technology programmes.",
    },
    {
      name: "University of Coimbra",
      website: "https://www.uc.pt/en",
      description:
        "Historic university with a beautiful campus and strengths in law, humanities, and sciences.",
    },
  ],
},
 
  {
    country: "Ireland",
    image:
      "https://images.unsplash.com/photo-1590086782792-42dd2350140d?auto=format&fit=crop&w=1200&q=80",
    tagline: "Friendly English-speaking country with strong tech and business links.",
    universityList: [
      {
        name: "Trinity College Dublin",
        website: "https://www.tcd.ie/",
        description:
          "Ireland’s oldest university, consistently ranked among Europe’s elite institutions.",
      },
      {
        name: "University College Dublin (UCD)",
        website: "https://www.ucd.ie/",
        description:
          "Ireland’s largest university with comprehensive programmes and strong research output.",
      },
      {
        name: "University College Cork (UCC)",
        website: "https://www.ucc.ie/en/",
        description:
          "Research-active university with strengths in sciences, business, and humanities.",
      },
      {
        name: "University of Galway",
        website: "https://www.universityofgalway.ie/",
        description:
          "Research-led university with distinctive programmes in arts, sciences, and engineering.",
      },
    ],
  },
  {
    country: "Finland",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&h=800&q=80",
    tagline: "Student-centred learning with a strong focus on equality.",
    universityList: [
      {
        name: "University of Helsinki",
        website: "https://www.helsinki.fi/en",
        description:
          "Finland’s oldest and largest university with top-class research across many fields.",
      },
      {
        name: "Aalto University",
        website: "https://www.aalto.fi/en",
        description:
          "Innovative university combining technology, business, and arts with a design-driven approach.",
      },
      {
        name: "Tampere University",
        website: "https://www.tuni.fi/en",
        description:
          "University known for social sciences, education, and technology programmes.",
      },
      {
        name: "University of Turku",
        website: "https://www.utu.fi/en",
        description:
          "Research university with strengths in humanities, sciences, and medicine.",
      },
    ],
  },
  {
    country: "Belgium",
    image:
      "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?auto=format&fit=crop&w=1200&h=800&q=80",
    tagline: "Multilingual heart of Europe with strong research universities.",
    universityList: [
      {
        name: "KU Leuven",
        website: "https://www.kuleuven.be/kuleuven",
        description:
          "Leading research university with a wide range of English-taught programmes.",
      },
      {
        name: "Ghent University",
        website: "https://www.ugent.be/en",
        description:
          "Comprehensive university known for life sciences, engineering, and humanities.",
      },
      {
        name: "Université catholique de Louvain (UCLouvain)",
        website: "https://uclouvain.be/en",
        description:
          "French-speaking research university with strengths in social sciences and health.",
      },
      {
        name: "Université libre de Bruxelles (ULB)",
        website: "https://www.ulb.be/en",
        description:
          "Liberal, research-oriented university based in Brussels with strong international links.",
      },
    ],
  },
  {
    country: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    tagline: "Premium education and cutting-edge research in the Alps.",
    universityList: [
      {
        name: "ETH Zurich",
        website: "https://ethz.ch/en.html",
        description:
          "World-leading science and technology university consistently ranked among the global top.",
      },
      {
        name: "École Polytechnique Fédérale de Lausanne (EPFL)",
        website: "https://www.epfl.ch/en/",
        description:
          "Premier technical university specialising in engineering, science, and technology.",
      },
      {
        name: "University of Geneva",
        website: "https://www.unige.ch/en/",
        description:
          "International university with strong programmes in sciences, law, and international relations.",
      },
      {
        name: "University of Zurich",
        website: "https://www.uzh.ch/en.html",
        description:
          "Largest Swiss university with strengths in medicine, natural sciences, and humanities.",
      },
    ],
  },
  {
    country: "Austria",
    image:
      "https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?auto=format&fit=crop&w=1200&q=80",
    tagline: "Classical culture, safe cities, and strong public universities.",
    universityList: [
      {
        name: "University of Vienna",
        website: "https://www.univie.ac.at/en/",
        description:
          "Austria’s oldest and largest university offering a wide range of academic fields.",
      },
      {
        name: "Vienna University of Technology (TU Wien)",
        website: "https://www.tuwien.at/en/",
        description:
          "Leading technical university with excellence in engineering and natural sciences.",
      },
      {
        name: "University of Graz",
        website: "https://www.uni-graz.at/en/",
        description:
          "Comprehensive university with strong research across humanities and sciences.",
      },
      {
        name: "University of Innsbruck",
        website: "https://www.uibk.ac.at/en/",
        description:
          "Alpine university well-known for sciences, sports, and environmental research.",
      },
    ],
  },
];

const Destinations: React.FC = () => {
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);

  const toggleCountry = (country: string) => {
    setExpandedCountry((prev) => (prev === country ? null : country));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/10 relative">
      {/* subtle overseas-study style glow */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.20),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),transparent_55%)] opacity-70" />
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Study Destinations in Europe
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Discover leading European countries for international students and
            explore top universities, all in one place.
          </p>
        </div>

        {/* 5 cards per row on very large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {destinations.map((dest) => {
            const isExpanded = expandedCountry === dest.country;
            return (
              <div key={dest.country} className="flex flex-col">
                <Card className="overflow-hidden bg-card/95 backdrop-blur border-border hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-40">
                    <img
                      src={dest.image}
                      alt={`Study in ${dest.country}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white space-y-1">
                      <h3 className="text-lg font-semibold tracking-wide">
                        {dest.country}
                      </h3>
                      <p className="text-xs opacity-90 line-clamp-2">
                        {dest.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col gap-3 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Top universities
                    </p>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      {dest.universityList.slice(0, 3).map((uni) => (
                        <div
                          key={uni.name}
                          className="flex items-center justify-between gap-2"
                        >
                          <span className="font-medium text-foreground line-clamp-1">
                            {uni.name}
                          </span>
                          <a
                            href={uni.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:text-primary/80 text-xs font-medium"
                          >
                            Visit
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                      ))}
                      {dest.universityList.length > 3 && (
                        <p className="text-xs text-muted-foreground">
                          + {dest.universityList.length - 3} more universities
                        </p>
                      )}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 w-full justify-between"
                      onClick={() => toggleCountry(dest.country)}
                    >
                      <span>
                        {isExpanded ? "Hide details" : "Explore universities"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </Card>

                {isExpanded && (
                  <Card className="mt-3 p-4 bg-card/95 border-primary/30 animate-in slide-in-from-top-2 duration-200">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Universities in {dest.country}
                    </h4>
                    <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                      {dest.universityList.map((uni) => (
                        <div
                          key={uni.name}
                          className="border-l-2 border-primary pl-3 space-y-1"
                        >
                          <p className="font-medium text-sm text-foreground">
                            {uni.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {uni.description}
                          </p>
                          <a
                            href={uni.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:text-primary/80 text-xs font-medium"
                          >
                            Visit website
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Destinations;
