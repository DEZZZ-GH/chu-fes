import ConsultationSection1 from "@/components/ConsultationSection1";
import ConsultationSection2 from "@/components/ConsultationSection2";
import ConsultationSection3 from "@/components/ConsultationSection3";
import ConsultationSection4 from "@/components/ConsultationSection4";



export default function ConsultationPage() {
  return (
    <div className="overflow-x-hidden">
      <ConsultationSection1 />
      <ConsultationSection2 />
      <ConsultationSection3 />
      <ConsultationSection4 />
    </div>
  );
}

