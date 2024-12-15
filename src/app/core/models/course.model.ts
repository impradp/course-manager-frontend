export interface Course {
    id: number;
    name: string;
    description: string;
    instructor: string;
    duration: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  }