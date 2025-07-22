export const logger = {
    info: (message: string, data?: unknown) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`ℹ️ ${message}`, data ? data : '');
      }
    },
    success: (message: string, data?: unknown) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`✅ ${message}`, data ? data : '');
      }
    },
    warn: (message: string, data?: unknown) => {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`⚠️ ${message}`, data ? data : '');
      }
    },
  };

// In development, use localhost. In production, use the deployed API URL
const getApiBaseUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
  }
  // In production, use the same domain with /api prefix
  return '/api';
};

export const API_BASE_URL = getApiBaseUrl();

export const API_ENDPOINTS = {
    HEALTH: `${API_BASE_URL}/health`,
} as const; 
