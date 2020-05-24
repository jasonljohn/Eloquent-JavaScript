function displayPyramid(n) {
    let str = "#";
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < i+1; j++) {
        document.write(str);
      }
      document.write("<br>");
    }
  }
  displayPyramid(7);