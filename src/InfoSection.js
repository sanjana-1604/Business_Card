import profile from './profile.png';
export default function InfoSection()
{
    return(
        <div className= "infosection">
        <img src={profile} />
        <h1 className="name">Developer Name</h1>
        <h3 className="profession">Frontend Developer</h3>
        <h6 className="website">www.</h6>
        </div>
    )
}
