export type CreateUserDto={
    name : string

    email : string;

    passWord : string

    department : string;

    course : string;

    profilePic? : string;
}

export type LoginRequestBody={
    email : string;

    passWord : string;
}