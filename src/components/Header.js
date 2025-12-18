import profileImg from "../Assets/Avinash_Kumar_Sharma.jpg";

const Header = () => {
    return (
        <header className="App-header">
            <img
                src={profileImg}
                alt="Avinash Kumar Sharma"
                className="profile-image"
            />

            <div className="profile-details">
                <h1>Avinash Kumar Sharma</h1>
                <p>Cloud + DevOps Engineer</p>

            </div>
        </header>
    )
}

export default Header;
