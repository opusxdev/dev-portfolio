import pfpImg from '../assets/spidey4.jpg';

export default function Hero() {
  const copy = () => {
    navigator.clipboard.writeText('npx malay');
  };

  return (
    <header className="hero-container">
      <img src={pfpImg} className="profile-img" alt="Avatar" />
      <div className="hero-info">
        <h1 style={{fontFamily:'Geist', fontWeight:'normal', background: 'linear-gradient(to bottom, #064e40, #0b6b58, #10775f, #139c77, #33b89b)',WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'}}>Hi, I'm Malay</h1>
        
        <div className="command-bar" onClick={copy}>
        <code className="devster-text">aka devster</code>
      </div>
      </div>
    </header>
  );
}