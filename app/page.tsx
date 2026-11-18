import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HomeOverviewDirectory from '@/components/HomeOverviewDirectory';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F7] text-[#181C19]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <HomeOverviewDirectory />
      </main>
      <Footer />
    </div>
  );
}
