export type ProjectCategory = "Research" | "Teaching" | "Professional practice";

export interface ProjectEntry {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  technologies: string[];
  date: string | null;
  image: string | null;
  linkedinPost: string | null;
  externalUrl: string | null;
  sourceUrl: string;
  visible?: boolean;
}

export const profile = {
  name: "Nikhil Sachdeva",
  shortName: "Nikhil Sachdeva",
  firstName: "Nikhil",
  familyName: "Sachdeva",
  pageTitle: "Nikhil Sachdeva — Academic Portfolio",
  metaDescription: "Academic portfolio of Nikhil Sachdeva, Lecturer at Republic Polytechnic, Singapore.",
  role: "Lecturer",
  institution: "Republic Polytechnic",
  location: "Singapore",
  institutionUrl: "https://www.rp.edu.sg/",
  linkedinUrl: "https://www.linkedin.com/in/nikhil-sachdeva-50058816/",
  email: "nicks.sachdeva81@gmail.com" as string | null,
  portraitUrl: `${import.meta.env.BASE_URL}images/nikhil-sachdeva-new.jpg` as string | null,
  verifiedSummary:
    "Chemistry educator and applied researcher at Republic Polytechnic, working across pharmaceutical science, analytical chemistry, formulation development and student-centred learning.",
  biography:
    "Nikhil Sachdeva is a chemistry educator, researcher and industry liaison at Republic Polytechnic in Singapore. He brings more than 14 years of teaching and facilitation experience across biomedical, biotechnology and pharmacy disciplines in three countries. His teaching spans pharmaceutical, medicinal, analytical and organic chemistry, pharmacology, toxicology, cancer biology and laboratory management, with an emphasis on problem-based learning and practical application.\n\nHis research and professional practice connect medicinal and analytical chemistry with pharmaceutical formulation, materials characterization and industry needs. With more than 19 years of experience in heterocyclic synthesis and structural characterization, he works with multidimensional NMR, LC–MS and HPLC. His pharmaceutical R&D experience includes solid dosage forms, quality systems, hot-melt extrusion and 3D-printed dosage forms.\n\nAt Republic Polytechnic he works with students and external partners on applied research and educational innovation, including pharmaceutical formulation, analytical stability studies, interactive chemistry learning, 3D-printed molecular models and immersive AR/VR learning content. He has mentored more than 85 students and two PhD students, and has contributed to competitive R&D TIF grants, a Mentorship Support Grant, an Academic Research grant and SPRING voucher and consultancy projects.",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export interface RecordEntry {
  title: string;
  organization: string;
  location?: string;
  date: string;
  description?: string;
  visible?: boolean;
}

export interface EducationEntry {
  title: string;
  date: string;
  organization?: string;
  visible?: boolean;
}

export const educationEntries: EducationEntry[] = [
  { title: "PhD", organization: "National University of Singapore", date: "2007–2011" },
  { title: "M. Pharm", organization: "Indian Institute of Technology (Banaras Hindu University), Varanasi", date: "2003–2005" },
  { title: "Bachelor of Pharmacy", organization: "Rajiv Gandhi University of Health Sciences", date: "1998–2002" },
];

export const experienceEntries: RecordEntry[] = [
  { title: "Lecturer", organization: "Republic Polytechnic, Singapore", date: "June 2012–present", description: "Teaches pharmaceutical and biotechnology students using conceptual and problem-based learning; develops industry-linked research projects with students and liaises with food, pharmaceutical, flavour and fragrance companies." },
  { title: "Lecturer", organization: "International Medical University, Malaysia", date: "October 2011–June 2012", description: "Taught heterocyclic chemistry, laboratory management and organic chemistry for B.Pharm and integrated M.Pharm students." },
  { title: "PhD Researcher", organization: "National University of Singapore", date: "January 2007–January 2012", description: "Researched synthesis of pyrimido- and quinazolo-triazines and their antiproliferative potential; used NMR, mass spectrometry, X-ray crystallography and computational chemistry." },
  { title: "Teaching Assistant, Department of Pharmacy", organization: "National University of Singapore", date: "August 2007–January 2010", description: "Supported teaching in Physicochemical Principles of Drug Action and supervised final-year projects." },
  { title: "Junior Scientist", organization: "Dr Reddys laboratories Ltd.", location: "Hyderabad", date: "July–December 2006", description: "Worked on solid-state characterization, stability assessment, salt screening and physicochemical characterization of new chemical entities." },
  { title: "Lecturer", organization: "KNM Institute of Pharmaceutical Education and Research, India", date: "March–May 2006", description: "Taught medicinal chemistry, pharmaceutical analysis, pharmaceutical marketing, computational drug design and basic organic chemistry, including laboratory classes." },
  { title: "Trainee", organization: "Central Drug Research Institute, Lucknow", date: "2004–2005", description: "Completed dissertation work on 2D/3D QSAR (CoMFA/CoMSIA) of PTP1B inhibitors and synthesis of potential inhibitors." },
  { title: "Industrial Trainee", organization: "Ce-Chem Pharmaceuticals", date: "", description: "Worked across tablet and capsule production, oral liquids, quality control and packaging." },
];

export const researchAreas = [
  "Medicinal and heterocyclic chemistry",
  "Pharmaceutical formulation and drug delivery",
  "NMR, LC–MS and HPLC characterization",
  "Pharmaceutical stability and process analytics",
  "Materials characterization and repair composites",
  "Chemistry education and game-based learning",
  "3D-printed learning models and dosage forms",
  "AR/VR learning for pharmaceutical manufacturing",
  "Industry-linked applied research",
];

export interface PublicationEntry {
  title: string;
  authors?: string;
  venue?: string;
  year?: string;
  url?: string;
}

export const publicationEntries: PublicationEntry[] = [
  { title: "Enhancing Passive Thermal and Humidity Regulation in Unpowered Eutectic Cold Boxes: Effects of Foil Insulation and Internal Coatings", venue: "International Journal of Thermal Sciences (LinkedIn listing)", year: "2025" },
  { title: "Experimental assessment on the mechanical, physical, thermal, and chemical properties of halloysite and carbon nanoparticles reinforced epoxy resins for repair applications", venue: "Polymers for Advanced Technologies", year: "2023", url: "https://onlinelibrary.wiley.com/doi/10.1002/pat.6150" },
  { title: "An efficient synthesis of 2,4,7-trisubstituted pyrimido[1,2-a][1,3,5]triazin-6-ones (part 2)", authors: "N. Sachdeva, A.V. Dolzhenko, S.J. Lim, W.L. Ong, W.K. Chui", venue: "New Journal of Chemistry, 39, 4796–4804", year: "2015" },
  { title: "Regioselective synthesis of Pyrimido[1,2-a][1,3,5]triazin-6-ones. Part 1. Reaction of 1-(6-oxo-1,6-dihydropyrimidin-2-yl)guanidines with triethylorthoacetate: observation of an unexpected thermal rearrangement" },
  { title: "4-Amino-2,8-dimethyl-6H-pyrimido[1,2-a][1,3,5]triazin-6-one", authors: "N. Sachdeva, A.V. Dolzhenko, G.K. Tan, L.L. Koh, W.K. Chui", venue: "Acta Crystallographica E66 (Part 8), o2050", year: "2010" },
  { title: "Synthesis and tautomerism of 6-benzoylmethyl-1,3,5-triazin-2,4-diamine", authors: "N. Sachdeva, A.V. Dolzhenko, W.K. Chui", venue: "Comptes Rendus Chimie, 14, 580–587", year: "2011" },
];

export interface AwardEntry {
  title: string;
  date: string;
  description: string;
}

export const awards: AwardEntry[] = [
  { title: "Nominated for Outstanding Educator Award", date: "2025", description: "Republic Polytechnic." },
  { title: "3i Champion", date: "2021", description: "Recognition for promoting innovation in facilitation through mobile learning, 3D printing and an interactive card game." },
];

export const achievements = [
  "Coached Chan Sean Kiat, who earned a bronze medal in Chemical Lab Technology at WorldSkills Singapore 2021.",
  "Led student research presented at national and international conferences, including chemistry research on thiazol-2-ylamino pyrimidines.",
  "Developed chemistry learning innovations including Organic Chemie, 3D-printed molecular models and immersive pharmaceutical manufacturing learning content.",
];

export const projectCategories: ProjectCategory[] = ["Research", "Teaching", "Professional practice"];
const projectsSource = "https://www.linkedin.com/in/nikhil-sachdeva-50058816/details/projects/";
const project = (id: string, category: ProjectCategory, title: string, description: string, technologies: string[], date: string | null = null, externalUrl: string | null = null, linkedinPost: string | null = null): ProjectEntry => ({
  id, category, title, description, technologies, date, image: null, linkedinPost, externalUrl, sourceUrl: projectsSource,
});

export const projectEntries: ProjectEntry[] = [
  { ...project("coyote-lab", "Professional practice", "Coyote Fund: user-friendly laboratory management solution for a local school", "", ["Laboratory management", "User-centred design"], "November 2026–present"), visible: false },
  project("organic-card-game-digital", "Teaching", "Design and Usability Evaluation of a Digital Card-Game for Learning Organic Reaction Mechanisms", "A collaboration with Republic Polytechnic’s School of Infocomm to design and evaluate a digital card game for learning organic reaction mechanisms.", ["Game-based learning", "Organic chemistry", "Digital learning"], "March 2026–present"),
  project("microwave-peptides", "Research", "Microwave-Assisted Peptide Synthesis and Characterization (MS/NMR)", "A tripeptide was synthesized and characterized using microwave-assisted peptide synthesis. The project gives students hands-on exposure and enriches the medicinal chemistry module.", ["Microwave synthesis", "Mass spectrometry", "NMR", "Medicinal chemistry"], "September 2025–present"),
  project("iron-dosage", "Research", "Towards site-specific extended delivery of iron (ferric) solid dosage form to the proximal gut", "Develops an enteric-coated, vegan-friendly iron formulation intended to reduce metallic aftertaste and provide site-specific extended delivery to the proximal gut.", ["Pharmaceutical formulation", "Enteric coating", "Drug delivery"], "April 2025–present", null, "https://www.linkedin.com/feed/update/urn:li:activity:7513133295002599424/"),
  project("illumina-nucleotide", "Research", "Stability and analytical characterization of nucleotide triphosphate samples for Illumina Singapore", "Assesses nucleotide sample stability across six temperatures and three buffer conditions, tracks triphosphate-to-monophosphate conversion, and evaluates three stabilizer/buffer options.", ["HPLC", "LC–MS/MS", "¹H, ¹³C and ³¹P NMR", "Stability studies"], "March 2024–present"),
  project("his-tag-fplc", "Research", "Purification of His-tag proteins for industrial applications using FPLC", "Purified His-tag proteins using fast protein liquid chromatography and confirmed the result using SDS-PAGE.", ["FPLC", "Protein purification", "SDS-PAGE"], "March–June 2024"),
  project("shrimp-peptide", "Research", "Optimization of coated shrimp feed for controlled peptide release to the shrimp midgut", "Developed polymer-coated peptide feed using a fluidized-bed dryer below 50°C, assessed pH-specific release by HPLC and evaluated stability with DEPT-135 NMR. A student poster on the work received an award.", ["Fluidized-bed coating", "HPLC", "DEPT-135 NMR", "Controlled release"], "March 2022–December 2023", "https://lnkd.in/gaRrr-mP"),
  project("ar-vr-pharma", "Teaching", "AR/VR immersive learning content for pharmaceutical manufacturing processes", "Conceptualized and developed immersive learning content that lets students explore manufacturing equipment outside the laboratory, practise safe equipment handling and inspect process views. Presented at Singapore Pharmacy Congress in September 2023.", ["Augmented reality", "Virtual reality", "Pharmaceutical manufacturing"], "January 2020–October 2023", "https://lnkd.in/gKQCWhUh"),
  project("3d-spatial-chemistry", "Teaching", "The efficacy of 3D-printed models in learning spatial concepts in chemistry", "Used 3D-printed models to support students’ understanding of spatial concepts in chemistry; the work was presented at the 2023 International Symposium on Advances in Technology Education.", ["3D printing", "Chemistry education", "Spatial learning"], "January 2019–September 2023"),
  project("organic-chemie", "Teaching", "Organic Chemie: interactive mobile application for pharmaceutical chemistry", "A student–staff collaboration created an Android learning game for classifying reactions and predicting products in SN1/SN2 nucleophilic substitution and E1/E2 elimination. The profile described a second version as in development.", ["Android", "Game-based learning", "Organic chemistry"], "January 2020–October 2022", "https://www.linkedin.com/pulse/do-you-agree-game-based-instructional-design-holds-crucial-sachdeva/"),
  project("eli-lilly-pyrimidines", "Research", "NCE library design of 4-azaryl-2-amino pyrimidines (Nilotinib and Dasatinib core)", "An Eli Lilly OIDD-linked programme involving microwave-assisted synthesis, pharmaceutical intermediate and impurity studies, antiproliferative and angiogenesis screening, in-situ IR monitoring, and cell-culture data analysis.", ["Medicinal chemistry", "Microwave synthesis", "In-situ IR", "Cell assays", "Flow cytometry"], "January 2016–September 2021"),
  project("epoxy-composites", "Research", "Halloysite- and carbon-nanoparticle-reinforced epoxy resins for repair applications", "Experimental assessment of mechanical, physical, thermal and chemical properties of reinforced epoxy resins for repair applications.", ["Composite materials", "Halloysite", "Carbon nanoparticles", "Materials characterization"], "July 2018–July 2021", "https://onlinelibrary.wiley.com/doi/10.1002/pat.6150"),
  project("pharma-app-vr", "Teaching", "phARma mobile app with Ignite VR", "With Republic Polytechnic student Loo Pei Ying and Ignite VR, created learning videos on antibiotics, their action, misuse and resistance. QR codes on a 3D-printed bacterial model launched the videos; Vuforia and Zappar were used for AR experiences.", ["Vuforia", "Zappar", "Augmented reality", "3D printing"], "January 2019–December 2020"),
  project("fabric-softener", "Research", "NMR stability studies of fabric softeners for Solvay Specialty Chemicals", "Used LC–MS and NMR to assess hydrolysis in cationic polymers and inform shelf-life assessment of colloidal fabric softener formulations.", ["NMR", "LC–MS", "Stability studies"], "August 2017–May 2020"),
  { ...project("nmr-sample-prep", "Teaching", "NMR sample preparation video", "", ["NMR", "Instructional video"], "April 2019–April 2020"), visible: false },
  project("robot-assisted-synthesis", "Research", "Microwave-assisted and robotic-arm-expedited synthesis of angiogenic thiazol-2-ylamino pyrimidines", "A proof-of-concept collaboration in which a robotic arm was programmed to support repetitive microwave-assisted synthesis of a thiazol-2-ylamino pyrimidine library.", ["Microwave synthesis", "Robotic automation", "Medicinal chemistry"], "May 2018–May 2019"),
  project("atorvastatin-tablets", "Research", "Orally disintegrating tablets of melt-extruded amorphous atorvastatin", "Explored melt extrusion to improve dissolution of a BCS class II drug and address bitter taste. The profile reports a 16-second disintegration result using a synergistic superdisintegrant combination.", ["Hot-melt extrusion", "Amorphous formulation", "Electronic tongue", "Dissolution testing"], "August 2016–October 2017"),
  project("allswell-phyto", "Research", "Phytoconstituent characterization for a herbal drink formulation", "For Singapore SME Allswell Trading, compared raw materials from three vendors by extraction, lyophilization, preparative HPLC, LC–MS TOF and ¹H/¹³C NMR to support standardization and reproducibility.", ["Phytochemistry", "Preparative HPLC", "LC–MS TOF", "NMR"], "September 2014–September 2015"),
  project("appsheet-inventory", "Professional practice", "AppSheet inventory management for industrial and school laboratories", "A role-based inventory workflow lets laboratory users scan QR codes for safety and storage information and log withdrawals. Managers can review usage, replenish stock and generate QR labels; procurement receives low-stock alerts.", ["AppSheet", "QR codes", "Inventory management", "GHS safety"], null),
  project("cold-chain", "Research", "Phase-change materials for passive cold-chain solutions", "Research on unpowered eutectic cold boxes examined internal coatings and multilayer foil insulation to improve sub-zero temperature retention. The related article lists the authors Hamid Saeedipour, Tapasvi Bhatt, Eddie Yin Kwee Ng, Nikhil Sachdeva, Antara Chakraborty and Chew Tong Howe.", ["Phase-change materials", "Thermal management", "Foil insulation", "Cold-chain"], "2026", "https://www.sciencedirect.com/science/article/abs/pii/S1290072925007410"),
  project("nucleotide-hplc", "Research", "Stability studies of synthetic nucleoside triphosphate using HPLC", "Studied hydrolysis to monophosphate and stability under six temperatures and three buffer conditions for Illumina Singapore. The LinkedIn project says results were to be presented at the 12th Singapore International Chemistry Conference.", ["HPLC", "Nucleotide stability", "Buffer studies"], null),
  { ...project("iron-nanoshell", "Research", "Towards iron nanoshell solid dosage form for site-specific extended delivery to proximal gut", "", ["Iron formulation", "Site-specific drug delivery"]), visible: false },
  project("limonene-fuel", "Research", "Using R-limonene as a fuel additive", "Extracted and characterized R-limonene from Citrus sinensis (Valencia orange) peels and assessed its potential as a biodiesel additive by examining soot emissions, fire point and density.", ["Soxhlet extraction", "R-limonene", "Biodiesel"], null),
  project("medication-horror-room", "Teaching", "Virtual Medication Horror Room", "Co-developed an interactive training experience on medication safety in non-pharmacy storage areas and assessed student quiz scores before and after the activity.", ["Interactive learning", "Medication safety", "Pre/post assessment"], null),
];

