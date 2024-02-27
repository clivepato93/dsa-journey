// original code
function containsX(string) {
  foundX = false;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "X") {
      foundX = true;
    }
  }
  return foundX;
}

// O(N) runtime

// optimized code
function containsX(string) {
  if (string[0] == "X") return true; // O(1) best case for runtime
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "X") {
      return true; // O(N/2) average case;
    }
  }
  return false; // worse case O(N);
}
