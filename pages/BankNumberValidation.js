import React, { useState } from "react"; // Import React and the useState hook

// Define API endpoints for IBAN and SWIFT validation
const IBAN_API = "https://api.apilayer.com/bank_data/iban_validate";
const SWIFT_API = "https://api.apilayer.com/bank_data/swift_check";

function BankApp() {
  // State variables to store user input, format type, validation result, and error messages
  const [bankNumber, setBankNumber] = useState("");
  const [format, setFormat] = useState("IBAN"); // Default format set to IBAN
  const [validationResult, setValidationResult] = useState(null);
  const [error, setError] = useState("");

  // Function to validate bank number
  const validateBankNumber = async () => {
    // Select the correct API and query parameter based on format type
    const queryParam = format === "IBAN" ? `iban_number=${bankNumber}` : `swift_code=${bankNumber}`;
    const apiUrl = format === "IBAN" ? IBAN_API : SWIFT_API;

    try {
      console.log(`Validating ${format}:`, bankNumber); // Log input for debugging

      // Fetch request to API with appropriate headers
      const response = await fetch(`${apiUrl}?${queryParam}`, {
        method: "GET",
        headers: {
          "apikey": "3gTxDDhKhuVOP4DdBTDociF6768ggPJg", // Replace with a valid API key
          "Accept": "application/json", // Set response format to JSON
        },
      });

      const errorText = await response.text(); // Read API response as text
      console.log("Full API Response:", errorText); // Log full response for debugging

      const data = JSON.parse(errorText); // Convert response text into JSON format

      // Check API response if valid and update state accordingly
      if (data.valid) {
        setValidationResult("Valid bank number");
        setError("");
      } else {
        setValidationResult("Invalid bank number");
        setError(`Possible issue: ${data.errors ? data.errors[0].message : "Check formatting."}`);
      }
    } catch (err) {
      console.error("Error:", err); // Log errors
      setError(`Failed to validate ${format}. API may be unreachable.`); // Display error message
    }
  };

  // Function to toggle between IBAN and SWIFT formats
  const toggleFormat = () => {
    setFormat(format === "IBAN" ? "SWIFT" : "IBAN"); // Switch format
    setValidationResult(null); // Reset validation result
    setError(""); // Clear error messages
  };

  return (
    <div className="iban-container">
      <h2>Please enter bank number to verify</h2>
      <input
        type="text"
        placeholder={`Enter ${format} number`}
        value={bankNumber}
        onChange={(e) => setBankNumber(e.target.value)} // Update state when user inputs a bank number
      />
      <button onClick={validateBankNumber}>Validate</button> {/* Trigger validation */}
      <button onClick={toggleFormat}>Switch to {format === "IBAN" ? "SWIFT" : "IBAN"}</button> {/* Toggle format */}

      {/* Display validation result or error messages */}
      {validationResult && <p>{validationResult}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default BankApp; // Export the component for use in other files