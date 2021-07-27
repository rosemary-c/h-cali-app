import React from 'react';
import { routines } from 'data';

export const useSessionStorage = () => {
  const [selectedProgressions, setProgressions] = React.useState({});
  const [currentWorkoutId, setWorkout] = React.useState(0);

  React.useEffect(() => {
    const progressionObj = JSON.parse(window.sessionStorage.getItem('progressions') || '{}');
    const wid = parseInt(window.sessionStorage.getItem('currentWorkoutId')) ?? 0;
    setProgressions(progressionObj);
    setWorkout(wid);
    debugger;

    return () => {
      window.sessionStorage.setItem('progressions', JSON.stringify(selectedProgressions));
      window.sessionStorage.setItem('currentWorkoutId', currentWorkoutId);
      debugger;
    };
  }, []);

  const incrementWorkout = () => {
    const rid = window.location.pathname.split('/')[2];
    debugger;
    const numOfWorkouts = routines[rid].length;
    setWorkout(currentWorkoutId % numOfWorkouts + 1);
  };

  return {
    selectedProgressions,
    setProgressions,
    currentWorkoutId,
    incrementWorkout,
  };
};
