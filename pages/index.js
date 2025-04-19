import About from "./About";
import BankNumberValidation from "./BankNumberValidation";
import CurrencyConversion from "./CurrencyConverter";
import Homepage from "./Homepage";
import Link from "next/link";


export default function Home() {  
  return (
    <div className="main-center"> {/* Main wrapper with a centered layout */}
      
      {/* Navigation bar containing links to different sections */}
      <header className="top-bar"> 
        <h1 style={{ color: "black", padding: "15px"}}>Bank App</h1>

        {/* Navigation menu list */}
        <ul className="nav-list">
          <li className="nav-item">
            <Link href="#home">Home</Link> 
          </li>
          <li className="nav-item">
            <Link href="#about" style={{ scrollPaddingTop: "10px" }}>About</Link> 
          </li>
          <li className="nav-item">
            <Link href="#currency-conversion">Currency Conversion</Link> 
          </li>
          <li className="nav-item">
            <Link href="#bankValidation">Bank Number Validation</Link> 
          </li>
        </ul>
      </header>

      {/* Different sections of the application*/}
      <div id="home" className="navigationBar">
        <Homepage/>
      </div>
      <div id="about" className="navigationBar">
        <About/> 
      </div>
      <div id="currency-conversion" className="navigationBar">
        <CurrencyConversion/>
      </div>
      <div id="bankValidation" className="navigationBar">
        <BankNumberValidation/>
      </div>

    </div>
  );
}
