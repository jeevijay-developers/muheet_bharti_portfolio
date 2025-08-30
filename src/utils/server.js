import axiosInstance from './axiosInstance.js';

// Blog API functions for the website
export const getAllBlogs = async (params = {}) => {
  try {
    const response = await axiosInstance.get('/api/blogs', { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getBlogById = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/blogs/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getBlogsByTag = async (tag, params = {}) => {
  try {
    const response = await axiosInstance.get(`/api/blogs/tag/${encodeURIComponent(tag)}`, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const searchBlogs = async (searchTerm, params = {}) => {
  try {
    const searchParams = { search: searchTerm, ...params };
    const response = await axiosInstance.get('/api/blogs', { params: searchParams });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Additional utility functions for the website
export const getPublicBlogs = async (params = {}) => {
  return getAllBlogs({ ...params, visibility: 'public' });
};

export const getRecentBlogs = async (limit = 5) => {
  return getPublicBlogs({ 
    limit, 
    page: 1,
    sort: 'createdAt',
    order: 'desc'
  });
};

export const getFeaturedBlogs = async (limit = 3) => {
  return getPublicBlogs({ 
    limit,
    featured: true,
    sort: 'createdAt',
    order: 'desc'
  });
};

export const getBlogBySlug = async (slug) => {
  try {
    const response = await axiosInstance.get(`/api/blogs/slug/${slug}`);
    return response.data;
  } catch (error) {
    // Fallback to ID-based lookup if slug not supported
    return getBlogById(slug);
  }
};

export const getRelatedBlogs = async (blogId, limit = 3) => {
  try {
    const response = await axiosInstance.get(`/api/blogs/${blogId}/related`, { params: { limit } });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getAllTags = async () => {
  try {
    const response = await axiosInstance.get('/api/blogs/tags');
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getBlogsByCategory = async (category, params = {}) => {
  try {
    const response = await axiosInstance.get(`/api/blogs/category/${encodeURIComponent(category)}`, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Pagination helper
export const getBlogsWithPagination = async (page = 1, limit = 10, filters = {}) => {
  return getPublicBlogs({
    page,
    limit,
    ...filters
  });
};

// Search with filters
export const advancedSearchBlogs = async (searchOptions) => {
  const {
    searchTerm = '',
    tags = [],
    category = '',
    dateFrom = '',
    dateTo = '',
    page = 1,
    limit = 10
  } = searchOptions;

  const params = {
    search: searchTerm,
    page,
    limit,
    visibility: 'public'
  };

  if (tags.length > 0) {
    params.tags = tags.join(',');
  }

  if (category) {
    params.category = category;
  }

  if (dateFrom) {
    params.dateFrom = dateFrom;
  }

  if (dateTo) {
    params.dateTo = dateTo;
  }

  return getAllBlogs(params);
};

// No need to export API_BASE_URL, axiosInstance handles base URL
