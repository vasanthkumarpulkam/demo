export type Language = 'en' | 'es' | 'fr';

export interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

export const translations: Translations = {
  'nav.home': {
    en: 'Home',
    es: 'Inicio',
    fr: 'Accueil'
  },
  'nav.jobs': {
    en: 'Jobs',
    es: 'Trabajos',
    fr: 'Emplois'
  },
  'nav.howItWorks': {
    en: 'How It Works',
    es: 'Cómo Funciona',
    fr: 'Comment Ça Marche'
  },
  'nav.signIn': {
    en: 'Sign In',
    es: 'Iniciar Sesión',
    fr: 'Se Connecter'
  },
  'nav.signUp': {
    en: 'Sign Up',
    es: 'Registrarse',
    fr: "S'inscrire"
  },
  'hero.title': {
    en: 'Find Trusted Service Providers',
    es: 'Encuentra Proveedores de Servicios de Confianza',
    fr: 'Trouvez des Prestataires de Services de Confiance'
  },
  'hero.subtitle': {
    en: 'Connect with professionals for any job, big or small',
    es: 'Conéctate con profesionales para cualquier trabajo, grande o pequeño',
    fr: 'Connectez-vous avec des professionnels pour tous vos travaux'
  },
  'button.postJob': {
    en: 'Post a Job',
    es: 'Publicar Trabajo',
    fr: 'Publier un Emploi'
  },
  'button.browseJobs': {
    en: 'Browse Jobs',
    es: 'Explorar Trabajos',
    fr: 'Parcourir les Emplois'
  }
};

export const getTranslation = (key: string, lang: Language = 'en'): string => {
  return translations[key]?.[lang] || key;
};
