// Import the currency data from your other file
import { currencies } from "./currencies.js";

// --- ELEMENT SELECTORS ---
const fromCurrencySelect = document.getElementById("from-currency");
const toCurrencySelect = document.getElementById("to-currency");
const fromFlagImg = document.getElementById("from-flag");
const toFlagImg = document.getElementById("to-flag");
const swapButton = document.getElementById("swap-button"); // NEW: Select the swap button
const amountInput = document.getElementById("amount");
const baseRateDisplay = document.getElementById("base-rate");
const convertedAmountDisplay = document.getElementById("converted-amount");

// --- API CONFIGURATION ---
const apiKey = "58051af938be4e585faa317e";

/**
 * Populates a dropdown menu with currency options.
 */
function populateDropdown(selectElement) {
  selectElement.innerHTML = "";
  currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency.code;
    option.textContent = currency.code;
    selectElement.appendChild(option);
  });
}

/**
 * Updates the flag image for a given dropdown.
 */
function updateFlag(selectElement, flagElement) {
  const currencyCode = selectElement.value;
  const currencyData = currencies.find(
    (currency) => currency.code === currencyCode
  );

  if (currencyData) {
    const countryCode = currencyData.flag;
    flagElement.src = `https://flagcdn.com/${countryCode}.svg`;
  }
}

/**
 * Fetches and displays the exchange rate using ExchangeRate-API.
 */
async function getExchangeRate() {
  const amount = amountInput.value;
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (!amount || amount <= 0) {
    baseRateDisplay.textContent = `1 ${fromCurrency} = ...`;
    convertedAmountDisplay.textContent = "...";
    return;
  }

  try {
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();

    if (data.result === "success") {
      const baseRate = data.conversion_rate.toFixed(4);
      const convertedAmount = data.conversion_result;

      baseRateDisplay.textContent = `1 ${fromCurrency} = ${baseRate} ${toCurrency}`;
      convertedAmountDisplay.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toLocaleString()} ${toCurrency}`;
    } else {
      throw new Error(
        "API request was not successful: " +
          (data["error-type"] || "Unknown error")
      );
    }
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    baseRateDisplay.textContent = "Something went wrong.";
    convertedAmountDisplay.textContent = "Could not fetch rate.";
  }
}

// --- INITIALIZATION & EVENT LISTENERS ---

// 1. Populate both of your dropdowns
populateDropdown(fromCurrencySelect);
populateDropdown(toCurrencySelect);

// 2. Load saved currencies from localStorage, or set the default USD -> BDT
const savedFromCurrency = localStorage.getItem("fromCurrency");
const savedToCurrency = localStorage.getItem("toCurrency");

fromCurrencySelect.value = savedFromCurrency || "USD";
toCurrencySelect.value = savedToCurrency || "BDT";

// 3. Update the flags to match the initial currencies
updateFlag(fromCurrencySelect, fromFlagImg);
updateFlag(toCurrencySelect, toFlagImg);

// 4. Add event listeners for user input
amountInput.addEventListener("input", getExchangeRate);

fromCurrencySelect.addEventListener("change", () => {
  localStorage.setItem("fromCurrency", fromCurrencySelect.value);
  updateFlag(fromCurrencySelect, fromFlagImg);
  getExchangeRate();
});

toCurrencySelect.addEventListener("change", () => {
  localStorage.setItem("toCurrency", toCurrencySelect.value);
  updateFlag(toCurrencySelect, toFlagImg);
  getExchangeRate();
});

// NEW: Add event listener for the swap button
swapButton.addEventListener("click", () => {
  const tempCurrency = fromCurrencySelect.value;
  fromCurrencySelect.value = toCurrencySelect.value;
  toCurrencySelect.value = tempCurrency;

  localStorage.setItem("fromCurrency", fromCurrencySelect.value);
  localStorage.setItem("toCurrency", toCurrencySelect.value);

  updateFlag(fromCurrencySelect, fromFlagImg);
  updateFlag(toCurrencySelect, toFlagImg);

  getExchangeRate();
});

// 5. Trigger the initial conversion when the page loads
getExchangeRate();
