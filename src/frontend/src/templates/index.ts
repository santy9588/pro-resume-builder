import type { ResumeData } from "../types/resume";
import AIMLSpecialist from "./AIMLSpecialist";
import ATSFriendly from "./ATSFriendly";
import AcademicCV from "./AcademicCV";
import BoldModern from "./BoldModern";
import CreativeDesigner from "./CreativeDesigner";
import DarkTheme from "./DarkTheme";
import ElegantPremium from "./ElegantPremium";
import ExecutiveClassic from "./ExecutiveClassic";
import FreelancerPortfolio from "./FreelancerPortfolio";
import GraduateStudent from "./GraduateStudent";
import Healthcare from "./Healthcare";
import Infographic from "./Infographic";
import InternationalGlobal from "./InternationalGlobal";
import MarketingCreative from "./MarketingCreative";
import MilitaryGovernment from "./MilitaryGovernment";
import Minimalist from "./Minimalist";
import ModernBlue from "./ModernBlue";
import SimpleClean from "./SimpleClean";
import StartupTech from "./StartupTech";
import TechnicalDev from "./TechnicalDev";
import Timeline from "./Timeline";
import TwoColumn from "./TwoColumn";

export type TemplateComponent = React.ComponentType<{ data: ResumeData }>;

export const templateComponents: Record<string, TemplateComponent> = {
  minimalist: Minimalist,
  "modern-blue": ModernBlue,
  "creative-designer": CreativeDesigner,
  "executive-classic": ExecutiveClassic,
  "ats-friendly": ATSFriendly,
  "two-column": TwoColumn,
  "dark-theme": DarkTheme,
  timeline: Timeline,
  infographic: Infographic,
  "technical-dev": TechnicalDev,
  "ai-ml-specialist": AIMLSpecialist,
  "academic-cv": AcademicCV,
  healthcare: Healthcare,
  "marketing-creative": MarketingCreative,
  "simple-clean": SimpleClean,
  "bold-modern": BoldModern,
  "elegant-premium": ElegantPremium,
  "startup-tech": StartupTech,
  "international-global": InternationalGlobal,
  "graduate-student": GraduateStudent,
  "freelancer-portfolio": FreelancerPortfolio,
  "military-government": MilitaryGovernment,
};
