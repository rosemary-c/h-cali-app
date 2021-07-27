export const getExerciseVariation = (exercise) => {
  const { name, variation } = exercise;
  const variationText = variation && `(${variation})`;
  return `${name} ${variationText}`;
};

export const getSetRepStr = (exercise) => {
  const { setValue, repValue } = exercise;
  return `${setValue} x ${repValue}`;
};
