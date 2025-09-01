import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogsByTag, getPublicBlogs, searchBlogs } from '../../utils/server';
import Header from '../../components/ui/Header';
import { BookOpen, Calendar, Clock, Search } from 'lucide-react';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [availableTags, setAvailableTags] = useState([]);
  const blogsPerPage = 9;

  // Fetch blogs with current filters
  const fetchBlogs = async (page = 1, search = '', tag = '') => {
    setLoading(true);
    setError(null);
    
    try {
      let response;
      
      if (search) {
        response = await searchBlogs(search, {
          page,
          limit: blogsPerPage,
          visibility: 'public'
        });
      } else if (tag) {
        response = await getBlogsByTag(tag, {
          page,
          limit: blogsPerPage,
          visibility: 'public'
        });
      } else {
        response = await getPublicBlogs();
      }
      console.log('Fetched blogs response:', response); 
      if (response.success) {
        setBlogs(response.data || []);
        setTotalPages(Math.ceil((response.total || response.data?.length || 0) / blogsPerPage));
        
        // Extract unique tags from blogs for filter dropdown
        if (response.data) {
          const tags = [...new Set(response.data.flatMap(blog => blog.tags || []))];
          setAvailableTags(tags);
        }
      } else {
        setError('Failed to fetch blogs');
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError('Failed to load blogs. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchBlogs(currentPage, searchTerm, selectedTag);
  }, [currentPage, searchTerm, selectedTag]);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchBlogs(1, searchTerm, selectedTag);
  };

  // Handle tag filter
  const handleTagFilter = (tag) => {
    setSelectedTag(tag);
    setCurrentPage(1);
    setSearchTerm(''); // Clear search when filtering by tag
  };

  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Truncate text
  const truncateText = (text, maxLength = 150) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  if (loading && blogs.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">Loading blogs...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Oops! Something went wrong</h2>
            <p className="text-muted-foreground mb-6">{error}</p>
            <button 
              onClick={() => fetchBlogs(currentPage, searchTerm, selectedTag)} 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-10">
        {/* Hero Section */}
        <section className="relative py-5 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5"></div>
          
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <BookOpen className='h-4 w-4' />
              Blog
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-3" style={{ lineHeight: "1.5"}}>
              All Blog Posts
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore my thoughts, tutorials, and insights on Music, teaching, and more.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-6 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative max-w-lg mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className='h-4 w-4 text-muted-foreground' />
                </div>
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-sm"
                />
                <button 
                  type="submit" 
                  className="absolute inset-y-0 right-0 pr-2 flex items-center"
                >
                  <div className="bg-primary text-primary-foreground p-1.5 rounded-md hover:bg-primary/90 transition-colors">
                    <Search className='h-4 w-4' />
                  </div>
                </button>
              </div>
            </form>

            {/* Tag Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === '' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
                onClick={() => handleTagFilter('')}
              >
                All
              </button>
              {availableTags.map(tag => (
                <button
                  key={tag}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTag === tag 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                  onClick={() => handleTagFilter(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Results Info */}
        {(searchTerm || selectedTag) && (
          <section className="px-4 mb-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between gap-3 py-5 px-5 bg-yellow-300/20">
                <p className="text-black/70 text-sm">
                  {searchTerm && `Search: "${searchTerm}"`}
                  {selectedTag && `Tag: "${selectedTag}"`}
                  {blogs.length > 0 ? ` (${blogs.length} found)` : ' (No results)'}
                </p>
                <button
                  className="px-3 py-1 text-xs bg-yellow-600 text-white rounded-md hover:bg-yellow-600 transition-colors"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTag('');
                    setCurrentPage(1);
                  }}
                >
                  Clear
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Blogs Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            {blogs.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">No blogs found</h3>
                <p className="text-muted-foreground mb-8">Try adjusting your search terms or filters.</p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Go Home
                </Link>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogs.map(blog => (
                    <article key={blog._id} className="group">
                      <Link to={`/blogs/${blog.slug}`} className="block">
                        <div className="bg-card border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-102">
                          {blog.banner && blog.banner.url && (
                            <div className="relative h-48 overflow-hidden">
                              <img 
                                src={blog.banner.url} 
                                alt={blog.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                          )}
                          
                          <div className="p-6">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                              <span className="flex items-center gap-1">
                                <Calendar className='w-4 h-4' />
                                {formatDate(blog.createdAt)}
                              </span>
                              <span className="flex items-center gap-1 text-white/80 bg-secondary px-2 py-1 rounded-full">
                                <Clock className='w-3 h-3' />
                                5 min read
                              </span>
                            </div>
                            
                            <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                              {blog.title}
                            </h2>
                            
                            {blog.subtitle && (
                              <p className="text-muted-foreground mb-4 line-clamp-3">
                                {truncateText(blog.subtitle)}
                              </p>
                            )}
                            
                            {blog.tags && blog.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-4">
                                {blog.tags.slice(0, 3).map(tag => (
                                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                                    {tag}
                                  </span>
                                ))}
                                {blog.tags.length > 3 && (
                                  <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium">
                                    +{blog.tags.length - 3}
                                  </span>
                                )}
                              </div>
                            )}
                            
                            <div className="flex items-center justify-between pt-4 border-t border-border">
                              <span className="text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                                Read More →
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-16">
                    <button
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        currentPage === 1 
                          ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      }`}
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      ← Previous
                    </button>
                    
                    <div className="flex gap-1">
                      {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 2 && page <= currentPage + 2)
                        ) {
                          return (
                            <button
                              key={page}
                              className={`w-10 h-10 rounded-lg font-medium transition-all ${
                                currentPage === page 
                                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                              }`}
                              onClick={() => handlePageChange(page)}
                            >
                              {page}
                            </button>
                          );
                        } else if (page === currentPage - 3 || page === currentPage + 3) {
                          return <span key={page} className="w-10 h-10 flex items-center justify-center text-muted-foreground">...</span>;
                        }
                        return null;
                      })}
                    </div>
                    
                    <button
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        currentPage === totalPages 
                          ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      }`}
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next →
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {loading && blogs.length > 0 && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-card border rounded-xl p-6 shadow-2xl">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
              <p className="text-muted-foreground">Loading...</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AllBlogs;
