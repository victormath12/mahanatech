export class MailjetObject {
 constructor() {}
 Messages: Array<Message>;
}

export class Message {
 constructor() {}
 From: From;
 To: To[];
 TemplateID: number;
 TemplateLanguage: boolean;
 Subject: string;
 Variables: Variables;
}

export interface From {
  Email: string;
  Name: string;
}

export interface To {
  Email: string;
  Name: string;
}

export interface Variables {
  firstname: string;
}
