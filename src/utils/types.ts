export type CreateUserDto={
    name : string

    email : string;

    passWord : string

    department : string;

    course : string;
}


export type LoginRequestBody={
    email : string;

    passWord : string;
}

export type CreateProfessorDto = {
            id: number,
            name: string,
            department: string,
            createdAt: string,
            updatedAt: string,
            subject:
                [{
                    id: number,
                    name: string,
                    createdAt: string,
                    updatedAt: string
                }]
}

export type CreateCommentDto = {
    
    content: string;

    
    userID: number;

    
    evaluationID: number;
}

export type CreateEvaluationDto = {
    
    userID: number;
  
   
    professorID: number;
  
    subjectID: number;
  
   
    content: string;
    
}

export type UpdateUserDto={
    name? : string

    email? : string;

    department? : string;

    course? : string;
}
