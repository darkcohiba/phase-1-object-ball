function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['black', 'white'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['turquoise', 'purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 2,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}
const home = gameObject().home;
const away = gameObject().away;
const players = {...home['players'], ...away['players']};

console.log(players)


function pointsScored(player){
    for(let p in players){
        if(p = player){
            return players[p].points;
        }
    }
}

console.log('points scored by player is ' + (pointsScored('Jeff Adrien')))

function shoeSize(player){
    for(let p in players){
        if (p = player){
            return players[p].shoe;
        }
    }
}

console.log('Shoe size is ' + (shoeSize('Jeff Adrien')))

function teamColors(name){
    return home.teamName == name ? home.colors : away.colors;
}

console.log(teamColors("Charlotte Hornets"))



function teamNames(){
    return [home.teamName, away.teamName]
}

console.log(teamNames())

function playerNumbers(name){
    let teamPlayers = (home.teamName == name ? home.players : away.players)
    console.log(teamPlayers)
    let result = [];
    for (let player in teamPlayers){
        result.push(teamPlayers[player].number)
    }
    return result;
}


console.log(playerNumbers("Charlotte Hornets"))

function playerStats(name) {
    return players[name]
}

console.log(playerStats('Bismak Biyombo'))

function bigShoeRebounds(){
    return players[bigShoe().player].rebounds
}

console.log(bigShoeRebounds());




// helper functions //

function bigShoe(){
    let bigPlayer = { shoe: 0, player: null}
    for(let player in players){
        if(players[player].shoe > bigPlayer.shoe){
            bigPlayer.shoe = players[player].shoe
            bigPlayer.player = player
        }
    }
    return bigPlayer
}

