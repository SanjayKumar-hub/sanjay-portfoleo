import { profile } from '../data/content.js';
import RollText from './RollText.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span>{profile.city}, India</span>
      <a href="#top">
        <RollText>Back to top</RollText>
      </a>
    </footer>
  );
}
