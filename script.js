const form = document.getElementById("marksForm");
const result = document.getElementById("result");
const subjectIds = ["subject1", "subject2", "subject3", "subject4", "subject5"];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const marks = subjectIds.map((id) => Number(document.getElementById(id).value));
  const allValid = marks.every((mark) => Number.isFinite(mark) && mark >= 0 && mark <= 100);

  if (!allValid) {
    alert("Please enter marks from 0 to 100 for every subject.");
    return;
  }

  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const percentage = total / 5;
  const passed = marks.every((mark) => mark >= 35);

  let grade;
  if (!passed) grade = "F";
  else if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 50) grade = "D";
  else grade = "E";

  document.getElementById("resultName").textContent =
    document.getElementById("studentName").value.trim();
  document.getElementById("resultRoll").textContent =
    document.getElementById("rollNumber").value.trim();
  document.getElementById("totalMarks").textContent = `${total} / 500`;
  document.getElementById("percentage").textContent = `${percentage.toFixed(2)}%`;
  document.getElementById("grade").textContent = grade;

  const statusElement = document.getElementById("status");
  statusElement.textContent = passed ? "PASS" : "FAIL";
  statusElement.style.color = passed ? "#15803d" : "#b91c1c";

  document.getElementById("resultNote").textContent = passed
    ? "Congratulations! You passed all five subjects."
    : "You need at least 35 marks in every subject to pass under this demo rule.";

  result.classList.remove("hidden");
});

form.addEventListener("reset", () => {
  result.classList.add("hidden");
});
