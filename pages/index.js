import BankApp from "./BankNumberValidation";
import CurrencyConversion from "./CurrencyConverter";

export default function Home() {
  return (
    <div className="main-center">
      <header className="top-bar">
        <h1>bank app</h1>
      </header>
      <CurrencyConversion/>
      <BankApp/>
    </div>
  );
}
