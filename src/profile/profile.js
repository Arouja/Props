import PropTypes from "prop-types";

const Profile = ({ fullName = 'USER', bio, profession = 'tape your profession'}) => {
    const handleName = e => {
        e.preventDefault();
        alert(`Your Name is ${fullName}`)
    }
    return (
        <div style={{
            display: 'flex', width: 900, justifyContent: 'center', margin: 'auto', 
            padding: 20, borderRadius: 10,  
        }}>

            <img style={{ width: 600, height: 500 }} src="/arouja.jpg" />


            <div style={{ margin: 50 }}>
                <h2 style={{
                    fontFamily: "Times New Roman", fontSize: 50, color: "darkblue"
                }} onClick={handleName}>
                    {fullName}
                </h2>
                <h3 style={{
                    fontFamily: "cursive", fontSize: 20, fontStyle: "oblique", color: "grey"
                }}>
                    {bio || 'Welcome to my profile'}
                </h3>
                <h4 style={{
                    fontStyle: "Times New Roman", fontSize: 30, color: "darkblue"
                }}>
                    {profession}
                </h4>
            </div>


        </div>
    );
}

Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired
};

export default Profile;