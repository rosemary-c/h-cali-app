import React from 'react';
import { routines } from 'data';

const initProgression = {};
const initWid = -1;

export const useSessionStorage = () => {
  const [selectedProgressions, setProgressions] = React.useState(initProgression);
  const [currentWorkoutId, setWorkout] = React.useState(initWid);

  React.useEffect(() => {
    const progressionObj = JSON.parse(window.sessionStorage.getItem('progressions') || '{}');
    const wid = parseInt(window.sessionStorage.getItem('currentWorkoutId')) || 0;
    setProgressions(progressionObj);
    setWorkout(wid);
  }, []);

  React.useEffect(() => {
    if (selectedProgressions !== initProgression) {
      window.sessionStorage.setItem("progressions", JSON.stringify(selectedProgressions));
    }
  }, [selectedProgressions]);

  React.useEffect(() => {
    if (currentWorkoutId !== initWid) {
      window.sessionStorage.setItem("currentWorkoutId", currentWorkoutId);
    }
  }, [currentWorkoutId]);

  const incrementWorkout = () => {
    const rid = window.location.pathname.split('/')[2];
    const numOfWorkouts = routines[rid].length;
    setWorkout((currentWorkoutId + 1) % numOfWorkouts);
  };

  const resetStorage = () => {
    setWorkout(0);
    setProgressions({});
  };

  return {
    selectedProgressions,
    setProgressions,
    currentWorkoutId,
    incrementWorkout,
    resetStorage,
    setWorkout,
  };
};
