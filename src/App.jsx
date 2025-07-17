import './App.css';

function App() {
  // יצירת אובייקט לטיפול בפרמטרים של ה-URL
  const queryParameters = new URLSearchParams(window.location.search);

  // קריאת הערכים מה-URL. אם הם לא קיימים, נשתמש בערכי ברירת מחדל.
  const customer = queryParameters.get("customer") || "אורח";
  const grade = queryParameters.get("grade") || "N/A";

  return (
    <div className="App"> 
      <header className="App-header">; 
        <h1>פרטי לקוח</h1>
        <div className="userInfo">
          <p><strong>שם לקוח:</strong> {customer}</p>
          <p><strong>ציון:</strong> {grade}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
