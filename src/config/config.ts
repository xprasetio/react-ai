interface Config {
    apiBaseUrl: string;
  }
  
  export const AppConfig: Config = {
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  };