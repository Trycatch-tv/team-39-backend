type CallBack = (error: Error, success?: boolean) => void | Error;

const corsOptions = (whitelist: string[]) => ({
  origin(origin: string | undefined, callback: CallBack) {
    console.log(origin, whitelist);
    if (whitelist?.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
});
export default corsOptions;
