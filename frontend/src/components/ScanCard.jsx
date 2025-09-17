function ScanCard({ foodName, calories, protein, carbs, fat, image }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "1rem",
      margin: "1rem",
      width: "250px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }}>
      <img src={image} alt={foodName} style={{ width: "100%", borderRadius: "10px" }} />
      <h3>{foodName}</h3>
      <p>Calories: {calories}</p>
      <p>Protein: {protein}g</p>
      <p>Carbs: {carbs}g</p>
      <p>Fat: {fat}g</p>
    </div>
  );
}

export default ScanCard;
