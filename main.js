document.addEventListener("DOMContentLoaded", () => {
  const calculateFormEl = document.getElementById("calculateForm");
  const resultEl = document.getElementById("result");

  const calculateMarks = (event) => {
    event.preventDefault();

    const maxMarks = 600; // Total maximum marks
    const formData = new FormData(calculateFormEl);

    const data = {};

    formData.forEach((value, key) => {
      data[key] = +value; // Convert input values to numbers
    });

    // Check if all values are numbers
    const totalMarks = Object.values(data).reduce((acc, value) => {
      return acc + (isNaN(value) ? 0 : value);
    }, 0);

    // Calculate the percentage
    const percentage = Math.round((totalMarks / maxMarks) * 100);

    // Display the result
    resultEl.innerText = `You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%.`;
    calculateFormEl.after(resultEl);
  };

  // Attach the event listener to the form
  calculateFormEl.addEventListener("submit", calculateMarks);
});
