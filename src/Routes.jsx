import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import HomepageImmersiveMusicalShowcase from './pages/homepage-immersive-musical-showcase';
import StudioInsightsPage from './pages/studio-insights-creative-process-revealed';
import CollaborationsShowcase from './pages/collaborations-industry-relationships-showcase';
import RecognitionHub from './pages/recognition-hub-awards-media-features';
import LiveExperiencesPerformanceGallery from './pages/live-experiences-performance-gallery';
import MusicalJourneyPage from './pages/musical-journey-heritage-innovation-story';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomepageImmersiveMusicalShowcase />} />
        <Route path="/homepage-immersive-musical-showcase" element={<HomepageImmersiveMusicalShowcase />} />
        <Route path="/studio-insights-creative-process-revealed" element={<StudioInsightsPage />} />
        <Route path="/collaborations-industry-relationships-showcase" element={<CollaborationsShowcase />} />
        <Route path="/recognition-hub-awards-media-features" element={<RecognitionHub />} />
        <Route path="/live-experiences-performance-gallery" element={<LiveExperiencesPerformanceGallery />} />
        <Route path="/musical-journey-heritage-innovation-story" element={<MusicalJourneyPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
