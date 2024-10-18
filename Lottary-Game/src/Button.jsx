import './Button.css';

export default function Button({ action }) {
    return <button className="button" onClick={action}>Buy New Ticket</button>;
}
