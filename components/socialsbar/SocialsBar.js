import { FaKaggle } from 'react-icons/fa';
import Styles from './SocialsBar.module.css';

const ICON_SIZE = 36;
function SocialsBar() {
  return (
    <section className={Styles.socialsBar}>
      <a
        href="https://www.kaggle.com/discussions/competition-hosting/438001?rvi=1"
        target="_blank"
        rel="noreferrer"
      >
        <FaKaggle className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
    </section>
  );
}

export default SocialsBar;
