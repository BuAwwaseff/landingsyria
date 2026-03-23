import FramedSection from "./FramedSection";
import CommonPointCard from "./CommonPointCard";
import { SharedFoundationSectionProps } from "@/lib/types";
export default function SharedFoundationSection({
  section,
}: SharedFoundationSectionProps) {
  return (
    <FramedSection
      tag={section.tag}
      title={section.title}
      text={section.text}
      glowId="shared-foundation-glow"
      viewBox="0 0 1200 420"
      outerPath="M56 366 V136 Q56 42 150 42 H1050 Q1144 42 1144 136 V366"
      innerPath="M78 366 V142 Q78 62 158 62 H1042 Q1122 62 1122 142 V366"
      line={{ x1: "108", y1: "366", x2: "1092", y2: "366" }}
    >
      <div className="grid gap-3 md:grid-cols-3">
        {section.points.map((point) => (
          <CommonPointCard
            key={point.title}
            title={point.title}
            text={point.text}
          />
          
        ))}
      </div>
      
    </FramedSection>

  );
}