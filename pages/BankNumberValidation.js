

const BankNumberValidation = () => {



    return(
        <div className="iban-container">
            <h2>Please enter bank number to verify</h2>
            <input
            type="text"
            placeholder="Enter IBAN"
            onChange={(e) => setIban(e.target.value)}
            />

            <button>Validate</button> 
        </div>
    );
};

export default BankNumberValidation;
