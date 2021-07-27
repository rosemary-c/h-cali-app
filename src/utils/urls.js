export const HOME_URL = '/routine';
export const HOME_ROUTINE_URL = '/routines/:rid';
export const WORKOUTS_URL = '/routines/:rid/workouts/:wid';
export const EXERCISES_URL = '/routines/:rid/workouts/:wid/exercises';
export const EXERCISE_DETAILS_URL = '/routines/:rid/workouts/:wid/exercises/:eid';

export const getRouteUrl = (routePath, values) => {
  const keys = Object.keys(values);
  let url = routePath;

  for (const key of keys) {
    url = url.replace(`:${key}`, values[key]);
  }

  return url;
};
