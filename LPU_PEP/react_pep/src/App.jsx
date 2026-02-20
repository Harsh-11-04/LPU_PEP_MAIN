// import actor1 from "./actor/actor1.js";
// import actor2 from "./actor/actor2.js";
// import actor3 from "./actor/actor3.js";

// console.log(actor1);
// console.log(actor2);
// console.log(actor3);

import superhero1 from "./superheroes/superhero1.js";
import superhero2 from "./superheroes/superhero2.js";
import superhero3 from "./superheroes/superhero3.js";

console.log(superhero1);
console.log(superhero2);
console.log(superhero3);

function App() {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
            <h1>Superheroes</h1>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {[superhero1, superhero2, superhero3].map((hero, index) => (
                    <div
                        key={index}
                        style={{
                            border: "2px solid #333",
                            borderRadius: "8px",
                            padding: "16px",
                            minWidth: "220px",
                            background: "#f9f9f9"
                        }}
                    >
                        <h2>{hero.name}</h2>
                        <p><strong>Real Name:</strong> {hero.realName}</p>
                        <p><strong>Power:</strong> {hero.power}</p>
                        <p><strong>Universe:</strong> {hero.universe}</p>
                        <p><strong>First Appearance:</strong> {hero.firstAppearance}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;