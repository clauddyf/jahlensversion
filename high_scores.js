var DisplayScores = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyDj4xslcYXqqDpUtCbz2ULkZN_OgPNxlBs",
        authDomain: "ronaproject-a4a89.firebaseapp.com",
        databaseURL: "https://ronaproject-a4a89.firebaseio.com",
        projectId: "ronaproject-a4a89",
        storageBucket: "ronaproject-a4a89.appspot.com",
        messagingSenderId: "628291255327",
        appId: "1:628291255327:web:077f6871912c9d2794692a",
        measurementId: "G-M379LDKFCQ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var db = firebase.database()
    var dbRef = db.ref()

    var highScores = [];

    debugger
        dbRef.on('value', (response) => {
            const data = response.val()
            let dbScores = []
            debugger
            for (let key in data) {
                dbScores.push({
                    name: data[key].name,
                    score: data[key].score
                })
            }

            dbScores.sort(function (a, b) {
                if (a.score > b.score) {
                    return -1;
                } else if (b.score > a.score) {
                    return 1;
                } else {
                    return 0;
                }
            });
            debugger
            dbScores = dbScores.splice(0, 10)
            highScores.push(dbScores)
            let currentScores = [];
            let ele = document.getElementsByClassName("highscores-module")
            let scoresContainer = ele[0]
            highScores.map(players => {
                return players.map(player => {
                    const playaDetails = `<li>${player.name} - ${player.score} Eradications </li>`
                    currentScores.push(playaDetails)
                })
            })
            scoresContainer.innerHTML =
                `<span  id="closingspan" >x</span>
            <h2>High Scores</h2>
            <div class="leader-boards">
            <ol>` + currentScores.join(" ") + `</ol>
            </div>
            `
            document.getElementById('closingspan').addEventListener('click', function(e){
                debugger
                e.preventDefault()
                const daddy = document.querySelector('section')
                const modal = document.querySelector('.highscores-module')
                daddy.removeChild(modal)
                document.getElementById('newting').style.display = 'flex'
                document.getElementById('displayspan').style.visibility = 'hidden'
            })
        })
 

        // this.displayScores = displayScores = () => {
            const daddy = document.createElement('section')
            
            const scoresContainer = document.createElement('div')
            scoresContainer.className = 'highscores-module'

            debugger

            let splash = document.getElementById('newting')
            document.getElementById('newting').style.display= 'none'
            daddy.appendChild(scoresContainer)
            document.body.appendChild(daddy)
            

}