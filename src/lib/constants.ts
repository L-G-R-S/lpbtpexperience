import {
    AlertTriangle,
    Database,
    Layers,
    Lock,
    MonitorX,
    Settings,
    Cpu,
    GitMerge,
    LayoutTemplate,
    ShieldCheck,
    Rocket
} from 'lucide-react';

export const PROBLEMS = [
    {
        icon: Settings,
        title: "Customizações Excessivas",
        description: "Z-codes que comprometem o Clean Core e dificultam atualizações."
    },
    {
        icon: Layers,
        title: "Integrações Frágeis",
        description: "Conexões ponto-a-ponto sem governança ou monitoramento."
    },
    {
        icon: Database,
        title: "Dados Inconsistentes",
        description: "Bases sujas que limitam o potencial de IA e Analytics."
    },
    {
        icon: MonitorX,
        title: "Uso Limitado do BTP",
        description: "Dificuldade para usar a plataforma de forma estratégica."
    },
    {
        icon: AlertTriangle,
        title: "Riscos no S/4HANA",
        description: "Projetos de migração com alto risco e custo elevado."
    },
    {
        icon: Lock,
        title: "Operação Reativa",
        description: "Manutenção cara e foco apenas em apagar incêndios."
    }
];

export const HOW_WE_WORK_SERVICES = [
    {
        icon: Cpu,
        title: "Estruturamos Joule e IA generativa",
        description: "Configuração e orquestração de assistentes inteligentes no contexto SAP."
    },
    {
        icon: LayoutTemplate,
        title: "Integramos IA aos processos reais de negócio",
        description: "Conexão de inteligência artificial com fluxos de trabalho do dia a dia."
    },
    {
        icon: GitMerge,
        title: "Automatizamos integrações via SAP Integration Suite",
        description: "Uso do SAP Integration Suite para conectar sistemas de forma ágil."
    },
    {
        icon: ShieldCheck,
        title: "Garantimos qualidade, testes e estabilidade",
        description: "Validação contínua para assegurar estabilidade em ambientes críticos."
    },
    {
        icon: Rocket,
        title: "Programas de IA prontos para escala",
        description: "Arquitetura desenhada para crescer junto com a demanda do negócio."
    }
];

export const JOURNEY_STEPS = [
    {
        number: "01",
        title: "Produtos SAP",
        subtitle: "Desenvolvemos soluções proprietárias sobre SAP BTP para automação, inteligência aplicada e melhoria da experiência do usuário — reduzindo complexidade sem comprometer a governança."
    },
    {
        number: "02",
        title: "AMS",
        subtitle: "Suporte, manutenção e evolução contínua de ambientes SAP produtivos, com foco em estabilidade operacional e evolução controlada."
    },
    {
        number: "03",
        title: "Fábrica de Software SAP",
        subtitle: "Evolução estruturada de ambientes ECC e S/4HANA, com melhorias técnicas alinhadas à estratégia de Clean Core."
    },
    {
        number: "04",
        title: "Alocação de Recursos",
        subtitle: "Consultores SAP especializados atuando de forma dedicada ou integrada ao time do cliente."
    },
    {
        number: "05",
        title: "Projetos e Squads",
        subtitle: "Execução de projetos SAP com escopo definido ou squads dedicadas, com governança e foco em entrega consistente."
    },
    {
        number: "06",
        title: "Aceleradores e Inovação com IA",
        subtitle: "Desenvolvemos aceleradores próprios e parcerias tecnológicas para evoluir ambientes SAP com automação, processos conversacionais e inteligência aplicada."
    }
];
