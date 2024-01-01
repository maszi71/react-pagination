import { MOCKLIST } from "../constants/MockList";

export const chunkData = (limit, offset) => {
  const startIndex = offset;
  const endIndex = limit + offset;
  const slicedData = MOCKLIST.slice(startIndex, endIndex);
  return {
    count: MOCKLIST.length,
    slicedData,
  };
};

export const calculateOffset = (activatedPage , limit)=> {
    return (activatedPage - 1) * limit;
 }

export const calculateTotalButtons = (count , limit) => {
  return Math.ceil(count / limit);
}