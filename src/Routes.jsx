import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import HomepageImmersiveMusicalShowcase from './pages/homepage-immersive-musical-showcase';
import StudioInsightsPage from "pages/studio-insights-creative-process-revealed";
import CollaborationsShowcase from "pages/collaborations-industry-relationships-showcase";
import RecognitionHub from "pages/recognition-hub-awards-media-features";
import LiveExperiencesPerformanceGallery from "pages/live-experiences-performance-gallery";
import MusicalJourneyPage from "pages/musical-journey-heritage-innovation-story";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomepageImmersiveMusicalShowcase />} />
        <Route path="/" element={<HomepageImmersiveMusicalShowcase />} />

        {/* <Route path="/studio-insights" element={<StudioInsightsPage />} /> */}
        {/* <Route path="/collaborations" element={<CollaborationsShowcase />} /> */}
        <Route path="/recognition" element={<RecognitionHub />} />
        {/* <Route path="/live-performances" element={<LiveExperiencesPerformanceGallery />} /> */}
        <Route path="/journey" element={<MusicalJourneyPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'hsl(var(--card))',
            color: 'hsl(var(--foreground))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '0.75rem',
            padding: '16px',
            fontSize: '14px',
            fontWeight: '500',
          },
          success: {
            iconTheme: {
              primary: 'hsl(var(--primary))',
              secondary: 'hsl(var(--primary-foreground))',
            },
          },
          error: {
            iconTheme: {
              primary: 'hsl(var(--destructive))',
              secondary: 'hsl(var(--destructive-foreground))',
            },
          },
        }}
      />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
