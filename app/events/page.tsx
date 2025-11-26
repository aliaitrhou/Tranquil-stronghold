"use client"

import { useState, useEffect, useRef } from "react";
import { Calendar, MapPin, Clock, Users, ArrowRight, Filter, X } from "lucide-react";

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

// Sample events data - replace with your actual events
const eventsData = [
  {
    id: 1,
    title: "Youth Art Showcase",
    date: "December 15, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Steadfast Haven Gallery, Memphis",
    category: "Art",
    description: "Experience a vibrant evening celebrating young artists as they unveil their latest creative works. Join us for an inspiring showcase of paintings, sculptures, and mixed media art.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    attendees: "50+ expected",
    featured: true
  },
  {
    id: 2,
    title: "Film Workshop: Storytelling Through Cinema",
    date: "January 10, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Creative Studio, Downtown Memphis",
    category: "Film",
    description: "Learn the fundamentals of filmmaking from local directors. Hands-on workshop covering script writing, cinematography, and editing techniques.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    attendees: "20 spots available",
    featured: false
  },
  {
    id: 3,
    title: "Music Production Masterclass",
    date: "January 20, 2025",
    time: "4:00 PM - 7:00 PM",
    location: "Sound Lab, Steadfast Haven",
    category: "Music",
    description: "Dive deep into music production with industry professionals. Learn beat making, mixing, and how to bring your musical vision to life.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    attendees: "15 spots available",
    featured: true
  },
  {
    id: 4,
    title: "Community Open Mic Night",
    date: "February 1, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Main Stage, Steadfast Haven",
    category: "Music",
    description: "Share your talents! An open platform for young artists to perform poetry, music, comedy, or any creative expression in a supportive environment.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    attendees: "Open to all",
    featured: false
  },
  {
    id: 5,
    title: "Youth Photography Exhibition",
    date: "February 14, 2025",
    time: "5:00 PM - 8:00 PM",
    location: "Gallery Space, Memphis",
    category: "Art",
    description: "A curated exhibition showcasing powerful photography by Memphis youth, capturing their unique perspectives on community, identity, and hope.",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
    attendees: "Public event",
    featured: false
  },
  {
    id: 6,
    title: "Spring Arts Festival",
    date: "March 15, 2025",
    time: "12:00 PM - 6:00 PM",
    location: "Overton Park, Memphis",
    category: "Festival",
    description: "Our biggest event of the season! Live performances, art installations, food vendors, and interactive workshops celebrating youth creativity.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    attendees: "500+ expected",
    featured: true
  }
];

const EventCard = ({ event, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <AnimatedSection delay={index * 0.1} classNames="group">
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200">
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <img
            src={event.image}
            alt={event.title}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-blue-600">
            {event.category}
          </div>
          {event.featured && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
            {event.title}
          </h3>

          <div className="space-y-2 mb-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span className="text-sm">{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="text-sm">{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span className="text-sm">{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-sm">{event.attendees}</span>
            </div>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

const FeaturedEvent = ({ event }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <AnimatedSection delay={0.2} classNames="w-full">
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-40">
          <img
            src={event.image}
            alt={event.title}
            className={`w-full h-full object-cover transition-opacity duration-700 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
          <div className="inline-block bg-blue-500 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Next Featured Event
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            {event.title}
          </h2>

          <p className="text-lg text-gray-200 mb-6 max-w-2xl leading-relaxed">
            {event.description}
          </p>

          <div className="flex flex-wrap gap-6 mb-8 text-gray-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{event.location}</span>
            </div>
          </div>

          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl">
            Register Now
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["All", "Art", "Film", "Music", "Festival"];
  const featuredEvent = eventsData.find(e => e.featured);

  const filteredEvents = selectedCategory === "All"
    ? eventsData
    : eventsData.filter(e => e.category === selectedCategory);

  return (
    <section className="w-full min-h-screen bg-white text-black max-w-5xl mx-auto">
      {/* Hero Section */}
      <AnimatedSection delay={0.1} classNames="max-w-5xl mx-auto text-center py-10">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent border">
          Upcoming Events
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Join us in celebrating youth creativity through art, film, and music.
          Every event is a chance to learn, create, and connect.
        </p>
      </AnimatedSection>

      {/* Featured Event */}
      {featuredEvent && (
        <div className="max-w-7xl mx-auto px-6 py-12">
          <FeaturedEvent event={featuredEvent} />
        </div>
      )}

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <AnimatedSection delay={0.3}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold">All Events</h2>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-gray-200 hover:border-blue-500 transition-all"
            >
              {showFilters ? <X className="w-4 h-4" /> : <Filter className="w-4 h-4" />}
              <span className="font-medium">Filter</span>
            </button>
          </div>

          {showFilters && (
            <div className="flex flex-wrap gap-3 mb-8">
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
          )}
        </AnimatedSection>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <AnimatedSection delay={0.2}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Don't See What You're Looking For?</h2>
            <p className="text-xl mb-8 text-blue-50">
              Stay updated with our latest events and programs by following us on social media
              or subscribing to our newsletter.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg">
                Follow Us
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
