// פונקציה לשינוי הטקסט בפסקה עם id="text"
function changeText() {
    document.getElementById("text").textContent = "הטקסט השתנה!";
    // משנה את תוכן הפסקה לטקסט "הטקסט השתנה!"
  }

  // פונקציה לשינוי צבע הרקע של התיבה עם id="box"
  function changeColor() {
    const box = document.getElementById("box"); // גישה לתיבה על ידי ID
    // אם צבע הרקע הוא תכלת, משנה לירוק, אחרת משנה לתכלת
    box.style.backgroundColor = box.style.backgroundColor === "lightblue" ? "lightgreen" : "lightblue";
  }

  // פונקציה להוספת אלמנט חדש (פסקה) לגוף הדף
  function addElement() {
    const newParagraph = document.createElement("p"); // יצירת אלמנט פסקה חדש
    newParagraph.textContent = "אלמנט חדש נוסף!"; // הגדרת הטקסט של הפסקה החדשה
    document.body.appendChild(newParagraph); // הוספת הפסקה החדשה לגוף הדף
  }

  function deleteElement(){
    const deletelem = document.getElementById("h1")
    deletelem.remove()
  }
