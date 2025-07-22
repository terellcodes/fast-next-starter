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

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const API_ENDPOINTS = {
    HEALTH: `${API_BASE_URL}/health`,
} as const; 
