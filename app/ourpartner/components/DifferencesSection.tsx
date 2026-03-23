import FramedSection from "./FramedSection";
import DifferenceColumn from "./DifferenceColumn";
import { DifferencesSectionProps } from "@/lib/types";
import { MiddleDivider } from "./HeroGatewaySection";
export default function DifferencesSection({
  section,
}: DifferencesSectionProps) {
  return (
    <FramedSection
      tag={section.tag}
      title={section.title}
      text={section.text}
      glowId="differences-glow"
      viewBox="0 0 1200 460"
      outerPath="M56 406 V136 Q56 42 150 42 H1050 Q1144 42 1144 136 V406"
      innerPath="M78 406 V142 Q78 62 158 62 H1042 Q1122 62 1122 142 V406"
      line={{ x1: "108", y1: "406", x2: "1092", y2: "406" }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {section.columns.map((column) => (
          <DifferenceColumn
            key={column.side}
            side={column.side}
            
            intro={column.intro}
            points={column.points}
          />

        ))}
        
      </div>
    </FramedSection>
  );
}