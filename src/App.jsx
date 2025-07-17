import './App.css';

function App() {
  // יצירת אובייקט לטיפול בפרמטרים של ה-URL
  const queryParameters = new URLSearchParams(window.location.search);

  // קריאת הערכים מה-URL. אם הם לא קיימים, נשתמש בערכי ברירת מחדל.
  const username = queryParameters.get("username") || "משתמש אורח";
  const score = queryParameters.get("score") || "N/A";

  return (
    <div className="App"> 
      <header className="App-header">; 
        <h1>פרטי לקוח</h1>
        <div className="userInfo">
          <p><strong>שם משתמש:</strong> {username}</p>
          <p><strong>ציון:</strong> {score}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
