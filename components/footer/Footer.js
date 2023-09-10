import BottomGlitter from '../StyledText/BottomGlitter';
import Styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={`${Styles.footer} container-70`}>
      <div className="py-12 mt-20 sm:mt-4 md:mt-12">
        <h4 className="text-2xl mb-10 pl-3">Contacts</h4>
        <BottomGlitter text="Get In Touch" />
      </div>

      <div className={Styles.linksContainer}>
        <div className="flex-2 md:flex-1">
          <div className="mb-3 flex flex-col">
            <h3 className="text-2xl">Write</h3>
            <h4 className="text-lg font-extralight">
              <a href="mailto:hnccbits@gmail.com">hackvis360@gmail.com</a>
            </h4>
          </div>
          <div className="my-3 flex flex-col">
            <h3 className="text-2xl">Meet</h3>
            <h4 className="text-lg font-extralight">
              MNIT - Jaipur <br />
              Rajasthan, India
            </h4>
          </div>
        </div>
        <div className="flex-4 md:flex-1 md:mx-4 sm:mx-0 sm:mt-8">
          <h3 className="text-2xl">Other Pages</h3>

          <a
            href="https://mnit.ac.in"
            className="pl-1 block text-lg my-1 font-extralight"
            target="_blank"
            rel="noopener noreferrer"
          >
            MNIT Website
          </a>
        </div>
      </div>

      <div className={Styles.copyrightBottom}>
        <h6>© {new Date().getFullYear()} HackVis360, All rights reserved.</h6>
      </div>
    </footer>
  );
}

export default Footer;
