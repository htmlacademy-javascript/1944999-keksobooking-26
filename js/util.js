function getRandomPozitiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = (Math.random() * (upper - lower) + lower);
  return +result.toFixed(digits);
}

function getArrayNumberForImage (number) {
  const numberImage = Array.from( { length: number }, (v, i) => i + 1).map((item) => String(item).padStart(2,'0'));
  return numberImage;
}


function generateArrayPhoto (array) {
  const ArrayPhoto = Array.from({length:20}, () => array)
    .flat()
    .filter((v,i) => i <  getRandomPozitiveFloat(0,10,0));

  return ArrayPhoto;
}

export {getRandomPozitiveFloat,getArrayNumberForImage,generateArrayPhoto};
