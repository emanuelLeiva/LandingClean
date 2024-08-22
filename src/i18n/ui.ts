// Add missing imports
export const languages: Record<string, { code: string; name: string }> = {
  en: {
    code: "en",
    name: "English",
  },
  es: {
    code: "es",
    name: "Español",
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  en: {
    "nav.services": "services",
    "nav.about": "about",
    "nav.contact": "contact",
  },
  es: {
    "nav.services": "servicios",
    "nav.about": "nosotros",
    "nav.contact": "contacto",
  },
} as const;
