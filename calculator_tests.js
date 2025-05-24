let testResultsHtml = '';
let testsPassed = 0;
let testsFailed = 0;

function logResult(message, passed) {
    testResultsHtml += `<div style="color: ${passed ? 'green' : 'red'};">${message}</div>`;
    if (passed) testsPassed++; else testsFailed++;
}

function assertEquals(expected, actual, testName) {
    if (expected === actual) {
        logResult(`PASS: ${testName} (Expected: ${expected}, Got: ${actual})`, true);
    } else {
        logResult(`FAIL: ${testName} (Expected: ${expected}, Got: ${actual})`, false);
    }
}

function assertAlmostEquals(expected, actual, tolerance, testName) {
    if (Math.abs(expected - actual) < tolerance) {
        logResult(`PASS: ${testName} (Expected approx: ${expected}, Got: ${actual})`, true);
    } else {
        logResult(`FAIL: ${testName} (Expected approx: ${expected}, Got: ${actual})`, false);
    }
}

function assertNotNull(actual, testName) {
    if (actual !== null && actual !== undefined) {
        logResult(`PASS: ${testName} (Expected not null, Got: ${actual === null ? 'null' : 'not null'})`, true);
    } else {
        logResult(`FAIL: ${testName} (Expected not null, Got: ${actual})`, false);
    }
}

function assertNullOrError(actual, testName) { // For functions that return null on error
    if (actual === null || (typeof actual === 'object' && actual && actual.error)) {
         logResult(`PASS: ${testName} (Expected null or error object, Got: ${JSON.stringify(actual)})`, true);
    } else {
         logResult(`FAIL: ${testName} (Expected null or error object, Got: ${JSON.stringify(actual)})`, false);
    }
}

function testSuite(suiteName, tests) {
    testResultsHtml += `<h2>${suiteName}</h2>`;
    tests();
}

// Global function to be called by test_runner.html
window.runAllTests = function(resultsDiv) {
    // --- Call all test suites here ---
    testCalculateStandardLoan();
    testCalculateAcceleratedLoan();
    // --- End of test suite calls ---

    resultsDiv.innerHTML = `<h1>Test Summary</h1>
                                  <div>Total Tests: ${testsPassed + testsFailed}</div>
                                  <div style="color: green;">Passed: ${testsPassed}</div>
                                  <div style="color: red;">Failed: ${testsFailed}</div>
                                  <hr>${testResultsHtml}`;
};

// Mock languageStrings for tests if functions depend on it for errors (not primary focus for calc functions)
if (typeof languageStrings === 'undefined') {
    languageStrings = { en: {}, ro: {} }; // Minimal mock
}
currentLanguage = 'en'; // Set a default for any error messages that might be looked up

function testCalculateStandardLoan() {
    testSuite('calculateStandardLoan Tests', () => {
        const loan1 = calculateStandardLoan(200000, 5, 30); // P, R, T(yrs)
        assertNotNull(loan1, 'SL1: Basic loan should not be null');
        if(loan1) {
            assertAlmostEquals(1073.64, loan1.monthlyPayment, 0.01, 'SL1: Monthly Payment');
            assertAlmostEquals(186511.57, loan1.totalInterest, 0.01, 'SL1: Total Interest');
            assertEquals(360, loan1.numberOfPayments, 'SL1: Number of Payments');
        }

        const loan2 = calculateStandardLoan(100000, 0, 10); // Zero interest
        assertNotNull(loan2, 'SL2: Zero interest loan should not be null');
        if(loan2) {
            assertAlmostEquals(100000 / 120, loan2.monthlyPayment, 0.01, 'SL2: Monthly Payment (Zero Interest)');
            assertAlmostEquals(0, loan2.totalInterest, 0.01, 'SL2: Total Interest (Zero Interest)');
            assertEquals(120, loan2.numberOfPayments, 'SL2: Number of Payments (Zero Interest)');
        }

        const loan3 = calculateStandardLoan(50000, 7, 1); // Short term
        assertNotNull(loan3, 'SL3: Short term loan should not be null');
        if(loan3) {
            assertAlmostEquals(4325.96, loan3.monthlyPayment, 0.01, 'SL3: Monthly Payment (1 Year)');
            assertEquals(12, loan3.numberOfPayments, 'SL3: Number of Payments (1 Year)');
        }
        
        // Test for error handling (e.g., invalid rate, though primary validation is in getInputs)
        // These test if the function itself is robust to direct calls with bad values
        const loan_err1 = calculateStandardLoan(100000, -1, 30); // Negative interest rate
        assertNullOrError(loan_err1, 'SL_ERR1: Negative interest rate should return null or error');

        const loan_err2 = calculateStandardLoan(100000, 5, 0); // Zero loan term
        assertNullOrError(loan_err2, 'SL_ERR2: Zero loan term should return null or error');
    });
}

function testCalculateAcceleratedLoan() {
    testSuite('calculateAcceleratedLoan Tests', () => {
        // Baseline: 200k, 5%, 30yrs. Std monthly pmt: 1073.64. Original N: 360.
        const principal = 200000, rate = 5, termYears = 30;
        const stdLoanForRef = calculateStandardLoan(principal, rate, termYears);
        if (!stdLoanForRef) { logResult('FAIL: Prerequisite standard loan for accelerated tests failed to calculate.', false); return; }

        const accLoan1 = calculateAcceleratedLoan(principal, rate, stdLoanForRef.monthlyPayment, stdLoanForRef.numberOfPayments, 100, 0, 0); // Extra 100/month
        assertNotNull(accLoan1, 'AL1: Extra monthly payment, no lump sum');
        if(accLoan1) {
            assertEquals(true, accLoan1.numberOfPayments < stdLoanForRef.numberOfPayments, 'AL1: Payoff sooner with extra monthly');
            assertEquals(true, accLoan1.totalInterest < stdLoanForRef.totalInterest, 'AL1: Less total interest with extra monthly');
        }

        const accLoan2 = calculateAcceleratedLoan(principal, rate, stdLoanForRef.monthlyPayment, stdLoanForRef.numberOfPayments, 0, 10000, 12); // Lump sum 10k at month 12
        assertNotNull(accLoan2, 'AL2: Lump sum payment, no extra monthly');
        if(accLoan2) {
            assertEquals(true, accLoan2.numberOfPayments < stdLoanForRef.numberOfPayments, 'AL2: Payoff sooner with lump sum');
            assertEquals(true, accLoan2.totalInterest < stdLoanForRef.totalInterest, 'AL2: Less total interest with lump sum');
        }

        const accLoan3 = calculateAcceleratedLoan(principal, rate, stdLoanForRef.monthlyPayment, stdLoanForRef.numberOfPayments, 50, 5000, 24); // Both
        assertNotNull(accLoan3, 'AL3: Both extra monthly and lump sum');
        if(accLoan3) {
            assertEquals(true, accLoan3.numberOfPayments < stdLoanForRef.numberOfPayments, 'AL3: Payoff sooner with both');
            assertEquals(true, accLoan3.totalInterest < stdLoanForRef.totalInterest, 'AL3: Less total interest with both');
        }

        const accLoan4 = calculateAcceleratedLoan(principal, rate, stdLoanForRef.monthlyPayment, stdLoanForRef.numberOfPayments, 0, 300000, 1); // Lump sum > principal
        assertNotNull(accLoan4, 'AL4: Lump sum larger than principal');
        if(accLoan4) {
            assertEquals(1, accLoan4.numberOfPayments, 'AL4: Payoff in 1 month with large lump sum');
            assertEquals(true, accLoan4.totalInterest < 1000, 'AL4: Very low interest with large lump sum'); // Interest for 1 month
        }
        
        // Test for error case: lump sum month beyond original term (should be caught by getInputs, but test robustness)
        // Note: calculateAcceleratedLoan itself doesn't directly validate lumpSumMonth against originalNumberOfPayments.
        // This validation is typically done before calling. If it were to be tested here,
        // it would likely not error but produce a longer/normal term if lump sum is never applied.
        // The new error handling for excessive months in calcAcceleratedLoan might catch runaway calcs.

        const accLoan_err1 = calculateAcceleratedLoan(principal, -1, stdLoanForRef.monthlyPayment, stdLoanForRef.numberOfPayments, 50, 0, 0); // Negative rate
        assertNullOrError(accLoan_err1, 'AL_ERR1: Negative interest rate should return null/error in accelerated');

    });
}
