function gameObject() {
    return {
        "home": {
            teamName: 'Brooklyn Nets',
            colors: ['Black' , 'White'],
            players: {
                'Alen Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
            },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
            },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
            },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
            },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
            }
        }
    },
        "away": {
            teamName: 'Charolotte Hornets',
            colors: ['Turquoise' , 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
            },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
            },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
            },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
            },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            }
        }
    }
}


// variables for our use
// home team
let homeTeam = gameObject().home
// away team
let awayTeam = gameObject().away
// all players
let allPlayers = {...awayTeam["players"], ...homeTeam["players"]}


// console.log("Home", homeTeam)
// console.log("away", awayTeam)
// console.log("players", allPlayers)

// Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.

// function numPointsScored(playerName){
//     // if statement that checks if the player is in the home team through bracket notation, if the player is not on the home team then we run the same function with the away team. if it can't find any player
//     for (let player in allPlayers){
//         if (player === playerName) return allPlayers[player].points
//     }
// }

function numPointsScored(name){
    return allPlayers[name].points
}

// console.log(numPointsScored("Brendan Haywood"))

function shoeSize(name){
    return allPlayers[name].shoe
}

// console.log(shoeSize("Brendan Haywood"))

function teamColors(name){
    return homeTeam.teamName === name ? homeTeam.colors : awayTeam.colors
}

// console.log(teamColors('Brooklyn Nets'))

// Build a function, teamNames, that operates on the game object to return an array of the team names.

function teamNames(){
    return [homeTeam.teamName, awayTeam.teamName]
}

// console.log(teamNames())

// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.

function playerNumbers(name){
    let teamPlayers = (homeTeam.teamName === name) ? homeTeam.players : awayTeam.players
    let playerNum = []
    for (let player in teamPlayers){
        playerNum.push(teamPlayers[player].number)
    }
    return playerNum
}

// console.log(playerNumbers('Charolotte Hornets'))

// Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats. Check out the following example of the expected return value of the playerStats function
const ap = allPlayers
function playerStats(n){
    return ap[n]
}

// console.log(playerStats("Brendan Haywood"))


// Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
// First, find the player with the largest shoe size
// Then, return that player's number of rebounds

function bigShoe(){
    let bigPlayer = { shoe: 0, player: null}
    for (let x in allPlayers){
        if (allPlayers[x].shoe > bigPlayer.shoe){
            bigPlayer.shoe = allPlayers[x].shoe
            bigPlayer.player = x
        }
    }
    return bigPlayer
}


function bigShoeRebounds(){
    return allPlayers[bigShoe().player].rebounds
}

console.log(bigShoeRebounds())
// console.log(bigShoe()) { shoe: 19, player: 'Mason Plumlee' }