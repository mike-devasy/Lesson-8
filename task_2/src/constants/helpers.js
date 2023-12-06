export function isSelectToFilter(car, filtersObj){
	for(const prop in filtersObj){
		if (Object.prototype.hasOwnProperty.call(filtersObj, prop)) {
      // Перевірка, чи є поточна властивість в filtersObj
      if (prop === 'startYear' || prop === 'endYear') {
        // Якщо це 'startYear' або 'endYear', пропустіть поточну ітерацію
        continue;
      }

      if (filtersObj[prop] !== car[prop]) {
        // Якщо значення не відповідає фільтру, поверніть false
        return false;
      }
    }
  }
  // Перевірка для фільтрації за роками
  if (filtersObj.startYear && car.year < filtersObj.startYear) {
    return false;
  }

  if (filtersObj.endYear && car.year > filtersObj.endYear) {
    return false;
	}
	return true
}