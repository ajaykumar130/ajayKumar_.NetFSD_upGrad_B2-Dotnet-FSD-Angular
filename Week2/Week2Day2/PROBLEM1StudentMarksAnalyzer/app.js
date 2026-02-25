const marks = [75, 82, 90, 60, 45];
const calculateTotal = (arr) => arr.reduce((sum, mark) => sum + mark, 0);

const calculateAverage = (arr) => calculateTotal(arr) / arr.length;

const getResult = (avg) => avg >= 50 ? "Pass" : "Fail";

const analyzeMarks = (marksArray) => {
    const total = calculateTotal(marksArray);
    const average = calculateAverage(marksArray);
    const result = getResult(average);
    const formattedMarks = marksArray.map(mark => `Mark: ${mark}`).join("<br>");
    const output = `<strong>Marks:</strong><br>${formattedMarks}<br><br>
        <strong>Total:</strong> ${total} <br>
        <strong>Average:</strong> ${average.toFixed(2)} <br>
        <strong>Result:</strong> ${result}`;
    document.getElementById("output").innerHTML = output;
};

analyzeMarks(marks);