import TeamMember from '../components/TeamMember';

export default function About() {
    return (
        <div className="container">
            <h1>About Us</h1>
            <TeamMember name="Alice" role="Developer" />
            <TeamMember name="Bob" role="Designer" />
        </div>
    );
}
