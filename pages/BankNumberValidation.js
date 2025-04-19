import React from "react";
import { useState } from "react";


// Define API endpoints for IBAN and SWIFT validation
const IBAN_API = "https://api.apilayer.com/bank_data/iban_validate";
const SWIFT_API = "https://api.apilayer.com/bank_data/swift_check";

function BankNumberValidation() {
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
          "apikey": "3gTxDDhKhuVOP4DdBTDociF6768ggPJg", // Replace with a working API key
          "Accept": "application/json", // Set response format to JSON
        },
      });

      const errorText = await response.text(); // Read API response as text
      console.log("Full API Response:", errorText); // Log full response for debugging

      const data = JSON.parse(errorText); // Convert response text into JSON format

      // Check API response if valid and update state
      if (data.valid) {
        setValidationResult("Valid bank number");
        setError("");
      } else {
        setValidationResult("Invalid bank number");
        setError(`Possible issue: ${data.errors ? data.errors[0].message : "Check formatting."}`);
      }
    } catch (err) {
      console.error("Error:", err);
      setError(`Failed to validate ${format}. API may be unreachable.`); // Display error message
    }
  };

  // Function to toggle between IBAN and SWIFT formats
  const toggleFormat = () => {
    setFormat(format === "IBAN" ? "SWIFT" : "IBAN"); // Switch format
    setValidationResult(null); // Reset validation result
    setError(""); // Reset error message
  };

  return (
    <div className="iban-container" style={{height: 'auto',  paddingBottom: '400px', paddingTop: '50px'}}>

      <h2 style={{color: 'black'}}>Bank Number Validation</h2>
      <input
        type="text"
        placeholder={`Enter ${format} number`}
        value={bankNumber}
        onChange={(e) => setBankNumber(e.target.value)} // Update state when user inputs a bank number
      />
      <button onClick={validateBankNumber}>Validate</button> {/* Trigger validation */}
      <button onClick={toggleFormat}>Switch to {format === "IBAN" ? "SWIFT" : "IBAN"}</button> {/* Toggle format */}

      {/* Display validation result or error messages */}
      {validationResult && <p style={{color: 'black'}}>{validationResult}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default BankNumberValidation; 