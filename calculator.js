let languageStrings = {};
let currentLanguage = localStorage.getItem('preferredLanguage') || 'ro';
let loanChart = null;
let scenarioAData = null;
let currentScenarioData = null;

// --- LANGUAGE FUNCTIONS ---
async function loadLanguageStrings() {
    try {
        const response = await fetch('./locales.json');
        if (!response.ok) throw new Error('Failed to fetch locales.json: ' + response.statusText);
        const data = await response.json();
        languageStrings = data;
        console.log("Language strings loaded successfully.");
        setLanguage(currentLanguage); // Apply translations and update UI after strings are loaded
    } catch (error) {
        console.error("Error loading language strings:", error);
        languageStrings = { en: { pageTitle: "Mortgage Optimizer Pro", calculateButton: "Calculate" }, ro: { pageTitle: "Optimizer Ipotecă Pro", calculateButton: "Calculează" } };
        setLanguage(currentLanguage); // Attempt to apply fallback translations
    }
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    applyTranslations();

    const S = languageStrings[currentLanguage];
    const S = languageStrings[currentLanguage];
    if (!S) { console.error("Language strings not found for setLanguage:", currentLanguage); return; }

    if (scenarioAData) {
        const inputsA = scenarioAData.inputs;
        const isAExtraEffective = inputsA.extraMonthlyPayment > 0 || (inputsA.lumpSumPayment > 0 && inputsA.lumpSumMonth > 0 && inputsA.lumpSumMonth <= scenarioAData.standardResults.numberOfPayments);
        const isAEffectivelyAccelerated = scenarioAData.acceleratedResults && isAExtraEffective && (scenarioAData.acceleratedResults.numberOfPayments < scenarioAData.standardResults.numberOfPayments || scenarioAData.acceleratedResults.totalInterest < scenarioAData.standardResults.totalInterest - 0.01);
        
        let titleAKey;
        if (isAEffectivelyAccelerated) {
            titleAKey = 'scenarioAAcceleratedTitle';
        } else if (isAExtraEffective) {
            titleAKey = 'scenarioAStandardWithExtrasTitle';
        } else {
            titleAKey = 'scenarioAStandardTitle';
        }
        const resultsA = isAEffectivelyAccelerated ? scenarioAData.acceleratedResults : scenarioAData.standardResults;
        document.getElementById('scenarioAResults').innerHTML = displaySummaryContent(S[titleAKey], resultsA, isAEffectivelyAccelerated, scenarioAData.standardResults.totalInterest);
    }

    if (currentScenarioData && currentScenarioData.standardResults) {
        const currentResultsContainer = document.getElementById('currentScenarioResults');
        const standardResultsForCurrentInputs = currentScenarioData.standardResults;
        const inputs = currentScenarioData.inputs;
        const isExtraMonthlyEffective = inputs.extraMonthlyPayment > 0;
        const isLumpSumEffective = inputs.lumpSumPayment > 0 && inputs.lumpSumMonth > 0 && inputs.lumpSumMonth <= standardResultsForCurrentInputs.numberOfPayments;
        const hasAnyExtraPayment = isExtraMonthlyEffective || isLumpSumEffective;

        let currentTitleKey, currentResultsToDisplay, currentIsEffectivelyAccelerated;

        const isEffectivelyAccelerated = currentScenarioData.acceleratedResults && hasAnyExtraPayment &&
            (currentScenarioData.acceleratedResults.numberOfPayments < standardResultsForCurrentInputs.numberOfPayments || currentScenarioData.acceleratedResults.totalInterest < standardResultsForCurrentInputs.totalInterest - 0.01);

        if (isEffectivelyAccelerated) {
            currentTitleKey = scenarioAData ? 'scenarioBAcceleratedTitle' : 'currentAcceleratedTitle';
            currentResultsToDisplay = currentScenarioData.acceleratedResults;
            currentIsEffectivelyAccelerated = true;
        } else { // Standard or Standard with (ineffective or no) Extras
            if (scenarioAData) { // This is Scenario B
                currentTitleKey = hasAnyExtraPayment ? 'scenarioBStandardWithExtrasTitle' : 'scenarioBStandardTitle';
            } else { // This is the main Current Scenario
                currentTitleKey = hasAnyExtraPayment ? 'currentStandardRefWithExtrasTitle' : 'currentStandardRefTitle';
            }
            currentResultsToDisplay = standardResultsForCurrentInputs;
            currentIsEffectivelyAccelerated = false;
        }
        currentResultsContainer.innerHTML = displaySummaryContent(S[currentTitleKey], currentResultsToDisplay, currentIsEffectivelyAccelerated, standardResultsForCurrentInputs.totalInterest);
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
    if (!standardResultsForCurrentInputs) {
        clearAllDisplays(true);
        const errorMsg = currentLanguage === 'ro' ? "A apărut o eroare de calcul. Verificați valorile introduse și încercați din nou." : "A calculation error occurred. Please verify your input values and try again.";
        alert(S.validationErrorAlert + errorMsg);
        return;
    }

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
            currentScenarioData.acceleratedResults = accelerated;
            currentScenarioData.acceleratedBalanceHistory = accelerated.balanceHistory;
            currentTitleKey = scenarioAData ? 'scenarioBAcceleratedTitle' : 'currentAcceleratedTitle';
            // If accelerated, the "WithExtras" variant is implied, so no separate key needed unless explicitly desired for "Accelerated With Extras"
            currentResultsToDisplay = accelerated;
            currentIsEffectivelyAccelerated = true;
            currentAmortizationSchedule = accelerated.schedule;
        } else { // Standard loan, possibly with extra payments that weren't "accelerating" enough
            if (scenarioAData) { // This is Scenario B
                currentTitleKey = (isExtraMonthlyEffective || isLumpSumEffective) ? 'scenarioBStandardWithExtrasTitle' : 'scenarioBStandardTitle';
            } else { // This is the main Current Scenario
                currentTitleKey = (isExtraMonthlyEffective || isLumpSumEffective) ? 'currentStandardRefWithExtrasTitle' : 'currentStandardRefTitle';
            }
            currentResultsToDisplay = standardResultsForCurrentInputs;
            currentIsEffectivelyAccelerated = false;
        }
    } else { // No extra payments at all
        currentTitleKey = scenarioAData ? 'scenarioBStandardTitle' : 'currentStandardRefTitle';
        currentResultsToDisplay = standardResultsForCurrentInputs;
        currentIsEffectivelyAccelerated = false;
    }
    
    let displayTitle = S[currentTitleKey] || currentTitleKey; // The key should now directly exist
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
        if (denominator === 0 || isNaN(denominator) || !isFinite(denominator)) {
            console.error("Error: Invalid denominator in calculateStandardLoan. Denominator:", denominator);
            return null;
        }
        consistentMonthlyPayment = principal * (numerator / denominator);
    }
    if (isNaN(consistentMonthlyPayment) || !isFinite(consistentMonthlyPayment)) {
        console.error("Error: consistentMonthlyPayment is NaN or not finite. Value:", consistentMonthlyPayment);
        return null;
    }
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
    while (currentBalance > 0.005 && months < originalNumberOfPayments * 2.5) { // Initial check remains for typical termination
        if (months > originalNumberOfPayments * 3 && originalNumberOfPayments > 0) {
            console.error("Error: Accelerated calculation exceeded maximum iterations. Inputs:", {principal, annualInterestRate, standardMonthlyPayment, originalNumberOfPayments, extraMonthly, lumpSum, lumpMonth});
            return null;
        }
        months++;
        const interestThisMonth = currentBalance * monthlyInterestRate;
        if (isNaN(interestThisMonth) || !isFinite(interestThisMonth)) {
            console.error("Error: interestThisMonth became NaN/Infinity in accelerated calc.", {currentBalance, monthlyInterestRate});
            return null;
        }
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
    if (!results || results.error || !results.numberOfPayments) {
        let errorDisplayMessage = S.calculateFirstAlert || "Error in calculation or no data.";
        if (results && results.message) errorDisplayMessage = results.message;
        return `<h4>${title}</h4><p>${errorDisplayMessage}</p>`;
    }
    let html = `<h4>${title}</h4>`; // Title is now passed directly as translated string

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
             html += `(${Math.abs(Math.floor(timeSavedMonths / 12))} ani și ${Math.abs(timeSavedMonths % 12)} luni ${S.payoffLongerWarningText || S.checkComparisonText})<br>`;
        } else if (results.numberOfPayments > 0 && refNumberOfPayments > 0 && timeSavedMonths !== 0) { 
             html += `(${S.checkComparisonText})<br>`; // Fallback for other non-zero timeSavedMonths differences
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

    const inputsA = scenarioAData.inputs;
    const isAExtraEffective = inputsA.extraMonthlyPayment > 0 || (inputsA.lumpSumPayment > 0 && inputsA.lumpSumMonth > 0 && inputsA.lumpSumMonth <= scenarioAData.standardResults.numberOfPayments);
    const isAEffectivelyAccelerated = scenarioAData.acceleratedResults && isAExtraEffective && (scenarioAData.acceleratedResults.numberOfPayments < scenarioAData.standardResults.numberOfPayments || scenarioAData.acceleratedResults.totalInterest < scenarioAData.standardResults.totalInterest - 0.01);
    
    let titleAKey;
    if (isAEffectivelyAccelerated) {
        titleAKey = 'scenarioAAcceleratedTitle';
    } else if (isAExtraEffective) { // Standard but with extras that weren't "accelerating"
        titleAKey = 'scenarioAStandardWithExtrasTitle';
    } else { // Plain standard
        titleAKey = 'scenarioAStandardTitle';
    }
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
        const standardResultsForCurrentInputs = currentScenarioData.standardResults;
        const inputs = currentScenarioData.inputs;
        const isExtraMonthlyEffective = inputs.extraMonthlyPayment > 0;
        const isLumpSumEffective = inputs.lumpSumPayment > 0 && inputs.lumpSumMonth > 0 && inputs.lumpSumMonth <= standardResultsForCurrentInputs.numberOfPayments;
        const hasAnyExtraPayment = isExtraMonthlyEffective || isLumpSumEffective;

        const isEffectivelyAccelerated = currentScenarioData.acceleratedResults && hasAnyExtraPayment &&
            (currentScenarioData.acceleratedResults.numberOfPayments < standardResultsForCurrentInputs.numberOfPayments || currentScenarioData.acceleratedResults.totalInterest < standardResultsForCurrentInputs.totalInterest - 0.01);

        if (isEffectivelyAccelerated) {
            currentTitleKey = 'currentAcceleratedTitle';
            currentResultsToDisplay = currentScenarioData.acceleratedResults;
            currentIsEffectivelyAccelerated = true;
        } else { // Standard or Standard with (ineffective or no) Extras
            currentTitleKey = hasAnyExtraPayment ? 'currentStandardRefWithExtrasTitle' : 'currentStandardRefTitle';
            currentResultsToDisplay = standardResultsForCurrentInputs;
            currentIsEffectivelyAccelerated = false;
        }
        currentResultsContainer.innerHTML = displaySummaryContent(S[currentTitleKey], currentResultsToDisplay, currentIsEffectivelyAccelerated, standardResultsForCurrentInputs.totalInterest);
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
        const inputsA = scenarioAData.inputs;
        const isAExtraEffective = inputsA.extraMonthlyPayment > 0 || (inputsA.lumpSumPayment > 0 && inputsA.lumpSumMonth > 0 && inputsA.lumpSumMonth <= scenarioAData.standardResults.numberOfPayments);
        const isAEffectivelyAccelerated = scenarioAData.acceleratedResults && isAExtraEffective && (scenarioAData.acceleratedResults.numberOfPayments < scenarioAData.standardResults.numberOfPayments || scenarioAData.acceleratedResults.totalInterest < scenarioAData.standardResults.totalInterest - 0.01);
        
        let titleAKey;
        if (isAEffectivelyAccelerated) {
            titleAKey = 'scenarioAAcceleratedTitle';
        } else if (isAExtraEffective) {
            titleAKey = 'scenarioAStandardWithExtrasTitle';
        } else {
            titleAKey = 'scenarioAStandardTitle';
        }
        const dataA = isAEffectivelyAccelerated ? scenarioAData.acceleratedBalanceHistory : scenarioAData.standardBalanceHistory;
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
        const inputsCurrent = currentScenarioData.inputs;
        const isCurrentExtraEffective = inputsCurrent.extraMonthlyPayment > 0 || (inputsCurrent.lumpSumPayment > 0 && inputsCurrent.lumpSumMonth > 0 && inputsCurrent.lumpSumMonth <= currentScenarioData.standardResults.numberOfPayments);
        const isCurrentEffectivelyAccelerated = currentScenarioData.acceleratedResults && isCurrentExtraEffective && (currentScenarioData.acceleratedResults.numberOfPayments < currentScenarioData.standardResults.numberOfPayments || currentScenarioData.acceleratedResults.totalInterest < currentScenarioData.standardResults.totalInterest - 0.01);
        const dataCurrent = isCurrentEffectivelyAccelerated ? currentScenarioData.acceleratedBalanceHistory : currentScenarioData.standardBalanceHistory; 
        
        let labelCurrentKey;
        if (scenarioAData) { // If A is pinned, this is Scenario B
            if (isCurrentEffectivelyAccelerated) {
                labelCurrentKey = 'scenarioBAcceleratedTitle';
            } else if (isCurrentExtraEffective) {
                labelCurrentKey = 'scenarioBStandardWithExtrasTitle';
            } else {
                labelCurrentKey = 'scenarioBStandardTitle';
            }
        } else { // If A is not pinned, this is the main "Current" scenario
            if (isCurrentEffectivelyAccelerated) {
                labelCurrentKey = 'currentAcceleratedTitle';
            } else if (isCurrentExtraEffective) {
                labelCurrentKey = 'currentStandardRefWithExtrasTitle';
            } else {
                labelCurrentKey = 'currentStandardRefTitle';
            }
        }
        
        let labelCurrent = S[labelCurrentKey] || labelCurrentKey; // Key should directly exist
        if(S[labelCurrentKey] && S[labelCurrentKey].includes('(') && S.currentAcceleratedTitle){ // Check S.currentAcceleratedTitle to prevent error if S is not fully loaded
            let baseLabelPart = scenarioAData ? S.chartScenarioBLabel : (S.currentAcceleratedTitle.split(' ').slice(0,2).join(" ") || S.chartScenarioBLabel) ; 
            labelCurrent = baseLabelPart + ` (${S[labelCurrentKey].split('(')[1]}`; 
        }

        let dataAForCompare = null;
        if (scenarioAData) {
            const inputsA = scenarioAData.inputs;
            const isAExtraEffectiveComp = inputsA.extraMonthlyPayment > 0 || (inputsA.lumpSumPayment > 0 && inputsA.lumpSumMonth > 0 && inputsA.lumpSumMonth <= scenarioAData.standardResults.numberOfPayments);
            const isAEffectivelyAcceleratedComp = scenarioAData.acceleratedResults && isAExtraEffectiveComp && (scenarioAData.acceleratedResults.numberOfPayments < scenarioAData.standardResults.numberOfPayments || scenarioAData.acceleratedResults.totalInterest < scenarioAData.standardResults.totalInterest - 0.01);
            dataAForCompare = isAEffectivelyAcceleratedComp ? scenarioAData.acceleratedBalanceHistory : scenarioAData.standardBalanceHistory;
        }
        
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

document.addEventListener('DOMContentLoaded', async () => {
    await loadLanguageStrings();
    document.getElementById('currentScenarioResults').innerHTML = '<div id="resultSummaryCurrent"></div><div id="earlyRepaymentResultCurrent"></div>';
    document.getElementById('scenarioAResults').innerHTML = '';
    document.getElementById('scenarioAResults').style.display = 'none';
});
