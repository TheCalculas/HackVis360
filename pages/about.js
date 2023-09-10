import Head from 'next/head';
import Screen from '../components/screen/Screen';
import BottomGlitter from '../components/StyledText/BottomGlitter';

function About() {
  return (
    <Screen>
      <Head>
        <title>About Us</title>
      </Head>
      <section className="container-70 pt-28 md:pt-16 sm:pt-12">
        <div className="hidden">
          <p className="px-6">
            The Department of Computer Science and Engineering will organize the
            competition at the Departmental Labs as a two-stage event. The
            competition is open to all. The participants will have to register
            their team and its members at the time of registration. 1. In the
            first stage (last week of October 2023), the participants will
            register and get acquainted with the kind of training and testing
            dataset they might get. Build their model for
            multinomial/multivariable logistic regression at different
            complexity levels. They will be evaluated on their logistic
            regression model performance based on training/ test error and final
            hypothesis. 2. The shortlisted candidates will be eligible to
            participate in the final competition (last week of November 2023) -
            stage two, where they will be evaluated on their active 3D
            visualization of non-linear decision boundaries on a 360 view.
          </p>
          <h2 className="text-xl mt-6 mb-3 px-10">- Dinesh Prabhakar</h2>
          <h4 className="pl-12">Prof. In-Charge, Information Technology</h4>
        </div>
        <div className="mt-12 mb-6 sm:mt-8 sm:mb-4">
          <BottomGlitter text="About HackVis 360" />
          <div className="mt-6">
            <p className="text-2xl">
              The Department of Computer Science and Engineering will organize
              the competition at the Departmental Labs as a two-stage event. The
              competition is open to all. The participants will have to register
              their team and its members at the time of registration.
            </p>
            <br />
            <ol className="text-xl">
              <li>
                1. In the first stage (last week of October 2023), the
                participants will register and get acquainted with the kind of
                training and testing dataset they might get. Build their model
                for multinomial/multivariable logistic regression at different
                complexity levels. They will be evaluated on their logistic
                regression model performance based on training/ test error and
                final hypothesis.
              </li>
              <br />
              <li>
                2. The shortlisted candidates will be eligible to participate in
                the final competition (last week of November 2023) - stage two,
                where they will be evaluated on their active 3D visualization of
                non-linear decision boundaries on a 360 view.
              </li>
            </ol>
          </div>
        </div>
      </section>
    </Screen>
  );
}

export default About;
