import React from 'react';
import { routines } from 'data';

const initProgression = {};
const initWid = -1;

export const useStorage = () => {
  const [selectedProgressions, setProgressions] = React.useState(initProgression);
  const [currentWorkoutId, setWorkout] = React.useState(initWid);
  const storage = window.localStorage;

  React.useEffect(() => {
    const progressionObj = JSON.parse(storage.getItem("progressions") || "{}");
    const wid = parseInt(storage.getItem("currentWorkoutId")) || 0;
    setProgressions(progressionObj);
    setWorkout(wid);
  }, []);

  React.useEffect(() => {
    if (selectedProgressions !== initProgression) {
      storage.setItem("progressions", JSON.stringify(selectedProgressions));
    }
  }, [selectedProgressions]);

  React.useEffect(() => {
    if (currentWorkoutId !== initWid) {
      storage.setItem("currentWorkoutId", currentWorkoutId);
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
