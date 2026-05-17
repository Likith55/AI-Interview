export interface InterviewQuestion {
  id: number;
  question: string;
}

export interface InterviewSession {
  questions: InterviewQuestion[];
}