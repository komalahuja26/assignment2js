import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand">MyApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link href="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link href="/about" className="nav-link">About</Link></li>
                        <li className="nav-item"><Link href="/settings" className="nav-link">Settings</Link></li>
                        <li className="nav-item"><Link href="/data" className="nav-link">Data</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
