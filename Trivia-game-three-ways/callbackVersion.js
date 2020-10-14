export function getClueFromCallback(cb) {
  // Step 1
  const xml = new XMLHttpRequest();
  // Step 2
  xml.addEventListener("readystatechange", () => {
    // Step 2.2
    if (XMLHttpRequest.DONE !== xml.readyState) return;
    if (xml.status !== 200) return;
    // Step 2.3
    const responseData = JSON.parse(xml.responseText);
    cb(null, responseData);
    console.log("responseData: ", responseData);
  });
  // Step 3
  xml.open("GET", "https://jservice.xyz/api/random-clue");
  // Step 4
  xml.send();
}
