import { useEffect, useRef } from 'react';
import Styles from './tech-stack.module.css';

function TechStack() {
  return (
    <section className={`${Styles.techStack}`}>
      <div className="container-70">
        <Design />
        <Development />
        <Implementation />
        <Code />
      </div>
    </section>
  );
}

export default TechStack;

function Design() {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.innerHeight + 100 > ref.current.getBoundingClientRect().y) {
          ref.current.classList.add('active');
        } else {
          ref.current.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <h2 className={Styles.header}>Evaluation method</h2>
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
          The evaluation method for each stage will be:
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>1. Initial Screening</h2>
            <p>
              Review the code submissions to ensure they meet the competition’s
              requirements and adhere to the guidelines.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>2. Code Review</h2>
            <p>
              Each submission will undergo a detailed code review by the judges.
              Judges will assess code quality, functionality, modularity,
              efficiency, and scalability. Code comments and documentation will
              also be evaluated
            </p>
          </div>
          <div className={Styles.content}>
            <h2>3. Model Evaluation</h2>
            <p>
              The models will be tested on a predefined dataset or test cases.
              Performance metrics like accuracy, completeness, and robustness
              will be assessed.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>4. Innovation Assessment</h2>
            <p>
              Judges will evaluate the novelty and creativity of each submission
              based on their understanding of the problem statement and
              solution.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>5. Scalability and Presentation.</h2>
            <p>
              Scalability and presentation aspects will be reviewed and scored
              accordingly.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>6. Final Scoring and Ranking</h2>
            <p>
              Scores from all evaluation criteria1 will be combined to calculate
              a final score for each submission. Submissions will be ranked
              based on their final scores, and winners will be determined
              accordingly.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>7. Prizes and Feedback.</h2>
            <p>
              Prizes or recognition will be awarded to the top-performing
              submissions. Constructive feedback will be provided to
              participants to help them improve their skills
            </p>
          </div>
          <div className={Styles.content}>
            <h2>8. Public Voting (Optional).</h2>
            <p>
              In some cases, an optional public vote or peer evaluation process
              may be included as an additional factor in determining winners. By
              following these evaluation criteria and methods, your institute’s
              Deep Learning coding competition can fairly assess participants’
              coding skills, creativity, and problem-solving abilities while
              promoting good coding practices and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Development() {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.innerHeight + 100 > ref.current.getBoundingClientRect().y) {
          ref.current.classList.add('active');
        } else {
          ref.current.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll sm:mt-4`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <h2 className={Styles.header}>The evaluation parameters</h2>
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
          The evalulation parameters for the hackathon are:
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>1.</h2>
            <p>
              To evaluate the classification task on linear and non-linearly
              separable data. To visualize in 3D the behavior of the sigmoid
              function as the training proceeds and the convergence to the final
              hypothesis.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>2.</h2>
            <p>
              To observe the non-linear relationship between the data and the
              class, its run time complexity, model complexity, training error,
              and test error through exhaustive experiments.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>3.</h2>
            <p>
              To visualize underfitting and overfitting. To visualize the Bias
              and Variance tradeoff. And to see the impact of regularized
              logistic regression through cross-validation.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>4.</h2>
            <p>
              We also intend to examine the real-time graphical output of the
              non-linear class boundaries as the data and the classes change
              dynamically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Code() {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.innerHeight + 100 > ref.current.getBoundingClientRect().y) {
          ref.current.classList.add('active');
        } else {
          ref.current.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll sm:mt-4`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <h2 className={Styles.header}>Prizes</h2>
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
          There are three prizes for the competition (to be announced later).
          The winner will be provided certificates from Dept. CSE MNIT Jaipur.
        </div>
      </div>
    </div>
  );
}

function Implementation() {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.innerHeight + 100 > ref.current.getBoundingClientRect().y) {
          ref.current.classList.add('active');
        } else {
          ref.current.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll sm:mt-4`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <h2 className={Styles.header}>Implement</h2>
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
          The participants can make a team (maximum of three members). The
          participants must register the team name and members at registration.
          The programming language to be used is Python. You are allowed to use
          the following opensource libraries:
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>pandas</h2>
            {/* <p>
              To evaluate the classification task on linear and non-linearly
              separable data. To visualize in 3D the behavior of the sigmoid
              function as the training proceeds and the convergence to the final
              hypothesis.
            </p> */}
          </div>
          <div className={Styles.content}>
            <h2>numpy</h2>
            {/* <p>
              To observe the non-linear relationship between the data and the
              class, its run time complexity, model complexity, training error,
              and test error through exhaustive experiments.
            </p> */}
          </div>
          <div className={Styles.content}>
            <h2>matplotlib</h2>
            {/* <p>
              To visualize underfitting and overfitting. To visualize the Bias
              and Variance tradeoff. And to see the impact of regularized
              logistic regression through cross-validation.
            </p> */}
          </div>
          <div className={Styles.content}>
            <h2>seaborn</h2>
            {/* <p>
              We also intend to examine the real-time graphical output of the
              non-linear class boundaries as the data and the classes change
              dynamically.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
