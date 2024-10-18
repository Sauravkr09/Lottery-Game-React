import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";
import './Lottery.css';  // Adding responsive CSS

export default function Lottery({ n = 3, winCondition = 15 }) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    };

    return (
        <div className="lottery-container">
            <h1 className="lottery-title">Lottery Game!</h1>
            <Ticket ticket={ticket} />
            <Button action={buyTicket} />
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    );
}
