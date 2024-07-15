enum Sender {
  React,
  Content,
}
interface ChromeMessage {
  message: any;
  tcId: number | string;
}
export type { ChromeMessage };
export { Sender };
