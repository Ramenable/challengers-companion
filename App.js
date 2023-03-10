import fetch from "node-fetch";


const api = 'RGAPI-28cff6cb-00fe-4535-912f-38c5d8b5783e'
const name = 'Nepal2010'
const temp = await fetchID(name, api);
const puuid = temp[0];
const id = temp[1];
const summonerLevel = temp[2];


async function fetchID(name, api) {   
    try {
        const response = await fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+name+ '?api_key='+api);
        const result = await response.json();
        const puuid = result.puuid;
        const id = result.id;
        const summonerLevel = result.summonerLevel;
        return [puuid, id, summonerLevel];
    } catch (error) {
        console.error(error);
    }
}

async function fetchChallengeLevel(api) {
    try {
        const response = await fetch('https://na1.api.riotgames.com/lol/challenges/v1/player-data/'+puuid+'?api_key='+api);
        const result = await response.json();
        const challengeLevel = result.totalPoints.level
        return challengeLevel;
    } catch (error) {
        console.error(error);
    }
}

async function fetchChampMasteryLevel(api) {
    try {
        const response = await fetch('https://na1.api.riotgames.com/lol/champion-mastery/v4/scores/by-summoner/'+id+'?api_key='+api);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

async function main() {
    const challengeLevel = await fetchChallengeLevel(api);
    const champMastery = await fetchChampMasteryLevel(api);
    console.log("Your account name is " + name)
    console.log("Your account level is " + summonerLevel)
    console.log("Your challenge level is " + challengeLevel)
    console.log("Your champion mastery level is " + champMastery)
}

main();