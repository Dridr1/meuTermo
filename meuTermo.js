const newGame = () => {
    const solution = window.prompt("sua palavra com acento");
    const normSolution = window.prompt("sua palavra sem acento");
    let gameData = {
        "config": {
            "highContrast": 0,
            "hardMode": 0
        },
        "meta": {
            "startTime": 1731454163250,
            "endTime": 1731454178140,
            "highContrastChange": 0
        },
        "stats": {
            "games": 0,
            "wins": 0,
            "curstreak": 1,
            "avgtime": 15,
            "mintime": 15,
            "maxtime": 15,
            "maxstreak": 1,
            "lastwin": 1045,
            "histo": [1, 0, 0, 0, 0, 0]
        },
        "state": [
            {
                "curday": 1045,
                "solution": solution,
                "normSolution": normSolution,
                "tries": [],
                "invalids": [],
                "curRow": -1,
                "curTry": [],
                "gameOver": 0,
                "won": 0
            }
        ]
    }

    localStorage.setItem("termo", JSON.stringify(gameData));
    window.location.reload();
}
