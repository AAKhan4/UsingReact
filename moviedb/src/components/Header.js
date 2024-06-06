import react from 'react';
import '../styles.css';

export default function Header() {
  return (
    <div className='header'>
        <img className='logo' src='logo.png' alt='movieDB'/>
        <h2 className='app-subtittle'>Find Your Next Movie Here!</h2>
    </div>
  );
}