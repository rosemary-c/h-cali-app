import React, { createContext } from "react";
import { routines } from "data";
import { useLocation } from "react-router-dom";

const initProgression = {};
const initWid = -1;
const initHistory = {};
const storage = window.localStorage;

const initialState = {};
const AppContext = createContext(initialState);
AppContext.displayName = "AppContext";

export const AppContextProvider = ({ children }) => {
  const [selectedProgressions, setProgressions] = React.useState(initProgression);
  const [currentWorkoutId, setWorkout] = React.useState(initWid);
  const [workoutHistory, setWorkoutHistory] = React.useState(initHistory);
  const [routineId, setRoutineId] = React.useState("hamptons");
  const location = useLocation();

  React.useEffect(() => {
    const progressionObj = JSON.parse(storage.getItem("progressions") || "{}");
    const wid = parseInt(storage.getItem("currentWorkoutId")) || 0;
    const history = JSON.parse(storage.getItem("workoutHistory") || "{}");
    setProgressions(progressionObj);
    setWorkout(wid);
    setWorkoutHistory(history);
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

  React.useEffect(() => {
    if (workoutHistory !== initHistory) {
      storage.setItem("workoutHistory", JSON.stringify(workoutHistory));
    }
  }, [workoutHistory]);

  React.useEffect(() => {
    const newRid = location.pathname.split("/")[2];
    setRoutineId(newRid);
  }, [location.pathname]);

  const incrementWorkout = () => {
    const rid = window.location.pathname.split("/")[2];
    const numOfWorkouts = routines[rid].length;
    setWorkout((currentWorkoutId + 1) % numOfWorkouts);
  };

  const resetStorage = () => {
    setWorkout(0);
    setProgressions({});
    setWorkoutHistory({});
  };

  const contextValue = {
    selectedProgressions,
    setProgressions,
    currentWorkoutId,
    incrementWorkout,
    resetStorage,
    setWorkout,
    workoutHistory,
    setWorkoutHistory,
    routineId,
    setRoutineId,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContext;
