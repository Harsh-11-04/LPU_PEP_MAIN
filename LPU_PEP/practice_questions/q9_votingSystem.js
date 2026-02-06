
function createVotingSystem() {
    let votes = { yes: 0, no: 0 };
    return {
        voteYes: function () {
            votes.yes++;
            console.log(`Voted YES. Current Yes: ${votes.yes}, No: ${votes.no}`);
        },
        voteNo: function () {
            votes.no++;
            console.log(`Voted NO. Current Yes: ${votes.yes}, No: ${votes.no}`);
        },
        getResults: function () {
            return votes;
        }
    };
}

// Test
const poll = createVotingSystem();
poll.voteYes();
poll.voteNo();
poll.voteYes();
console.log("Final Results:", poll.getResults());
