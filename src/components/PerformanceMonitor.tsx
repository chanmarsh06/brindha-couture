'use client';

import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor navigation timing
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const nav = entry as PerformanceNavigationTiming;
            console.log('🚀 Navigation Performance:', {
              'DNS Lookup': `${nav.domainLookupEnd - nav.domainLookupStart}ms`,
              'Connection': `${nav.connectEnd - nav.connectStart}ms`,
              'Request': `${nav.responseStart - nav.requestStart}ms`,
              'Response': `${nav.responseEnd - nav.responseStart}ms`,
              'DOM Load': `${nav.domContentLoadedEventEnd - nav.navigationStart}ms`,
              'Full Load': `${nav.loadEventEnd - nav.navigationStart}ms`,
            });
          }
        });
      });

      observer.observe({ entryTypes: ['navigation'] });

      // Monitor largest contentful paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('🎯 LCP:', `${lastEntry.startTime.toFixed(2)}ms`);
      });

      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      return () => {
        observer.disconnect();
        lcpObserver.disconnect();
      };
    }
  }, []);

  return null;
};

export default PerformanceMonitor;