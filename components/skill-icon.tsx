import { 
    Code, FileCode, Braces, FileJson, Type, Coffee, Database, Terminal,
    Globe, Layout, Server, PanelLeft, Palette, Tablet,
    Cloud, CloudCog, Container, GitBranch, Layers, CircleDashed, UploadCloud,
    Cpu, Network, Bot, Share2, Settings, Zap, ShieldCheck,
    LucideIcon, LucideProps 
  } from "lucide-react";
  
  interface SkillIconProps extends LucideProps {
    name: string;
  }
  
  export function SkillIcon({ name, ...props }: SkillIconProps) {
    const iconMap: Record<string, LucideIcon> = {
      // Languages
      'code': Code,
      'file-code': FileCode,
      'braces': Braces,
      'file-json': FileJson,
      'type': Type,
      'coffee': Coffee,
      'database': Database,
      'terminal': Terminal,
      
      // Web
      'globe': Globe,
      'layout': Layout,
      'server': Server,
      'panel-left': PanelLeft,
      'palette': Palette,
      'tablet': Tablet,
    
      
      // Cloud/DevOps
      'cloud': Cloud,
      'cloud-cog': CloudCog,
      'container': Container,
      'git-branch': GitBranch,
      'layers': Layers,
      'circle-dashed': CircleDashed,
      'upload-cloud': UploadCloud,
      
      // Concepts
      'cpu': Cpu,
      'network': Network,
      'bot': Bot,
      'share-2': Share2,
      'settings': Settings,
      'zap': Zap,
      'shield-check': ShieldCheck,
    };
    
    const IconComponent = iconMap[name] || Code; // Fallback to Code icon
    
    return <IconComponent {...props} />;
  }