/*global chrome*/

export const saveData = (key, value) => {
  if (isChromeExtension()) {
    try {
      return chrome.storage.local.set({ [key]: value });
    } catch (error) {
      console.log(error);
    }
  } else {
    return Promise.resolve(localStorage.setItem(key, JSON.stringify(value)));
  }
};

// export const getData = (key) => {
//   if (isChromeExtension()) {
//     try {
//       return chrome.storage.local.get(key).then((data) => data[key]);
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     return Promise.resolve(JSON.parse(localStorage.getItem(key)));
//   }
// };

export const getData = (key) => {
  if (isChromeExtension()) {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get([key], (result) => {
        if (chrome.runtime.lastError) {
          console.error("Error in getData:", chrome.runtime.lastError);
          reject(chrome.runtime.lastError);
        } else {
          resolve(result[key]);
        }
      });
    });
  } else {
    try {
      const item = localStorage.getItem(key);
      return Promise.resolve(item ? JSON.parse(item) : null);
    } catch (error) {
      console.error("Error in getData:", error);
      return Promise.reject(error);
    }
  }
};

const isChromeExtension = () => {
  return !!chrome?.storage;
};
