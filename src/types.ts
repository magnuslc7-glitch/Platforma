export enum CourseType {
  KIDS = "English Kid's Kursi",
  MATH = "Matematika Kursi",
  GENERAL = "General English Kursi",
  IELTS = "IELTS / CEFR Kursi",
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  course: CourseType | string;
  timestamp: string;
  status: "yangi" | "bog'lanildi" | "arxiv";
  notes?: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childName: string;
  childAge: number;
  text: string;
  rating: number;
  date: string;
  avatarUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
