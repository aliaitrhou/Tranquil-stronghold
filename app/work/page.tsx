"use client"

import { useState, useEffect, useRef } from "react";
import { Film, Music, Palette, Play, ExternalLink, Award, Users, Heart } from "lucide-react";

// Animation component
const AnimatedSection = ({ children, delay = 0, classNames = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${classNames}`}
    >
      {children}
    </div>
  );
};

// Sample portfolio data - replace with actual projects
const portfolioData = [
  {
    id: 1,
    title: "Choose901: Youth Voices Beyond Violence",
    category: "Film",
    description: "A powerful documentary series highlighting gifted Memphis youth who are creating change in their communities. Through intimate interviews and compelling storytelling, we showcase the dreams and drive of young people often overlooked by mainstream narratives.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    featured: true,
    stats: { views: "50K+", impact: "20+ Youth Featured" },
    tags: ["Documentary", "Community Impact", "Youth Stories"]
  },
  {
    id: 2,
    title: "Memphis Youth Art Exhibition 2024",
    category: "Art",
    description: "A curated collection of visual art created by Memphis youth exploring themes of identity, community, and hope. From paintings to mixed media installations, each piece tells a unique story of resilience and creativity.",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
    featured: true,
    stats: { artists: "35 Artists", visitors: "500+ Visitors" },
    tags: ["Visual Art", "Exhibition", "Youth Expression"]
  },
  {
    id: 3,
    title: "Beats & Stories: Music Production Workshop Series",
    category: "Music",
    description: "Youth-produced tracks and original compositions created during our music production workshops. From hip-hop to R&B, these tracks represent authentic voices and experiences of young Memphis creators.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    featured: false,
    stats: { tracks: "15 Tracks", participants: "25 Youth" },
    tags: ["Music Production", "Original Songs", "Hip-Hop"]
  },
  {
    id: 4,
    title: "Street Stories: A Visual Journey",
    category: "Film",
    description: "Short film series capturing the authentic experiences of Memphis youth navigating life, dreams, and challenges. Shot and edited by young filmmakers, these stories showcase raw talent and unique perspectives.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    featured: false,
    stats: { films: "8 Short Films", runtime: "45min Total" },
    tags: ["Short Films", "Youth Filmmakers", "Memphis Stories"]
  },
  {
    id: 5,
    title: "Community Mural Project",
    category: "Art",
    description: "Collaborative mural bringing together 30+ youth artists to transform a public space in Memphis. The mural celebrates community resilience, cultural heritage, and the power of collective creativity.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    featured: false,
    stats: { size: "40ft x 15ft", artists: "30+ Youth" },
    tags: ["Public Art", "Community", "Collaboration"]
  },
  {
    id: 6,
    title: "Rhythm & Poetry Showcase",
    category: "Music",
    description: "Live performances and recordings from our youth open mic nights. Featuring spoken word poetry, original songs, and freestyle performances that amplify young voices in the Memphis community.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    featured: false,
    stats: { performers: "40+ Youth", events: "12 Events" },
    tags: ["Live Performance", "Poetry", "Music"]
  },
  {
    id: 7,
    title: "Frames of Memphis: Youth Photography",
    category: "Art",
    description: "A photography exhibition capturing Memphis through the eyes of young artists. From street photography to portraits, these images reveal the beauty, struggle, and spirit of their communities.",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
    featured: true,
    stats: { photos: "100+ Images", photographers: "20 Youth" },
    tags: ["Photography", "Visual Storytelling", "Exhibition"]
  },
  {
    id: 8,
    title: "Future Forward: Youth Interviews",
    category: "Film",
    description: "Interview series featuring Memphis students, young artists, and changemakers discussing their aspirations, challenges, and visions for the future. Raw, honest conversations that deserve to be heard.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
    featured: false,
    stats: { interviews: "25+ Youth", episodes: "10 Episodes" },
    tags: ["Documentary", "Interviews", "Youth Leadership"]
  },
  {
    id: 9,
    title: "Creative Expressions: Multi-Media Showcase",
    category: "Art",
    description: "An immersive exhibition combining digital art, video installations, and interactive pieces created by youth exploring technology and traditional art forms in innovative ways.",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
    featured: false,
    stats: { pieces: "25 Works", mediums: "6 Different" },
    tags: ["Digital Art", "Installation", "Innovation"]
  }
];

const ProjectCard = ({ project, index, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const Icon = project.category === "Film" ? Film : project.category === "Music" ? Music : Palette;

  return (
    <AnimatedSection delay={index * 0.1} classNames="group cursor-pointer" onClick={() => onClick(project)}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
            <Icon className="w-5 h-5 text-blue-600" />
          </div>

          {project.featured && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </div>
          )}

          <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            <button className="w-full bg-white text-gray-900 py-2 rounded-full font-medium flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              View Project <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
              {project.category}
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-600 mb-4 leading-relaxed flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key}>
                <div className="text-sm text-gray-500 capitalize">{key}</div>
                <div className="font-semibold text-gray-900">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const FeaturedProject = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <AnimatedSection delay={0.2} classNames="w-full">
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl overflow-hidden shadow-2xl min-h-[500px] flex items-center">
        <div className="absolute inset-0 opacity-30">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-opacity duration-700 ${imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            Featured Project
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {project.title}
          </h2>

          <p className="text-xl text-blue-50 mb-6 max-w-2xl leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-6 mb-8">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-blue-100">{value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const ImpactStats = () => {
  const stats = [
    { icon: Users, value: "200+", label: "Youth Empowered" },
    { icon: Film, value: "50+", label: "Projects Created" },
    { icon: Heart, value: "10K+", label: "Community Reach" },
    { icon: Award, value: "15+", label: "Awards & Recognition" }
  ];

  return (
    <AnimatedSection delay={0.3} classNames="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
          <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </AnimatedSection>
  );
};

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Film", "Music", "Art"];
  const featuredProjects = portfolioData.filter(p => p.featured);

  const filteredProjects = selectedCategory === "All"
    ? portfolioData
    : portfolioData.filter(p => p.category === selectedCategory);

  return (
    <section className="max-w-5xl mx-auto w-full min-h-screen bg-white text-black">
      {/* Hero Section */}
      <div className="relative py-24 px-6 bg-gradient-to-b from-gray-50 via-white to-white">
        <AnimatedSection delay={0.1} classNames="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
            Creating safe spaces for Memphis youth to tell their stories through film, music, and art.
            Every project amplifies voices that deserve to be heard.
          </p>

          <ImpactStats />
        </AnimatedSection>
      </div>

      {/* Featured Projects Carousel */}
      {featuredProjects.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 py-12">
          <AnimatedSection delay={0.2} classNames="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900">Featured Projects</h2>
          </AnimatedSection>
          <FeaturedProject project={featuredProjects[0]} />
        </div>
      )}

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <AnimatedSection delay={0.3}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold">All Projects</h2>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === cat
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <AnimatedSection delay={0.2}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Want to Collaborate?</h2>
            <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
              We're always looking for partners, mentors, and supporters who believe in
              empowering Memphis youth through creative expression.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg">
                Get Involved
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
