import { Project } from "@/data/projects";

interface CaseStudyInfoProps {
  project: Project;
}

export default function CaseStudyInfo({ project }: CaseStudyInfoProps) {
  return (
    <section className="pt-8 pb-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top Row: Role and Timeline */}
          <div className="bg-[#f5f5f5] rounded-[25px] p-8 border border-[#ededed]">
            <h4 className="text-[14px] font-bold text-[#acacac] uppercase tracking-wider mb-4">Role</h4>
            <p className="text-[20px] text-black font-semibold">{project.role}</p>
          </div>
          
          <div className="bg-[#f5f5f5] rounded-[25px] p-8 border border-[#ededed]">
            <h4 className="text-[14px] font-bold text-[#acacac] uppercase tracking-wider mb-4">Timeline</h4>
            <p className="text-[20px] text-black font-semibold">{project.timeline}</p>
          </div>

          {/* Bottom Row: Team and Skills */}
          <div className="bg-[#f5f5f5] rounded-[25px] p-8 border border-[#ededed]">
            <h4 className="text-[14px] font-bold text-[#acacac] uppercase tracking-wider mb-4">Team</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {project.team.map((member) => (
                <p key={member} className="text-[16px] text-[#4a4a4a] font-medium">
                  {member}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-[#f5f5f5] rounded-[25px] p-8 border border-[#ededed]">
            <h4 className="text-[14px] font-bold text-[#acacac] uppercase tracking-wider mb-4">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-white text-black border border-[#ededed] rounded-full text-[14px] font-semibold shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
