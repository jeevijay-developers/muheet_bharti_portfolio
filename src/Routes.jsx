import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import HomepageImmersiveMusicalShowcase from './pages/homepage-immersive-musical-showcase';
import RecognitionHub from "pages/recognition-hub-awards-media-features";
import MusicalJourneyPage from "pages/musical-journey-heritage-innovation-story";
import AllBlogs from "pages/BlogPages/AllBlogs";
import DetailBlog from "pages/BlogPages/DetailBlog";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        <Route path="/" element={<HomepageImmersiveMusicalShowcase />} />
        <Route path="/" element={<HomepageImmersiveMusicalShowcase />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/blogs/:slug" element={<DetailBlog />} />
        <Route path="/recognition" element={<RecognitionHub />} />
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
