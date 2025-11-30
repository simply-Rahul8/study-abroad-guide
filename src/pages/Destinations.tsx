import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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
        description: "Consistently ranked among Europe's leading technical universities, excelling in engineering, natural sciences, and computer science with extensive English-taught programmes."
      },
      {
        name: "Ludwig Maximilian University of Munich (LMU)",
        website: "https://www.lmu.de/en/",
        description: "One of Europe's premier academic institutions, offering world-class education in humanities, social sciences, medicine, and natural sciences with strong international focus."
      },
      {
        name: "Heidelberg University",
        website: "https://www.uni-heidelberg.de/en",
        description: "Germany's oldest university, renowned for research excellence across medicine, law, and natural sciences with numerous English-taught master's programs."
      },
      {
        name: "Humboldt University of Berlin",
        website: "https://www.hu-berlin.de/en",
        description: "Historic Berlin university with outstanding reputation in humanities, social sciences, and life sciences, attracting international students worldwide."
      },
      {
        name: "RWTH Aachen University",
        website: "https://www.rwth-aachen.de/go/id/a/?lidx=1",
        description: "Leading technical university known for engineering excellence and strong industry connections, offering innovative programs with international partnerships."
      },
      {
        name: "Free University of Berlin",
        website: "https://www.fu-berlin.de/en/",
        description: "Research university with strong international focus in humanities, social sciences, and natural sciences, promoting interdisciplinary collaboration."
      },
      {
        name: "University of Freiburg",
        website: "https://www.uni-freiburg.de/start-en.html",
        description: "Traditional university with excellence in humanities, medicine, and natural sciences, offering diverse programs in beautiful historic setting."
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
        description: "Top-ranked technical university specializing in engineering, technology, and design with outstanding international reputation and innovative research."
      },
      {
        name: "University of Amsterdam",
        website: "https://www.uva.nl/en",
        description: "Leading research university offering diverse programs in arts, sciences, economics, and law with strong focus on international student experience."
      },
      {
        name: "Utrecht University",
        website: "https://www.uu.nl/en",
        description: "Research-intensive university known for excellence in life sciences, social sciences, and veterinary medicine with comprehensive English-taught programs."
      },
      {
        name: "Leiden University",
        website: "https://www.universiteitleiden.nl/en",
        description: "Oldest university in the Netherlands with strong programs in law, humanities, and social sciences, offering rich academic tradition."
      },
      {
        name: "Erasmus University Rotterdam",
        website: "https://www.eur.nl/en",
        description: "Internationally oriented university with excellence in economics, business, and social sciences, known for innovative teaching methods."
      },
      {
        name: "University of Groningen",
        website: "https://www.rug.nl/",
        description: "Research university with strong international focus and comprehensive academic programs across all major disciplines."
      },
      {
        name: "Eindhoven University of Technology",
        website: "https://www.tue.nl/en/",
        description: "Technical university specializing in engineering, technology, and design with strong industry partnerships and cutting-edge research."
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
        description: "Sweden's largest technical university in Stockholm, leading in engineering and technology research with extensive English-taught master's programs."
      },
      {
        name: "Lund University",
        website: "https://www.lunduniversity.lu.se/",
        description: "One of northern Europe's oldest and most prestigious universities with comprehensive programs and strong international focus across all disciplines."
      },
      {
        name: "Uppsala University",
        website: "https://www.uu.se/en",
        description: "Nordic region's first university, excelling in medicine, science, and humanities research with distinguished academic tradition."
      },
      {
        name: "Stockholm University",
        website: "https://www.su.se/english/",
        description: "Major public university with particular strength in natural sciences, humanities, and social sciences, located in Sweden's capital."
      },
      {
        name: "Chalmers University of Technology",
        website: "https://www.chalmers.se/en/",
        description: "Leading technical university in Gothenburg with strong focus on engineering and architecture, known for innovation and entrepreneurship."
      },
      {
        name: "University of Gothenburg",
        website: "https://www.gu.se/en",
        description: "Comprehensive university with strong programs in sciences, humanities, and education, offering diverse opportunities for international students."
      },
      {
        name: "Karolinska Institute",
        website: "https://ki.se/en",
        description: "World-renowned medical university responsible for awarding the Nobel Prize in Physiology or Medicine, leading in health sciences research."
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
        description: "Historic Paris university formed by prestigious merger, excelling in arts, humanities, sciences, and medicine with global reputation."
      },
      {
        name: "Paris Sciences et Lettres (PSL)",
        website: "https://www.psl.eu/en",
        description: "Collegiate university combining elite schools with exceptional strength in sciences, engineering, and humanities, ranked among world's best."
      },
      {
        name: "École Polytechnique",
        website: "https://www.polytechnique.edu/en",
        description: "Prestigious engineering grande école near Paris, part of Institut Polytechnique de Paris, training future leaders in science and technology."
      },
      {
        name: "Université Paris-Saclay",
        website: "https://www.universite-paris-saclay.fr/en",
        description: "Research-intensive university with excellence in science, engineering, and social sciences, featuring cutting-edge facilities and international programs."
      },
      {
        name: "Sciences Po",
        website: "https://www.sciencespo.fr/en",
        description: "Elite institution specializing in political science, international relations, and public affairs with distinguished alumni network."
      },
      {
        name: "CentraleSupélec",
        website: "https://www.centralesupelec.fr/en",
        description: "Top engineering school within Paris-Saclay, focusing on science and engineering with strong industry connections and research."
      },
      {
        name: "ENS Paris",
        website: "https://www.ens.psl.eu/en",
        description: "Prestigious grande école known for excellence in humanities and sciences research, producing numerous Nobel laureates."
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
        description: "Leading Spanish university with comprehensive programs in sciences, humanities, and health sciences, offering vibrant international environment."
      },
      {
        name: "Complutense University of Madrid",
        website: "https://www.ucm.es/english",
        description: "One of the world's oldest universities with diverse offerings across all academic disciplines and rich cultural heritage."
      },
      {
        name: "Pompeu Fabra University",
        website: "https://www.upf.edu/en/",
        description: "Modern Barcelona university excelling in economics, communication, and life sciences with innovative teaching approach."
      },
      {
        name: "Autonomous University of Madrid",
        website: "https://www.uam.es/uam/en/inicio",
        description: "Top public university known for research excellence and strong international partnerships across multiple disciplines."
      },
      {
        name: "Autonomous University of Barcelona",
        website: "https://www.uab.cat/en/",
        description: "Leading Catalan university with strong research profile and international outlook, located in dynamic Barcelona metropolitan area."
      },
      {
        name: "IE University",
        website: "https://www.ie.edu/university/",
        description: "Private university in Madrid and Segovia, internationally renowned for business and international relations programs."
      },
      {
        name: "University of Navarra",
        website: "https://www.unav.edu/en/web/global",
        description: "Private university with excellence in medicine, law, and business studies, offering personalized education and strong values."
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
        description: "World's oldest university founded in 1088, offering excellence across all disciplines with distinguished academic tradition and heritage."
      },
      {
        name: "Sapienza University of Rome",
        website: "https://www.uniroma1.it/en",
        description: "One of Europe's largest universities with comprehensive programs and strong research focus in historic Rome setting."
      },
      {
        name: "Politecnico di Milano",
        website: "https://www.polimi.it/en",
        description: "Italy's leading technical university specializing in engineering, architecture, and design with outstanding international reputation."
      },
      {
        name: "University of Padua",
        website: "https://www.unipd.it/en/",
        description: "Historic university with strong programs in sciences, medicine, and humanities, where Galileo once taught."
      },
      {
        name: "University of Milan",
        website: "https://www.unimi.it/en",
        description: "Major research university with excellence in sciences, humanities, and health sciences in Italy's fashion and business capital."
      },
      {
        name: "Bocconi University",
        website: "https://www.unibocconi.eu/wps/wcm/connect/bocconi/sitopubblico_en/navigation+tree/home",
        description: "Leading business school in Milan with international reputation in economics and management, training future business leaders."
      },
      {
        name: "Scuola Normale Superiore",
        website: "https://www.sns.it/en",
        description: "Elite university in Pisa focusing on humanities and sciences research and education with highly selective admissions."
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
        description: "Norway's oldest and highest-ranked university with particular strength in humanities, sciences, and medicine with tuition-free education."
      },
      {
        name: "Norwegian University of Science and Technology (NTNU)",
        website: "https://www.ntnu.edu/",
        description: "Leading technical university in Trondheim, focusing on technology and natural sciences with strong engineering programs."
      },
      {
        name: "University of Bergen",
        website: "https://www.uib.no/en",
        description: "Major research university with excellence in marine sciences, climate research, and humanities in beautiful coastal city."
      },
      {
        name: "BI Norwegian Business School",
        website: "https://www.bi.edu/",
        description: "Largest business school in Norway offering comprehensive business administration and management programs with international focus."
      },
      {
        name: "University of Tromsø",
        website: "https://en.uit.no/",
        description: "Northernmost university in the world with unique focus on Arctic research and indigenous studies in stunning location."
      },
      {
        name: "Norwegian School of Economics (NHH)",
        website: "https://www.nhh.no/en/",
        description: "Leading business school in Norway with excellence in economics and business administration, strong graduate employment."
      },
      {
        name: "University of Stavanger",
        website: "https://www.uis.no/en",
        description: "Young and innovative university with strong programs in energy and petroleum studies in Norway's oil capital."
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
        description: "Scandinavia's oldest university with world-class research in health sciences and natural sciences, offering excellent student life."
      },
      {
        name: "Technical University of Denmark (DTU)",
        website: "https://www.dtu.dk/english",
        description: "Leading technical university with excellence in engineering, technology, and natural sciences with strong industry partnerships."
      },
      {
        name: "Aarhus University",
        website: "https://international.au.dk/",
        description: "Major Danish university with comprehensive programs and strong research profile across multiple disciplines."
      },
      {
        name: "Copenhagen Business School",
        website: "https://www.cbs.dk/en",
        description: "Top European business school with focus on business, economics, and management in dynamic Copenhagen."
      },
      {
        name: "Roskilde University",
        website: "https://ruc.dk/en",
        description: "Innovative university with problem-based learning approach in social sciences and humanities, fostering critical thinking."
      },
      {
        name: "Aalborg University",
        website: "https://www.en.aau.dk/",
        description: "Modern university with strength in engineering, natural sciences, and social sciences using project-based learning."
      },
      {
        name: "University of Southern Denmark",
        website: "https://www.sdu.dk/en",
        description: "Research university with comprehensive programs and strong international partnerships across Denmark's regions."
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
        description: "Finland's oldest and largest university with excellence in research across multiple disciplines and tuition-free education for EU students."
      },
      {
        name: "Aalto University",
        website: "https://www.aalto.fi/en",
        description: "Modern university combining technology, business, and arts with innovative approach and strong entrepreneurship culture."
      },
      {
        name: "University of Tampere",
        website: "https://www.tuni.fi/en",
        description: "Comprehensive university known for social sciences, education, and technology programs with vibrant student community."
      },
      {
        name: "University of Turku",
        website: "https://www.utu.fi/en",
        description: "Research university with strong programs in humanities, sciences, and medicine in Finland's historic former capital."
      },
      {
        name: "University of Jyväskylä",
        website: "https://www.jyu.fi/en",
        description: "Leading Finnish university with excellence in teacher education and sports sciences with beautiful lakeside campus."
      },
      {
        name: "University of Oulu",
        website: "https://www.oulu.fi/en",
        description: "Innovative northern university with focus on technology, health, and education in high-tech environment."
      },
      {
        name: "Lappeenranta-Lahti University of Technology (LUT)",
        website: "https://www.lut.fi/en",
        description: "Technical university specializing in sustainable technology and business with strong international research collaboration."
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
        description: "Ireland's oldest university, consistently ranked among Europe's elite institutions with stunning historic campus in Dublin center."
      },
      {
        name: "University College Dublin (UCD)",
        website: "https://www.ucd.ie/",
        description: "Ireland's largest university with comprehensive programs and strong research output, leading graduate employment outcomes."
      },
      {
        name: "University College Cork (UCC)",
        website: "https://www.ucc.ie/en/",
        description: "Leading Irish university with excellence in research and strong international connections in vibrant cultural city."
      },
      {
        name: "National University of Ireland Galway",
        website: "https://www.universityofgalway.ie/",
        description: "Research-led university with distinctive programs in arts, sciences, and engineering on Ireland's stunning west coast."
      },
      {
        name: "Dublin City University (DCU)",
        website: "https://www.dcu.ie/",
        description: "Young and innovative university with excellence in business, engineering, and humanities with strong industry links."
      },
      {
        name: "University of Limerick",
        website: "https://www.ul.ie/",
        description: "Entrepreneurial university with strong industry links and focus on cooperative education providing work experience."
      },
      {
        name: "Maynooth University",
        website: "https://www.maynoothuniversity.ie/",
        description: "Historic university with modern outlook, excelling in humanities and social sciences with supportive campus environment."
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
        description: "World-leading science and technology university, consistently ranked among global top institutions with exceptional research facilities and faculty."
      },
      {
        name: "École Polytechnique Fédérale de Lausanne (EPFL)",
        website: "https://www.epfl.ch/en/",
        description: "Premier technical university specializing in engineering, science, and technology with stunning lakeside campus and cutting-edge research."
      },
      {
        name: "University of Geneva",
        website: "https://www.unige.ch/en/",
        description: "International university with strong programs in sciences, law, and international relations in global diplomatic hub."
      },
      {
        name: "University of Zurich",
        website: "https://www.uzh.ch/en.html",
        description: "Largest Swiss university with excellence in medicine, natural sciences, and humanities in vibrant financial center."
      },
      {
        name: "University of Basel",
        website: "https://www.unibas.ch/en.html",
        description: "Oldest Swiss university with strong research reputation in life sciences and humanities in beautiful Rhine river city."
      },
      {
        name: "University of Bern",
        website: "https://www.unibe.ch/index_eng.html",
        description: "Comprehensive research university with excellence in sciences, medicine, and law in Switzerland's capital city."
      },
      {
        name: "University of St. Gallen",
        website: "https://www.unisg.ch/en/",
        description: "Leading European business school specializing in economics, business, and law with strong international network."
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
        description: "Austria's oldest and largest university with comprehensive academic programs and rich cultural heritage in beautiful Vienna."
      },
      {
        name: "Vienna University of Technology (TU Wien)",
        website: "https://www.tuwien.at/en/",
        description: "Leading technical university with excellence in engineering and natural sciences with strong research focus and innovation."
      },
      {
        name: "University of Graz",
        website: "https://www.uni-graz.at/en/",
        description: "Major Austrian university with strong research focus across multiple disciplines in charming UNESCO World Heritage city."
      },
      {
        name: "University of Innsbruck",
        website: "https://www.uibk.ac.at/en/",
        description: "Comprehensive university in the Alps with strength in sciences and humanities with spectacular mountain setting."
      },
      {
        name: "WU Vienna University of Economics and Business",
        website: "https://www.wu.ac.at/en/",
        description: "Largest business university in Europe with focus on economics and business administration in stunning modern campus."
      },
      {
        name: "University of Salzburg",
        website: "https://www.plus.ac.at/?lang=en",
        description: "Traditional university with strong programs in theology, law, and natural sciences in Mozart's birthplace."
      },
      {
        name: "Johannes Kepler University Linz",
        website: "https://www.jku.at/en/",
        description: "Modern university with excellence in law, economics, and technical sciences with innovative research centers."
      }
    ]
  }
];

const Destinations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Study Destinations in Europe
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore top destinations in Europe and find the perfect country for your educational journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {destinations.map((dest) => (
            <Card key={dest.country} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-card flex flex-col">
              <div className="relative h-48">
                <img 
                  src={dest.image}
                  alt={`Study in ${dest.country}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{dest.country}</h3>
                  <p className="text-xs opacity-90">{dest.universities}</p>
                </div>
              </div>
              
              <div className="p-4 flex-1 flex flex-col">
                <div className="mb-4 flex-1">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Popular Universities:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {dest.popular.map((uni) => (
                      <span key={uni} className="px-2 py-0.5 bg-secondary/10 text-secondary text-xs rounded-full">
                        {uni}
                      </span>
                    ))}
                  </div>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-full" size="sm">
                      View Universities
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="w-80 max-h-[500px] overflow-y-auto bg-card border-border z-50" 
                    align="center"
                    sideOffset={5}
                  >
                    <div className="p-2">
                      <h4 className="font-bold text-sm text-foreground mb-3 px-2">
                        Top Universities in {dest.country}
                      </h4>
                      <div className="space-y-1">
                        {dest.universityList.map((uni) => (
                          <DropdownMenuItem 
                            key={uni.name}
                            className="flex-col items-start p-3 cursor-pointer focus:bg-muted"
                            asChild
                          >
                            <a 
                              href={uni.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-full no-underline"
                            >
                              <div className="flex items-start justify-between w-full gap-2 mb-1">
                                <span className="font-semibold text-sm text-foreground leading-tight">
                                  {uni.name}
                                </span>
                                <ExternalLink className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {uni.description}
                              </p>
                            </a>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Destinations;
