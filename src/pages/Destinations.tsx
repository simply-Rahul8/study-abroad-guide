import { useState } from "react";
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
  universities: string;
  image: string;
  popular: string[];
  universityList: University[];
}

const destinations: Destination[] = [
  {
    country: "Germany",
    universities: "80+ Universities",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    popular: ["TU Munich", "LMU Munich", "Heidelberg"],
    universityList: [
      {
        name: "Technical University of Munich (TUM)",
        website: "https://www.tum.de/en/",
        description: "Leading technical university in Munich, renowned for engineering, natural sciences, and innovation research."
      },
      {
        name: "Ludwig Maximilian University of Munich (LMU)",
        website: "https://www.lmu.de/en/",
        description: "One of Europe's premier academic institutions with strong programs in humanities, social sciences, and medicine."
      },
      {
        name: "Heidelberg University",
        website: "https://www.uni-heidelberg.de/en",
        description: "Germany's oldest university, excelling in research across medicine, law, and natural sciences."
      },
      {
        name: "Humboldt University of Berlin",
        website: "https://www.hu-berlin.de/en",
        description: "Historic Berlin university with outstanding humanities, social sciences, and life sciences programs."
      }
    ]
  },
  {
    country: "Netherlands",
    universities: "60+ Universities",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=800&q=80",
    popular: ["TU Delft", "Amsterdam", "Utrecht"],
    universityList: [
      {
        name: "Delft University of Technology (TU Delft)",
        website: "https://www.tudelft.nl/en/",
        description: "Top technical university specializing in engineering, technology, and design with international reputation."
      },
      {
        name: "University of Amsterdam",
        website: "https://www.uva.nl/en",
        description: "Leading research university offering diverse programs in arts, sciences, economics, and law."
      },
      {
        name: "Utrecht University",
        website: "https://www.uu.nl/en",
        description: "Research-intensive university known for life sciences, social sciences, and veterinary medicine."
      },
      {
        name: "Leiden University",
        website: "https://www.universiteitleiden.nl/en",
        description: "Oldest university in the Netherlands with strong programs in law, humanities, and social sciences."
      }
    ]
  },
  {
    country: "Sweden",
    universities: "40+ Universities",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80",
    popular: ["KTH", "Lund", "Uppsala"],
    universityList: [
      {
        name: "KTH Royal Institute of Technology",
        website: "https://www.kth.se/en",
        description: "Sweden's largest technical university in Stockholm, leading in engineering and technology research."
      },
      {
        name: "Lund University",
        website: "https://www.lunduniversity.lu.se/",
        description: "One of northern Europe's oldest universities with comprehensive programs and strong international focus."
      },
      {
        name: "Uppsala University",
        website: "https://www.uu.se/en",
        description: "Nordic region's first university, excelling in medicine, science, and humanities research."
      },
      {
        name: "Stockholm University",
        website: "https://www.su.se/english/",
        description: "Major public university with strength in natural sciences, humanities, and social sciences."
      }
    ]
  },
  {
    country: "France",
    universities: "90+ Universities",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    popular: ["Sorbonne", "PSL", "École Polytechnique"],
    universityList: [
      {
        name: "Sorbonne University",
        website: "https://www.sorbonne-universite.fr/en",
        description: "Historic Paris university formed by merger, excelling in arts, humanities, sciences, and medicine."
      },
      {
        name: "Paris Sciences et Lettres (PSL)",
        website: "https://www.psl.eu/en",
        description: "Collegiate university combining elite schools with strength in sciences, engineering, and humanities."
      },
      {
        name: "École Polytechnique",
        website: "https://www.polytechnique.edu/en",
        description: "Prestigious engineering school near Paris, part of Institut Polytechnique de Paris."
      },
      {
        name: "Université Paris-Saclay",
        website: "https://www.universite-paris-saclay.fr/en",
        description: "Research-intensive university with excellence in science, engineering, and social sciences."
      }
    ]
  },
  {
    country: "Spain",
    universities: "70+ Universities",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80",
    popular: ["Barcelona", "Complutense", "Pompeu Fabra"],
    universityList: [
      {
        name: "University of Barcelona",
        website: "https://www.ub.edu/web/portal/en/",
        description: "Leading Spanish university with comprehensive programs in sciences, humanities, and health sciences."
      },
      {
        name: "Complutense University of Madrid",
        website: "https://www.ucm.es/english",
        description: "One of the oldest universities in the world with diverse offerings across all academic disciplines."
      },
      {
        name: "Pompeu Fabra University",
        website: "https://www.upf.edu/en/",
        description: "Modern Barcelona university excelling in economics, communication, and life sciences."
      },
      {
        name: "Autonomous University of Madrid",
        website: "https://www.uam.es/uam/en/inicio",
        description: "Top public university known for research excellence and international partnerships."
      }
    ]
  },
  {
    country: "Italy",
    universities: "80+ Universities",
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=800&q=80",
    popular: ["Bologna", "Sapienza", "Politecnico Milano"],
    universityList: [
      {
        name: "University of Bologna",
        website: "https://www.unibo.it/en",
        description: "World's oldest university founded in 1088, offering excellence across all disciplines."
      },
      {
        name: "Sapienza University of Rome",
        website: "https://www.uniroma1.it/en",
        description: "One of Europe's largest universities with comprehensive programs and strong research focus."
      },
      {
        name: "Politecnico di Milano",
        website: "https://www.polimi.it/en",
        description: "Italy's leading technical university specializing in engineering, architecture, and design."
      },
      {
        name: "University of Padua",
        website: "https://www.unipd.it/en/",
        description: "Historic university with strong programs in sciences, medicine, and humanities."
      }
    ]
  },
  {
    country: "Norway",
    universities: "30+ Universities",
    image: "https://images.unsplash.com/photo-1519827523903-5d02e5c9d9dd?auto=format&fit=crop&w=800&q=80",
    popular: ["Oslo", "NTNU", "Bergen"],
    universityList: [
      {
        name: "University of Oslo",
        website: "https://www.uio.no/english/",
        description: "Norway's oldest and highest-ranked university with strength in humanities, sciences, and medicine."
      },
      {
        name: "Norwegian University of Science and Technology (NTNU)",
        website: "https://www.ntnu.edu/",
        description: "Leading technical university in Trondheim, focusing on technology and natural sciences."
      },
      {
        name: "University of Bergen",
        website: "https://www.uib.no/en",
        description: "Major research university with excellence in marine sciences, climate research, and humanities."
      },
      {
        name: "BI Norwegian Business School",
        website: "https://www.bi.edu/",
        description: "Largest business school in Norway offering business administration and management programs."
      }
    ]
  },
  {
    country: "Denmark",
    universities: "35+ Universities",
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80",
    popular: ["Copenhagen", "DTU", "Aarhus"],
    universityList: [
      {
        name: "University of Copenhagen",
        website: "https://www.ku.dk/english/",
        description: "Scandinavia's oldest university with world-class research in health sciences and natural sciences."
      },
      {
        name: "Technical University of Denmark (DTU)",
        website: "https://www.dtu.dk/english",
        description: "Leading technical university with excellence in engineering, technology, and natural sciences."
      },
      {
        name: "Aarhus University",
        website: "https://international.au.dk/",
        description: "Major Danish university with comprehensive programs and strong research profile."
      },
      {
        name: "Copenhagen Business School",
        website: "https://www.cbs.dk/en",
        description: "Top European business school with focus on business, economics, and management."
      }
    ]
  },
  {
    country: "Finland",
    universities: "35+ Universities",
    image: "https://images.unsplash.com/photo-1564844536460-e5193e2ea1dd?auto=format&fit=crop&w=800&q=80",
    popular: ["Helsinki", "Aalto", "Tampere"],
    universityList: [
      {
        name: "University of Helsinki",
        website: "https://www.helsinki.fi/en",
        description: "Finland's oldest and largest university with excellence in research across multiple disciplines."
      },
      {
        name: "Aalto University",
        website: "https://www.aalto.fi/en",
        description: "Modern university combining technology, business, and arts with innovative approach."
      },
      {
        name: "University of Tampere",
        website: "https://www.tuni.fi/en",
        description: "Comprehensive university known for social sciences, education, and technology programs."
      },
      {
        name: "University of Turku",
        website: "https://www.utu.fi/en",
        description: "Research university with strong programs in humanities, sciences, and medicine."
      }
    ]
  },
  {
    country: "Ireland",
    universities: "25+ Universities",
    image: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?auto=format&fit=crop&w=800&q=80",
    popular: ["Trinity", "UCD", "UCC"],
    universityList: [
      {
        name: "Trinity College Dublin",
        website: "https://www.tcd.ie/",
        description: "Ireland's oldest university, consistently ranked among Europe's elite institutions."
      },
      {
        name: "University College Dublin (UCD)",
        website: "https://www.ucd.ie/",
        description: "Ireland's largest university with comprehensive programs and strong research output."
      },
      {
        name: "University College Cork (UCC)",
        website: "https://www.ucc.ie/en/",
        description: "Leading Irish university with excellence in research and strong international connections."
      },
      {
        name: "National University of Ireland Galway",
        website: "https://www.universityofgalway.ie/",
        description: "Research-led university with distinctive programs in arts, sciences, and engineering."
      }
    ]
  },
  {
    country: "Switzerland",
    universities: "30+ Universities",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    popular: ["ETH Zurich", "EPFL", "Geneva"],
    universityList: [
      {
        name: "ETH Zurich",
        website: "https://ethz.ch/en.html",
        description: "World-leading science and technology university, consistently ranked among global top institutions."
      },
      {
        name: "École Polytechnique Fédérale de Lausanne (EPFL)",
        website: "https://www.epfl.ch/en/",
        description: "Premier technical university specializing in engineering, science, and technology."
      },
      {
        name: "University of Geneva",
        website: "https://www.unige.ch/en/",
        description: "International university with strong programs in sciences, law, and international relations."
      },
      {
        name: "University of Zurich",
        website: "https://www.uzh.ch/en.html",
        description: "Largest Swiss university with excellence in medicine, natural sciences, and humanities."
      }
    ]
  },
  {
    country: "Austria",
    universities: "40+ Universities",
    image: "https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?auto=format&fit=crop&w=800&q=80",
    popular: ["Vienna", "TU Vienna", "Graz"],
    universityList: [
      {
        name: "University of Vienna",
        website: "https://www.univie.ac.at/en/",
        description: "Austria's oldest and largest university with comprehensive academic programs."
      },
      {
        name: "Vienna University of Technology (TU Wien)",
        website: "https://www.tuwien.at/en/",
        description: "Leading technical university with excellence in engineering and natural sciences."
      },
      {
        name: "University of Graz",
        website: "https://www.uni-graz.at/en/",
        description: "Major Austrian university with strong research focus across multiple disciplines."
      },
      {
        name: "University of Innsbruck",
        website: "https://www.uibk.ac.at/en/",
        description: "Comprehensive university in the Alps with strength in sciences and humanities."
      }
    ]
  }
];

const Destinations = () => {
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);

  const toggleCountry = (country: string) => {
    setExpandedCountry(expandedCountry === country ? null : country);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Study Destinations in Europe
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore top destinations in Europe and find the perfect country for your educational journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {destinations.map((dest) => (
            <div key={dest.country}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-card">
                <div className="relative h-64">
                  <img 
                    src={dest.image}
                    alt={`Study in ${dest.country}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{dest.country}</h3>
                    <p className="text-sm opacity-90">{dest.universities}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Popular Universities:</p>
                    <div className="flex flex-wrap gap-2">
                      {dest.popular.map((uni) => (
                        <span key={uni} className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                          {uni}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    onClick={() => toggleCountry(dest.country)}
                  >
                    {expandedCountry === dest.country ? (
                      <>
                        Hide Universities <ChevronUp className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Explore {dest.country} <ChevronDown className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </Card>

              {expandedCountry === dest.country && (
                <Card className="mt-4 p-6 bg-card animate-in slide-in-from-top-2 duration-300">
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    Universities in {dest.country}
                  </h4>
                  <div className="space-y-6">
                    {dest.universityList.map((uni) => (
                      <div key={uni.name} className="border-l-4 border-primary pl-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h5 className="font-semibold text-foreground text-lg mb-1">
                              {uni.name}
                            </h5>
                            <p className="text-muted-foreground text-sm mb-2">
                              {uni.description}
                            </p>
                            <a
                              href={uni.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                            >
                              Visit Website
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Destinations;