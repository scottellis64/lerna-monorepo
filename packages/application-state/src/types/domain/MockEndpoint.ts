export interface MockEndpoint {
  type: 'get' | 'post' | 'delete';
  url: string;
  response: any;
}
