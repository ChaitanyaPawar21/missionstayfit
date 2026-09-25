import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import ClassDetailModal from './components/ClassDetailModal';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Toast from './components/Toast';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Studio App Component Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center bg-brand-dark text-white rounded-2xl m-6">
          <h2 className="text-xl font-bold font-display">Something went wrong in this section.</h2>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-4 px-6 py-2 rounded-full bg-brand-terracotta text-xs font-bold uppercase"
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [selectedClassDetail, setSelectedClassDetail] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [initialBookingClass, setInitialBookingClass] = useState(null);
  const [toast, setToast] = useState(null);

  const handleOpenBooking = (classId = null) => {
    setInitialBookingClass(classId);
    setIsBookingOpen(true);
  };

  const handleJoinWaitlist = (className) => {
    setToast({
      type: 'waitlist',
      title: 'Waitlist Joined!',
      message: `You're on the exclusive early-access list for ${className}. We'll notify you as soon as batches launch.`
    });
    setTimeout(() => setToast(null), 5000);
  };

  const handleBookingSuccess = (data) => {
    setIsBookingOpen(false);
    setToast({
      type: 'booking',
      title: 'Reservation Requested!',
      message: `Thanks ${data.fullName}! Your trial pass for ${data.selectedClass.toUpperCase()} (${data.selectedTiming} batch) has been logged.`
    });
    setTimeout(() => setToast(null), 6000);
  };

  const handleScrollToClasses = () => {
    const el = document.getElementById('classes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-brand-cream text-brand-text font-sans selection:bg-brand-green selection:text-white relative">
        {/* Navigation Header */}
        <Navbar
          onOpenBooking={handleOpenBooking}
          onOpenWaitlist={handleJoinWaitlist}
        />

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero Section */}
          <Hero
            onOpenBooking={handleOpenBooking}
            onScrollToClasses={handleScrollToClasses}
          />

          {/* 2. About Section */}
          <About />

          {/* 3. Our Classes Section */}
          <Classes
            onSelectClass={(cls) => setSelectedClassDetail(cls)}
            onJoinWaitlist={handleJoinWaitlist}
            onOpenBooking={handleOpenBooking}
          />

          {/* 4. Why Mission StayFit Section */}
          <WhyUs />

          {/* 5. Studio Experience Gallery */}
          <Gallery />

          {/* 6. Batch Timetable Schedule */}
          <Schedule onBookBatch={handleOpenBooking} />

          {/* 7. Member Testimonials */}
          <Testimonials />

          {/* 8. Call To Action Section */}
          <CallToAction onOpenBooking={handleOpenBooking} />
        </main>

        {/* 9. Sleek Minimal Footer */}
        <Footer onOpenBooking={handleOpenBooking} />

        {/* Class Specifications Detail Modal */}
        <ClassDetailModal
          selectedClass={selectedClassDetail}
          onClose={() => setSelectedClassDetail(null)}
          onBookNow={(classId) => handleOpenBooking(classId)}
        />

        {/* Interactive Booking & Pass Reservation Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          initialClass={initialBookingClass}
          onClose={() => setIsBookingOpen(false)}
          onSubmitSuccess={handleBookingSuccess}
        />

        {/* Notification Toast */}
        <Toast toast={toast} onClose={() => setToast(null)} />
      </div>
    </ErrorBoundary>
  );
}
