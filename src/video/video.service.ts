import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class VideoService {
  private readonly apiHost = 'yt-api.p.rapidapi.com'; // Hardcoded Host
  private readonly apiKey = 'f8a41a9358msh5356d697b61ff3ep1010e9jsn323d54608026'; // Hardcoded API Key

  async getVideoDetails(videoId: string): Promise<any> {
    const url = `https://${this.apiHost}/video/info`;
    console.log('Making API request with:', { url, videoId });
  
    try {
      const response = await axios.get(url, {
        params: { id: videoId },
        headers: {
          'X-Rapidapi-Host': this.apiHost,
          'X-Rapidapi-Key': this.apiKey,
        },
      });
  
      const data = response.data;
  
      // Customized response structure
      return {
        videoId: data.id,
        title: data.title,
        durationInSeconds: parseInt(data.lengthSeconds, 10),
        keywords: data.keywords || [],
        channel: {
          name: data.channelTitle,
          id: data.channelId,
        },
        description: data.description,
      };
    } catch (error) {
      console.error('Error during API call:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
      throw new HttpException(
        error.response?.data || 'Failed to fetch video details',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  
}
