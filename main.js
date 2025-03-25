(function start() {
    const interval = 200

    const id = "" //insert id here
    function auto() {
        const data = {
            "_id": "67e31bcbe59e60a5004d7863",
            "connectDiscord": false,
            "connectX": false,
            "followX": false,
            "subChannel": false,
            "joinGroup": false,
            "likeAndRt": false,
            "react": false,
            "oneRef": false,
            "fiveRef": false,
            "tenRef": false,
            "twentyRef": false,
            "fiftyRef": false,
            "oneHundredRef": false,
            "twoHundredRef": false,
            "threeHundredRef": false,
            "fiveHundredRef": false,
            "oneThousandRef": true,
            "oneNode": false,
            "fiveNode": false,
            "tenNode": false,
            "fiftyNode": false,
            "oneHundredNode": true,
            "twoHoursUptime": false,
            "fourHoursUptime": false,
            "eightHoursUptime": false,
            "twelveHoursUptime": false,
            "playTonTon": false,
            "playMove": false,
            "playTonpoke": false,
            "playQuantumAi": false,
            "playBagelFinance": false,
            "playMajyoTreasure": false,
            "playCandyDream": false,
            "joinRoarcoin": false,
            "followMeganetIntern": false,
            "playPookie": false,
            "likeAndRtMilestone": false,
            "reactMilestone": false,
            "playPixiland": false,
            "playBizTycoon": false,
            "playEton": false,
            "playBitgame": false,
            "joinAndShare": false,
            "launchAngelPoop": false,
            "likeAndRtMgntAnnounce": false,
            "reactMgntAnnounce": false,
            "likeRtCommentGm": false,
            "voteLikeRtCommentPoll": false,
            "reactVotePoll": false,
            "glaslessCrossChainExp": false,
            "joinDiscord": false,
            "likeRtDiscordOpen": false,
            "reactDiscordOpen": false,
            "playMegamine": false,
            "killEnemyInTonBattle": false,
            "playMortaleKlicker": false,
            "rubTheEgg": false,
            "joinEarnTon": false,
            "playAndEarnDogs": false,
            "joinVndgAirdrop": false,
            "likeSupportAiDevelopment": false,
            "reactSupportAiDevelopment": false,
            "likeRtTweet": false,
            "earnUsdtOnPokeCenter": false,
            "playVoxel": false,
            "playBayc": false,
            "joinKoko": false,
            "joinMasterverses": false,
            "likeRtOneMillionNode": false,
            "reactOneMillionNode": false,
            "__v": 0
        }

        fetch(`https://api.meganet.app/wallets/task/${id}/oneHundredNode`, {
            method: "PATCH",
            body: JSON.stringify({
                key: data
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error("Error:", error));
    }

    setInterval(auto, interval)
})()
