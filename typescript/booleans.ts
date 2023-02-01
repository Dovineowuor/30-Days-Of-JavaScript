// This function applies boolean properties to 
// check on the status or availability of an object 
// then return either true of false. 
function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
      return [obj];
    }
    return obj;
  }

  console.log(wrapInArray)