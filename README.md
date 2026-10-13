# Student Marks Calculator

A beginner-friendly web project that calculates a student's total marks, percentage, grade, and pass/fail status.

## Features
- Student name and roll number fields
- Five subject mark inputs (each out of 100)
- Calculates total marks out of 500
- Calculates percentage
- Assigns a grade
- Checks pass/fail status
- Responsive layout for mobile and desktop
- Runs in the browser; no installation or backend required

## Files
- `index.html` — page structure and form
- `style.css` — styling and responsive layout
- `script.js` — marks, percentage, grade, and result calculations

## How to run
1. Download or clone this repository.
2. Open `index.html` in a web browser.
3. Enter the student details and marks.
4. Select **Calculate Result**.

## Demo grading rules
- Each subject is out of 100.
- A student must score at least 35 in every subject to pass.
- A+: 90% and above
- A: 80–89.99%
- B: 70–79.99%
- C: 60–69.99%
- D: 50–59.99%
- E: below 50% if all subjects are passed
- F: fail if any subject is below 35

These are example rules for this project. Change them in `script.js` if your college uses a different grading system.

## Publish with GitHub Pages
1. Upload these files to your GitHub repository.
2. Open **Settings → Pages**.
3. Under the build and deployment section, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder, then save.
5. Wait for GitHub Pages to publish the site. The URL will look like `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.
