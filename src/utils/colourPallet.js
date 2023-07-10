
export const ColourPallet = (number) => {

  let condition = false;

  const colours = [
    "#7FDBDA",
    "#ADE498",
    "#EDE682",
    "#FEBF63",
    "#7899DC",
    "#FFCB42",
    "#DF711B"
  ];

  if (number > colours.length) {
    condition = true;
  }

  let palletColours = [];

  while (palletColours.length < number) {
    const randomColour = colours[Math.floor(Math.random() * colours.length)];
    if (condition) {
      palletColours.push(randomColour);
    } else {
      if (!palletColours.includes(randomColour)) {
        palletColours.push(randomColour);
      }
    }
  }

  return (
    palletColours
  )
}