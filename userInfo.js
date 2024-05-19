// userInfo.js
  // const originalNames = ["Cosmos", "Jenebo", "Dorgan"];
  // const modifiedNames = ["Cosmos", "Jenebo", "Dorgan"];
  

  function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
      throw new Error("The length of originalNames and modifiedNames arrays must be the same.");
    }
  
    const userProfiles = [];
  
    for (let i = 0; i < originalNames.length; i++) {
      const userProfile = {
        id: i + 1,
        originalName: originalNames[i],
        modifiedName: modifiedNames[i]
      };
      userProfiles.push(userProfile);
    }
  
    return userProfiles;
  }
  // Export the function to use in other files
module.exports = { createUserProfiles };
