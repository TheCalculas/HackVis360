import Head from 'next/head';
import BottomGlitter from '@/components/StyledText/BottomGlitter';
import Screen from '../components/screen/Screen';
import TeamCard from '../components/teams/TeamCard';
import Styles from '../components/teams/Team.module.css';
import Organizers from '../lib/data/TeamData';

function Teams() {
  return (
    <Screen>
      <Head>
        <title>Team</title>
      </Head>
      <section className="mt-16 mb-12 container-70">
        <div className="my-16 w-full text-center">
          <BottomGlitter text="Our Team" />
        </div>
        <h2 className={Styles.postHead}>Organizers</h2>
        <div className={Styles.cardContainer}>
          {Organizers.slice(0, 10).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/Professors/${item.imageSrc}.png`}
                socials={item.socials}
              />
            );
          })}
        </div>
      </section>
    </Screen>
  );
}

export default Teams;
