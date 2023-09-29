import { ChannelData } from "../types/ChannelTypes";
import { ItemData } from "../types/ItemTypes";

export function infoChannels(transactions: ItemData[]): ChannelData[] {
    const channels: { [key: string]: number } = {};
  
    for (const transaction of transactions) {
      const channel = transaction.channel;
      if (!channels[channel]) {
        channels[channel] = 0;
      }
      channels[channel]++;
    }
  
    const uniqueChannels = Object.keys(channels);
    const channelCounts = uniqueChannels.map((channel) => ({ channel, count: channels[channel] }));
  
    channelCounts.sort((a, b) => b.count - a.count);
  
    return channelCounts;
  }