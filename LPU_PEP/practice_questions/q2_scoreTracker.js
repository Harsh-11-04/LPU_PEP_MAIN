
function createScoreTracker() {
    let score = 0;
    return {
        addScore: function (points) {
            score += points;
            console.log(`Added ${points}. Current Score: ${score}`);
        },
        getScore: function () {
            return score;
        }
    };
}

// Test
const tracker = createScoreTracker();
tracker.addScore(10);
tracker.addScore(20);
console.log("Final Score:", tracker.getScore()); 
