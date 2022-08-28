export async function useFetch(endpoint, requestType, data, query) {

  try {

  if (
    requestType === "POST" ||
    requestType === "PUT" ||
    requestType === "DELETE"
  ) {
    // const response = await fetch(
    // let url = `https://parent-app-be.herokuapp.com/${endpoint}${query}`
    let url = `https://parent-app-be.herokuapp.com/${endpoint}${query}`
    const response = await fetch(
      url,
      {
        method: requestType,
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      }
    );
    const res = await response.json();
    return res;
  } else {
    const response = await fetch(
      `https://parent-app-be.herokuapp.com/${endpoint}${query}`,
      {
        method: requestType,
      }
    );
    const res = response.json();
    return res;
  }
} catch (error) {
  console.log(error)
}
}
