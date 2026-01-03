import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Wallet,
  Filter,
  ChevronRight,
  Film,
  Music,
  PartyPopper,
  Wrench,
  Gamepad2,
  Compass,
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import BottomNavManager from '../components/layout/BottomNavManager';
import {
  eventCategories,
  eventFilters,
  heroCarousel,
  movies,
  liveEvents,
  festivals,
  workshops,
  amusementParks,
  gamingVenues,
  curatedExperiences,
  friendsActivity,
  eventDeals,
  eventPerks,
} from '../data/eventsData';
import EventHeroCarousel from '../components/events/EventHeroCarousel';
import EventCategoryGrid from '../components/events/EventCategoryGrid';
import MovieCard from '../components/events/MovieCard';
import LiveEventCard from '../components/events/LiveEventCard';
import FestivalCard from '../components/events/FestivalCard';
import WorkshopCard from '../components/events/WorkshopCard';
import AmusementCard from '../components/events/AmusementCard';
import GamingCard from '../components/events/GamingCard';
import ExperienceCard from '../components/events/ExperienceCard';
import EventDealsSection from '../components/events/EventDealsSection';
import SocialProofSection from '../components/events/SocialProofSection';
import Badge from '../components/common/Badge';

const Events = () => {
  const { rezCoins } = useWallet();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleFilter = (filterId) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((f) => f !== filterId)
        : [...prev, filterId]
    );
  };

  // UGC placeholder images
  const ugcImages = [
    'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=200',
    'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=200',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200',
    'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200',
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </Link>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-rez-navy dark:text-white">Events & Entertainment</h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Movies, live events, experiences — earn rewards</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20">
                <span className="text-sm">🪙</span>
                <span className="text-sm font-medium text-amber-400">{rezCoins}</span>
              </div>
              <button className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
                <Filter className="w-5 h-5 text-rez-navy dark:text-white" />
              </button>
            </div>
          </div>

          {/* Location */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 mt-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-sm text-rez-navy dark:text-white">Bangalore</span>
            <ChevronRight className="w-3.5 h-3.5 text-rez-gray-600 dark:text-gray-500" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="px-4 py-2 border-t border-rez-gray-200 dark:border-white/5">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {eventFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 text-sm transition-colors ${
                  selectedFilters.includes(filter.id)
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
                }`}
              >
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Carousel */}
      <div className="mt-4">
        <EventHeroCarousel items={heroCarousel} />
      </div>

      {/* Category Grid */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Explore Categories</h2>
        </div>
        <EventCategoryGrid
          categories={eventCategories}
          onCategoryClick={setActiveCategory}
        />
      </div>

      {/* Movies Section */}
      <div className="mt-8">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Film className="w-5 h-5 text-red-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Now Showing</h2>
          </div>
          <Link to="/events/movies" className="text-xs text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

      {/* Live Events Section */}
      <div className="mt-8">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Music className="w-5 h-5 text-purple-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Live Events & Concerts</h2>
          </div>
          <Link to="/events/concerts" className="text-xs text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {liveEvents.map((event) => (
            <LiveEventCard key={event.id} event={event} variant="featured" />
          ))}
        </div>
      </div>

      {/* Festivals Section */}
      <div className="mt-8">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <PartyPopper className="w-5 h-5 text-amber-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Festivals & Flea Events</h2>
          </div>
          <Link to="/flea-market" className="text-xs text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {festivals.map((festival) => (
            <FestivalCard key={festival.id} festival={festival} />
          ))}
        </div>
      </div>

      {/* Workshops Section */}
      <div className="mt-8">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Wrench className="w-5 h-5 text-blue-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Workshops & Classes</h2>
          </div>
          <Link to="/events/workshops" className="text-xs text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} variant="featured" />
          ))}
        </div>
      </div>

      {/* Amusement Parks */}
      <div className="mt-8">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎢</span>
            <h2 className="font-semibold text-rez-navy dark:text-white">Amusement & Parks</h2>
          </div>
          <Link to="/events/parks" className="text-xs text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {amusementParks.map((park) => (
            <AmusementCard key={park.id} park={park} />
          ))}
        </div>
      </div>

      {/* Gaming & VR */}
      <div className="mt-8">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-pink-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Gaming, VR & Play</h2>
          </div>
          <Link to="/events/gaming" className="text-xs text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {gamingVenues.map((venue) => (
            <GamingCard key={venue.id} venue={venue} />
          ))}
        </div>
      </div>

      {/* Curated Experiences */}
      <div className="mt-8">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-emerald-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Curated Experiences</h2>
            <Badge variant="info" size="xs">AI Picks</Badge>
          </div>
          <Link to="/events/experiences" className="text-xs text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400 px-4 mb-3">Handpicked for you by ReZ AI</p>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {curatedExperiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>

      {/* Social Proof */}
      <div className="mt-8">
        <SocialProofSection
          friendsActivity={friendsActivity}
          ugcImages={ugcImages}
        />
      </div>

      {/* Deals & Rewards */}
      <div className="mt-8">
        <EventDealsSection deals={eventDeals} perks={eventPerks} />
      </div>

      {/* How It Works */}
      <div className="mx-4 mt-8 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-3">How Rewards Work</h3>
        <ol className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-emerald-400">1</span>
            </span>
            <span className="text-sm text-rez-gray-700 dark:text-gray-300">Discover movies, events & experiences</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-emerald-400">2</span>
            </span>
            <span className="text-sm text-rez-gray-700 dark:text-gray-300">Book & pay with ReZ Wallet</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-emerald-400">3</span>
            </span>
            <span className="text-sm text-rez-gray-700 dark:text-gray-300">Attend & earn cashback + bonus coins</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-emerald-400">4</span>
            </span>
            <span className="text-sm text-rez-gray-700 dark:text-gray-300">Share moments, earn even more!</span>
          </li>
        </ol>
      </div>

      {/* Bottom spacer */}
      <div className="h-8" />

      {/* Bottom Navigation */}
      <BottomNavManager />
    </div>
  );
};

export default Events;
