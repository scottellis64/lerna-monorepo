import { MockEndpoint } from '@sellis/application-state';

export const emailData: any = {
  data: [
    {id: 1, from: "jjohnson@gmail.com", message: "greetings"},
    {id: 2, from: "smylavarapu@microsoft.com", message: "here is your license key"}
  ]
}

export const emailEndpoints: MockEndpoint[] = [{
  type: 'get',
  url: '/emails',
  response: emailData
}]
