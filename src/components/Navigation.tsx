import Link from "next/link";
import '../styles/app.css';

const Navigation = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link href="/new">Create new</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;