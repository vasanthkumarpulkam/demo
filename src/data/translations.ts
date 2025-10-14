export const translations = {
  en: {
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      success: 'Success',
      cancel: 'Cancel',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      search: 'Search',
      filter: 'Filter',
      back: 'Back',
      next: 'Next',
      submit: 'Submit'
    },
    nav: {
      home: 'Home',
      jobs: 'Browse Jobs',
      postJob: 'Post a Job',
      dashboard: 'Dashboard',
      messages: 'Messages',
      profile: 'Profile',
      settings: 'Settings',
      signIn: 'Sign In',
      signUp: 'Sign Up',
      signOut: 'Sign Out'
    },
    home: {
      hero: {
        title: 'Find Local Service Providers',
        subtitle: 'Connect with trusted professionals for all your needs',
        cta: 'Get Started'
      },
      stats: {
        jobs: 'Jobs Posted',
        providers: 'Service Providers',
        customers: 'Happy Customers'
      }
    },
    job: {
      status: {
        open: 'Open',
        in_progress: 'In Progress',
        completed: 'Completed',
        cancelled: 'Cancelled'
      },
      post: {
        title: 'Post a Job',
        description: 'Describe your job requirements'
      }
    }
  }
};

export type Language = keyof typeof translations;
export const defaultLanguage: Language = 'en';
