export const getRegionName = (REGION_NAME) => {
  const tempName = REGION_NAME[0].toUpperCase() + REGION_NAME.slice(1);

  if (tempName.includes('-')) {
    const parts = tempName.split('-');
    return `${parts[0]} ${parts[1][0].toUpperCase()}${parts[1].slice(1)}`;
  }

  return tempName;
}