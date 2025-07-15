import cors from 'cors';

// Global middleware configuration
export const configureGlobalMiddleware = (app) => {
  // CORS configuration
  app.use(cors());

  // You can add more global middleware here
  // For example:
  // app.use(express.json());
  // app.use(express.urlencoded({ extended: true }));

  return app;
};
