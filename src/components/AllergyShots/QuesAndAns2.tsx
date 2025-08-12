import React from "react";
import "./QuesAndAns2.css";

interface QAItem {
  title: string;
  content: React.ReactNode;
  imgAlt?: string;
  withImg?: boolean;
}

const qaData: QAItem[] = [
  {
    title: "How Many Days Can You Go Between Allergy Shots",
    content: (
      <p>
        The frequency of allergy shots can vary depending on the individual's treatment plan and the specific allergens being targeted. In the initial phase of immunotherapy, patients typically receive injections more frequently, often one to three times a week. As the treatment progresses and the body builds tolerance to allergens, the interval between shots may extend. However, the exact schedule is determined by the allergist based on the individual's response to the treatment.
      </p>
    ),
    withImg: false,
  },
  {
    title: "How Long Do Allergy Injections Last",
    content: (
      <p>
        The duration of effectiveness for allergy shots varies from person to person. In general, the benefits of allergy injections are intended to be long-lasting. Many individuals experience a significant reduction in allergy symptoms that can endure for years, even after completing the recommended course of treatment. The key to the sustained efficacy lies in the way allergy shots modify the immune system's response to specific allergens. While some individuals may achieve lasting relief after completing the full course of treatment, others may require ongoing maintenance injections to sustain the benefits.
      </p>
    ),
    imgAlt: "Calendar icon representing long duration",
    withImg: true,
  },
  {
    title: "How Many Allergy Shots Do You Need",
    content: (
      <p>
        The number of allergy shots needed varies widely among individuals, depending on the severity of your allergies and your response to the initial phase of treatment. Typically, allergen immunotherapy is divided into two phases: the build-up phase and the maintenance phase. During the build-up phase, which usually lasts between three to six months, injections are administered one to three times a week. Once the effective dose is reached, you enter the maintenance phase where the frequency of shots decreases to once every two to four weeks. Most people will continue with maintenance treatment for three to five years to achieve optimal and lasting relief from allergy symptoms.
      </p>
    ),
    imgAlt: "Syringe icon with checkmarks for required shots",
    withImg: true,
  },
];

function formatId(title: string) {
  return title.toLowerCase().replace(/\?/g, '').replace(/\s+/g, '-');
}

const QuesAndAns2: React.FC = () => (
  <section className="qna2-section">
    <div className="qna2-inner">
      {qaData.map((item) => (
        <div className="qna2-block" id={formatId(item.title)} key={item.title}>
          \
          <div className="qna2-content">
            <h2 className="qna2-title">{item.title.replace(/([A-Z])/g, ' $1').trim()}</h2>
            <div className="qna2-text">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default QuesAndAns2;
