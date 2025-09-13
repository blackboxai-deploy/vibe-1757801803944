import PropertyHero from "@/components/PropertyHero";
import PropertyFeatures from "@/components/PropertyFeatures";
import CondominiumAmenities from "@/components/CondominiumAmenities";
import LocationInfo from "@/components/LocationInfo";
import ContactSection from "@/components/ContactSection";
import PropertyGallery from "@/components/PropertyGallery";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PropertyHero />
      
      {/* Property Features */}
      <PropertyFeatures />
      
      {/* Image Gallery */}
      <PropertyGallery />
      
      {/* Condominium Amenities */}
      <CondominiumAmenities />
      
      {/* Location Information */}
      <LocationInfo />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}