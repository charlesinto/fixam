export interface IRequest {
  title: string;
  description: string;
  numberOfBidReceived: number;
  onRequestEnd?: () => void;
  imageServiceUrl?: string;
  id: string;
}
