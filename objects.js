// Create a custom object representing a soccer player
let player = 
{
    name: "Lionel Messi",
    team: "Barcelona",
    goals: 28,
    assists: 10,

    // Method to update the player's goals
    updateGoals: function(newGoals) 
    {
        this.goals = newGoals;
        alert(`${this.name} now has ${this.goals} goals this season!`);
    },

    // Method to update the player's assists
    updateAssists: function(newAssists)
     {
        this.assists = newAssists;
        alert(`${this.name} now has ${this.assists} assists!`);
    },

    // Method to update the player's team
    updateTeam: function(newTeam)
     {
        this.team = newTeam;
        alert(`${this.name} now plays for ${this.team}.`);
    },

    // Method to run all updates: goals, assists, and team
    updatePlayerStats: function() 
    {

        // Prompt for the goals
        let newGoals = prompt("Enter the new number of goals for " + this.name + ":", this.goals);
        if (newGoals != null && !isNaN(newGoals)) {
            this.updateGoals(Number(newGoals)); // Update the goals if it's valid
        } else {
            alert("Please enter a valid number for the goals.");
        }

        // Prompt for the assists
        let newAssists = prompt("Enter the new number of assists for " + this.name + ":", this.assists);
        if (newAssists != null && !isNaN(newAssists)) {
            this.updateAssists(Number(newAssists)); // Update the assists if it's valid
        } else {
            alert("Please enter a valid number for the assists.");
        }

        // Prompt for the team
        let newTeam = prompt("Enter the new team for " + this.name + ":", this.team);
        if (newTeam != null && newTeam.trim() !== "") {
            this.updateTeam(newTeam); // Update the team if it's valid
        } else {
            alert("Please enter a valid team name.");
        }
        
    },

   
};

// Output the player details to the console
     player.updatePlayerStats();  // Update player stats using the object's method
     console.log(player);
