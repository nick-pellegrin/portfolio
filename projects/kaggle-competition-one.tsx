import {
  ProjectLayout,
  type ProjectPageProps,
} from "@/components/sections/project-layout";
import { H2, P, UL, LI } from "@/components/ui/prose";

export default function KaggleCompetitionOne({ project }: ProjectPageProps) {
  return (
    <ProjectLayout project={project}>
      <H2>The Task</H2>
      <P>
        One paragraph on the competition prompt — dataset, target metric, any
        quirks about the data (label leakage, class imbalance, noisy features).
      </P>

      <H2>Approach</H2>
      <P>
        Walk through how you iterated. Baseline → features that moved the metric
        → model family that worked → validation strategy. Highlight the step
        where the leaderboard jumped.
      </P>

      <H2>What Worked</H2>
      <UL>
        <LI>Specific feature engineering trick that moved the metric.</LI>
        <LI>The ensembling or stacking choice that paid off.</LI>
        <LI>How you avoided overfitting the public leaderboard.</LI>
      </UL>

      <H2>What Didn&apos;t</H2>
      <P>
        Ideas that looked promising but didn&apos;t generalize — knowing what
        not to chase next time is half the value of competing.
      </P>

      <H2>Result</H2>
      <P>
        Final leaderboard rank, metric delta over the baseline, and whatever
        makes the finish worth mentioning.
      </P>
    </ProjectLayout>
  );
}
