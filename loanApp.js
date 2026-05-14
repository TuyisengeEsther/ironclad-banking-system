function processLoans(scores) {
    scores = [650, 800, 500, 720, 410, 900];

  
    let eligible = scores.filter(score => score > 700);

  
    let adjustedScores = scores.map(score => score + 20);

    
    let totalRisk = scores.reduce((total, score) => total + score, 0);

    
    let hasPerfectScore = scores.some(score => score === 900);

    
    let allMeetMinimum = scores.every(score => score >= 400);

  
    let severeRisk = scores.find(score => score < 500);

    
    let severeRiskIndex = scores.findIndex(score => score < 500);

    
    console.log("Eligible Scores:", eligible);
    console.log("Adjusted Scores:", adjustedScores);
    console.log("Total Risk:", totalRisk);
    console.log("Has Perfect Score:", hasPerfectScore);
    console.log("All Meet Minimum:", allMeetMinimum);
    console.log("First Severe Risk Score:", severeRisk);
    console.log("Severe Risk Index:", severeRiskIndex);
}


processLoans();