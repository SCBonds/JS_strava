
// function getActivities(){

//     const activities_link =  "https://www.strava.com/api/v3/athlete/activities?access_token=1f8e4d409bb406764ffe3e60b000f0a9099cb6f7"
//     fetch(activities_link)
//         .then((res) => console.log(res.json()))

// }
// getActivities()

function getActivities(res){

    //console.log(res.access_token)
        const activities_link =  `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
        fetch(activities_link)
            .then((res) => console.log(res.json()))
    
    }
    // getActivities()

const auth_link = "https://www.strava.com/oauth/token?"
// client_id= 103330
// client_secret= 05725cb6fd81803cdb9af49dedf2b224ea689a11
// refresh_token= 4d486fe69e2953d4b29fbfb3b13c3bd338a31449
// grant_type=refresh_token

function reAuthorize(){
    fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'

        },

        body: JSON.stringify({

            client_id: '103330',
            client_secret: '05725cb6fd81803cdb9af49dedf2b224ea689a11',
            refresh_token: '4d486fe69e2953d4b29fbfb3b13c3bd338a31449',
            grant_type: 'refresh_token'
        })
    }).then(res => res.json())
        .then(res => getActivities(res))

}
reAuthorize()


// IGNORE BELOW


// const auth_link = "https://www.strava.com/oauth/token"

// function getActivites(res){

//     const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
//     fetch(activities_link)
//         .then((res) => console.log(res.json()))
// }

// function reAuthorize(){
//     fetch(auth_link,{
//         method: 'post',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'

//         },

//         body: JSON.stringify({

//             client_id: '103330',
//             client_secret: '05725cb6fd81803cdb9af49dedf2b224ea689a11',
//             refresh_token: '011bd96e474dc17b26300f7c42ce2a5952eaf72d',
//             grant_type: 'refresh_token'
//         })
//     }).then(res => res.json())
//         .then(res => getActivites(res))  
// }

// reAuthorize()

// //console.log("working")


// const auth_link = "https://www.strava.com/oauth/token"

// function getActivites(res){

//     const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
//     fetch(activities_link)
//         .then((res) => console.log(res.json()))
// }

// function reAuthorize(){
//     fetch(auth_link,{
//         method: 'post',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'

//         },

//         body: JSON.stringify({

//             client_id: '103330',
//             client_secret: '05725cb6fd81803cdb9af49dedf2b224ea689a11',
//             refresh_token: '011bd96e474dc17b26300f7c42ce2a5952eaf72d',
//             grant_type: 'refresh_token'
//         })
//     }).then(res => res.json())
//         .then(res => getActivites(res))  
// }

// reAuthorize()