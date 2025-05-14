

// --- LANGUAGE STRINGS (SHOULD BE AT THE VERY TOP) ---
const languageStrings = {
    en: {
        pageTitle: "Mortgage Optimizer Pro - Compare Scenarios", mainHeading: "Mortgage Optimizer Pro - Compare Scenarios",
        extraPaymentOptionsTitle: "Extra Payment Options (Current Scenario):", loanBalanceComparisonTitle: "Loan Balance Comparison",
        amortizationScheduleTitle: "Amortization Schedule (Current Scenario)", loanAmountLabel: "Loan Amount:",
        annualInterestRateLabel: "Annual Interest Rate (%):", loanTermYearsLabel: "Loan Term (Years):",
        extraMonthlyPaymentLabel: "Extra Monthly Payment (optional):", lumpSumPaymentLabel: "Lump Sum Payment (optional):",
        lumpSumMonthLabel: "Month of Lump Sum Payment:", calculateButton: "Calculate Current Scenario",
        pinScenarioAButton: "Pin as Scenario A & Compare", clearComparisonButton: "Clear Comparison",
        scenarioAStandardTitle: "Scenario A (Standard)", scenarioAAcceleratedTitle: "Scenario A (Accelerated)",
        currentStandardRefTitle: "Current Standard Scenario (Reference)", currentAcceleratedTitle: "Current Accelerated Scenario",
        scenarioBStandardTitle: "Scenario B (Standard)", scenarioBAcceleratedTitle: "Scenario B (Accelerated)",
        enterScenarioBPrompt: 'Enter data for Scenario B and press "Calculate Current Scenario"',
        monthlyPaymentText: "Monthly Payment:", totalInterestPaidText: "Total Interest Paid:",
        totalCostOfLoanText: "Total Cost of Loan:", payoffPeriodText: "Payoff Period:",
        newPayoffPeriodText: "New Payoff Period:", yearsAndMonthsSoonerText: "sooner",
        totalMonthsText: "months total", interestSavedText: "Interest Saved:",
        noTimeSavedText: "No time saved", checkComparisonText: "Check comparison",
        chartStandardBalanceLabel: "Standard Balance (Reference)", chartScenarioALabel: "Scenario A",
        chartScenarioBLabel: "Scenario B", chartMonthsLabel: "Months", chartLoanBalanceLabel: "Loan Balance",
        colMonth: "#", colTotalPmt: "Total Pmt", colInterest: "Interest", colPrincipalStd: "Principal (Std)",
        colExtraMonthly: "Extra (Monthly)", colExtraLump: "Extra (Lump)", colBalance: "Balance",
        validationErrorAlert: "Validation Errors:\n", lumpSumMonthErrorAlert1: "Month of lump sum payment (",
        lumpSumMonthErrorAlert2: ") cannot exceed the total loan term (", lumpSumMonthErrorAlert3: " months).",
        calculateFirstAlert: "Please calculate a scenario first.",
        pinnedAlert1: "Current scenario pinned as Scenario A. Modify inputs for Scenario B and press 'Calculate Current Scenario'.",
        adviceTitle1: "Expert Tip #1: Smart Borrowing & Early Repayment Strategy",
        adviceText1_p1: "People often max out their borrowing (e.g., 40% debt-to-income), but financial specialists recommend aiming for a maximum of 25-30%. This provides greater financial stability. Also, always consult a real estate technical expert before purchasing a property to avoid costly, hidden surprises – don't just see it and immediately pay!",
        adviceText1_p2: "<strong>Early Repayment Example:</strong>",
        adviceText1_p3: "Consider a loan of €70,000 (approx. 350,000 Lei) for a 2-room apartment in a decent Bucharest area, over 30 years, with an 8% variable interest rate. This might mean a monthly payment of around 2567 Lei.",
        adviceText1_p4: "In the first month, only about 220 Lei could go towards your actual loan principal, while the remaining 2347 Lei is interest paid to the bank! This ratio of principal to interest inverts slowly over the years; in the first half of the loan, you pay more interest each month than principal.",
        adviceText1_p5: "The Strategy: Your payment is due on the 15th. You pay your 2567 Lei. The next day, the 16th, you go to the bank with an additional 200 Lei. You submit a request for 'partial early repayment' (<em>plată parțial anticipată</em>) and choose the option to 'REDUCE THE LOAN PERIOD' (<em>reducerea perioadei</em>), not reduce the monthly payment amount.",
        adviceText1_p6: "The Impact: By reducing the period with that extra 200 Lei, you've effectively reduced the principal on which future interest is calculated. You stop paying 8% annual interest on that 200 Lei for ALL the remaining years of the loan. This is because the interest for the next day (e.g., 2300 Lei interest / 30 days = ~76 Lei daily interest) now applies to a slightly smaller principal. Every day costs interest, so paying down principal faster saves you from those future daily interest charges on the amount prepaid. Use the calculator above to see your exact potential savings!",
        adviceTitle2: "A User's Real-Life Success with Early & Strategic Payments",
        adviceText2_p1: "I took a €50,000 loan in 2020, with a 5% fixed rate for 7 years. Over 3 years, I paid back about €35,000.",
        adviceText2_p2: "This year, I took advantage of the 'Family Start' program, transferred my loan to CEC Bank, and slightly increased my monthly payment.",
        adviceText2_p3: "Currently, the interest portion of my monthly payment is only 150 Lei, while about 2000 Lei goes towards the principal.",
        adviceText2_p4: "I paid off the mortgage completely and became a full homeowner after just 4 years! Early repayment saved me many, many years on the loan.",
        adviceText2_p5: "Now, I only have about €11,000 left. Because the current interest on this remaining amount is so low, I'm no longer aggressively making extra payments. I'm keeping the current payment as is and using the money I'm 'saving' on potential high interest to save for vacations.",
        poweredByText: "Powered by Insomniscape Technologies"
    },
    ro: {
        pageTitle: "Optimizer Ipotecă Pro - Compară Scenarii", mainHeading: "Optimizer Ipotecă Pro - Compară Scenarii",
        extraPaymentOptionsTitle: "Opțiuni Plăți Suplimentare (Scenariul Curent):", loanBalanceComparisonTitle: "Comparație Sold Credit",
        amortizationScheduleTitle: "Grafic de Rambursare (Scenariul Curent)", loanAmountLabel: "Suma împrumutată:",
        annualInterestRateLabel: "Rata dobânzii anuale (%):", loanTermYearsLabel: "Perioada creditului în ani:",
        extraMonthlyPaymentLabel: "Plată suplimentară lunară (opțional):", lumpSumPaymentLabel: "Plată unică (opțional):",
        lumpSumMonthLabel: "Luna plății unice:", calculateButton: "Calculează Scenariul Curent",
        pinScenarioAButton: "Salvează ca Scenariul A & Compară", clearComparisonButton: "Șterge Comparația",
        scenarioAStandardTitle: "Scenariul A (Standard)", scenarioAAcceleratedTitle: "Scenariul A (Accelerat)",
        currentStandardRefTitle: "Scenariul Standard (Referință Curentă)", currentAcceleratedTitle: "Scenariul Curent (Accelerat)",
        scenarioBStandardTitle: "Scenariul B (Standard)", scenarioBAcceleratedTitle: "Scenariul B (Accelerat)",
        enterScenarioBPrompt: 'Introduceți datele pentru Scenariul B și apăsați "Calculează Scenariul Curent"',
        monthlyPaymentText: "Rata lunară:", totalInterestPaidText: "Dobânda totală plătită:",
        totalCostOfLoanText: "Costul total al creditului:", payoffPeriodText: "Perioada de rambursare:",
        newPayoffPeriodText: "Noua perioadă de rambursare:", yearsAndMonthsSoonerText: "mai devreme",
        totalMonthsText: "luni total", interestSavedText: "Dobândă Economisită:",
        noTimeSavedText: "Nicio economie de timp", checkComparisonText: "Verificați comparația",
        chartStandardBalanceLabel: "Sold Standard (Referință)", chartScenarioALabel: "Scenariul A",
        chartScenarioBLabel: "Scenariul B", chartMonthsLabel: "Luni", chartLoanBalanceLabel: "Sold Credit",
        colMonth: "#", colTotalPmt: "Plată Totală", colInterest: "Dobândă", colPrincipalStd: "Principal (Std)",
        colExtraMonthly: "Extra (Lunar)", colExtraLump: "Extra (Unic)", colBalance: "Sold Rămas",
        validationErrorAlert: "Erori de validare:\n", lumpSumMonthErrorAlert1: "Luna plății unice (",
        lumpSumMonthErrorAlert2: ") nu poate depăși durata totală a creditului (", lumpSumMonthErrorAlert3: " luni).",
        calculateFirstAlert: "Vă rugăm calculați mai întâi un scenariu.",
        pinnedAlert1: "Scenariul curent a fost salvat ca Scenariul A. Modificați intrările pentru Scenariul B și apăsați 'Calculează Scenariul Curent'.",
        adviceTitle1: "Sfat de Specialist: Îndatorare Inteligentă & Strategia Plății Anticipate",
        adviceText1_p1: "Oamenii se îndatorează la gradul maxim permis de bancă (40%), când specialiștii recomandă un prag de maxim 25-30%. De asemenea, apelați întotdeauna la un expert tehnic imobiliar înainte de a cumpăra, pentru a evita surprize costisitoare – nu doar vedeți casa și plătiți imediat!",
        adviceText1_p2: "<strong>Exemplu Plată Anticipată Parțială:</strong>",
        adviceText1_p3: "Credit de 70.000 de euro (echivalentul a 350.000 de lei) pentru un apartament de 2 camere, confort 2, într-o zonă decentă a Bucureștiului. Credit pe 30 de ani cu dobândă de 8% variabilă. Aceasta înseamnă o rată de aproximativ 2567 Lei pe lună.",
        adviceText1_p4: "Principalul – banul pe care îl dai înapoi băncii în fiecare lună din creditul luat – este în prima lună poate doar 220 Lei. Dobânda băncii este diferența, adică 2347 Lei în prima lună. Raportul se inversează ușor-ușor, cu câte un leu-doi; în prima jumătate a creditului plătești mai multă dobândă în fiecare lună decât principal.",
        adviceText1_p5: "Strategia: Data scadentă este pe 15 ale lunii. Plătești rata de 2567 Lei. A doua zi, pe 16, te mai duci la bancă cu încă 200 de Lei. Soliciți o cerere de 'plată parțial anticipată' (adică în avans) și plătești suma de 200 Lei. Vei avea opțiunea să alegi între 'reducerea perioadei' și 'reducerea ratei'. Tu vrei să REDUCI PERIOADA.",
        adviceText1_p6: "Impactul: Reducând perioada cu acei 200 Lei, ai scăzut direct principalul. Nu vei mai plăti dobânda de 8% pe an pentru acei 200 Lei pentru TOȚI anii rămași din credit! Dobânda zilnică (ex: 2300 Lei dobândă lunară / 30 zile = ~76 Lei/zi) se aplică acum unui principal mai mic. Fiecare zi costă dobândă, deci reducerea principalului te scutește de acele costuri viitoare. Folosește calculatorul pentru a vedea exact cât economisești!",
        adviceTitle2: "Experiența Reală a unui Utilizator cu Plăți Anticipate și Strategice",
        adviceText2_p1: "Am luat un credit în 2020 de 50.000€, rată fixă 7 ani de 5%. Am plătit din el în 3 ani cam 35.000€.",
        adviceText2_p2: "Anul acesta am prins programul Family Start. L-am \"mutat\" la CEC. Și am mai crescut puțin rata.",
        adviceText2_p3: "Practic, în momentul acesta, dobânda lunară plătită de mine este 150 Lei. Iar principalul se învârte la 2000 Lei.",
        adviceText2_p4: "Am închis ipotecarul, deci sunt proprietar după 4 ani!",
        adviceText2_p5: "Plata anticipată mi-a oferit foarte mulți ani în minus. Acum am rămas cu aproximativ 11.000€, dar la cât de mică e dobânda, nu mă mai chinui să plătesc anticipat - păstrez rata așa cum este ea și folosesc \"dobânda\" câștigată (economiile) să strâng de concedii.",
        poweredByText: "Realizat de Insomniscape Technologies"
    }
};

let currentLanguage = localStorage.getItem('preferredLanguage') || 'ro';
let loanChart = null;
let scenarioAData = null;
let currentScenarioData = null;

// --- LANGUAGE FUNCTIONS ---
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    applyTranslations();

    const S = languageStrings[currentLanguage];
    if (scenarioAData) {
        const isAEffectivelyAccelerated = scenarioAData.acceleratedResults && (scenarioAData.acceleratedResults.numberOfPayments < scenarioAData.standardResults.numberOfPayments || scenarioAData.acceleratedResults.totalInterest < scenarioAData.standardResults.totalInterest - 0.01);
        const titleAKey = isAEffectivelyAccelerated ? 'scenarioAAcceleratedTitle' : 'scenarioAStandardTitle';
        const resultsA = isAEffectivelyAccelerated ? scenarioAData.acceleratedResults : scenarioAData.standardResults;
        document.getElementById('scenarioAResults').innerHTML = displaySummaryContent(S[titleAKey], resultsA, isAEffectivelyAccelerated, scenarioAData.standardResults.totalInterest);
    }

    if (currentScenarioData && currentScenarioData.standardResults) {
        const currentResultsContainer = document.getElementById('currentScenarioResults');
        let currentTitleKey, currentResultsToDisplay, currentIsEffectivelyAccelerated;
        
        const standardResultsForCurrentInputs = currentScenarioData.standardResults;
        const inputs = currentScenarioData.inputs;
        const isExtraMonthlyEffective = inputs.extraMonthlyPayment > 0;
        const isLumpSumEffective = inputs.lumpSumPayment > 0 && inputs.lumpSumMonth > 0 && inputs.lumpSumMonth <= standardResultsForCurrentInputs.numberOfPayments;

        if (currentScenarioData.acceleratedResults && (isExtraMonthlyEffective || isLumpSumEffective) &&
            (currentScenarioData.acceleratedResults.numberOfPayments < standardResultsForCurrentInputs.numberOfPayments || currentScenarioData.acceleratedResults.totalInterest < standardResultsForCurrentInputs.totalInterest - 0.01)) {
            currentTitleKey = scenarioAData ? 'scenarioBAcceleratedTitle' : 'currentAcceleratedTitle';
            currentResultsToDisplay = currentScenarioData.acceleratedResults;
            currentIsEffectivelyAccelerated = true;
        } else {
            currentTitleKey = scenarioAData ? 'scenarioBStandardTitle' : 'currentStandardRefTitle';
            if (inputs.extraMonthlyPayment > 0 || (inputs.lumpSumPayment > 0 && inputs.lumpSumMonth > 0)) {
                currentTitleKey += "*";
            }
            currentResultsToDisplay = standardResultsForCurrentInputs;
            currentIsEffectivelyAccelerated = false;
        }
        currentResultsContainer.innerHTML = displaySummaryContent(S[currentTitleKey] || currentTitleKey.replace('*', ` (${S.checkComparisonText.toLowerCase()})`), currentResultsToDisplay, currentIsEffectivelyAccelerated, standardResultsForCurrentInputs.totalInterest);
    } else if (scenarioAData) {
         document.getElementById('currentScenarioResults').innerHTML = `<h4>${S.enterScenarioBPrompt}</h4><div id="resultSummaryCurrent"></div><div id="earlyRepaymentResultCurrent"></div>`;
    }

    if (loanChart) { updateChart(); }
}

function applyTranslations() {
    const S = languageStrings[currentLanguage];
    if (!S) { console.error("Language strings not found for:", currentLanguage); return; }
    document.documentElement.lang = currentLanguage;
    setText('pageTitle', S.pageTitle); setText('mainHeading', S.mainHeading);
    setText('extraPaymentOptionsTitle', S.extraPaymentOptionsTitle); setText('loanBalanceComparisonTitle', S.loanBalanceComparisonTitle);
    setText('amortizationScheduleTitle', S.amortizationScheduleTitle); setText('loanAmountLabel', S.loanAmountLabel);
    setText('annualInterestRateLabel', S.annualInterestRateLabel); setText('loanTermYearsLabel', S.loanTermYearsLabel);
    setText('extraMonthlyPaymentLabel', S.extraMonthlyPaymentLabel); setText('lumpSumPaymentLabel', S.lumpSumPaymentLabel);
    setText('lumpSumMonthLabel', S.lumpSumMonthLabel); setText('calculateButton', S.calculateButton);
    setText('pinScenarioAButton', S.pinScenarioAButton); setText('clearComparisonButton', S.clearComparisonButton);
    
    setText('adviceTitle1', S.adviceTitle1); setText('adviceText1_p1', S.adviceText1_p1);
    setText('adviceText1_p2', S.adviceText1_p2); setText('adviceText1_p3', S.adviceText1_p3);
    setText('adviceText1_p4', S.adviceText1_p4); setText('adviceText1_p5', S.adviceText1_p5);
    setText('adviceText1_p6', S.adviceText1_p6);
    setText('adviceTitle2', S.adviceTitle2); setText('adviceText2_p1', S.adviceText2_p1);
    setText('adviceText2_p2', S.adviceText2_p2); setText('adviceText2_p3', S.adviceText2_p3);
    setText('adviceText2_p4', S.adviceText2_p4); setText('adviceText2_p5', S.adviceText2_p5);
    setText('poweredByText', S.poweredByText);

    const currentResultsContainer = document.getElementById('currentScenarioResults');
    if (scenarioAData && (!currentScenarioData || !currentScenarioData.standardResults )) {
        currentResultsContainer.innerHTML = `<h4>${S.enterScenarioBPrompt}</h4><div id="resultSummaryCurrent"></div><div id="earlyRepaymentResultCurrent"></div>`;
    }
    try {
        setText('colMonth', S.colMonth); setText('colTotalPmt', S.colTotalPmt); setText('colInterest', S.colInterest);
        setText('colPrincipalStd', S.colPrincipalStd); setText('colExtraMonthly', S.colExtraMonthly);
        setText('colExtraLump', S.colExtraLump); setText('colBalance', S.colBalance);
    } catch (e) { /* Table might not be visible */ }
}

function setText(id, text) {
    const element = document.getElementById(id);
    if (element) {
        if (text && typeof text === 'string' && text.includes('<')) { 
            element.innerHTML = text;
        } else if (text !== undefined && text !== null) {
            element.innerText = text;
        } else {
            element.innerText = ''; 
        }
    }
}

// --- CORE CALCULATION AND DISPLAY FUNCTIONS ---
function calculateAndDisplayCurrent() {
    const S = languageStrings[currentLanguage];
    const inputs = getInputs();
    if (!inputs) { clearAllDisplays(true); return; }

    const standardResultsForCurrentInputs = calculateStandardLoan(inputs.principal, inputs.annualInterestRate, inputs.loanTermYears);
    if (!standardResultsForCurrentInputs) { clearAllDisplays(true); return; }

    currentScenarioData = {
        inputs: inputs, standardResults: standardResultsForCurrentInputs,
        acceleratedResults: null, standardBalanceHistory: standardResultsForCurrentInputs.balanceHistory,
        acceleratedBalanceHistory: []
    };

    const currentScenarioContainer = document.getElementById('currentScenarioResults');
    currentScenarioContainer.innerHTML = ''; 

    let currentTitleKey, currentResultsToDisplay, currentIsEffectivelyAccelerated;
    let currentAmortizationSchedule = standardResultsForCurrentInputs.schedule;

    const isExtraMonthlyEffective = inputs.extraMonthlyPayment > 0;
    const isLumpSumEffective = inputs.lumpSumPayment > 0 && inputs.lumpSumMonth > 0 && inputs.lumpSumMonth <= standardResultsForCurrentInputs.numberOfPayments;

    if (isExtraMonthlyEffective || isLumpSumEffective) {
        const accelerated = calculateAcceleratedLoan(
            inputs.principal, inputs.annualInterestRate, standardResultsForCurrentInputs.monthlyPayment,
            standardResultsForCurrentInputs.numberOfPayments, 
            inputs.extraMonthlyPayment,
            isLumpSumEffective ? inputs.lumpSumPayment : 0, 
            isLumpSumEffective ? inputs.lumpSumMonth : 0     
        );
        
        if (accelerated && (accelerated.numberOfPayments < standardResultsForCurrentInputs.numberOfPayments || accelerated.totalInterest < standardResultsForCurrentInputs.totalInterest - 0.01)) {
            currentScenarioData.acceleratedResults = accelerated;
            currentScenarioData.acceleratedBalanceHistory = accelerated.balanceHistory;
            currentTitleKey = scenarioAData ? 'scenarioBAcceleratedTitle' : 'currentAcceleratedTitle';
            currentResultsToDisplay = accelerated;
            currentIsEffectivelyAccelerated = true;
            currentAmortizationSchedule = accelerated.schedule;
        } else {
            currentTitleKey = scenarioAData ? 'scenarioBStandardTitle' : 'currentStandardRefTitle';
            if (inputs.extraMonthlyPayment > 0 || (inputs.lumpSumPayment > 0 && inputs.lumpSumMonth > 0)) { 
                 currentTitleKey += "*"; 
            }
            currentResultsToDisplay = standardResultsForCurrentInputs;
            currentIsEffectivelyAccelerated = false;
        }
    } else {
        currentTitleKey = scenarioAData ? 'scenarioBStandardTitle' : 'currentStandardRefTitle';
        currentResultsToDisplay = standardResultsForCurrentInputs;
        currentIsEffectivelyAccelerated = false;
    }
    
    let displayTitle = S[currentTitleKey] || currentTitleKey.replace('*', ` (${S.checkComparisonText.toLowerCase()})`);
    currentScenarioContainer.innerHTML = displaySummaryContent(displayTitle, currentResultsToDisplay, currentIsEffectivelyAccelerated, standardResultsForCurrentInputs.totalInterest);
    generateAmortizationTable(currentAmortizationSchedule);
    updateChart();

    document.getElementById('pinScenarioAButton').disabled = false;
    document.getElementById('clearComparisonButton').style.display = scenarioAData ? 'block' : 'none';
}

function getInputs() {
    const S = languageStrings[currentLanguage];
    const principal = parseFloat(document.getElementById('principal').value);
    const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value);
    const loanTermYears = parseInt(document.getElementById('loanTermYears').value);
    const extraMonthlyPayment = parseFloat(document.getElementById('extraMonthlyPayment').value) || 0;
    const lumpSumPayment = parseFloat(document.getElementById('lumpSumPayment').value) || 0;
    const lumpSumMonth = parseInt(document.getElementById('lumpSumMonth').value) || 0;
    const errorMessages = [];
    if (isNaN(principal) || principal <= 0) errorMessages.push((S.loanAmountLabel || "Loan Amount").replace(':', '') + " invalid/ă.");
    if (isNaN(annualInterestRate) || annualInterestRate < 0) errorMessages.push((S.annualInterestRateLabel || "Annual Interest Rate").replace(':', '') + " invalid/ă.");
    if (isNaN(loanTermYears) || loanTermYears <= 0) errorMessages.push((S.loanTermYearsLabel || "Loan Term").replace(':', '') + " invalid/ă.");
    if (isNaN(extraMonthlyPayment) || extraMonthlyPayment < 0) errorMessages.push((S.extraMonthlyPaymentLabel || "Extra Monthly Payment").replace(':', '') + " invalid/ă.");
    if (isNaN(lumpSumPayment) || lumpSumPayment < 0) errorMessages.push((S.lumpSumPaymentLabel || "Lump Sum Payment").replace(':', '') + " invalid/ă.");
    if (isNaN(lumpSumMonth) || lumpSumMonth < 0) errorMessages.push((S.lumpSumMonthLabel || "Lump Sum Month").replace(':', '') + " invalid/ă.");
    if (loanTermYears > 0) {
        const originalNumberOfPayments = loanTermYears * 12;
        if (lumpSumPayment > 0 && lumpSumMonth > originalNumberOfPayments) {
             errorMessages.push(S.lumpSumMonthErrorAlert1 + lumpSumMonth + S.lumpSumMonthErrorAlert2 + originalNumberOfPayments + S.lumpSumMonthErrorAlert3);
        }
    }
    if (errorMessages.length > 0) {
        alert(S.validationErrorAlert + errorMessages.join("\n"));
        return null;
    }
    return { principal, annualInterestRate, loanTermYears, extraMonthlyPayment, lumpSumPayment, lumpSumMonth };
}

function calculateStandardLoan(principal, annualInterestRate, loanTermYears) {
    const monthlyInterestRate = (annualInterestRate / 100) / 12;
    const numberOfPayments = loanTermYears * 12;
    let consistentMonthlyPayment; 
    if (numberOfPayments <= 0) return null;
    if (annualInterestRate === 0) {
        consistentMonthlyPayment = principal / numberOfPayments;
    } else {
        const powerTerm = Math.pow((1 + monthlyInterestRate), numberOfPayments);
        const numerator = monthlyInterestRate * powerTerm;
        const denominator = powerTerm - 1;
        if (denominator === 0 || isNaN(denominator) || denominator === Infinity) return null; 
        consistentMonthlyPayment = principal * (numerator / denominator);
    }
    if (isNaN(consistentMonthlyPayment) || !isFinite(consistentMonthlyPayment)) return null;
    const schedule = [];
    const balanceHistory = [principal];
    let currentBalance = principal;
    let actualTotalPaid = 0;
    for (let i = 1; i <= numberOfPayments; i++) {
        const interest = currentBalance * monthlyInterestRate;
        let pPaid = consistentMonthlyPayment - interest;
        let actualPaymentThisMonth = consistentMonthlyPayment;
        if (i === numberOfPayments || (currentBalance - pPaid < 0.01 && currentBalance - pPaid > -0.01 && pPaid >= 0) ) { 
            pPaid = currentBalance; 
            actualPaymentThisMonth = interest + pPaid; 
        }
        if (pPaid > currentBalance + 0.01 && currentBalance > 0) pPaid = currentBalance;
        if (pPaid < 0 && currentBalance > 0) pPaid = 0;
        currentBalance -= pPaid;
        currentBalance = (currentBalance < 0.005 && currentBalance > -0.005) ? 0 : currentBalance; 
        schedule.push({ month: i, totalPayment: actualPaymentThisMonth, interest: interest, principalStandard: pPaid, principalExtraMonthly: 0, principalLumpSum: 0, balance: currentBalance });
        balanceHistory.push(currentBalance);
        actualTotalPaid += actualPaymentThisMonth;
        if (currentBalance === 0) break;
    }
    const actualTotalInterest = actualTotalPaid - principal;
    return { monthlyPayment: consistentMonthlyPayment, totalInterest: actualTotalInterest, totalPaid: actualTotalPaid, numberOfPayments: schedule.length, schedule, balanceHistory };
}

function calculateAcceleratedLoan(principal, annualInterestRate, standardMonthlyPayment, originalNumberOfPayments, extraMonthly, lumpSum, lumpMonth) {
    const monthlyInterestRate = (annualInterestRate / 100) / 12;
    const schedule = [];
    const balanceHistory = [principal];
    let currentBalance = principal;
    let totalInterestPaidAccumulated = 0;
    let months = 0;
    let lumpSumAppliedThisCalc = false;
    while (currentBalance > 0.005 && months < originalNumberOfPayments * 2.5) {
        months++;
        const interestThisMonth = currentBalance * monthlyInterestRate;
        totalInterestPaidAccumulated += interestThisMonth;
        let principalFromStandardPart = standardMonthlyPayment - interestThisMonth;
        if (principalFromStandardPart < 0) principalFromStandardPart = 0;
        let actualExtraMonthlyPayment = extraMonthly;
        let actualLumpSumPayment = 0;
        let tempBalanceForPrincipalApplication = currentBalance; 
        if (lumpSum > 0 && months === lumpMonth && !lumpSumAppliedThisCalc && lumpMonth > 0) {
            actualLumpSumPayment = Math.min(lumpSum, tempBalanceForPrincipalApplication);
            tempBalanceForPrincipalApplication -= actualLumpSumPayment;
            lumpSumAppliedThisCalc = true;
        }
        let appliedStdPrincipal = 0;
        if (tempBalanceForPrincipalApplication > 0) {
            appliedStdPrincipal = Math.min(principalFromStandardPart, tempBalanceForPrincipalApplication);
            tempBalanceForPrincipalApplication -= appliedStdPrincipal;
        }
        let appliedExtraMonthly = 0;
        if (tempBalanceForPrincipalApplication > 0) {
            appliedExtraMonthly = Math.min(actualExtraMonthlyPayment, tempBalanceForPrincipalApplication);
            tempBalanceForPrincipalApplication -= appliedExtraMonthly;
        }
        currentBalance = (tempBalanceForPrincipalApplication < 0.005 && tempBalanceForPrincipalApplication > -0.005) ? 0 : tempBalanceForPrincipalApplication;
        const totalPaymentThisMonth = interestThisMonth + appliedStdPrincipal + appliedExtraMonthly + actualLumpSumPayment;
        schedule.push({
            month: months, totalPayment: totalPaymentThisMonth, interest: interestThisMonth,
            principalStandard: appliedStdPrincipal, principalExtraMonthly: appliedExtraMonthly,
            principalLumpSum: actualLumpSumPayment, balance: currentBalance
        });
        balanceHistory.push(currentBalance);
        if (currentBalance === 0) break;
    }
    const finalTotalPaid = principal + totalInterestPaidAccumulated;
    return { totalInterest: totalInterestPaidAccumulated, totalPaid: finalTotalPaid, numberOfPayments: months, schedule, balanceHistory };
}

function displaySummaryContent(title, results, isActuallyAccelerated, baseStandardTotalInterestForRef = 0) {
    const S = languageStrings[currentLanguage];
    let html = `<h4>${title}</h4>`;
    if (!results || !results.numberOfPayments) { html += "<p>N/A</p>"; return html; }

    if (isActuallyAccelerated) {
        const payoffYears = Math.floor(results.numberOfPayments / 12);
        const payoffMonths = results.numberOfPayments % 12;
        let refNumberOfPayments = 0; let refTotalInterest = 0;
        let standardReferenceSource = null;
        if (title.includes(S.scenarioALabel) && scenarioAData && scenarioAData.standardResults) {
            standardReferenceSource = scenarioAData.standardResults;
        } else if (currentScenarioData && currentScenarioData.standardResults) {
            standardReferenceSource = currentScenarioData.standardResults;
        }
        
        if (standardReferenceSource) {
            refNumberOfPayments = standardReferenceSource.numberOfPayments;
            refTotalInterest = standardReferenceSource.totalInterest;
        } else {
            refNumberOfPayments = results.numberOfPayments; 
            refTotalInterest = results.totalInterest;       
        }
        const timeSavedMonths = refNumberOfPayments - results.numberOfPayments;
        const interestSaved = refTotalInterest - results.totalInterest;
        html += `${S.newPayoffPeriodText} ${payoffYears} ani și ${payoffMonths} luni (${results.numberOfPayments} ${S.totalMonthsText})<br>`;
        if (timeSavedMonths > 0) {
            html += `(${Math.floor(timeSavedMonths / 12)} ani și ${timeSavedMonths % 12} luni ${S.yearsAndMonthsSoonerText})<br>`;
        } else if (timeSavedMonths === 0 && results.numberOfPayments > 0 && results.numberOfPayments === refNumberOfPayments) {
             html += `(${S.noTimeSavedText}, aceeași perioadă)<br>`;
        } else if (results.numberOfPayments > 0 && timeSavedMonths < 0) {
             html += `(${Math.abs(Math.floor(timeSavedMonths / 12))} ani și ${Math.abs(timeSavedMonths % 12)} luni mai mult - ${S.checkComparisonText})<br>`;
        } else if (results.numberOfPayments > 0 && refNumberOfPayments > 0 && timeSavedMonths !== 0) {
             html += `(${S.checkComparisonText})<br>`;
        }
        html += `${S.totalInterestPaidText} <strong class="highlight-savings">${results.totalInterest.toFixed(2)}</strong><br>`;
        html += `${S.totalCostOfLoanText} <strong class="highlight-savings">${results.totalPaid.toFixed(2)}</strong><br>`;
        if (interestSaved > 0.005 && timeSavedMonths >= 0) {
            html += `${S.interestSavedText} <strong class="highlight-savings">${interestSaved.toFixed(2)}</strong>`;
        } else {
             html += `${S.interestSavedText} 0.00`;
        }
    } else { // This is a standard scenario
        html += `${S.monthlyPaymentText} <strong class="highlight-original">${results.monthlyPayment.toFixed(2)}</strong><br>`;
        html += `${S.totalInterestPaidText} <strong class="highlight-original">${results.totalInterest.toFixed(2)}</strong><br>`;
        html += `${S.totalCostOfLoanText} <strong class="highlight-original">${results.totalPaid.toFixed(2)}</strong><br>`;
        html += `${S.payoffPeriodText} ${Math.floor(results.numberOfPayments / 12)} ani și ${results.numberOfPayments % 12} luni (${results.numberOfPayments} ${S.totalMonthsText})`;
    }
    return html;
}

function pinCurrentAsScenarioA() {
    const S = languageStrings[currentLanguage];
    if (!currentScenarioData || !currentScenarioData.standardResults) {
        alert(S.calculateFirstAlert); return;
    }
    scenarioAData = JSON.parse(JSON.stringify(currentScenarioData));
    const scenarioAContainer = document.getElementById('scenarioAResults');
    scenarioAContainer.innerHTML = '';
    scenarioAContainer.style.display = 'block';

    const isAEffectivelyAccelerated = scenarioAData.acceleratedResults && (scenarioAData.acceleratedResults.numberOfPayments < scenarioAData.standardResults.numberOfPayments || scenarioAData.acceleratedResults.totalInterest < scenarioAData.standardResults.totalInterest - 0.01);
    const titleAKey = isAEffectivelyAccelerated ? 'scenarioAAcceleratedTitle' : 'scenarioAStandardTitle';
    const resultsA = isAEffectivelyAccelerated ? scenarioAData.acceleratedResults : scenarioAData.standardResults;
    
    scenarioAContainer.innerHTML = displaySummaryContent(S[titleAKey], resultsA, isAEffectivelyAccelerated, scenarioAData.standardResults.totalInterest);
    
    const currentResultsContainer = document.getElementById('currentScenarioResults');
    currentResultsContainer.innerHTML = `<h4>${S.enterScenarioBPrompt}</h4><div id="resultSummaryCurrent"></div><div id="earlyRepaymentResultCurrent"></div>`;
    document.getElementById('amortizationScheduleSection').style.display = 'none';
    
    document.getElementById('pinScenarioAButton').disabled = true;
    document.getElementById('clearComparisonButton').style.display = 'block';
    updateChart();
}

function clearComparison() {
    const S = languageStrings[currentLanguage];
    scenarioAData = null;
    document.getElementById('scenarioAResults').style.display = 'none';
    document.getElementById('scenarioAResults').innerHTML = '';
    const currentResultsContainer = document.getElementById('currentScenarioResults');

    if (currentScenarioData && currentScenarioData.standardResults) {
        let currentTitleKey, currentResultsToDisplay, currentIsEffectivelyAccelerated;
        const standardResultsForCurrentInputs = currentScenarioData.standardResults;
        const inputs = currentScenarioData.inputs;
        const isExtraMonthlyEffective = inputs.extraMonthlyPayment > 0;
        const isLumpSumEffective = inputs.lumpSumPayment > 0 && inputs.lumpSumMonth > 0 && inputs.lumpSumMonth <= standardResultsForCurrentInputs.numberOfPayments;

        if (currentScenarioData.acceleratedResults && (isExtraMonthlyEffective || isLumpSumEffective) &&
            (currentScenarioData.acceleratedResults.numberOfPayments < standardResultsForCurrentInputs.numberOfPayments || currentScenarioData.acceleratedResults.totalInterest < standardResultsForCurrentInputs.totalInterest - 0.01) ) {
            currentTitleKey = 'currentAcceleratedTitle';
            currentResultsToDisplay = currentScenarioData.acceleratedResults;
            currentIsEffectivelyAccelerated = true;
        } else {
            currentTitleKey = 'currentStandardRefTitle';
            if (isExtraMonthlyEffective || (inputs.lumpSumPayment > 0 && inputs.lumpSumMonth > 0)) currentTitleKey += "*";
            currentResultsToDisplay = standardResultsForCurrentInputs;
            currentIsEffectivelyAccelerated = false;
        }
        currentResultsContainer.innerHTML = displaySummaryContent(S[currentTitleKey] || currentTitleKey.replace('*', ` (${S.checkComparisonText.toLowerCase()})`), currentResultsToDisplay, currentIsEffectivelyAccelerated, standardResultsForCurrentInputs.totalInterest);
    } else {
        currentResultsContainer.innerHTML = '<div id="resultSummaryCurrent"></div><div id="earlyRepaymentResultCurrent"></div>';
    }

    document.getElementById('pinScenarioAButton').disabled = false;
    document.getElementById('clearComparisonButton').style.display = 'none';
    updateChart();
}

function clearAllDisplays(clearScenarioAAlso = true) {
    const currentResultsContainer = document.getElementById('currentScenarioResults');
    currentResultsContainer.innerHTML = '<div id="resultSummaryCurrent"></div><div id="earlyRepaymentResultCurrent"></div>';
    if (clearScenarioAAlso) {
        document.getElementById('scenarioAResults').innerHTML = "";
        document.getElementById('scenarioAResults').style.display = 'none';
        scenarioAData = null;
        document.getElementById('pinScenarioAButton').disabled = false;
        document.getElementById('clearComparisonButton').style.display = 'none';
    }
    currentScenarioData = null;
    document.getElementById('amortizationScheduleSection').style.display = 'none';
    document.getElementById('chartContainer').style.display = 'none';
    if (loanChart) { loanChart.destroy(); loanChart = null; }
}

function generateAmortizationTable(scheduleData) {
    const tableBody = document.getElementById('amortizationTableBody');
    tableBody.innerHTML = '';
    if (!scheduleData || scheduleData.length === 0) {
        document.getElementById('amortizationScheduleSection').style.display = 'none'; return;
    }
    scheduleData.forEach(p => {
        const row = tableBody.insertRow();
        row.insertCell().innerText = p.month;
        row.insertCell().innerText = p.totalPayment.toFixed(2);
        row.insertCell().innerText = p.interest.toFixed(2);
        row.insertCell().innerText = p.principalStandard.toFixed(2);
        row.insertCell().innerText = p.principalExtraMonthly.toFixed(2);
        row.insertCell().innerText = p.principalLumpSum.toFixed(2);
        row.insertCell().innerText = p.balance.toFixed(2);
    });
    document.getElementById('amortizationScheduleSection').style.display = 'block';
}

function updateChart() {
    const S = languageStrings[currentLanguage];
    const chartCtx = document.getElementById('loanBalanceChart').getContext('2d');
    const chartContainer = document.getElementById('chartContainer');
    const datasets = [];
    let maxMonths = 0;
    let primaryStandardHistory = null;
    let referenceLabel = S.chartStandardBalanceLabel;

    if (currentScenarioData && currentScenarioData.standardBalanceHistory) {
        primaryStandardHistory = currentScenarioData.standardBalanceHistory;
    } else if (scenarioAData && scenarioAData.standardBalanceHistory) {
        primaryStandardHistory = scenarioAData.standardBalanceHistory;
    }

    if (primaryStandardHistory && primaryStandardHistory.length > 0) {
        datasets.push({
            label: referenceLabel, data: primaryStandardHistory,
            borderColor: 'rgba(189, 195, 199, 1)', fill: false, tension: 0.1, borderWidth: 2, pointRadius: 0
        });
        maxMonths = Math.max(maxMonths, primaryStandardHistory.length -1);
    }

    if (scenarioAData) {
        const isAEffectivelyAccelerated = scenarioAData.acceleratedResults && (scenarioAData.acceleratedResults.numberOfPayments < scenarioAData.standardResults.numberOfPayments || scenarioAData.acceleratedResults.totalInterest < scenarioAData.standardResults.totalInterest - 0.01);
        const dataA = isAEffectivelyAccelerated ? scenarioAData.acceleratedBalanceHistory : scenarioAData.standardBalanceHistory;
        const titleAKey = isAEffectivelyAccelerated ? 'scenarioAAcceleratedTitle' : 'scenarioAStandardTitle';
        const labelA = S.chartScenarioALabel + (S[titleAKey] && S[titleAKey].includes('(') ? ` (${S[titleAKey].split('(')[1]}` : ''); 

        if (dataA && dataA.length > 0 && (JSON.stringify(dataA) !== JSON.stringify(primaryStandardHistory) || !currentScenarioData )) {
            datasets.push({
                label: labelA, data: dataA,
                borderColor: 'rgba(231, 76, 60, 1)', fill: false, tension: 0.1, borderWidth: 2, pointRadius: 0
            });
            maxMonths = Math.max(maxMonths, dataA.length -1);
        }
    }

    if (currentScenarioData && currentScenarioData !== scenarioAData) { // Ensure current is distinct from A
        const isCurrentEffectivelyAccelerated = currentScenarioData.acceleratedResults && (currentScenarioData.acceleratedResults.numberOfPayments < currentScenarioData.standardResults.numberOfPayments || currentScenarioData.acceleratedResults.totalInterest < currentScenarioData.standardResults.totalInterest - 0.01);
        const dataCurrent = isCurrentEffectivelyAccelerated ? currentScenarioData.acceleratedBalanceHistory : currentScenarioData.standardBalanceHistory; 
        
        let labelCurrentKey;
        if (scenarioAData) { // If A is pinned, this is Scenario B
            labelCurrentKey = isCurrentEffectivelyAccelerated ? 'scenarioBAcceleratedTitle' : 'scenarioBStandardTitle';
        } else { // If A is not pinned, this is the main "Current" scenario
            labelCurrentKey = isCurrentEffectivelyAccelerated ? 'currentAcceleratedTitle' : 'currentStandardRefTitle';
        }
        if (!isCurrentEffectivelyAccelerated && (currentScenarioData.inputs.extraMonthlyPayment > 0 || (currentScenarioData.inputs.lumpSumPayment > 0 && currentScenarioData.inputs.lumpSumMonth > 0))) {
            labelCurrentKey += "*";
        }
        
        let labelCurrent = S[labelCurrentKey] || labelCurrentKey.replace('*', ` (${S.checkComparisonText.toLowerCase()})`);
        if(S[labelCurrentKey] && S[labelCurrentKey].includes('(')){
            let baseLabel = scenarioAData ? S.chartScenarioBLabel : (S.currentAcceleratedTitle.split(' ').slice(0,2).join(" ") || S.chartScenarioBLabel) ; // "Scenario B" or "Current Scenario"
            labelCurrent = baseLabel + ` (${S[labelCurrentKey].split('(')[1]}`; // Append (Accelerated) or (Standard)
        }

        let dataAForCompare = scenarioAData ? (( (scenarioAData.acceleratedResults && (scenarioAData.acceleratedResults.numberOfPayments < scenarioAData.standardResults.numberOfPayments || scenarioAData.acceleratedResults.totalInterest < scenarioAData.standardResults.totalInterest - 0.01)) ? scenarioAData.acceleratedBalanceHistory : scenarioAData.standardBalanceHistory)) : null;
        
        if (dataCurrent && dataCurrent.length > 0 && 
            (JSON.stringify(dataCurrent) !== JSON.stringify(primaryStandardHistory)) && 
            (!scenarioAData || JSON.stringify(dataCurrent) !== JSON.stringify(dataAForCompare))) {
            datasets.push({
                label: labelCurrent, data: dataCurrent,
                borderColor: 'rgba(52, 152, 219, 1)', fill: false, tension: 0.1, borderWidth: 2, pointRadius: 0
            });
            maxMonths = Math.max(maxMonths, dataCurrent.length-1);
        }
    }
    
    // Hide chart if no meaningful data to display or only the reference line with no actual term
    if (datasets.length === 0 || (datasets.length === 1 && datasets[0].label.includes(S.chartStandardBalanceLabel.split(' ')[0]) && maxMonths <= 1) ) { 
        chartContainer.style.display = 'none';
        if (loanChart) { loanChart.destroy(); loanChart = null; }
        return;
    }
    chartContainer.style.display = 'block';
    const labels = Array.from({ length: maxMonths + 1 }, (_, i) => i);

    if (loanChart) loanChart.destroy();
    loanChart = new Chart(chartCtx, {
        type: 'line', data: { labels, datasets },
        options: { responsive: true, maintainAspectRatio: false, scales: { x: { title: { display: true, text: S.chartMonthsLabel } }, y: { title: { display: true, text: S.chartLoanBalanceLabel }, beginAtZero: true, ticks: { callback: function(value) { return value.toLocaleString(); } } } }, plugins: { tooltip: { mode: 'index', intersect: false, callbacks: { label: function(context) { let label = context.dataset.label || ''; if (label) { label += ': '; } if (context.parsed.y !== null) { label += context.parsed.y.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}); } return label; } } }, legend: { position: 'top' } } }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
    document.getElementById('currentScenarioResults').innerHTML = '<div id="resultSummaryCurrent"></div><div id="earlyRepaymentResultCurrent"></div>';
    document.getElementById('scenarioAResults').innerHTML = '';
    document.getElementById('scenarioAResults').style.display = 'none';
});
