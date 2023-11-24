import { getOctocatLine } from "../../../remotion/TopLanguages/octocat-line";
import { OctocatBody } from "./Octocat-body";
import { OctocatLine } from "./octocat-line";

export const OctoCat: React.FC = () => {
  return (
    <svg
      style={{
        position: "fixed",
        width: "100%",
        bottom: 0,
        right: -100,
      }}
      viewBox="0 0 1442 997"
      fill="none"
    >
      <OctocatBody d={getOctocatLine()} progress={1} />
      <OctocatLine mode="imperative" />
    </svg>
  );
};
