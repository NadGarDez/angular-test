export interface Tutor {
    id: number;
    first_name: string;
    last_name: string;
    birth_date: string;
    email: string;
    phone: string;
    role_id: number;
    status: 'active' | 'inactive'; 
    speciality: 'Beginner' | 'Intermediate' | 'Fluent' | 'Advanced';
  }
  
  export type TutorList = Tutor[]; 


  export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
  }
  
  export type UserList = User[];

  export interface Booking {
    id: number;
    service_id: number;
    staff_id: number;
    user_id: number;
    date: string;
    start_time: string;
    end_time: string;
    user: User;
    staff: Tutor;
  }
  
  export type BookingList = Booking[];