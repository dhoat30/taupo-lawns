// src/types/global.d.ts

// Extend the Window interface
interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
}